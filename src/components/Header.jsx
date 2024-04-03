import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { headerLinks } from "../data/ContentData";
import HeaderLink from "./HeaderLinks/Link";
import SubMenu from "./HeaderLinks/SubMenu";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaAngleDown, FaInstagram } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsOnTop(window.scrollY > 200);
      });
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className={`${
        isOnTop
          ? "top-0 rounded-t-none bg-colorWhite70 dark:shadow-darkMode dark:text-white backdrop-blur-[15px]"
          : "top-8 backdrop-blur-[2px]"
      } fixed w-full flex z-50 dark:bg-colorWhite25 dark:shadow-darkMode rounded-xl border dark:border-transparent duration-300 shadow-lg h-[60px] border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 justify-between max-w-widthScreen mx-auto p-4`}
    >
      <div className="flex gap-12">
        <HeaderLink
          to={"/"}
          className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
        >
          <span className="dark:text-white absolute  hover:scale-105 -translate-y-1/2 left-5 top-1/2 text-black font-signature text-3xl">
            J
          </span>
        </HeaderLink>

        <div className="ml-[40px] flex gap-10">
          {headerLinks.map((link) => (
            <Link
              key={link.id}
              to={!link.dropdown ? `${link.link}` : null}
              className="dark:text-white group flex items-center gap-1 duration-200 cursor-pointer h-full relative"
              onClick={
                link.dropdown ? () => setIsSubmenuOpen(!isSubmenuOpen) : null
              }
            >
              <div className="flex items-center gap-1">
                <span className="h-full group-hover:opacity-80 dark:hover:opacity-80">
                  {link.name}
                </span>
                {link.dropdown && (
                  <FaAngleDown
                    className={`${
                      isSubmenuOpen ? "rotate-180" : ""
                    } ml-1 duration-200 group-hover:opacity-80 dark:hover:opacity-80 text-xs `}
                  />
                )}
              </div>

              {link.dropdown ? (
                <div>
                  <SubMenu
                    isOpened={isSubmenuOpen}
                    isOnTop={isOnTop}
                    menu={link}
                  />
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/JonathanPereira1993" target="_blank">
          <FaGithub className="w-5 h-5 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
        </a>

        <a href="https://www.instagram.com/jonathanmyself/" target="_blank">
          <FaInstagram className="w-5 h-5 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
        </a>

        <div className="h-5 w-[1px] bg-colorOnyx dark:bg-white" />
        <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
          {darkMode ? (
            <WiDaySunny className="w-6 h-6 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
          ) : (
            <MdDarkMode className="w-6 h-6 cursor-pointer hover:scale-110 duration-200" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
