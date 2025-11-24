import {ElementRef, InputSignal, NgZone, WritableSignal} from '@angular/core';
import {Comments, Replies, SingleComment, SingleReply, SuggestedVideo, Video} from '../models/video';
import {of, switchMap, take} from 'rxjs';
import {YoutubeService} from '../services/youtube.service';



export function loadMore(
  isLoading: WritableSignal<boolean>,
  nextPageToken: WritableSignal<string | null | undefined>,
  youtubeService: YoutubeService,
  loadWhat: string,
  error? :WritableSignal<string | null>,
  videos? : WritableSignal<Video[]>,
  comments? : WritableSignal<Comments[]>,
  videoId? : string | null,
  videoTags?: string[],
  suggestedVideos?: WritableSignal<SuggestedVideo[]>,
  suggestedNextPageToken?: WritableSignal<string | null | undefined>,
  suggestedIsLoading?: WritableSignal<boolean>,
  suggestedError?: WritableSignal<string | null>,
  videoCategoryId? : WritableSignal<string> | undefined,
  commentsCounter?: WritableSignal<number>,
  suggestedCounter?: WritableSignal<number>,
  commentsComplete?: WritableSignal<boolean>,
  suggestedComplete?: WritableSignal<boolean>,


) {

  console.log("Loading", loadWhat);

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
        // if (!res.nextPageToken) observer?.disconnect();
      },
      error: err => {
        console.error(err);
        error?.set("Failed To Load Videos")
      },
      complete: () => isLoading.set(false),
    }
  )
    return;

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
        commentsCounter?.set(commentsCounter() + 1);

        if (!res.nextPageToken) {
          commentsComplete?.set(true);
        }
      },
      error: err => {
        if (err.status === 403 && err.error?.error?.errors?.[0]?.reason === 'commentsDisabled') {
          error?.set('Comments are disabled for this video.');

        }
        else {
          error?.set('An unexpected error occurred.');
        }
        isLoading.set(false);
      },
      complete: () => {
        isLoading.set(false);
      }
    });

    return;
  }
  else if (loadWhat === "suggested") {

    if (suggestedIsLoading!()) {
      console.log('loadMore: already loading -> abort');
      return;
    }
    if (suggestedNextPageToken!() === null && suggestedVideos!().length > 0) {
      console.log('loadMore: nextPageToken is null and have items -> abort');
      return;
    }

    suggestedIsLoading!.set(true);

    const token = suggestedNextPageToken!() ?? undefined;


    youtubeService.getVideoSuggestions(token, videoTags).pipe(take(1),
      switchMap(res =>{
        if (res.items.length === 0) {
          const homeVidId = youtubeService.homeVideoCategoryId?.();
          // if the video is not from the home
          if (!youtubeService.isVideoFromHome()) youtubeService.homeVideoCategoryId.set(undefined);

          return youtubeService.getSuggestedVideos(token, homeVidId ?? videoCategoryId?.());
        }
        return of(res);
      })
      ).subscribe(
      {
        next: res => {
          const newItems = res.items;
          suggestedVideos?.set([...suggestedVideos(), ...newItems]);
          suggestedCounter?.set(suggestedCounter() + 1);
          suggestedNextPageToken?.set(res.nextPageToken);



          if (!res.nextPageToken) {
            suggestedComplete?.set(true);
          }
        },
        error: err => {
          console.error('loadMore: suggestedVids error', err);
          suggestedError?.set("Failed To Load Suggested Videos");
          suggestedIsLoading?.set(false);
        },
        complete: () => {
          suggestedIsLoading?.set(false);
        }
      }
    )
    return;
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

// export function setupObserver(
//   sentinel : ElementRef<HTMLElement> | undefined,
//   ngZone: NgZone,
//   isLoading: WritableSignal<boolean>,
//   nextPageToken: WritableSignal<string | null | undefined>,
//   youtubeService: YoutubeService,
//   loadWhat: string,
//   error? :WritableSignal<string | null>,
//   videos? : WritableSignal<Video[]>,
//   comments? : WritableSignal<Comments[]>,
//   videoId? : string,
//   videoTag? : string[],
//   suggestedVideos?: WritableSignal<SuggestedVideo[]>,
//   suggestedNextPageToken?: WritableSignal<string | null | undefined>,
//   suggestedIsLoading?: WritableSignal<boolean>,
//   suggestedError?: WritableSignal<string | null>,
//
// ) {
//   if (!sentinel?.nativeElement) {
//     console.warn('setupObserver: sentinel not available yet');
//     return undefined;
//   }
//
//
//
//   const options: IntersectionObserverInit = {
//     root: null,
//     rootMargin: '300px',
//     threshold: 1
//   };
//
//   let observer: IntersectionObserver | undefined;
//
//   ngZone.runOutsideAngular(() => {
//
//   observer = new IntersectionObserver(entries => {
//     for(let entry of entries) {
//       if (entry.isIntersecting) {
//         ngZone.run(() => loadMore(
//           isLoading,
//           nextPageToken,
//           youtubeService,
//           observer,
//           loadWhat
//           ,error,
//           videos,
//           comments,
//           videoId,
//           videoTag,
//           suggestedVideos,
//           suggestedNextPageToken,
//           suggestedIsLoading,
//           suggestedError,
//         ));
//       }
//     }
//   },options);
//
//     observer.observe(sentinel.nativeElement);
//
//   })
//
//
//   return observer;
//
//
// }

export function createSharedObserver(ngZone: NgZone, options: IntersectionObserverInit) {
  let elementState = new WeakMap<Element, {
    loadWhat: string,
    isLoading: WritableSignal<boolean>,
    nextPageToken: WritableSignal<string | null | undefined>,
    youtubeService: YoutubeService,
    error? :WritableSignal<string | null>,
    videos? : WritableSignal<Video[]>,
    comments? : WritableSignal<Comments[]>,
    videoId? : string,
    videoTags?: string[],
    suggestedVideos?: WritableSignal<SuggestedVideo[]>,
    suggestedNextPageToken?: WritableSignal<string | null | undefined>,
    suggestedIsLoading?: WritableSignal<boolean>,
    suggestedError?: WritableSignal<string | null>,
    videoCategoryId?: WritableSignal<string> | undefined ,
    commentsCounter?: WritableSignal<number>,
    suggestedCounter?: WritableSignal<number>,
    commentsComplete?: WritableSignal<boolean>,
    suggestedComplete?: WritableSignal<boolean>,
  }>();

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      const state = elementState.get(el);
      if (!state) continue;


      ngZone.run(() => {
        loadMore(
          state.isLoading,
          state.nextPageToken,
          state.youtubeService,
          state.loadWhat,
          state.error,
          state.videos,
          state.comments,
          state.videoId,
          state.videoTags,
          state.suggestedVideos,
          state.suggestedNextPageToken,
          state.suggestedIsLoading,
          state.suggestedError,
          state.videoCategoryId,
          state.commentsCounter,
          state.suggestedCounter,
          state.commentsComplete,
          state.suggestedComplete,
        );
      });
    }
  }, options);


  return {
    observer,

    observeElement(el: Element, meta: any) {
      if(!el) return;
      elementState.set(el, meta);
      observer.observe(el);
    },

    unobserveElement(el: Element) {
      if(!el) return;
      elementState.delete(el);
      observer.unobserve(el);
    },

    disconnect() {
      observer.disconnect();
      elementState = new WeakMap(); // reset the storage
    }
  };
}
