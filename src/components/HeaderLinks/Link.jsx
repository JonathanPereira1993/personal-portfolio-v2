import React from "react";

const Link = ({ children, onclick, href }) => {
  return (
    <a
      className="h-full text-colorOnyx hover:text-colorDarkGray hover:scale-105 duration-200"
      href={href}
      onClick={onclick}
    >
      {children}
    </a>
  );
};

export default Link;
