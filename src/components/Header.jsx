import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import useScrollToTop from "../hooks/useScrollToTop";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {
  IoBookOutline,
  IoBriefcaseOutline,
  IoGridOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import Navbar from "./Navbar";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsOnTop(window.scrollY > 200);
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 640) {
          setIsMobile(false);
        } else {
          setIsMobile(true);
        }
      });
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const HeaderDesktop = () => {
    return (
      <header
        className={`${
          isOnTop
            ? "top-0 rounded-t-none bg-colorWhite70 dark:bg-[#808080ce] dark:shadow-darkMode dark:text-white backdrop-blur-[15px]"
            : "top-8 backdrop-blur-[25px] bg-colorWhite70 dark:bg-colorWhite25"
        } fixed w-full flex z-50 dark:shadow-darkMode rounded-xl border dark:border-transparent duration-300 shadow-lg h-[60px] border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 justify-between max-w-widthScreen mx-auto px-4`}
      >
        <div className="flex ml-4 items-center h-full gap-12">
          <Link
            onClick={() => useScrollToTop()}
            to="/"
            className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full"
          >
            <span className="dark:text-white flex h-full items-center text-black text-xl">
              portfolio
            </span>
          </Link>

          <Navbar headerOnTop={isOnTop} />
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
      </header>
    );
  };

  const HeaderMobile = () => {
    return (
      <header
        className="
        top-0 w-full fixed flex z-50 dark:shadow-darkMode rounded-b-xl border dark:border-transparent duration-300 shadow-lg h-[60px] border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 justify-between max-w-widthScreen mx-auto px-4 backdrop-blur-[25px] bg-colorWhite70 dark:bg-colorWhite25"
      >
        <nav className="flex w-full justify-between items-center">
          <Link to="/" onClick={() => useScrollToTop()}>
            <IoHomeOutline className="w-6 h-6" />
          </Link>
          <Link to="/about" onClick={() => useScrollToTop()}>
            <IoPersonOutline className="w-6 h-6" />
          </Link>
          <Link to="/work" onClick={() => useScrollToTop()}>
            <IoBriefcaseOutline className="w-6 h-6" />
          </Link>
          <Link to="/bookshelf" onClick={() => useScrollToTop()}>
            <IoBookOutline className="w-6 h-6" />
          </Link>
          <Link to="/techstack" onClick={() => useScrollToTop()}>
            <IoGridOutline className="w-6 h-6" />
          </Link>
          <Link to="/contact" onClick={() => useScrollToTop()}>
            <IoMailOutline className="w-6 h-6" />
          </Link>
        </nav>
      </header>
    );
  };

  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
};

export default Header;
