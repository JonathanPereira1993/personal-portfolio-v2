import React from "react";

const TechStackItem = ({ title, image, tagName }) => {
  return (
    <div className="relative aspect-square rounded-[22px] p-6 flex flex-col items-center justify-center bg-[#F3F3F3]">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="absolute bottom-6 px-6 flex justify-between w-full">
        <h3>{title}</h3>
        <span>{tagName}</span>
      </div>
    </div>
  );
};

export default TechStackItem;
