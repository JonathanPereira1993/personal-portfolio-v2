import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

import Button from "../../components/UI/Button";

const GetInTouch = () => {
  const navigate = useNavigate();

  return (
    <div className="grid sm:grid-cols-2 mx-auto max-w-widthScreen mt-[100px] z-50">
      <div>
        <h1 className="text-5xl text-center sm:text-left dark:text-colorWhite font-semibold mb-4">
          Let's work together
        </h1>
        <p className="text-[20px] font-light dark:text-[#80808080] ">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
      </div>
      <div className="flex self-center justify-end">
        <Button
          onClick={() => {
            navigate("/Contact");
            useScrollToTop();
          }}
          className={
            "transition-all duration-100 group w-full sm:w-fit mt-10 sm:mt-0"
          }
        >
          <MdOutlineRocketLaunch className="text-2xl group-hover:rotate-45 group-hover:-translate-x-1 transition-all duration-500" />
          <span className="ml-4">Get in touch</span>
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
