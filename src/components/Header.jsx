import React from "react";

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
    <div className="fixed rounded-xl top-8 border shadow-lg border-[rgba(255, 255, 255, 0.25)] left-1/2 -translate-x-1/2 h-[60px] flex justify-between w-[70%] mx-auto p-4 bg-colorWhite25 backdrop-blur-[2px]">
      <div className="flex gap-10">
        <span className="text-signature">Jonathan</span>
        <div className="flex gap-10">
          {headerLinks.map((link) => (
            <div key={link.id}>{link.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
