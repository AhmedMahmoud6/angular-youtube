import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Comments, Video} from '../models/video';
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.videosUrl;
  private channelUrl: string = environment.channelUrl

  private params = {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
    regionCode: 'EG',
    maxResults: '20',
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
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: Video[]; nextPageToken: string}>(`${this.apiUrl}/videos?key=${this.apiKey}`, { params: params })
  }

  getVideoById(videoId: string | null): Observable<{ items: Video[] }> {
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
      part: "snippet,replies",
      order: "relevance",
      ...(pageToken ? {pageToken} : {}),
      videoId,
    }
    const params = new HttpParams({ fromObject: paramObj });

    return this.http.get<{items: Comments[]; nextPageToken: string}>(`${this.apiUrl}/commentThreads?key=${this.apiKey}`, { params: params })

  }
}
