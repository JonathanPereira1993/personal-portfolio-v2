import React from "react";
import { Link } from "react-router-dom";

const GetToKnowMeCards = ({
  title,
  description,
  children,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} relative overflow-hidden hover:dark:border-[#383737] shadow-sm bg-colorCardBg aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-[#151515] dark:border-transparent rounded-[32px] border border-colorCardBorder py-16 px-10 flex flex-col justify-start items-center`}
    >
      <div className="text-center mb-4">
        <h2 className="text-colorOnyx dark:text-colorWhite font-bold text-3xl mb-4">
          {title}
        </h2>
        <p className="text-colorDarkGray font-light">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default GetToKnowMeCards;
