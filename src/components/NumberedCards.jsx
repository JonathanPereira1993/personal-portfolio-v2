import React from "react";

const NumberedCards = ({
  number,
  coloredTitle,
  color,
  subTitle,
  description,
}) => {
  return (
    <div>
      <h2 className="text-[117px] text-[#8491A0]">{number}</h2>
      <div className="flex align-middle gap-1 text-2xl">
        <p className={`font-bold ${color}`}>{coloredTitle}</p>,<p>{subTitle}</p>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default NumberedCards;
