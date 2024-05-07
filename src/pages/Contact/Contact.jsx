import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Banner from "../../components/Banner";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_ID,
        "template_vmq5rlf",
        form.current,
        {
          publicKey: "2n8g8LjbhyoU9FiH_",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(null), 5000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner title="Get in touch" subtitle="Let's build something awesome" />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative mt-10 sm:w-full bg-[#F6F6F6] dark:bg-[#181818]  rounded-xl shadow-lg border dark:border-[#383737] pb-4"
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
            name="user_email"
            placeholder="Enter your email"
            required
          />
          <Input
            id="name"
            type="text"
            label="Name:"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <Input
            id="subject"
            type="text"
            label="Subject:"
            name="user_subject"
            placeholder="Enter subject"
            required
          />
          <Input
            className="mt-8"
            id="message"
            type="text"
            name="message"
            label=""
            isTextArea={true}
            placeholder="Write your message here"
            required
          />
        </div>
        <div className="px-4 flex sm:justify-end justify-center">
          <Button type="submit" className="w-full sm:w-[160px]">
            Send
          </Button>
        </div>
        {isSuccess !== null && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#25252539]">
            <h2
              className={`${
                isSuccess ? "text-green-500" : "text-red-500"
              } text-3xl text-center`}
            >
              {isSuccess
                ? "Message sent successfully"
                : "Ups, something gone wrong"}
            </h2>
          </div>
        )}
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
