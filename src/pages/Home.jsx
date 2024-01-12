import React from "react";
import Button from "../components/Buttons/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="relative max-w-widthScreen flex mt-[20%] h-screen mx-auto">
      <Header />
      <div>
        <div className="mb-10">
          <h1 className="text-colorOnyx text-7xl font-bold mb-10">
            <span className="text-colorDarkGray">I'm </span>
            Jonathan
          </h1>
          <p className="max-w-[700px] text-2xl font-light">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button className={"bg-black text-white"}>See my resume</Button>
          <Button className={"bg-[#F3F3F3] text-black"}>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
