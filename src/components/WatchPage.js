import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChats";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="p-2  px-16 flex w-full">
        <div className="">
          <iframe
            className="rounded-lg"
            width="940"
            height="540"
            src={`https://www.youtube.com/embed/${videoId}?si=pv9NGINRncLGi5wq`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChats />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
