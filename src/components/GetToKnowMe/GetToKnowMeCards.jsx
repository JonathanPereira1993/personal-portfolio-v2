import React from "react";
import { Link } from "react-router-dom";

const GetToKnowMeCards = ({ title, description, children, to }) => {
  return (
    <Link
      to={to}
      className="relative shadow-sm bg-colorCardBg hover:shadow-lg cursor-pointer dark:bg-[#151515] dark:border-transparent rounded-[32px] border border-colorCardBorder py-16 px-10 flex flex-col justify-center items-center"
    >
      <div className="text-center mb-4">
        <h2 className="text-colorOnyx dark:text-colorWhite font-bold text-3xl mb-4">
          {title}
        </h2>
        <p className="text-colorDarkGray font-light">{description}</p>
      </div>
      <div>{children}</div>
    </Link>
  );
};

export default GetToKnowMeCards;
