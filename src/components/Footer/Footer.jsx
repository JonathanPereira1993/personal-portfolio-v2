import React from "react";
import HeaderLink from "../HeaderLinks/Link";

import BgImage from "../BgImage";

const Footer = () => {
  const dateYear = new Date();
  return (
    <div className="relative mt-[100px] border-t py-16">
      <BgImage className={"rotate-180 bottom-0 z-0 right-0 left-0"} />
      <div className="max-w-widthScreen mx-auto grid grid-cols-5 z-50">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="font-signature text-3xl mb-4">J</div>
            <span className="font-light">Thanks for stoping by ッ</span>
          </div>
          <div className="font-light">
            <span>{`© ${dateYear.getFullYear()} Jonathan Pereira. All Rights Reserved.`}</span>
          </div>
        </div>
        <div></div>
        <div>
          <h3 className="mb-8 font-bold">Links</h3>
          <div className="flex flex-col gap-4 font-light">
            <HeaderLink
              to={"/About"}
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              About
            </HeaderLink>
            <HeaderLink
              to={"/Work"}
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              Work
            </HeaderLink>
            <HeaderLink
              to={"/Techstach"}
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              Tech Stack
            </HeaderLink>
            <HeaderLink
              to={"/Contact"}
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              Contact
            </HeaderLink>
          </div>
        </div>
        <div>
          <h3 className="mb-8 font-bold">Elsewhere</h3>
          <div className="flex flex-col gap-4 font-light">
            <a
              href="#"
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              Email
            </a>
            <a
              href="#"
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="z-50 duration-200 hover:text-colorLightBlue cursor-pointer"
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
