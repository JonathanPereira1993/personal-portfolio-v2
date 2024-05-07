import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import useScrollToTop from "../hooks/useScrollToTop";

import BgImage from "./UI/BgImage";

const Footer = () => {
  const dateYear = new Date();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    if (darkMode) {
      setThemeInStorage("light");
    } else {
      setThemeInStorage("dark");
    }
  };

  return (
    <div className="relative mt-[100px] border-t border-colorCardBorder dark:border-[#ffffff30] sm:py-16 pt-16 pb-6 overflow-hidden">
      <BgImage
        className={
          "absolute rotate-180 text-center flex justify-center bottom-0 z-0 right-0 left-0"
        }
      />
      <div className="max-w-widthScreen mx-auto sm:flex sm:justify-between z-50">
        <div className="flex flex-1 flex-col mb-10 sm:mb-0 justify-between text-center">
          <div className="sm:text-left text-center sm:mb-10">
            <div className="font-signature text-3xl mb-4 dark:text-colorWhite">
              J
            </div>
            <span className="dark:text-[#80808090] z-50 font-light">
              Thanks for stoping by ッ
            </span>
          </div>
          <div className="font-light text-left hidden sm:block dark:text-[#80808090]">
            <span className="dark:text-[#80808090]">{`© ${dateYear.getFullYear()} Jonathan Pereira. All Rights Reserved.`}</span>
          </div>
        </div>
        <div className="sm:gap-40 flex justify-center sm:justify-between gap-20 text-left sm:pr-10 sm:mb-0 mb-10">
          <div>
            <h3 className="mb-8 dark:text-colorWhite font-bold">Links</h3>
            <div className="flex flex-col gap-4 font-light">
              <Link
                onClick={() => useScrollToTop()}
                to={"/About"}
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200 cursor-pointer"
              >
                About
              </Link>
              <Link
                onClick={() => useScrollToTop()}
                to={"/Work"}
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200 cursor-pointer"
              >
                Work
              </Link>
              <Link
                onClick={() => useScrollToTop()}
                to={"/Techstack"}
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200 cursor-pointer"
              >
                Tech Stack
              </Link>
              <Link
                onClick={() => useScrollToTop()}
                to={"/Contact"}
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-8 font-bold text-colorOnyx dark:text-colorWhite">
              Elsewhere
            </h3>
            <div className="flex flex-col gap-4 font-light">
              <a
                href="https://www.linkedin.com/in/jonathan-pereira-5421b3152/"
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200  cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/JonathanPereira1993"
                className="z-50 dark:text-[#C5C5C5] hover:underline duration-200 cursor-pointer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div
            className="cursor-pointer sm:hidden flex justify-center"
            onClick={() => toggleDarkMode()}
          >
            {darkMode ? (
              <WiDaySunny className="w-6 h-6 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
            ) : (
              <MdDarkMode className="w-6 h-6 cursor-pointer hover:scale-110 duration-200" />
            )}
          </div>
        </div>

        <div className="font-light block sm:hidden sm:opacity-0 text-center opacity-100 dark:text-[#80808090]">
          <span className="dark:text-[#80808090]">{`© ${dateYear.getFullYear()} Jonathan Pereira. All Rights Reserved.`}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
