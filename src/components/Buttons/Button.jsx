import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`cursor-pointer h-[60px] duration-200 hover:shadow-sm whitespace-nowrap rounded-[9px] px-8 py-4 flex items-center justify-center ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
