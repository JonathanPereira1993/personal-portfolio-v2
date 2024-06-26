import React from "react";
import Banner from "../../components/Banner";

const Notebook = () => {
  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Notebook"
        subtitle="My thoughts, insights, and reflections"
      />
    </div>
  );
};

export default Notebook;
