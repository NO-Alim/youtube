import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import like from '../assets/like.png';

import { fetchAPI } from '../utils/fetchAPI';
import Loader from './Loader';
import Videos from './Videos';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className=" h-[95vh] mt-[10vh] pl-10 pr-10 py-10">
      <div className="flex flex-col gap-10 lg:gap-2 lg:flex-row lg:pl-5">
        <div className="flex-1 my-10 lg:my-5">
          <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="80%"
              controls
            />
            <h1 className="mt-3 text-lg font-bold">{title}</h1>
            <div className="flex justify-between">
              <Link to={`/channel/${channelId}`}>
                <h1>
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </h1>
              </Link>
              <div className="flex gap-5">
                <h1>{parseInt(viewCount).toLocaleString()} views</h1>
                <div className="flex gap-2">
                  <img className=" w-5 h-5" src={like} alt="like" />
                  <span>{parseInt(likeCount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[400px]">
          <Videos videos={videos} size="small" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
