import React from "react";
import BgTopImage from "../assets/BackgroundGradient.svg";

const BgImage = ({ className }) => {
  return (
    <div className={`absolute ${className}`}>
      <img src={BgTopImage} alt="Background colorfull" />
    </div>
  );
};

export default BgImage;
