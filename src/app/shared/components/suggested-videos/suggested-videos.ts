import {Component, effect, inject, Input, input, InputSignal, output, signal, WritableSignal} from '@angular/core';
import {SuggestedVideo} from '../../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import {formatViews, timeAgo} from '../../../core/utils/formatters';
import {RouterLink, Router, ActivatedRoute} from '@angular/router';
import {YoutubeService} from '../../../core/services/youtube.service';

@Component({
  selector: 'app-suggested-videos',
  imports: [
    NgIf,
    NgForOf,
    // RouterLink
  ],
  templateUrl: './suggested-videos.html',
  styleUrl: './suggested-videos.scss',
  standalone: true,
})
export class SuggestedVideos {
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected router = inject(Router);
  protected youtube: YoutubeService = inject(YoutubeService);

  suggestedVideos: InputSignal<SuggestedVideo[]> = input<SuggestedVideo[]>([]);
  id = this.route.snapshot.paramMap.get('id');
  filteredSuggest: WritableSignal<SuggestedVideo[]> = signal<SuggestedVideo[]>([]);

  // selectedVideoCategory = output<string>();
  @Input() videoCategoryId: WritableSignal<string> | undefined;

  onClick (clickedVidId: SuggestedVideo) {
    this.videoCategoryId?.set(clickedVidId.id.videoId ?? clickedVidId.id);
    this.youtube.isVideoFromHome.set(false);

    this.router.navigate(['/video', clickedVidId.id.videoId ?? clickedVidId.id]);
  }



  protected readonly formatViews = formatViews;
  protected readonly timeAgo = timeAgo;

  constructor() {

    effect(() => {

      this.filteredSuggest.set(this.suggestedVideos().filter(res => {
        const videoId = res.id.videoId ?? res.id;
        // console.log("From suggested file ", res.snippet.categoryId)
         return videoId !== this.id;
      }))
      // console.log(this.suggestedVideos())
      // console.log(this.filteredSuggest())
      // console.log(this.id);
    });
  }

}
