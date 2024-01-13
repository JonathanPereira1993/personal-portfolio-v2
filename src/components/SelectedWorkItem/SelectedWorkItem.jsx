import React from "react";

const SelectedWorkItem = ({ children }) => {
  return (
    <div className="min-h-[500px] bg-colorCardBg overflow-hidden rounded-[32px] border border-[#EBEBEB]">
      {children}
    </div>
  );
};

export default SelectedWorkItem;
