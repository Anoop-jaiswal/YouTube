import React from "react";
import ChatMessages from "./ChatMessages";

const LiveChats = () => {
  return (
    <div className="w-full h-[540px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessages
        name="anoop"
        message={"this is sfpr testing purposes live cbat "}
      />
    </div>
  );
};

export default LiveChats;
