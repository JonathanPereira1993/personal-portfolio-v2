import React from "react";
import Banner from "../../components/Banner";
import TechStackItem from "../../components/TechStackItem";

import { techStackItems } from "../../data/ContentData";

const Techstack = () => {
  return (
    <div className="relative max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Tech Stack"
        subtitle="The dev tools, apps, devices, and games I use and play"
      />

      <div className="pt-[100px] mx-auto grid grid-cols-3 gap-4">
        {techStackItems.map((item) => (
          <TechStackItem
            key={item.id}
            title={item.title}
            tagName={item.tagName}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Techstack;
