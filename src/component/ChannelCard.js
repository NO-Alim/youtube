import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="w-full h-64 overflow-hidden bg-slate-300 rounded-md">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col gap-5 items-center justify-center h-full">
          <div>
            <img
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              className="w-32 rounded-full"
              alt={channelDetail?.snippet?.title}
            />
          </div>
          <h4 className="text-lg flex items-center justify-center text-center">
            {channelDetail?.snippet?.title}
          </h4>
          {channelDetail?.statistics?.subscriberCount && (
            <h4>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{' '}
              Subscribers
            </h4>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
