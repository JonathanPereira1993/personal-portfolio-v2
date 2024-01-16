import React, { useEffect, useState } from "react";
import HeaderLink from "./HeaderLinks/Link";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsOnTop(window.pageYOffset > 200);
      });
    }
  }, []);

  const headerLinks = [
    {
      id: 0,
      name: "About",
      link: "",
    },
    {
      id: 1,
      name: "Work",
      link: "",
    },
    {
      id: 2,
      name: "Notebook",
      link: "",
    },
    {
      id: 3,
      name: "Contact",
      link: "",
    },
  ];

  return (
    <div
      className={`${
        isOnTop ? "top-0 rounded-t-none bg-white" : "top-8"
      } fixed w-full flex z-50 rounded-xl border duration-300 shadow-lg h-[60px] border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 justify-between max-w-widthScreen mx-auto p-4 bg-colorWhite25 backdrop-blur-[2px]`}
    >
      <div className="flex gap-12">
        <HeaderLink
          to={"/"}
          className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
        >
          <span className="absolute -translate-y-1/2 left-5 top-1/2 font-signature text-3xl">
            J
          </span>
        </HeaderLink>

        <div className="ml-[40px] flex gap-10">
          {headerLinks.map((link) => (
            <HeaderLink
              to={`/${link.name}`}
              key={link.id}
              className="group hover:text-colorDarkGray duration-200 cursor-pointer h-full relative"
            >
              {link.name}
              <div className="absolute duration-200 opacity-0 w-full group-hover:opacity-100 h-[2px] bg-colorDarkGray -bottom-[18px]" />
              <div className="absolute duration-200 opacity-0 w-full group-hover:opacity-100 h-[2px] bg-colorDarkGray -top-[18px]" />
            </HeaderLink>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/JonathanPereira1993" target="_blank">
          <FaGithub className="w-5 h-5 cursor-pointer hover:scale-110 duration-200" />
        </a>

        <a href="https://www.instagram.com/jonathanmyself/" target="_blank">
          <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 duration-200" />
        </a>

        <div className="h-5 w-[1px] bg-colorOnyx" />
        <WiDaySunny className="w-6 h-6 cursor-pointer hover:scale-110 duration-200" />
      </div>
    </div>
  );
};

export default Header;
