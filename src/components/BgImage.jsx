import React from "react";
import BgTopImage from "../assets/BackgroundGradient.svg";

const BgImage = ({ className }) => {
  return (
    <div className={`absolute  bg:white dark:bg-[#0D0D0D] ${className}`}>
      <img src={BgTopImage} alt="Background colorfull" />
    </div>
  );
};

export default BgImage;
