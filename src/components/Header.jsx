import React, { useContext, useEffect, useState } from "react";
import HeaderLink from "./HeaderLinks/Link";
import { headerLinks } from "../data/ContentData";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import { DarkModeContext } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";
import { MdDarkMode } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import SubMenu from "./HeaderLinks/SubMenu";


const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const {darkMode, setDarkMode} = useContext(DarkModeContext);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsOnTop(window.scrollY > 200);
      });

    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`${
        isOnTop ? "top-0 rounded-t-none bg-white dark:shadow-darkMode dark:bg-[#171b2b]" : "top-8 backdrop-blur-[2px]"
      } fixed  w-full flex z-50 dark:bg-colorWhite25 dark:shadow-darkMode rounded-xl border dark:border-transparent duration-300 shadow-lg h-[60px] border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 justify-between max-w-widthScreen mx-auto p-4`}
    >
      <div className="flex gap-12">
        <HeaderLink
          to={"/"}
          className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
        >
          <span className="absolute hover:scale-105 -translate-y-1/2 left-5 top-1/2 dark:text-white text-black font-signature text-3xl">
            J
          </span>
        </HeaderLink>

        <div className="ml-[40px] flex gap-10">
          {headerLinks.map((link) => (
              <Link
                to={!link.dropdown ? `/${link.name}` : null}
                className="group flex items-center gap-1 duration-200 cursor-pointer h-full relative"
                onClick={link.dropdown ? () => setIsSubmenuOpen(!isSubmenuOpen) : null}
              >
                <div className="flex items-center gap-1">
                  <span className="h-full text-colorOnyx group-hover:text-[#646464] dark:hover:text-[#808080] dark:text-white">{link.name}</span>
                  {link.dropdown && (
                    <FaAngleDown className={`${isSubmenuOpen ? "rotate-180" : ""} duration-200 text-xs`}/>
                  )}
                </div>

                {link.dropdown ? (
                  <div>
                    <SubMenu isOpened={isSubmenuOpen} isOnTop={isOnTop} menu={link}/>
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
          {darkMode ? <WiDaySunny className="w-6 h-6 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" /> : <MdDarkMode className="w-6 h-6 cursor-pointer hover:scale-110 duration-200" />}
        </div>
        
      </div>
    </div>
  );
};

export default Header;
