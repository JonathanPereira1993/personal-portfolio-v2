import React from "react";
import Banner from "../../components/Banner";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner title="Get in touch" subtitle="Let's build something awesome" />

      <form
        action=""
        className="mt-10 sm:w-full bg-[#F6F6F6] dark:bg-[#181818]  rounded-xl shadow-lg border dark:border-[#383737] pb-4"
      >
        <div className="px-3 h-[54px] w-full dark:text-white flex items-center justify-between bg-[#F6F6F6] dark:bg-[#181818] rounded-t-xl border-b-2 dark:border-[#383737]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F63636] cursor-pointer hover:brightness-[180%] rounded-full" />
            <div className="w-3 h-3 bg-[#F6C136] cursor-pointer hover:brightness-[120%] rounded-full" />
            <div className="w-3 h-3 bg-[#53CC28] cursor-pointer hover:brightness-[150%] rounded-full" />
          </div>
          <h2>New Message</h2>
          <div></div>
        </div>
        <div className="w-full px-4 py-5">
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
        <div className="px-4 flex sm:justify-end justify-center">
          <Button className="w-full sm:w-[160px]">Send</Button>
        </div>
      </form>

      <div className="flex justify-center gap-6 mt-20">
        <a href="https://github.com/JonathanPereira1993" target="_blank">
          <FaGithub className="w-8 h-8 text-colorOnyx dark:text-[#b6b5b5] cursor-pointer hover:opacity-50 transition-transform duration-200" />
        </a>

        <a href="https://www.instagram.com/jonathanmyself/" target="_blank">
          <FaInstagram className="w-8 h-8 text-colorOnyx dark:text-[#b6b5b5] cursor-pointer hover:opacity-50 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
