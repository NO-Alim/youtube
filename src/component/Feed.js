import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/fetchAPI';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    'Learn with Sumit - LWS - Bangladesh'
  );
  const [videos, setVideos] = useState(null);

  //handle setSelected Category

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e);
  };

  //fetch Video here
  useEffect(() => {
    setVideos(null);

    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-[10vh] h-[90vh] overflow-hidden">
      <div>
        <Sidebar
          selectedCategory={selectedCategory}
          handleSelectedCategory={handleSelectedCategory}
        />
      </div>
      <div className="flex-1">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
