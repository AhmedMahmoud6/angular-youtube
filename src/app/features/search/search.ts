import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {distinctUntilChanged, Observable, of, Subject, switchMap, takeUntil, tap} from 'rxjs';
import {SuggestedVideo} from '../../core/models/video';
import {YoutubeService} from '../../core/services/youtube.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {NgForOf, NgIf} from '@angular/common';
import {decodeHtml, timeAgo} from '../../core/utils/formatters';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search',
  imports: [
    NgIf,
    NgForOf,
    MatProgressSpinner
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  standalone: true,
})
export class Search implements OnInit, AfterViewInit , OnDestroy {
  @ViewChild("searchSentinel", {static: false,}) searchSentinel!: ElementRef;

  private observer!: IntersectionObserver;

  protected readonly decodeHtml = decodeHtml;
  protected readonly timeAgo = timeAgo;

  protected videos = signal<SuggestedVideo[]>([]);
  protected isLoading = signal<boolean>(false);
  protected error = signal<string | null>(null);
  protected nextPageToken = signal<string | null | undefined>(null);

  protected query = signal("");

  private youtube: YoutubeService = inject(YoutubeService);
  private route = inject(ActivatedRoute);
  protected router = inject(Router);

  private destroy$ = new Subject<void>();

  isOnline = signal(window.navigator.onLine);

  ngOnInit() {
    this.route.queryParamMap.pipe(
      map(q => {
        console.log(q.get('q'));
        return q.get('q') ?? ""
      }),
      distinctUntilChanged(),
      tap(q => {
        this.query.set(q);
        this.videos.set([]);
        this.nextPageToken.set(null);

      }),
      switchMap(q => {
        const token = this.nextPageToken() ?? undefined;
        return q
         ? this.youtube.getSearchResults(q, token).pipe(
            catchError(err => {
              this.error.set(err?.message ?? 'Search failed');
              return of({items: [], nextPageToken: null});

            })
          )
          : of({items: [], nextPageToken: null})
        }
      ),
      takeUntil(this.destroy$),

    ).subscribe(
      {
        next: res => {
          this.videos.set(res.items);
          this.nextPageToken.set(res.nextPageToken ?? null);
          this.isLoading.set(false);
        },
        error: err => {
          this.error.set(err?.message ?? 'Unknown error');
          this.isLoading.set(false);
        }
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.observer.unobserve(this.searchSentinel.nativeElement);
    this.observer.disconnect();
  }

  ngAfterViewInit() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '300px',
      threshold: 1
  };

    this.observer = new IntersectionObserver(entries => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          this.loadMoreSearchVideos();
        }
      }
    }, options)

    this.observer.observe(this.searchSentinel.nativeElement);

  }


  loadMoreSearchVideos() {
    const q = this.query();
    const token = this.nextPageToken();
    if (!q || !token) return;

    this.isLoading.set(true);
    this.youtube.getSearchResults(q, token).pipe(
      catchError(err => {
        this.error.set(err?.message ?? 'Load more failed');
        return of({ items: [], nextPageToken: null });
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      // append new items
      this.videos.set([...this.videos(), ...(res.items ?? [])]);
      this.nextPageToken.set(res.nextPageToken ?? null);
      this.isLoading.set(false);
    });
  }


  constructor() {
    window.addEventListener('online', () => {
      this.isOnline.set(true);
    });

    window.addEventListener('offline', () => {
      this.isOnline.set(false);
    });
  }


}
