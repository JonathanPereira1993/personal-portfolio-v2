import React from "react";
import ProfilePhoto from "../../assets/avatar-photo2.png";
import Button from "../../components/Buttons/Button";

import GetInTouch from "./GetInTouch";
import GetToKnowMe from "./GetToKnowMe";
import SelectedWork from "./SelectedWork";

const Home = () => {
  return (
    <>
      <div className="relative max-w-widthScreen flex mt-[20%] mb-[30%] mx-auto">
        <div className="flex">
          <div>
            <div className="mb-10">
              <h1 className="text-colorOnyx text-7xl font-bold mb-10">
                <span className="text-colorDarkGray">I'm </span>
                Jonathan
              </h1>
              <p className="max-w-[650px] text-2xl font-light">
                Hey there! I’m a Front-end Developer specialising in crafting
                clean and functional web experiences. Feel free to break into my
                portfolio and check out my work.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className={"bg-black text-white"}>See my resume</Button>
              <Button className={"bg-[#F3F3F3] text-black"}>
                Get in touch
              </Button>
            </div>
          </div>
          <div>
            <img
              className="absolute right-[15%] translate-x-1/2 -top-20 max-w-[400px] z-0"
              src={ProfilePhoto}
              alt="Profile photo"
            />
          </div>
        </div>
      </div>
      <SelectedWork />

      <GetToKnowMe />

      <GetInTouch />
    </>
  );
};

export default Home;
