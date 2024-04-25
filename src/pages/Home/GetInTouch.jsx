import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

import Button from "../../components/UI/Button";

const GetInTouch = () => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-widthScreen mt-[100px] z-50">
      <div>
        <h1 className="text-5xl dark:text-colorWhite font-semibold mb-4">
          Let's work together
        </h1>
        <p className="text-[20px] font-light dark:text-[#80808080] ">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
      </div>
      <div className="flex self-center justify-end">
        <Button
          className={
            "bg-[#1A1A1A] cursor-pointer transition-all duration-500 group dark:shadow-darkMode hover:scale-105 bg-gradient-to-t from-black to-[#131313] text-white"
          }
        >
          <MdOutlineRocketLaunch className="text-2xl group-hover:rotate-45 transition-all duration-500" />
          <span className="ml-4">Get in touch</span>
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
