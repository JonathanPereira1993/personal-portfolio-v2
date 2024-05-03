import React from "react";

import Banner from "../../components/Banner";
import SelectedWorkIntemContent from "../../components/SelectedWorkItem/SelectedWorkIntemContent";
import SelectedWorkItem from "../../components/SelectedWorkItem/SelectedWorkItem";
import { selectedWorkContent } from "../../data/ContentData";

const Work = () => {
  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner title="Projects" subtitle="Projects and ideas I've worked on" />

      <div className="rounded-lg h-[40vh] mt-9 p-6 flex flex-col justify-center items-center bg-[#F6F6F6] dark:bg-[#181818] border border-[#EBEBEB] dark:border-[#383737]">
        <h2 className="text-3xl text-center text-black dark:text-white">
          I will post projects here soon
        </h2>
        <h3 className="text-lg text-center mt-4 text-black dark:text-white">
          In the meantime, you can see this portfolio that was made entirely by
          me
        </h3>
      </div>

      {/* <div className="gap-4 mt-16 grid">
        {selectedWorkContent.map((item) => (
          <SelectedWorkItem key={item.title}>
            <SelectedWorkIntemContent
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </SelectedWorkItem>
        ))}
      </div> */}
    </div>
  );
};

export default Work;
