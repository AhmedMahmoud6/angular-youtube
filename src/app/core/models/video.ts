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
  subscriberCount?: string;
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
}

export interface contentDetails {
  duration: string;
}

export interface brandingSettings {
  image?: {
    bannerExternalUrl: string;
  }
}

export interface Video {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
  contentDetails: contentDetails;
  brandingSettings: brandingSettings;
}


export interface FinalVideo {
  videoDetails: Video;
  channelId: string;
  channelProfilePic: string;

}

export interface SingleComment {
  snippet: {
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelId: {value: string};
    likeCount: number;
    publishedAt: string;
  }
  id: string;
}

export interface SingleReply {
  nextPageToken: string;
  items: SingleComment[];
}

export interface Replies {
  comments: SingleComment;
}

export interface Comments {
  nextPageToken: string;

    snippet: {
      topLevelComment: SingleComment;
      totalReplyCount: number;
  }
    replies: Replies;
}
