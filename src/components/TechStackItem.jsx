import React from "react";

const TechStackItem = ({ title, image, tagName }) => {
  return (
    <div className="relative dark:text-white aspect-square border dark:border-[#383737] rounded-[22px] p-6 flex flex-col items-center justify-center bg-[#F3F3F3] dark:bg-[#181818]">
      <div>
        <img src={image} alt={title} className="rounded-3xl max-w-[120px]" />
      </div>
      <div className="absolute dark:text-white bottom-6 px-6 flex items-center justify-between w-full">
        <h3 className="font-semibold">{title}</h3>
        <span className="bg-[#FFFFFFB2] dark:bg-transparent text-[#808080] border border-[#FFFFFFB2] dark:border-[#272525] font-light rounded-full py-[6px] px-3">
          {tagName}
        </span>
      </div>
    </div>
  );
};

export default TechStackItem;
