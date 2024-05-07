import React from "react";
import BgTopImage from "../../assets/BackgroundGradient.svg";

import "../CustomCSS/Styles.css";

const BgImage = ({ className }) => {
  return (
    <div
      className={`bg-image absolute bg:white dark:bg-[#0D0D0D] ${className}`}
    >
      <img
        className="absolute"
        draggable="false"
        src={BgTopImage}
        alt="Background colorfull"
      />
    </div>
  );
};

export default BgImage;
