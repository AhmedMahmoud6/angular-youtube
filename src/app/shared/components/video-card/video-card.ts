import {Component, effect, inject, input, InputSignal, OnInit, signal, WritableSignal} from '@angular/core';
import {FinalVideo, Video} from '../../../core/models/video';
import {YoutubeService} from '../../../core/services/youtube.service';
import {NgIf} from '@angular/common';
import {formatViews, formatYouTubeDuration, mergeVideoAndChannel, timeAgo} from '../../../core/utils/formatters';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-video-card',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './video-card.html',
  styleUrl: './video-card.scss',
  standalone: true
})
export class VideoCard implements OnInit{
  video: InputSignal<Video | undefined> = input<Video>();
  channel = signal<Video[]>([])
  finalVideo = signal<FinalVideo | undefined>(undefined);



  // signal controlling whether preview is visible
  previewVisible: WritableSignal<boolean> = signal(false);

  // holds a SafeResourceUrl for iframe src when preview is active
  iframeSrc: WritableSignal<SafeResourceUrl | null> = signal(null);

  timerId: any;

  // It’s used to mark dynamically created HTML, style, script, or URL values as safe, so Angular doesn’t block or strip them out for security reasons.
  private sanitizer = inject(DomSanitizer);





  constructor(private youtubeService: YoutubeService) {
  }
  protected readonly formatViews: (views: (string | number)) => string = formatViews;
  protected readonly timeAgo: (dateString: string) => string = timeAgo;
  protected readonly formatYouTubeDuration = formatYouTubeDuration;

  ngOnInit() {

    const video = this.video();
    if (video?.snippet.channelId) {
      this.youtubeService.getChannel(video.snippet.channelId).subscribe(value => {
        this.channel.set(value.items)

      this.finalVideo.set(mergeVideoAndChannel(this.video()!, this.channel()!));

      })
    }

  }


  showPreview() {
    this.timerId = setTimeout(() => {

    const videoId = this.finalVideo()?.videoDetails?.id;
    if (!videoId) return;
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      loop: '1',
      playlist: videoId,
    });

    const url = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

    // sanitize and set signals
    this.iframeSrc.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
    this.previewVisible.set(true);


    }, 300)
  }

  hidePreview() {
    // hide and remove the iframe src to stop playback and release memory
    this.previewVisible.set(false);
    this.iframeSrc.set(null);
    clearTimeout(this.timerId);
  }



}
