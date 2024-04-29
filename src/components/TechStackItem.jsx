import React from "react";

const TechStackItem = ({ title, image, tagName }) => {
  return (
    <div className="relative aspect-square border dark:border-[#383737] rounded-[22px] p-6 flex flex-col items-center justify-center bg-[#F3F3F3] dark:bg-[#181818]">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="absolute dark:text-white bottom-6 px-6 flex justify-between w-full">
        <h3>{title}</h3>
        <span>{tagName}</span>
      </div>
    </div>
  );
};

export default TechStackItem;
