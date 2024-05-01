import React from "react";
import { useNavigate } from "react-router-dom";
import GetToKnowMeCards from "../../components/GetToKnowMeCards";

import TechStackImage from "../../assets/TechStack.png";

import Books from "../../assets/Books/Books.png";
import MySticker from "../../assets/MySticker.png";

const GetToKnowMe = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-widthScreen mx-auto mt-[100px]">
      <div className="text-5xl text-center sm:text-left dark:text-colorWhite font-semibold mb-8">
        Get to know me
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-4 ">
        <GetToKnowMeCards
          className="group"
          onClick={() => navigate("/About")}
          title={"About me"}
          description={"Who I am and what I do"}
        >
          <img
            className="group-hover:rotate-6 w-40 md:w-48  group-hover:scale-[1.08] transition-all duration-500"
            src={MySticker}
            alt="My avatar"
          />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          onClick={() => navigate("/Notebook")}
          title={"Notebook"}
          description={"My thoughts, insights, and reflections"}
        >
          <img src={MySticker} alt="" className="w-40 md:w-48" />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          className="group"
          onClick={() => navigate("/Bookshelf")}
          title={"Bookshelf"}
          description={"Books and pieces of wisdom I’ve enjoyed reading"}
        >
          <img
            src={Books}
            alt="BookShelf"
            className="absolute duration-500 left-0 md:bottom-0 -bottom-[10%] group-hover:-translate-y-1 group-hover:scale-[1.05]"
          />
        </GetToKnowMeCards>
        <GetToKnowMeCards
          className="group"
          onClick={() => navigate("/TechStack")}
          title={"Tech Stack"}
          description={
            "The dev tools, apps, devices, and games I use and play."
          }
        >
          <img
            className="absolute duration-500 left-0 md:bottom-0 -bottom-[10%] group-hover:-translate-y-1 group-hover:scale-[1.05]"
            src={TechStackImage}
            alt="Teck Stack"
          />
        </GetToKnowMeCards>
      </div>
    </div>
  );
};

export default GetToKnowMe;
