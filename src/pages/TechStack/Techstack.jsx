import React from "react";
import TechStackItem from "../../components/TechStackItem";

import { techStackItems } from "../../data/ContentData";

const Techstack = () => {
  return (
    <div className="relative max-w-widthScreen pt-[300px] mx-auto">
      <div className="relative">
        <h1 className="text-colorOnyx dark:text-colorWhite text-7xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-2xl text-colorDarkGray font-light opacity-50 pb-[60px]">
          Projects and ideas I've worked on
        </p>
        <div className="absolute top-100% w-full h-[1px] bg-colorCardBorder dark:bg-[#ffffff30]" />
        <div className="pt-[100px] mx-auto grid grid-cols-3 gap-4">
          {techStackItems.map((item) => (
            <TechStackItem
              key={item.id}
              title={item.title}
              tagName={item.tagName}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
