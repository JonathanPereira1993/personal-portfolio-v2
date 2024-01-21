import React from "react";

const SelectedWorkItem = ({ children }) => {
  return (
    <div className="min-h-[500px] shadow-sm bg-colorCardBg dark:bg-colorOnyx dark:text-colorWhite overflow-hidden rounded-[32px] dark:border-[#383737] border border-[#EBEBEB]">
      {children}
    </div>
  );
};

export default SelectedWorkItem;
