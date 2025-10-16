import {Component, effect, input, InputSignal, OnInit, signal} from '@angular/core';
import {FinalVideo, Video} from '../../../core/models/video';
import {YoutubeService} from '../../../core/services/youtube.service';
import {NgIf} from '@angular/common';
import {formatViews, mergeVideoAndChannel, timeAgo} from '../../../core/utils/formatters';

@Component({
  selector: 'app-video-card',
  imports: [
    NgIf
  ],
  templateUrl: './video-card.html',
  styleUrl: './video-card.scss',
  standalone: true
})
export class VideoCard implements OnInit{
  video: InputSignal<Video | undefined> = input<Video>();
  channel = signal<Video[]>([])
  finalVideo = signal<FinalVideo | undefined>(undefined);

  constructor(private youtubeService: YoutubeService) {
  }
  protected readonly formatViews: (views: (string | number)) => string = formatViews;
  protected readonly timeAgo: (dateString: string) => string = timeAgo;

  ngOnInit() {
    const video = this.video();
    if (video?.snippet.channelId) {
      this.youtubeService.getChannel(video.snippet.channelId).subscribe(value => {
        this.channel.set(value.items)

      this.finalVideo.set(mergeVideoAndChannel(this.video()!, this.channel()!));

      })
    }

  }

}
