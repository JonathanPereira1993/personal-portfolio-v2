import React from "react";
import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";

const SelectedWork = () => {
  return (
    <div className="max-w-widthScreen mx-auto">
      <div className="text-5xl font-semibold mb-8">Selected Work</div>
      <div className="flex flex-col gap-8">
        {/* Card 1 */}
        <SelectedWorkItem>
          <SelectedWorkIntemContent />
        </SelectedWorkItem>

        {/* Card 2 */}
        <SelectedWorkItem>
          <SelectedWorkIntemContent />
        </SelectedWorkItem>
      </div>
    </div>
  );
};

export default SelectedWork;
