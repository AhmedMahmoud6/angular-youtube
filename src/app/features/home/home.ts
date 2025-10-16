import {Component, effect, OnInit, signal} from '@angular/core';
import {Video} from '../../core/models/video';
import {YoutubeService} from '../../core/services/youtube.service';
import {VideoCard} from '../../shared/components/video-card/video-card';
import {NgForOf} from '@angular/common';

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
export class Home implements OnInit{
  videos = signal<Video[]>([]);

  constructor(private youtubeService: YoutubeService) {
    effect(() => {
      console.log(this.videos())
    });
  }



  ngOnInit() {
    const params = {
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      regionCode: 'EG',
      maxResults: 10
    }

    this.youtubeService.getVideos(params).subscribe(value => this.videos.set(value.items));

  }
}
