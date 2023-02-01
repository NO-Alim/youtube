import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <div className="w-full h-64 overflow-hidden">
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          className="h-[180px] w-full object-cover rounded-md bg-black"
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>
      <div className="">
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <h1 className="text-lg font-semibold">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </h1>
        </Link>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h1>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h1>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
