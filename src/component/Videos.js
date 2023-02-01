import React from 'react';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import VideoCard from './VideoCard';

const Videos = ({ videos, size = 'none' }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div
      className={`p-5 md:h-[90vh] overflow-y-scroll w-full grid grid-cols-1 ${
        size === 'none' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      } gap-5 ${
        size === 'big' && 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      } ${
        size === 'small' &&
        ' grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'
      }`}
    >
      {videos.map((item, idx) => (
        <>
          {item.id.videoId && <VideoCard video={item} key={idx} />}
          {item.id.channelId && <ChannelCard channelDetail={item} key={idx} />}
        </>
      ))}
    </div>
  );
};

export default Videos;
