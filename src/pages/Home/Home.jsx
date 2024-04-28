import React from "react";
import ProfilePhoto from "../../assets/avatar-photo2.png";
import Button from "../../components/UI/Button";

import { DiCode, DiGitBranch } from "react-icons/di";
import { GoRocket } from "react-icons/go";
import GetInTouch from "./GetInTouch";
import GetToKnowMe from "./GetToKnowMe";
import SelectedWork from "./SelectedWork";

const Home = () => {
  return (
    <div className="w-[90vw] sm:w-full mx-auto">
      <div className="relative max-w-widthScreen flex pt-[400px] pb-[150px] sm:pb-[250px] mx-auto">
        <div className="flex">
          <div>
            <div className="mb-10">
              <h1 className="text-colorOnyx dark:text-white text-7xl font-bold mb-10">
                <span className="text-colorDarkGray">I'm </span>
                Jonathan
              </h1>
              <p className="max-w-[600px] sm:text-2xl text-xl font-light dark:text-white">
                Hey there! I’m a Front-end Developer specialising in crafting
                clean and functional web experiences. Feel free to break into my
                portfolio and check out my work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="w-full sm:w-fit">See my resume</Button>
              <Button isOutline className="w-full sm:w-fit">
                Get in touch
              </Button>
            </div>
          </div>
          <div>
            <DiCode className="text-[42px] absolute opacity-0 sm:opacity-100  right-[400px] top-[270px] text-zinc-200 dark:text-colorDarkGray" />
            <GoRocket className="text-[40px] absolute opacity-0 sm:opacity-100 right-[300px] top-[270px] text-zinc-200 dark:text-colorDarkGray" />
            <DiGitBranch className="text-[38px] absolute opacity-0 sm:opacity-100 right-[390px] top-[380px] text-zinc-200 dark:text-colorDarkGray" />
            <img
              className="absolute sm:right-0 right-1/2 sm:translate-x-0 translate-x-1/2 sm:top-[250px] top-[130px] max-w-[200px] sm:max-w-[400px] z-0"
              src={ProfilePhoto}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
      <SelectedWork />

      <GetToKnowMe />

      <GetInTouch />
    </div>
  );
};

export default Home;
