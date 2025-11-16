import {Component, effect, input, InputSignal, signal} from '@angular/core';
import {formatViews, timeAgo} from '../../../core/utils/formatters';
import {faChevronDown, faChevronUp, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Comments, Replies, SingleComment} from '../../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import {Reply} from '../reply/reply';

@Component({
  selector: 'app-comment',
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf,
    Reply
  ],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
  standalone: true,
})
export class Comment {

  protected readonly timeAgo = timeAgo;
  protected readonly faThumbsUp = faThumbsUp;
  protected readonly formatViews = formatViews;
  protected readonly faThumbsDown = faThumbsDown;
  protected readonly faChevronDown = faChevronDown;

  protected expanded = signal(new Set<string>());
  comments: InputSignal<Comments[]> = input<Comments[]>([]);
  repliesCache: InputSignal<Map<string, SingleComment[]>> = input<Map<string, SingleComment[]>>(new Map<string, SingleComment[]>())

  toggleReplies (commentId: string) {
    const curr = new Set(this.expanded());

    // replies already expanded
    if (this.expanded().has(commentId)) {
      curr.delete(commentId);
      this.expanded.set(curr);
      return true;
    }
    else {
      curr.add(commentId);
      this.expanded.set(curr);
      return false;
    }

  }

  protected readonly faChevronUp = faChevronUp;
}
