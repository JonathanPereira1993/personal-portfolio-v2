import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="group  duration-200 cursor-pointer h-full relative"
    >
      <span className="h-full text-colorOnyx hover:opacity-80 dark:hover:text-[#808080] dark:text-white">{children}</span>
      
    </Link>
  );
};

export default HeaderLink;
