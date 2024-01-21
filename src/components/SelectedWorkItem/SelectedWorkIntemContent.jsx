import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ReactIcon from "../../assets/ReactIcon.svg";
import Button from "../Buttons/Button";

import ProfilePhoto from "../../assets/avatar-photo.png";

const SelectedWorkIntemContent = ({icon, title, description, image}) => {
  return (
    <div className="grid grid-cols-2 h-[500px] relative overflow-hidden ">
      <div className="py-[60px] pl-[60px] h-full flex flex-col justify-between">
        <div>
          <img
            className="max-w-[70px]"
            src={icon}
            alt="Selected work logo"
          />
          <h2 className="font-bold text-3xl mt-4 ">{title}</h2>
          <p className="mt-4 text-[#808080]">
            {description}
          </p>
        </div>
        <Button className="group flex gap-2 items-center w-fit hover:shadow-none pl-0 hover:text-[#959595] text-lg">
          Visit Site{" "}
          <FaArrowRight className="group-hover:translate-x-1 group-hover:text-[#959595] transition-transform duration-200" />
        </Button>
      </div>
      <div className="absolute bottom-0 right-[32px] max-w-[400px]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SelectedWorkIntemContent;
