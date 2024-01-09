import React from "react";

import HeaderLinks from "../components/HeaderLinks";

const Navigation = () => {
  const links = [
    {
      id: 1,
      name: "Experience",
    },
    {
      id: 2,
      name: "Work",
    },
    {
      id: 3,
      name: "Photography",
    },
    {
      id: 4,
      name: "Contacts",
    },
  ];
  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div className="flex justify-between">
        <div className=" px-6 py-8 font-signature text-2xl relative">
          Jonathan
          <div className="border absolute left-0 right-8 border-[#9c9c9c]"></div>
          <span className="absolute bottom-2 font-sen right-5 text-xs text-[#9c9c9c]">
            Portfolio
          </span>
        </div>
        <div className="flex">
          {links.map((link) => (
            <HeaderLinks key={link.id} name={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
