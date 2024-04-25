import React from "react";
import Input from "../../components/UI/Input";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative max-w-widthScreen pt-[300px] mx-auto">
      <div className="relative">
        <h1 className="text-colorOnyx dark:text-colorWhite text-7xl font-bold mb-4">
          Get in touch
        </h1>
        <p className="text-2xl text-colorDarkGray font-light opacity-50 pb-[60px]">
          Let's build something awesome
        </p>
        <div className="absolute bottom-0 w-[100%] h-[1px] bg-colorCardBorder dark:bg-[#ffffff30]" />
      </div>

      <form
        action=""
        className="mt-10 w-full bg-[#F6F6F6] rounded-xl shadow-lg border"
      >
        <div className="px-3 h-[54px] w-full flex items-center justify-between bg-[#F6F6F6] rounded-t-xl border-b-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F63636] cursor-pointer hover:brightness-[180%] rounded-full" />
            <div className="w-3 h-3 bg-[#F6C136] cursor-pointer hover:brightness-[120%] rounded-full" />
            <div className="w-3 h-3 bg-[#53CC28] cursor-pointer hover:brightness-[150%] rounded-full" />
          </div>
          <h2>New Message</h2>
          <div></div>
        </div>
        <div className="w-full px-8 py-5">
          <Input
            id="email"
            type="email"
            label="Email:"
            placeholder="Enter your email"
            required
          />
          <Input
            id="name"
            type="text"
            label="Name:"
            placeholder="Enter your name"
            required
          />
          <Input
            id="subject"
            type="text"
            label="Subject:"
            placeholder="Enter subject"
            required
          />
          <Input
            className="mt-8"
            id="message"
            type="text"
            label=""
            isTextArea={true}
            placeholder="Write your message here"
            required
          />
        </div>
      </form>

      <div className="flex justify-center gap-6 mt-20">
        <a href="https://github.com/JonathanPereira1993" target="_blank">
          <FaGithub className="w-8 h-8 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
        </a>

        <a href="https://www.instagram.com/jonathanmyself/" target="_blank">
          <FaInstagram className="w-8 h-8 text-colorOnyx dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
