import { useState } from "react";
import Dropdown from "./Dropdown";

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
            className="duration-300 hover:bg-colorWhite70 dark:text-white rounded-lg p-2 hover:backdrop-blur-[15px]"
          >
            {items.name}
          </button>
          <Dropdown
            submenus={items.dropdown}
            dropdown={dropdown}
            headerOnTop={headerOnTop}
          />
        </>
      ) : (
        <Link
          to={items.link}
          className="duration-300 hover:bg-colorWhite70 dark:text-white  rounded-lg p-2 hover:backdrop-blur-[15px]"
        >
          {items.name}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
