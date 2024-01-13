import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ReactIcon from "../../assets/ReactIcon.svg";
import Button from "../Buttons/Button";

import ProfilePhoto from "../../assets/avatar-photo.png";

const SelectedWorkIntemContent = () => {
  return (
    <div className="grid grid-cols-2 h-[500px] relative overflow-hidden ">
      <div className="py-[60px] pl-[60px] h-full flex flex-col justify-between">
        <div>
          <img
            className="max-w-[70px]"
            src={ReactIcon}
            alt="Selected work logo"
          />
          <h2 className="font-bold text-3xl mt-4 ">React Documentation</h2>
          <p className="mt-4">
            With the release of the new React website on March 16, there was a
            need for localization to make the documentation accessible to
            Arabic-speaking developers. I contributed to translating several
            documentation, worked with great developers, Improved my ability to
            write better PR requests, and as a side effect, I now know more
            about the Arabic grammar.
          </p>
        </div>
        <button className="group flex gap-2 items-center text-lg">
          Visit Site{" "}
          <FaArrowRight className="group-hover:translate-x-1 duration-200" />
        </button>
      </div>
      <div className="absolute bottom-0 right-[32px] max-w-[400px]">
        <img src={ProfilePhoto} alt="" />
      </div>
    </div>
  );
};

export default SelectedWorkIntemContent;
