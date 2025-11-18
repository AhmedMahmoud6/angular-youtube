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

export function formatViews(views: string | number, msg: string = "views"): string {
  const num = typeof views === 'string' ? parseInt(views) : views;

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + `B ${msg}`;
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + `M ${msg}`;
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + `K ${msg}`;
  } else {
    return num + ` ${msg}`;
  }
}

export function mergeVideoAndChannel(video: Video, channel: Video[]): FinalVideo {
    const currentChannel = channel[0];
  return {

    videoDetails: {
      contentDetails: {
        duration: video.contentDetails.duration,
      },

      statistics: {
        viewCount: video.statistics.viewCount,
        commentCount: video.statistics.commentCount,
        likeCount: video.statistics.likeCount,
        subscriberCount: currentChannel.statistics.subscriberCount,
      },
      snippet: {
        thumbnails: video.snippet.thumbnails,
        channelId: video.snippet.channelId,
        title: video.snippet.title,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description,
        tags: video.snippet.tags
      },
      id: video.id,
      brandingSettings: {
        image: {
          bannerExternalUrl: currentChannel.brandingSettings.image?.bannerExternalUrl ?? '',
        }
      },
    },
    channelId: currentChannel.id,
    channelProfilePic: currentChannel.snippet.thumbnails.default?.url ?? ''!,


  }

}


export function formatYouTubeDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  const hours = parseInt(match?.[1] || '0', 10);
  const minutes = parseInt(match?.[2] || '0', 10);
  const seconds = parseInt(match?.[3] || '0', 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function formatSubscribers(subCount?: string | number): string {
  if (subCount === undefined || subCount === null) {
    return 'N/A subscribers'; // or '0 subscribers'
  }

  const num = typeof subCount === 'string' ? parseInt(subCount) : subCount;

  if (isNaN(num) || num < 0) {
    return '0 subscribers';
  }

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B subscribers';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M subscribers';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K subscribers';
  } else {
    return num + ' subscribers';
  }
}

