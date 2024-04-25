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
    <>
      <div className="relative max-w-widthScreen flex pt-[400px] pb-[400px] mx-auto">
        <div className="flex">
          <div>
            <div className="mb-10">
              <h1 className="text-colorOnyx dark:text-white text-7xl font-bold mb-10">
                <span className="text-colorDarkGray">I'm </span>
                Jonathan
              </h1>
              <p className="max-w-[600px] text-2xl font-light dark:text-white">
                Hey there! I’m a Front-end Developer specialising in crafting
                clean and functional web experiences. Feel free to break into my
                portfolio and check out my work.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                className={
                  "bg-[#1A1A1A] dark:shadow-darkMode hover:shadow-lg bg-gradient-to-t from-black to-[#131313] text-white"
                }
              >
                See my resume
              </Button>
              <Button
                className={
                  "bg-[#F3F3F3] dark:bg-colorOnyx hover:shadow-lg dark:text-colorWhite text-black"
                }
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div>
            <DiCode className="text-[42px] absolute right-[400px] top-[270px] text-zinc-200 dark:text-colorDarkGray" />
            <GoRocket className="text-[40px] absolute right-[300px] top-[270px] text-zinc-200 dark:text-colorDarkGray" />
            <DiGitBranch className="text-[38px] absolute right-[390px] top-[380px] text-zinc-200 dark:text-colorDarkGray" />
            <img
              className="absolute right-0 top-[250px] max-w-[400px] z-0"
              src={ProfilePhoto}
              alt="Profile picture"
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
