import React from "react";

const GetToKnowMeCards = ({ title, description, children }) => {
  return (
    <div className="relative bg-colorCardBg rounded-[32px] border border-colorCardBorder py-16 px-16 flex flex-col justify-center items-center">
      <div className="text-center mb-4">
        <h2 className="text-colorOnyx font-bold text-3xl mb-4">{title}</h2>
        <p className="text-colorDarkGray font-light">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default GetToKnowMeCards;
