import React from "react";
import NumberedCards from "../components/NumberedCards";
import SectionTitle from "../components/SectionTitle";

const Clients = () => {
  return (
    <div className="mx-20 my-[120px]">
      <SectionTitle
        topTitle={"Work experience"}
        mainTitle={"Clients"}
        subTitle={
          "Clients Clients I have worked for, with Mediaweb, since 2020"
        }
      />
      <div className="grid grid-cols-3 mt-[40px] gap-6">
        <NumberedCards
          number={"01"}
          coloredTitle={"Fidelidade"}
          color={"text-[#3CC74E]"}
          subTitle={"Front Developer"}
          description={
            "I currently work with an insurance client, as a Frontend Developer, working with Outsystems."
          }
        />
        <NumberedCards
          number={"02"}
          coloredTitle={"Fidelidade"}
          color={"text-[#4c4cec]"}
          subTitle={"Front Developer"}
          description={
            "I currently work with an insurance client, as a Frontend Developer, working with Outsystems."
          }
        />
        <NumberedCards
          number={"03"}
          coloredTitle={"Fidelidade"}
          color={"text-[#af2d82]"}
          subTitle={"Front Developer"}
          description={
            "I currently work with an insurance client, as a Frontend Developer, working with Outsystems."
          }
        />
      </div>
    </div>
  );
};

export default Clients;
