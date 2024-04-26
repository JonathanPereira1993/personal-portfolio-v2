import React from "react";

import Banner from "../../components/Banner";
import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";
import { selectedWorkContent } from "../../data/ContentData";

const Work = () => {
  return (
    <div className="relative max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner title="Projects" subtitle="Projects and ideas I've worked on" />

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
  );
};

export default Work;
