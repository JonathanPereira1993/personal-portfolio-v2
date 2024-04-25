import React from "react";

import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";
import { selectedWorkContent } from "../../data/ContentData";

const Work = () => {
  return (
    <div className="relative max-w-widthScreen pt-[300px] mx-auto">
      <div className="relative">
        <h1 className="text-colorOnyx dark:text-colorWhite text-7xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-2xl text-colorDarkGray font-light opacity-50 pb-[60px]">
          Projects and ideas I've worked on
        </p>
        <div className="absolute top-100% w-[100%] h-[1px] bg-colorCardBorder dark:bg-[#ffffff30]" />
        <div className="gap-4 mt-16 grid">
          {selectedWorkContent.map((item) => (
            <SelectedWorkItem key={item.title}>
              <SelectedWorkIntemContent
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </SelectedWorkItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
