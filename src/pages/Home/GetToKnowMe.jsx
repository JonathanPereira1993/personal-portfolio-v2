import React from "react";
import GetToKnowMeCards from "../../components/GetToKnowMe/GetToKnowMeCards";

import TechStackImage from "../../assets/TechStack.png";

import MySticker from "../../assets/MySticker.png";

const GetToKnowMe = () => {
  return (
    <div className="max-w-widthScreen mx-auto mt-[100px]">
      <div className="text-5xl dark:text-colorWhite font-semibold mb-8">
        Get to know me
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
        <GetToKnowMeCards
          className="group"
          to="/About"
          title={"About me"}
          description={"Who I am and what I do"}
        >
          <img
            className="group-hover:rotate-6 group-hover:scale-[1.08] transition-all duration-500"
            src={MySticker}
            alt="My avatar"
          />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          to="/Notebook"
          title={"Notebook"}
          description={"My thoughts, insights, and reflections"}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          to="/Bookshelf"
          title={"Bookshelf"}
          description={"Books and pieces of wisdom I’ve enjoyed reading"}
        >
          <img src={MySticker} alt="" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          className="group"
          to="/TechStack"
          title={"Tech Stack"}
          description={
            "The dev tools, apps, devices, and games I use and play."
          }
        >
          <img
            className="absolute duration-500 left-0 group-hover:-translate-y-1"
            src={TechStackImage}
            alt="Teck Stack"
          />
        </GetToKnowMeCards>
      </div>
    </div>
  );
};

export default GetToKnowMe;
