import React from "react";
import BgTopImage from "../assets/BackgroundGradient.svg";

const BgImage = () => {
  return (
    <div className="absolute top-0">
      <img src={BgTopImage} alt="" />
    </div>
  );
};

export default BgImage;
