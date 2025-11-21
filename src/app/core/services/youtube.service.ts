import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Comments, SingleComment, SingleReply, SuggestedVideo, Video} from '../models/video';
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.videosUrl;
  private channelUrl: string = environment.channelUrl

  homeVideoCategoryId: WritableSignal<string | undefined> = signal<string | undefined>(undefined);
  isVideoFromHome: WritableSignal<boolean> = signal<boolean>(true);

  private params = {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
    regionCode: 'EG',
    // maxResults: '20',
  }

  private videoParams = {
    part: 'snippet,statistics,contentDetails',
  }

  constructor(private http: HttpClient) {

  }

  getVideos(pageToken?: string): Observable<{ items: Video[]; nextPageToken?: string }> {
    const paramObj : Record<string, string> = {
      ...this.params,
      ...(pageToken ? {pageToken} : {}),
      maxResults: '5',
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: Video[]; nextPageToken: string}>(`${this.apiUrl}/videos?key=${this.apiKey}`, { params: params })
  }

  getSuggestedVideos(pageToken?: string, videoCategoryId?: string | undefined): Observable<{ items: SuggestedVideo[]; nextPageToken?: string }> {
    // const category = videoCategoryId!();
    // this.homeVideoCategoryId?.set(undefined);

    const paramObj : Record<string, string> = {
      ...this.params,
      ...(pageToken ? {pageToken} : {}),
      ...(videoCategoryId ? {videoCategoryId} : {}),
      maxResults: '5',
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: SuggestedVideo[]; nextPageToken: string}>(`${this.apiUrl}/videos?key=${this.apiKey}`, { params: params })
  }

  getVideoById(videoId: string | null | undefined): Observable<{ items: Video[] }> {
    return this.http.get<{items: Video[]}>(`${this.apiUrl}/videos?key=${this.apiKey}&id=${videoId}`, {params: this.videoParams})
  }

  getChannel(channelId: string | undefined): Observable<{ items: Video[] }> {
    return this.http.get<{ items: Video[] }>(`${this.channelUrl}?key=${this.apiKey}&id=${channelId}&part=brandingSettings`, {params: this.videoParams})
  }

  getVideoComments(videoId: string, pageToken?: string): Observable<{ items: Comments[]; nextPageToken: string }> {
    if (!videoId) {
      console.error('getVideoComments called without videoId!');
      return throwError(() => new Error('videoId is required'));
    }

    const paramObj : Record<string, string> = {
      part: "snippet",
      order: "relevance",
      ...(pageToken ? {pageToken} : {}),
      videoId,
      maxResults: '5',
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: Comments[]; nextPageToken: string}>(`${this.apiUrl}/commentThreads?key=${this.apiKey}`, { params: params })

  }

  getCommentReplies(pageToken: string | undefined, parentId: string) {
    const paramObj : Record<string, string> = {
      part: "snippet",
      ...(pageToken ? {pageToken} : {}),
      parentId,
      maxResults: '5',
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: SingleComment[]; nextPageToken: string}>(`${this.apiUrl}/comments?key=${this.apiKey}`, { params: params })
  }

  getVideoSuggestions(pageToken: string | undefined, tags: string[] | undefined, videoCategoryId?: string,) {
    const q = tags?.join(" ");

    const paramObj : Record<string, string> = {
      part: "snippet",
      type: "video",
      ...(pageToken ? {pageToken} : {}),
      ...(q ? {q} : {}),
      maxResults: '5',
    }

    const params = new HttpParams({ fromObject: paramObj });


    return this.http.get<{items: SuggestedVideo[]; nextPageToken: string}>(`${this.apiUrl}/search?key=${this.apiKey}`, { params: params })

  }

  getSearchResults(q: string) {


    const paramObj : Record<string, string> = {
      part: "snippet",
      type: "video",
      q,
      maxResults: '10',
    }

    const params = new HttpParams({ fromObject: paramObj });


    return this.http.get<{items: SuggestedVideo[]; nextPageToken: string}>(`${this.apiUrl}/search?key=${this.apiKey}`, { params: params })

  }


}


