import {Component, input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {formatViews, timeAgo} from '../../../core/utils/formatters';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {NgIf} from '@angular/common';
import {SingleComment} from '../../../core/models/video';

@Component({
  selector: 'app-reply',
  imports: [
    FaIconComponent,
    NgIf
  ],
  templateUrl: './reply.html',
  styleUrl: './reply.scss',
  standalone: true,
})
export class Reply {

  protected readonly timeAgo = timeAgo;
  protected readonly formatViews = formatViews;
  protected readonly faThumbsUp = faThumbsUp;
  protected readonly faThumbsDown = faThumbsDown;

  reply = input<SingleComment>()
}
