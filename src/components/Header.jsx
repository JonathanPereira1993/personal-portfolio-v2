import React from "react";
import Link from "./HeaderLinks/Link";

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
    <div className="fixed w-full rounded-xl top-8 border shadow-lg border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 h-[60px] flex justify-between max-w-widthScreen mx-auto p-4 bg-colorWhite25 backdrop-blur-[2px]">
      <div className="flex gap-12">
        <span className="absolute -translate-y-1/2 left-5 top-1/2 font-signature text-3xl">
          Jonathan
        </span>
        <div className="ml-[140px] flex gap-10">
          {headerLinks.map((link) => (
            <Link href={"#"} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
