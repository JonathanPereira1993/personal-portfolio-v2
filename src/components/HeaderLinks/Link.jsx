import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="group  duration-200 cursor-pointer h-full relative"
    >
      <span className="h-full text-colorOnyx group-hover:opacity-60 dark:text-white">{children}</span>
      
    </Link>
  );
};

export default HeaderLink;
