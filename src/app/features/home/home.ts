import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {Video} from '../../core/models/video';
import {YoutubeService} from '../../core/services/youtube.service';
import {VideoCard} from '../../shared/components/video-card/video-card';
import {NgForOf} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

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
export class Home {


  private youtubeService = inject(YoutubeService);

  private videos$ = this.youtubeService.getVideos();

  private videosResponse = toSignal(this.videos$, {initialValue: null})

  videos = computed<Video[]>(() => this.videosResponse()?.items ?? []);

  constructor() {
    effect(() => {
      console.log(this.videos())
    });
  }

}
