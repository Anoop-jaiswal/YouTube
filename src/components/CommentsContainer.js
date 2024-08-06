import React from "react";

const commnets = [
  {
    name: "anoop",
    text: "lorem ipsum",
    replies: [
      {
        name: "",
        text: "",
        replies: {},
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-1 rounded-md">
      <img
        className="w-12 , h-12"
        alt="altere"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-2  px-16">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <Comment data={commnets[0]} />
    </div>
  );
};

export default CommentsContainer;
