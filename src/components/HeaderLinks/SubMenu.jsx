import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ menu, isOpened, isOnTop }) => {
  return (
    <div
      className={`${
        isOpened ? "grid-rows-full py-4 opacity-100" : "h-0 opacity-0"
      } absolute grid duration-300 overflow-hidden text-colorOnyx shadow-lg dark:text-white top-[42px] -left-1/2 rounded-b-xl px-4 gap-2
    ${
      !isOnTop
        ? "bg-colorWhite25 backdrop-blur-[2px]"
        : "bg-colorWhite70 text-colorOnyx backdrop-blur-[15px]"
    }`}
    >
      {menu.dropdown.map((sub, i) => (
        <Link
          key={i}
          to={sub.link}
          className="whitespace-nowrap hover:opacity-60"
        >
          {sub.dropdownName}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
