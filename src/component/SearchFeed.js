import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import Videos from './Videos';
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className=" min-h-[95vh] mt-[10vh] flex flex-col px-10">
      <h1 className="text-2xl px-5 mt-5">
        Search Results for <span className=" text-[red]">{searchTerm}</span>{' '}
        videos
      </h1>
      <div />
      <div>{<Videos videos={videos} size="big" />}</div>
    </div>
  );
};

export default SearchFeed;
