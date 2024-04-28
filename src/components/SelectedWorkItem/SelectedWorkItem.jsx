import React from "react";

const SelectedWorkItem = ({ children, className }) => {
  return (
    <div
      className={`min-h-[500px] hover:shadow-lg shadow-sm bg-colorCardBg dark:bg-colorOnyx dark:text-colorWhite overflow-hidden rounded-[32px] dark:border-[#383737] border border-[#EBEBEB] ${className}`}
    >
      {children}
    </div>
  );
};

export default SelectedWorkItem;
