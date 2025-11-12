import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Video} from '../models/video';
import { Observable } from "rxjs";

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
    maxResults: '10',
  }

  private videoParams = {
    part: 'snippet,statistics,contentDetails',
  }

  constructor(private http: HttpClient) {

  }

  getVideos(): Observable<{ items: Video[] }> {
    return this.http.get<{items: Video[]}>(`${this.apiUrl}/videos?key=${this.apiKey}`, { params: this.params })
  }

  getVideoById(videoId: string | null): Observable<{ items: Video[] }> {
    return this.http.get<{items: Video[]}>(`${this.apiUrl}/videos?key=${this.apiKey}&id=${videoId}`, {params: this.videoParams})
  }

  getChannel(channelId: string | undefined): Observable<{ items: Video[] }> {
    return this.http.get<{ items: Video[] }>(`${this.channelUrl}?key=${this.apiKey}&id=${channelId}&part=brandingSettings`, {params: this.videoParams})
  }
}
