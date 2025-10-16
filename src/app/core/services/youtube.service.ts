import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {
  }

  getVideos(params: Record<string, string | number>): Observable<{ items: Video[] }> {
    return this.http.get<{items: Video[]}>(`${this.apiUrl}/videos?key=${this.apiKey}`, { params })
  }

  getChannel(channelId: string): Observable<{ items: Video[] }> {
    return this.http.get<{ items: Video[] }>(`${this.channelUrl}?key=${this.apiKey}&id=${channelId}&part=snippet`)
  }
}
