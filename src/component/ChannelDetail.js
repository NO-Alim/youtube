import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResult = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videoData = await fetchAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videoData?.items);
    };

    fetchResult();
  }, [id]);
  return (
    <div className=" mt-[10vh] min-h-[95vh] ">
      <div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </div>
      <div className="px-10">
        <Videos videos={videos} size="big" />
      </div>
    </div>
  );
};

export default ChannelDetail;
