export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  maxres?: Thumbnail;
  standard?: Thumbnail;
}

export interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
}

export interface Video {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}

export interface FinalVideo {
  videoDetails: Video;
  channelId: string;
  channelProfilePic: string;
}
