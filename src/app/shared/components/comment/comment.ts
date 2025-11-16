import {Component, effect, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {formatViews, timeAgo} from '../../../core/utils/formatters';
import {faChevronDown, faChevronUp, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Comments, Replies, SingleComment, SingleReply} from '../../../core/models/video';
import {NgForOf, NgIf} from '@angular/common';
import {Reply} from '../reply/reply';
import {loadReplies} from '../../../core/utils/service.functions';
import {YoutubeService} from '../../../core/services/youtube.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-comment',
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf,
    Reply,
    MatProgressSpinner
  ],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
  standalone: true,
})
export class Comment {

  protected readonly timeAgo = timeAgo;
  protected readonly formatViews = formatViews;

  protected readonly faThumbsUp = faThumbsUp;
  protected readonly faThumbsDown = faThumbsDown;
  protected readonly faChevronDown = faChevronDown;

  private youtube: YoutubeService = inject(YoutubeService);
  nextPageToken: WritableSignal<string | null | undefined> = signal<string | null | undefined>(undefined);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);
  loadingMap: WritableSignal<Map<string, boolean>> = signal(new Map());
  nextPageTokenMap: WritableSignal<Map<string, string | null>> = signal(new Map());



  protected expanded = signal(new Set<string>());
  comments: InputSignal<Comments[]> = input<Comments[]>([]);
  replies: WritableSignal<SingleComment[]> = signal<SingleComment[]>([]);
  repliesCache: WritableSignal<Map<string, SingleComment[]>> = signal<Map<string, SingleComment[]>>(new Map<string, SingleComment[]>())

  toggleReplies (commentId: string) {
    const curr = new Set(this.expanded());
    // replies already expanded
    if (this.expanded().has(commentId)) {
      curr.delete(commentId);
      this.expanded.set(curr);
      return ;
    }

    curr.add(commentId);
    this.expanded.set(curr);

    // cache is empty
    if (!this.repliesCache().has(commentId)) {
      loadReplies(this.youtube, this.repliesCache, commentId, this.error, this.loadingMap, this.nextPageTokenMap )
    }



  }

  loadMoreReplies(commentId: string) {
    loadReplies(this.youtube, this.repliesCache, commentId, this.error, this.loadingMap, this.nextPageTokenMap )
  }

  protected readonly faChevronUp = faChevronUp;

  constructor() {
    effect(() => {
      // console.log(this.repliesCache())
    });
  }
}
