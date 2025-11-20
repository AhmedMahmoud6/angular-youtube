import {
  AfterViewInit, ApplicationConfig,
  Component,
  computed,
  effect,
  ElementRef,
  inject, NgZone, OnDestroy,
  OnInit,
  signal,
  Signal,
  ViewChild, WritableSignal
} from '@angular/core';
import {ActivatedRoute, ParamMap, NavigationEnd, Router, provideRouter} from '@angular/router';
import {YoutubeService} from '../../core/services/youtube.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of, filter } from 'rxjs';
import {
  Comments,
  FinalVideo,
  Replies,
  SingleComment,
  SingleReply,
  SuggestedVideo,
  Video
} from '../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {formatSubscribers, formatViews, mergeVideoAndChannel, timeAgo} from '../../core/utils/formatters';
import { faThumbsUp, faThumbsDown, faShare, faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {createSharedObserver, loadMore} from '../../core/utils/service.functions';
import {Comment} from '../../shared/components/comment/comment';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {SuggestedVideos} from '../../shared/components/suggested-videos/suggested-videos';
import { withInMemoryScrolling } from '@angular/router';


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
  // private routes: Router = inject(Routes);
  private youtube: YoutubeService = inject(YoutubeService);
  private ngZone: NgZone = inject(NgZone);



  suggestedVideos: WritableSignal<SuggestedVideo[]> = signal<SuggestedVideo[]>([])
  suggestedNextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  suggestedIsLoading: WritableSignal<boolean> = signal(false);
  suggestedError: WritableSignal<string | null> = signal<string | null>(null);

  isFirstTime: WritableSignal<boolean> = signal<boolean>(true);


  comments: WritableSignal<Comments[]> = signal<Comments[]>([]);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);

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

  // private localComments: Signal<Comments[]> = computed<Comments[]>(() => this.comments())
  // protected replies: WritableSignal<SingleReply[]> = signal([]);
  // protected repliesCache: WritableSignal<Map<string, SingleComment[]>> = signal(new Map<string, SingleComment[]>());

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
      })

      // console.log("old suggested",this.suggestedVideos())



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

      })

      // console.log("old comments",this.comments())


    }
  }

  // private currVideoId: string | null | undefined = this.route.snapshot.paramMap.get('id');

  private finalVideo$ = this.route.paramMap.pipe(
    map(pm => pm.get('id')),
    switchMap(id => id ? this.youtube.getVideoById(id) : of(null)),
    switchMap(videoRes => {
      const video = videoRes?.items?.[0];
      if (!video) return of(null);
      this.videoTag = video.snippet.tags;
      // this.videoCategoryId?.set(video.snippet.categoryId);
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


  constructor() {


        this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
            const id = this.route.snapshot.paramMap.get('id');
            this.sharedObserver?.unobserveElement(this.commentsSentinel);
            this.sharedObserver?.unobserveElement(this.suggestedSentinel);
            this.sharedObserver?.disconnect();

            // this.video().
            this.comments.set([]);
            this.suggestedVideos.set([]);

            this.sharedObserver?.observeElement(this.commentsSentinel!, {
              loadWhat: 'comments',
              nextPageToken: this.nextPageToken,
              youtubeService: this.youtube,
              error: this.error,
              videos: this.video,
              comments: this.comments,
              videoId: id,
              videoTags: this.videoTag,
              isLoading: this.isLoading,

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
            })
            //
            // console.log("new suggested",this.suggestedVideos())
            // console.log("new comments",this.comments())
            // console.log('New video id:', id);
            // console.log('New videoCategory id:', this.videoCategoryId);
          });









    effect(() => {
        console.log(this.videoTag);
        // console.log(this.videoCategoryId!());
        // console.log(this.comments());

      // testing
      if (this.isFirstTime()) {
        this.isFirstTime.set(false);
        // this.suggestedVideos.set(filteredSuggest);

      }

    });
  }
}
