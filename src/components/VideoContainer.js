import React, { useEffect, useState } from "react";
import { YOU_TUBE_API } from "./../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOU_TUBE_API);
    const jsonData = await data.json();

    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
