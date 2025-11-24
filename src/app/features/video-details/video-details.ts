import {
  AfterViewInit, Component,
  effect,
  ElementRef,
  inject, NgZone, OnDestroy,
  signal,
  Signal,
  ViewChild, WritableSignal
} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {YoutubeService} from '../../core/services/youtube.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of, filter } from 'rxjs';
import {
  Comments,
  FinalVideo,
  SuggestedVideo
} from '../../core/models/video';
import {NgIf} from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {formatSubscribers, formatViews, mergeVideoAndChannel, timeAgo} from '../../core/utils/formatters';
import { faThumbsUp, faThumbsDown, faShare, faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {createSharedObserver, loadMore} from '../../core/utils/service.functions';
import {Comment} from '../../shared/components/comment/comment';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {SuggestedVideos} from '../../shared/components/suggested-videos/suggested-videos';


@Component({
  selector: 'app-video-details',
  imports: [
    NgIf,
    YouTubePlayerModule,
    FaIconComponent,
    Comment,
    MatProgressSpinner,
    SuggestedVideos,
  ],
  templateUrl: './video-details.html',
  styleUrl: './video-details.scss',
  standalone: true,
})
export class VideoDetails implements AfterViewInit, OnDestroy{
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faShare = faShare;
  faDownload = faDownload;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  protected readonly formatSubscribers = formatSubscribers;
  protected readonly formatViews = formatViews;
  protected readonly timeAgo = timeAgo;




  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private youtube: YoutubeService = inject(YoutubeService);
  private ngZone: NgZone = inject(NgZone);


  isOnline = signal(window.navigator.onLine);

  suggestedVideos: WritableSignal<SuggestedVideo[]> = signal<SuggestedVideo[]>([])
  suggestedNextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  suggestedIsLoading: WritableSignal<boolean> = signal(false);
  suggestedError: WritableSignal<string | null> = signal<string | null>(null);
  suggestedCounter: WritableSignal<number> = signal<number>(0);
  suggestedComplete: WritableSignal<boolean> = signal(false);

  comments: WritableSignal<Comments[]> = signal<Comments[]>([]);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);
  commentsCounter: WritableSignal<number> = signal<number>(0);
  commentsComplete: WritableSignal<boolean> = signal(false);

  private videoTag: string[] | undefined = [];
  videoCategoryId: WritableSignal<string> | undefined;

  private sharedObserver?: {
    observer: IntersectionObserver;
    observeElement(el: Element, meta: any): void;
    unobserveElement(el: Element | undefined): void;
    disconnect(): void
  } = createSharedObserver(this.ngZone, { root: null, rootMargin: '300px', threshold: 1 });


  private commentSetupDone: WritableSignal<boolean> = signal(false);
  private suggestedSetupDone: WritableSignal<boolean> = signal(false);

  @ViewChild('ytPlayer', { read: ElementRef }) ytPlayerEl?: ElementRef<HTMLDivElement>;
  private suggestedSentinel?: Element;
  private commentsSentinel?: Element;


  @ViewChild('suggestedSection' ,{read: ElementRef})
  set suggestedSectionRef(el: ElementRef<HTMLElement> | undefined) {
    const v = this.video()
    this.suggestedSentinel = el?.nativeElement ?? undefined;

    if (!this.suggestedSetupDone() && el?.nativeElement && v) {
      this.suggestedSetupDone.set(true);

      const vid = v.videoDetails?.id;
      if (!vid) {
        console.warn('No video id available when initializing suggestedVideos observer');
        return;
      }



      this.sharedObserver?.observeElement(el.nativeElement, {
        loadWhat: 'suggested',
        youtubeService: this.youtube,
        videoTags: this.videoTag,
        suggestedVideos: this.suggestedVideos,
        suggestedNextPageToken: this.suggestedNextPageToken,
        suggestedIsLoading: this.suggestedIsLoading,
        suggestedError: this.suggestedError,
        videoCategoryId: this.videoCategoryId,
        suggestedCounter: this.suggestedCounter,
        suggestedComplete: this.suggestedComplete

      })

    }
  }

  @ViewChild('commentsSection', {read: ElementRef})
  set commentsSectionRef(el: ElementRef<HTMLElement> | undefined) {

    const v = this.video();
    this.commentsSentinel = el?.nativeElement ?? undefined;

    if (!this.commentSetupDone() && el?.nativeElement && v) {
      this.commentSetupDone.set(true);

      const vid = v.videoDetails?.id;
      if (!vid) {
        console.warn('No video id available when initializing comments observer');
        return;
      }



      this.sharedObserver?.observeElement(el.nativeElement, {
        loadWhat: 'comments',
        nextPageToken: this.nextPageToken,
        youtubeService: this.youtube,
        error: this.error,
        videos: this.video,
        comments: this.comments,
        videoId: vid,
        videoTags: this.videoTag,
        isLoading: this.isLoading,
        commentsCounter: this.commentsCounter,
        commentsComplete: this.commentsComplete

      })



    }
  }

  private finalVideo$ = this.route.paramMap.pipe(
    map(pm => pm.get('id')),
    switchMap(id => id ? this.youtube.getVideoById(id) : of(null)),
    switchMap(videoRes => {
      const video = videoRes?.items?.[0];
      if (!video) return of(null);
      this.videoTag = video.snippet.tags;
      return this.youtube.getChannel(video.snippet.channelId).pipe(
        map(channelRes => mergeVideoAndChannel(video, channelRes.items)),
        catchError(() => of(null))
      );
    })
  );


  video: Signal<null | FinalVideo> = toSignal(this.finalVideo$, { initialValue: null})

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.sharedObserver?.unobserveElement(this.commentsSentinel);
    this.sharedObserver?.unobserveElement(this.suggestedSentinel);
    this.sharedObserver?.disconnect();
  }

  onCommentsBtnClick() {
    const id = this.route.snapshot.paramMap.get('id');

    loadMore(
      this.isLoading,
      this.nextPageToken,
      this.youtube,
      "comments",
      this.error,
      undefined,
      this.comments,
      id,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      this.commentsCounter,
      undefined,
      this.commentsComplete
    )
  }

  onSuggestionsBtnClick() {
    loadMore(
      this.isLoading,
      this.nextPageToken,
      this.youtube,
      "suggested",
      this.error,
      undefined,
      this.comments,
      undefined,
      this.videoTag,
      this.suggestedVideos,
      this.suggestedNextPageToken,
      this.suggestedIsLoading,
      this.suggestedError,
      this.videoCategoryId,
      undefined,
      this.suggestedCounter,
      undefined,
      this.suggestedComplete,
    )
  }


  constructor() {
    window.addEventListener('online', () => {
      this.isOnline.set(true);
    });

    window.addEventListener('offline', () => {
      this.isOnline.set(false);
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const id = this.route.snapshot.paramMap.get('id');
        this.sharedObserver?.unobserveElement(this.commentsSentinel);
        this.sharedObserver?.unobserveElement(this.suggestedSentinel);
        this.sharedObserver?.disconnect();

        this.commentsCounter.set(0);
        this.suggestedCounter.set(0);
        this.comments.set([]);
        this.suggestedVideos.set([]);
        this.commentsComplete.set(false);
        this.suggestedComplete.set(false);

        this.sharedObserver?.observeElement(this.commentsSentinel!, {
          loadWhat: 'comments',
          nextPageToken: this.nextPageToken,
          youtubeService: this.youtube,
          error: this.error,
          comments: this.comments,
          videoId: id,
          videoTags: this.videoTag,
          isLoading: this.isLoading,
          commentsCounter: this.commentsCounter,
          commentsComplete: this.commentsComplete

        })

        this.sharedObserver?.observeElement(this.suggestedSentinel!, {
          loadWhat: 'suggested',
          youtubeService: this.youtube,
          videoTags: this.videoTag,
          suggestedVideos: this.suggestedVideos,
          suggestedNextPageToken: this.suggestedNextPageToken,
          suggestedIsLoading: this.suggestedIsLoading,
          suggestedError: this.suggestedError,
          videoCategoryId: this.videoCategoryId,
          suggestedCounter: this.suggestedCounter,
          suggestedComplete: this.suggestedComplete

        })
      });

    effect(() => {
      if (this.commentsComplete()) this.sharedObserver?.unobserveElement(this.commentsSentinel);

      if (this.suggestedComplete()) this.sharedObserver?.unobserveElement(this.suggestedSentinel);

      if (this.suggestedComplete() && this.commentsComplete()) this.sharedObserver?.disconnect();
    });
  }


}
