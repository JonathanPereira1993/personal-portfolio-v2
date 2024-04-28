import React from "react";
import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";

import { selectedWorkContent } from "../../data/ContentData";

const SelectedWork = () => {
  return (
    <div className="max-w-widthScreen mx-auto">
      <div className="text-5xl font-semibold text-center sm:text-left dark:text-colorWhite mb-8">
        Selected Work
      </div>
      <div className="flex flex-col gap-8">
        {/* {selectedWorkContent.map((item) => (
          <SelectedWorkItem key={item.title}>
            <SelectedWorkIntemContent icon={item.icon} title={item.title} description={item.description} />
        </SelectedWorkItem>
        ))} */}
        <SelectedWorkItem className="flex items-center justify-center flex-col">
          <h2 className="text-center text-2xl font-semibold">
            This part is not yet developed
          </h2>
          <p>Available soon! I promise</p>
        </SelectedWorkItem>
      </div>
    </div>
  );
};

export default SelectedWork;
