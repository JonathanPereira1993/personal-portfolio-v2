import React from "react";
import GetToKnowMeCards from "../../components/GetToKnowMe/GetToKnowMeCards";

import MySticker from "../../assets/MySticker.png";

const GetToKnowMe = () => {
  return (
    <div className="max-w-widthScreen mx-auto mt-[100px]">
      <div className="text-5xl dark:text-colorWhite font-semibold mb-8">Selected Work</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <GetToKnowMeCards
          title={"About me"}
          description={"Who I am and what I do"}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          title={"Notebook"}
          description={"My thoughts, insights, and reflections"}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          title={"Bookshelf"}
          description={"Books and pieces of wisdom I’ve enjoyed reading"}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          title={"Tech Stack"}
          description={"The dev tools, apps, devices, and games I use and play."}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
      </div>
    </div>
  );
};

export default GetToKnowMe;
