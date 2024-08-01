import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-md w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Gaming</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamingh</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later </h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamingh</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
