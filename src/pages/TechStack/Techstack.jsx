import React from "react";
import Banner from "../../components/Banner";
import TechStackItem from "../../components/TechStackItem";

import { techStackItems } from "../../data/ContentData";

const Techstack = () => {
  return (
    <div className="relative max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Tech Stack"
        subtitle="The dev tools, apps and devices I love and use."
      />

      <div className="pt-[100px] w-[90vw] mx-auto sm:w-full grid sm:grid-cols-3 grid-cols-1 gap-4">
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
