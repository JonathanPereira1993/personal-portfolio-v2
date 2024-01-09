import React from "react";

const Home = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute z-10 md:left-[40%] top-[25%]">
        <h1 className="flex flex-col text-[76px] leading-tight">
          <span>I'm Jonathan.</span>
          <span>A Frontend developer</span>
          <span className="text-[#9c9c9c]">Based in Portugal</span>
        </h1>
        <p className="max-w-[800px] mt-[78px]">
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>
      <div className="w-[60%] absolute top-0 right-0 h-full bg-primary-color-light"></div>
      <div className="absolute left-0 top-[50%] min-w-[700px] translate-y-[-50%] h-[70%] bg-profile-bg-square object-cover bg-no-repeat"></div>
    </div>
  );
};

export default Home;
