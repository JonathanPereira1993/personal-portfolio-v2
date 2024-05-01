import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Dropdown = ({ submenus, dropdown, headerOnTop }) => {
  return (
    <ul
      className={`overflow-hidden w-max absolute z-50 dark:bg-[#808080ce] dark:shadow-darkMode rounded-xl border dark:border-transparent p-4 shadow-lg top-14 -right-[40px] grid duration-500 transition-all ${
        dropdown ? "grid-rows-full" : "grid-rows-0 py-0 opacity-0"
      } ${
        headerOnTop
          ? "bg-colorWhite70 backdrop-blur-[15px]"
          : "bg-colorWhite70 backdrop-blur-[2px]"
      }`}
    >
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className={`${
            headerOnTop ? "hover:bg-zinc-200" : "hover:bg-zinc-200"
          } duration-300  dark:hover:bg-colorWhite25 dark:hover:bg-zinc-400 dark:text-white  rounded-lg py-1 px-2 ${
            dropdown ? "h-full" : "h-0"
          }`}
        >
          <Link onClick={() => useScrollToTop()} to={submenu.link}>
            {submenu.dropdownName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
