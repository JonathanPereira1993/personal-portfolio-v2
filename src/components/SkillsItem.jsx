import React from "react";

const SkillsItem = ({ icon, title, description }) => {
  return (
    <div className="mb-4">
      <div className="text-[#5221E6] mb-6">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-[#8491A0] mt-4">{description}</p>
    </div>
  );
};

export default SkillsItem;
