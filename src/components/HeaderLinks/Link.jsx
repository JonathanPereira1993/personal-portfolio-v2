import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
    >
      <span className="h-full text-colorOnyx ">{children}</span>
    </Link>
  );
};

export default HeaderLink;
