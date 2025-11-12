import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  Signal,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {YoutubeService} from '../../core/services/youtube.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {FinalVideo, Video} from '../../core/models/video';
import {NgIf} from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {formatSubscribers, mergeVideoAndChannel} from '../../core/utils/formatters';


@Component({
  selector: 'app-video-details',
  imports: [
    NgIf,
    YouTubePlayerModule
  ],
  templateUrl: './video-details.html',
  styleUrl: './video-details.scss',
  standalone: true,
})
export class VideoDetails {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private youtube: YoutubeService = inject(YoutubeService);
  @ViewChild('ytPlayer', { read: ElementRef }) ytPlayerEl?: ElementRef<HTMLDivElement>;


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


  protected readonly formatSubscribers = formatSubscribers;
}
