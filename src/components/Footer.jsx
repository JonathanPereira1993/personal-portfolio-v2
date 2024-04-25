import React from "react";
import { Link } from "react-router-dom";

import BgImage from "./UI/BgImage";

const Footer = () => {
  const dateYear = new Date();
  return (
    <div className="relative mt-[100px] border-t py-16 overflow-hidden">
      <BgImage
        className={
          "absolute rotate-180 text-center flex justify-center bottom-0 z-0 right-0 left-0"
        }
      />
      <div className="max-w-widthScreen mx-auto grid grid-cols-5 z-50">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="font-signature text-3xl mb-4 dark:text-colorWhite">
              J
            </div>
            <span className="dark:text-[#80808090] z-50 font-light">
              Thanks for stoping by ッ
            </span>
          </div>
          <div className="font-light dark:text-[#80808090]">
            <span className="dark:text-[#80808090]">{`© ${dateYear.getFullYear()} Jonathan Pereira. All Rights Reserved.`}</span>
          </div>
        </div>
        <div></div>
        <div>
          <h3 className="mb-8 dark:text-colorWhite font-bold">Links</h3>
          <div className="flex flex-col gap-4 font-light">
            <Link
              to={"/About"}
              className="z-50 dark:text-[#C5C5C5] duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link
              to={"/Work"}
              className="z-50 dark:text-[#C5C5C5] duration-200 cursor-pointer"
            >
              Work
            </Link>
            <Link
              to={"/Techstach"}
              className="z-50 dark:text-[#C5C5C5] duration-200 cursor-pointer"
            >
              Tech Stack
            </Link>
            <Link
              to={"/Contact"}
              className="z-50 dark:text-[#C5C5C5] duration-200 cursor-pointer"
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
              href="#"
              className="z-50 dark:text-[#C5C5C5] duration-200 hover:text-[#959595] dark:hover:text-[#808080] cursor-pointer"
            >
              Email
            </a>
            <a
              href="#"
              className="z-50 dark:text-[#C5C5C5] duration-200 hover:text-[#959595] dark:hover:text-[#808080] cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="z-50 dark:text-[#C5C5C5] duration-200 hover:text-[#959595] dark:hover:text-[#808080] cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="z-50 dark:text-[#C5C5C5] duration-200 hover:text-[#959595] dark:hover:text-[#808080] cursor-pointer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
