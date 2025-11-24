import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  NgZone, OnDestroy,
  OnInit,
  signal,
  ViewChild, WritableSignal
} from '@angular/core';
import {Video} from '../../core/models/video';
import {YoutubeService} from '../../core/services/youtube.service';
import {VideoCard} from '../../shared/components/video-card/video-card';
import {NgForOf, NgIf} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, take} from 'rxjs';
import {createSharedObserver, loadMore} from '../../core/utils/service.functions';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  imports: [
    VideoCard,
    NgForOf,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home implements AfterViewInit, OnDestroy {


  private youtubeService: YoutubeService = inject(YoutubeService);
  private ngZone: NgZone = inject(NgZone);

  isOnline = signal(window.navigator.onLine);
  videos: WritableSignal<Video[]> = signal<Video[]>([]);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);

  private homeSetupDone: WritableSignal<boolean> = signal(false);
  private homeSentinel?: Element;

  private sharedObserver?: {
    observer: IntersectionObserver;
    observeElement(el: Element, meta: any): void;
    unobserveElement(el: Element | undefined): void;
    disconnect(): void
  } = createSharedObserver(this.ngZone, { root: null, rootMargin: '300px', threshold: 1 });

  @ViewChild('sentinel', {static: false, read: ElementRef})
  set homeSectionRef (el: ElementRef<HTMLElement>) {
    const v = this.videos();
    this.homeSentinel = el.nativeElement ?? undefined;
    // console.log(this.homeSentinel )
    if (!this.homeSetupDone() && this.homeSentinel && v) {
      this.homeSetupDone.set(true);
      // console.log("test")

      this.sharedObserver?.observeElement(this.homeSentinel, {
        isLoading: this.isLoading,
        nextPageToken: this.nextPageToken,
        youtubeService: this.youtubeService,
        loadWhat: 'videos',
        error: this.error,
        videos: this.videos,
      })


    }

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.sharedObserver?.unobserveElement(this.homeSentinel);
    this.sharedObserver?.disconnect();
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
