import React from "react";

const Link = ({ children, onclick, href }) => {
  return (
    <div
      className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
      onClick={onclick}
    >
      <span className="h-full text-colorOnyx " href={href}>
        {children}
      </span>
      <div className="absolute duration-200 opacity-0 w-full group-hover:opacity-100 h-[2px] bg-colorDarkGray -bottom-[18px]" />
      <div className="absolute duration-200 opacity-0 w-full group-hover:opacity-100 h-[2px] bg-colorDarkGray -top-[18px]" />
    </div>
  );
};

export default Link;
