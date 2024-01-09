import React from "react";

const SectionTitle = ({ topTitle, mainTitle, subTitle, className }) => {
  return (
    <div className={`leading-slug ${className}`}>
      <span className="text-[#8491A0]">{topTitle}</span>
      <h2 className="text-[55px]">{mainTitle}</h2>
      <span className="text-[#8491A0]">{subTitle}</span>
    </div>
  );
};

export default SectionTitle;
