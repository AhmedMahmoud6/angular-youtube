import {Component, inject, input, InputSignal} from '@angular/core';
import {SuggestedVideo} from '../../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import {formatViews, timeAgo} from '../../../core/utils/formatters';
import {RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-suggested-videos',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './suggested-videos.html',
  styleUrl: './suggested-videos.scss',
  standalone: true,
})
export class SuggestedVideos {
  suggestedVideos: InputSignal<SuggestedVideo[]> = input<SuggestedVideo[]>([]);
  protected router = inject(Router);


  protected readonly formatViews = formatViews;
  protected readonly timeAgo = timeAgo;
}
