import React from "react";
import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";

import { selectedWorkContent } from "../../data/ContentData";

const SelectedWork = () => {
  return (
    <div className="max-w-widthScreen mx-auto">
      <div className="text-5xl font-semibold dark:text-colorWhite mb-8">Selected Work</div>
      <div className="flex flex-col gap-8">
        {selectedWorkContent.map((item) => (
          <SelectedWorkItem key={item.id}>
            <SelectedWorkIntemContent icon={item.icon} title={item.title} description={item.description} />
        </SelectedWorkItem>
        ))}
      </div>
    </div>
  );
};

export default SelectedWork;
