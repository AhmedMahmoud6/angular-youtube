import {FinalVideo, Thumbnails, Video} from '../models/video';

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000; // seconds difference

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const key in intervals) {
    const value = Math.floor(diff / intervals[key]);
    if (value >= 1) {
      return `${value} ${key}${value > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

export function formatViews(views: string | number): string {
  const num = typeof views === 'string' ? parseInt(views) : views;

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B views';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M views';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K views';
  } else {
    return num + ' views';
  }
}

export function mergeVideoAndChannel(video: Video, channel: Video[]): FinalVideo {
    const currentChannel = channel[0];
  return {

    videoDetails: {
      statistics: {
        viewCount: video.statistics.viewCount,
        commentCount: video.statistics.commentCount,
        likeCount: video.statistics.likeCount,
      },
      snippet: {
        thumbnails: video.snippet.thumbnails,
        channelId: video.snippet.channelId,
        title: video.snippet.title,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description
      },
      id: video.id,
    },
    channelId: currentChannel.id,
    channelProfilePic: currentChannel.snippet.thumbnails.default?.url ?? ''!
  }

}
