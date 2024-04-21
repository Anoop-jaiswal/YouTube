import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div>
      <div className="px-5 flex justify-between items-center py-2">
        <div className="flex items-center">
          <GiHamburgerMenu size={"25px"} />
          <img
            className="px-3"
            width={"80px"}
            src="data:image/png;base64,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"
            alt="yotube logo"
          />
        </div>
        <div className="flex items-center w-[40%] ">
          <div className="px-4 py-1 w-[100%] border-2 border-gray-400 rounded-l-full">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search here"
            />
          </div>
          <button className="px-4 py-1 border-2 border-gray-400 rounded-r-full">
            <CiSearch size={"24px"} />
          </button>
        </div>
        <div className="flex items-center w-[8%] justify-between">
          <IoIosNotifications size={"27px"} className="cursor-pointer" />
          <MdOutlineVideoCall size={"27px"} className="cursor-pointer" />
          <Avatar
            githubHandle="sitebase"
            size={30}
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
