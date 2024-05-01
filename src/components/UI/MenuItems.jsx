import { useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Dropdown from "./Dropdown";

import { FaAngleDown } from "react-icons/fa6";

import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";

const MenuItems = ({ items, headerOnTop }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="relative h-full" ref={ref}>
      {items.dropdown ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="group duration-300 group dark:text-white text-lg rounded-lg p-2 flex items-center gap-2"
          >
            {items.name}
            <div
              className={`${
                headerOnTop ? "bg-zinc-300" : "bg-white"
              } h-0 duration-300 group-hover:h-1 w-full rounded-t-xl absolute left-0 right-0 -bottom-[7px]`}
            />
            <FaAngleDown
              className={`${
                dropdown ? "rotate-180" : ""
              } text-base duration-500`}
            />
          </button>
          <Dropdown
            submenus={items.dropdown}
            dropdown={dropdown}
            headerOnTop={headerOnTop}
          />
        </>
      ) : (
        <Link
          onClick={() => useScrollToTop()}
          to={items.link}
          className="group duration-300  text-lg relative dark:text-white  rounded-lg p-2 hover:backdrop-blur-[15px]"
        >
          {items.name}
          <div
            className={`${
              headerOnTop ? "bg-zinc-300" : "bg-white"
            } h-0 duration-300 group-hover:h-1 w-full rounded-t-xl absolute  left-0 right-0  -bottom-[8px]`}
          />
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
