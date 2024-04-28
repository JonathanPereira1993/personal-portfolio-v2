import React from "react";

const Button = ({ className, isOutline, children, ...props }) => {
  let cssStyles = isOutline
    ? "bg-white border-[#222222] rounded-lg color-[#222222] active:bg-[#F7F7F7] hover:bg-[#F7F7F7] active:border-[#000000] active:scale-[0.98] disabled:border-[#DDDDDD] desabled:text-[#DDDDDD] disabled:cursor-not-allowed"
    : "bg-[#222222] border-[#222222] hover:bg-[#000000] hover:shadow-xl active:bg-[#000000]  hover:bg-[#000000] text-white disabled:cursor-not-allowed active:scale-[0.98]";
  cssStyles += " " + className;

  return (
    <button
      className={`border-2 cursor-pointer h-[60px] duration-100 hover:shadow-sm whitespace-nowrap rounded-[9px] px-8 py-4 flex items-center justify-center ${cssStyles}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
