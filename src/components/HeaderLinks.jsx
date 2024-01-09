import React from "react";

const HeaderLinks = ({ name }) => {
  return (
    <div className="py-8 px-6 cursor-pointer opacity-70 hover:opacity-100 hover:bg-secondary-color transition-all duration-200">
      <p>{name}</p>
    </div>
  );
};

export default HeaderLinks;
