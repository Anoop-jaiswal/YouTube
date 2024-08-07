import React from "react";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        class="h-10"
        alt="userIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&amp"
      />
      <span className="font-bold mr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
