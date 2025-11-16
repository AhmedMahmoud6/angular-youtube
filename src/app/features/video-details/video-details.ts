import {
  AfterViewInit,
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
import {ActivatedRoute, ParamMap} from '@angular/router';
import {YoutubeService} from '../../core/services/youtube.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Comments, FinalVideo, Replies, SingleComment, SingleReply, Video} from '../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {formatSubscribers, formatViews, mergeVideoAndChannel, timeAgo} from '../../core/utils/formatters';
import { faThumbsUp, faThumbsDown, faShare, faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {loadMore, setupObserver} from '../../core/utils/service.functions';
import {Comment} from '../../shared/components/comment/comment';
import {MatProgressSpinner} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-video-details',
  imports: [
    NgIf,
    YouTubePlayerModule,
    FaIconComponent,
    Comment,
    MatProgressSpinner,
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
  private youtube: YoutubeService = inject(YoutubeService);
  private ngZone: NgZone = inject(NgZone);

  comments: WritableSignal<Comments[]> = signal<Comments[]>([]);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);


  private observer?: IntersectionObserver;
  private setupDone: WritableSignal<boolean> = signal(false);

  // private localComments: Signal<Comments[]> = computed<Comments[]>(() => this.comments())
  // protected replies: WritableSignal<SingleReply[]> = signal([]);
  // protected repliesCache: WritableSignal<Map<string, SingleComment[]>> = signal(new Map<string, SingleComment[]>());

  @ViewChild('ytPlayer', { read: ElementRef }) ytPlayerEl?: ElementRef<HTMLDivElement>;
  private commentsSection?: ElementRef<HTMLElement>;

  @ViewChild('commentsSection', {read: ElementRef})
  set commentsSectionRef(el: ElementRef<HTMLElement> | undefined) {
    this.commentsSection = el;

    const v = this.video();
    if (!this.setupDone() && el && v) {
      this.setupDone.set(true);

      const vid = v.videoDetails?.id;
      if (!vid) {
        console.warn('No video id available when initializing comments observer');
        return;
      }
      this.observer = setupObserver(
        this.commentsSection,
        this.ngZone,
        this.isLoading,
        this.nextPageToken,
        this.youtube,
        'comments',
        this.error,
        undefined,
        this.comments,
        vid,
      );





    }
  }

  // private currVideoId: string | null | undefined = this.route.snapshot.paramMap.get('id');

  private finalVideo$ = this.route.paramMap.pipe(
    map(pm => pm.get('id')),
    switchMap(id => id ? this.youtube.getVideoById(id) : of(null)),
    switchMap(videoRes => {
      const video = videoRes?.items?.[0];
      if (!video) return of(null);
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
    this.observer?.disconnect();
  }




  constructor() {
    effect(() => {
        // console.log(this.comments());
        // console.log(this.repliesCache());
    });
  }
}
