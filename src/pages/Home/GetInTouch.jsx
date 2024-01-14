import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

import Button from "../../components/Buttons/Button";

const GetInTouch = () => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-widthScreen mt-[100px]">
      <div>
        <h1 className="text-5xl font-semibold mb-4">Let's work together</h1>
        <p className="text-[20px] font-light">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
      </div>
      <div className="flex self-center justify-end">
        <Button className={"bg-black text-white w-fit"}>
          <MdOutlineRocketLaunch className="text-2xl" />
          <span className="ml-4">Get in touch</span>
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
