import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info || {};
  console.log(snippet);
  console.log(statistics);

  const { channelTitle, title, thumbnails } = snippet || {};
  console.log(channelTitle, title, thumbnails);

  return (
    <div className="p-2 m-2 w-64 shadow-md h-80">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
