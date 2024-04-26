import React from "react";
import Banner from "../../components/Banner";

const Bookshelf = () => {
  return (
    <div className="relative max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Bookshelf"
        subtitle="Books and pieces of wisdom I’ve enjoyed reading"
      />
    </div>
  );
};

export default Bookshelf;
