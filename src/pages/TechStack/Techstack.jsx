import React from "react";
import TechStackItem from "../../components/TechStackItem";

import { techStackItems } from "../../data/ContentData";

const Techstack = () => {
  return <div className="relative max-w-widthScreen pt-[300px] mx-auto grid grid-cols-3 gap-4 aspect-square">
    {techStackItems.map((item) => (
      <TechStackItem key={item.id} title={item.title} tagName={item.tagName} image={item.image} />
    ))}
    
  </div>;
};

export default Techstack;
