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
import {NgForOf} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, take} from 'rxjs';
import {loadMore, setupObserver} from '../../core/utils/service.functions';

@Component({
  selector: 'app-home',
  imports: [
    VideoCard,
    NgForOf
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home implements AfterViewInit, OnDestroy {


  private youtubeService: YoutubeService = inject(YoutubeService);
  private ngZone: NgZone = inject(NgZone);

  videos: WritableSignal<Video[]> = signal<Video[]>([]);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);
  private observer?: IntersectionObserver;
  @ViewChild('sentinel', {static: false, read: ElementRef}) sentinel?: ElementRef<HTMLElement>;


  // loadMore() {
  //
  //   if (this.isLoading()) return;
  //   if (this.nextPageToken() === null && this.videos().length > 0) return;
  //
  //   this.isLoading.set(true);
  //
  //
  //   const token = this.nextPageToken() ?? undefined;
  //   this.youtubeService.getVideos(token).pipe(take(1)).subscribe(
  //     {
  //       next: res => {
  //         const newItems = res.items ?? [];
  //         this.videos.set([...this.videos(), ...newItems]);
  //         this.nextPageToken.set(res.nextPageToken ?? null);
  //         console.log('calling getVideos with token:', token);
  //         if (!res.nextPageToken) this.observer?.disconnect();
  //       },
  //       error: err => {
  //         console.error(err);
  //         this.error.set("Failed To Load Videos")
  //       },
  //       complete: () => this.isLoading.set(false),
  //     }
  //   )
  // }



  // setupObserver() {
  //   const options: IntersectionObserverInit = {
  //     root: null,
  //     rootMargin: '300px',
  //     threshold: 0.1
  //   };
  //
  //   this.observer = new IntersectionObserver(entries => {
  //     for(let entry of entries) {
  //       if (entry.isIntersecting) {
  //         this.ngZone.run(() => loadMore(this.isLoading, this.nextPageToken, this.youtubeService, this.observer, "videos" ,this.error, this.videos));
  //       }
  //     }
  //   },options);
  //
  //   setTimeout(() => {
  //     const el = this.sentinel?.nativeElement;
  //     if (el) this.observer?.observe(el);
  //   }, 0);
  //
  //
  // }



  ngAfterViewInit() {
    loadMore(this.isLoading, this.nextPageToken, this.youtubeService, this.observer, "videos",this.error, this.videos);
    this.observer = setupObserver(
      this.sentinel,
      this.ngZone,
      this.isLoading,
      this.nextPageToken,
      this.youtubeService,
      "videos",
      this.error,
      this.videos,
      undefined,
      undefined,
      )
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }


  // loadMore() {
  //   if (this.isLoading()) return;
  //   if (this.nextPageToken() === null && this.videos().length > 0) return; // مفيش صفحات زيادة
  //
  //   this.isLoading.set(true);
  //
  //   const token = this.nextPageToken() ?? undefined;
  //   this.youtubeService.getVideos(token).pipe(take(1)).subscribe({
  //     next: res => {
  //       const newItems = res.items ?? [];
  //       this.videos.set([...this.videos(), ...newItems]); // append
  //       this.nextPageToken.set(res.nextPageToken ?? null);
  //       if (!res.nextPageToken) this.observer?.disconnect();
  //     },
  //     error: err => {
  //       console.error(err);
  //     },
  //     complete: () => this.isLoading.set(false)
  //   });
  // }

  // private videos$ = this.youtubeService.getVideos();
  //
  // private videosResponse = toSignal(this.videos$, {initialValue: null})
  //
  // videos = computed<Video[]>(() => this.videosResponse()?.items ?? []);
  //
  //
  //
  constructor() {
    effect(() => {
      console.log(this.videos())
    });
  }

}
