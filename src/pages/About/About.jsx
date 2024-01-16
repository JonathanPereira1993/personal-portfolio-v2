import React from "react";
import ProfilePhoto from "../../assets/avatar-photo2.png";

const About = () => {
  return (
    <div className="relative max-w-widthScreen mt-[20%] mx-auto">
      <div className="relative">
        <h1 className="text-colorOnyx text-7xl font-bold mb-4">
          A little bit about me
        </h1>
        <p className="text-2xl text-colorDarkGray font-light opacity-50 pb-[60px]">
          Who I am and what I do
        </p>
        <div className="absolute bottom-0 -left-[100vw] -right-[100vw] h-[1px] bg-colorCardBorder" />
      </div>
      <div className="grid grid-cols-3 gap-[75px] mt-[60px]">
        <div className="col-span-2">
          {/* Section */}
          <div>
            <h2 className="uppercase font-semibold mb-2">Who I am</h2>
            <p className="text-lg font-light">
              I’m Jonathan (Pronounced “John-na-than”) an autodidact front-end
              developer based in Portugal 🇵🇹.
            </p>
          </div>

          {/* Section */}
          <div className="mt-8">
            <h2 className="uppercase font-semibold mb-2">Who I do</h2>
            <p className="text-lg font-light">
              With 2+ years of experience working at a tech company, I was
              fortunate to learn front-end working with Outsystems (Low-code
              development platform), helping my client’s UX/UI teams . Besides
              Outsystems, I also write code like Javascript and do the styling
              using CSS and SCSS. On my spare time, I am dedicated to learn more
              about other programming languages and ways to improve my corporate
              job. I’m currently working in some personal projects made with
              ReactJs, TailwindCSS and I am constantly challenging myself to do
              more and better everyday.
            </p>
          </div>

          {/* Section */}
          <div className="mt-8">
            <h2 className="uppercase font-semibold mb-2">Who I did</h2>
            <p className="text-lg font-light">
              Before jumping into the web development world, I studied Web
              Development and Multimedia and after that, I enrolled in the Games
              and Multimedia bachelor's degree. With this academic experience, I
              was introduced to the digital world by learning from the basics to
              more complex and challenging matters. I had the opportunity to do
              some web projects, design, art, programming and more importantly,
              i had the chance to prepare myself for the corporate world,
              working on major final projects.
            </p>
          </div>

          {/* Section */}
          <div className="mt-10">
            <p className="text-lg font-light">
              Feel free to reach out via{" "}
              <a href="#" className="underline font-semibold cursor-pointer">
                e-mail
              </a>
              , or follow me on{" "}
              <a
                href="https://github.com/JonathanPereira1993"
                className="underline font-semibold cursor-pointer"
              >
                GitHub
              </a>
              . Want to see where I’ve worked? Check out my Resume, or Connect
              with me on LinkedIn.
            </p>
            <p className="text-lg font-light mt-6">
              Let's build something great,
            </p>
          </div>
        </div>
        <div>
          <img src={ProfilePhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
