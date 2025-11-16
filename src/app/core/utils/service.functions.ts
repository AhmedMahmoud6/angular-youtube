import {ElementRef, InputSignal, NgZone, WritableSignal} from '@angular/core';
import {Comments, Replies, SingleComment, SingleReply, Video} from '../models/video';
import {take} from 'rxjs';
import {YoutubeService} from '../services/youtube.service';


export function loadMore(
  isLoading: WritableSignal<boolean>,
  nextPageToken: WritableSignal<string | null | undefined>,
  youtubeService: YoutubeService,
  observer: IntersectionObserver | undefined,
  loadWhat: string,
  error? :WritableSignal<string | null>,
  videos? : WritableSignal<Video[]>,
  comments? : WritableSignal<Comments[]>,
  videoId? : string,


) {

  if (loadWhat === "videos") {

  if (isLoading()) return;
  if (nextPageToken() === null && videos!().length > 0) return;

  isLoading.set(true);


  const token = nextPageToken() ?? undefined;
  youtubeService.getVideos(token).pipe(take(1)).subscribe(
    {
      next: res => {
        const newItems = res.items ?? [];
        videos?.set([...videos!(), ...newItems]);
        nextPageToken.set(res.nextPageToken ?? null);
        if (!res.nextPageToken) observer?.disconnect();
      },
      error: err => {
        console.error(err);
        error?.set("Failed To Load Videos")
      },
      complete: () => isLoading.set(false),
    }
  )

  }

  else if (loadWhat === "comments") {

    if (!videoId) {
      console.warn('loadMore: missing videoId -> abort');
      return;
    }
    if (isLoading()) {
      console.log('loadMore: already loading -> abort');
      return;
    }
    if (nextPageToken() === null && comments!().length > 0) {
      console.log('loadMore: nextPageToken is null and have items -> abort');
      return;
    }

    isLoading.set(true);

    const token = nextPageToken() ?? undefined;

    youtubeService.getVideoComments(videoId, token).pipe(take(1)).subscribe({
      next: res => {
        const newItems = res.items ?? [];
        comments?.set([...comments!(), ...newItems]);



        nextPageToken.set(res.nextPageToken ?? null);


        if (!res.nextPageToken) {
          observer?.disconnect();
        }
      },
      error: err => {
        console.error('loadMore: comments error', err);
        error?.set("Failed To Load Comments");
      },
      complete: () => {
        isLoading.set(false);
      }
    });
  }

}

export function loadReplies(
  youtubeService: YoutubeService,
  repliesCache: WritableSignal<Map<string, SingleComment[]>>,
  commentId: string,
  error: WritableSignal<string | null>,
  loadingMap: WritableSignal<Map<string, boolean>>,
  nextPageTokenMap: WritableSignal<Map<string, string | null>>

) {
  const isLoadingFor = loadingMap().get(commentId) ?? false;
  if (isLoadingFor) return;

  const token = nextPageTokenMap().get(commentId) ?? undefined;
  if (token === null) return; // no more pages for this comment



  const lm = new Map(loadingMap());
  lm.set(commentId, true);
  loadingMap.set(lm);

  youtubeService.getCommentReplies(token, commentId).pipe(take(1)).subscribe(
    {
      next: rep => {
        const fetched = rep.items ?? [];

        const nt = new Map(nextPageTokenMap());
        nt.set(commentId, rep?.nextPageToken ?? null);
        nextPageTokenMap.set(nt);

        if (fetched.length > 0) {
          const cache = new Map(repliesCache());
          const existing = cache.get(commentId) ?? [];
          cache.set(commentId, [...existing, ...fetched]);
          repliesCache.set(cache);

          // done, clear loading
          const lm2 = new Map(loadingMap());
          lm2.set(commentId, false);
          loadingMap.set(lm2);
        }


      },
      error: err => {
        console.error('loadMore: comments error', err);
        error?.set("Failed To Load Comments");
        const lm2 = new Map(loadingMap());
        lm2.set(commentId, false);
        loadingMap.set(lm2);

      }
    }
  )

}

export function setupObserver(
  sentinel : ElementRef<HTMLElement> | undefined,
  ngZone: NgZone,
  isLoading: WritableSignal<boolean>,
  nextPageToken: WritableSignal<string | null | undefined>,
  youtubeService: YoutubeService,
  loadWhat: string,
  error? :WritableSignal<string | null>,
  videos? : WritableSignal<Video[]>,
  comments? : WritableSignal<Comments[]>,
  videoId? : string,
  repliesCache? : WritableSignal<Map<string, SingleComment[]>>,

) {
  if (!sentinel?.nativeElement) {
    console.warn('setupObserver: sentinel not available yet');
    return undefined;
  }



  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '300px',
    threshold: 1
  };

  let observer: IntersectionObserver | undefined;

  ngZone.runOutsideAngular(() => {

  observer = new IntersectionObserver(entries => {
    for(let entry of entries) {
      if (entry.isIntersecting) {
        ngZone.run(() => loadMore(isLoading, nextPageToken, youtubeService, observer, loadWhat ,error, videos,comments,videoId));
      }
    }
  },options);

    observer.observe(sentinel.nativeElement);

  })


  return observer;


}
