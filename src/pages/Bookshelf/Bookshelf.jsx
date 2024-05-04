import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import useBookAPI from "../../hooks/useBookAPI";

const Bookshelf = () => {
  useEffect(() => {
    useBookAPI();
  }, []);

  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Bookshelf"
        subtitle="Books and pieces of wisdom I’ve enjoyed reading"
      />
    </div>
  );
};

export default Bookshelf;
