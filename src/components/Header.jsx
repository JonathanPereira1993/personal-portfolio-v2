import React, { useState } from "react";
import Link from "./HeaderLinks/Link";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
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
      name: "Network",
      link: "",
    },
    {
      id: 3,
      name: "Contact",
      link: "",
    },
  ];

  return (
    <div className="fixed w-full flex z-50 rounded-xl top-8 border shadow-lg border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 h-[60px] flex justify-between max-w-widthScreen mx-auto p-4 bg-colorWhite25 backdrop-blur-[2px]">
      <div className="flex gap-12">
        <span className="absolute -translate-y-1/2 left-5 top-1/2 font-signature text-3xl">
          J
        </span>
        <div className="ml-[60px] flex gap-10">
          {headerLinks.map((link) => (
            <Link href={"#"} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <FaGithub className="w-5 h-5 cursor-pointer hover:scale-110 duration-200" />
        <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 duration-200" />
        <div className="h-5 w-[1px] bg-colorOnyx" />
        <WiDaySunny className="w-6 h-6 cursor-pointer hover:scale-110 duration-200" />
      </div>
    </div>
  );
};

export default Header;
