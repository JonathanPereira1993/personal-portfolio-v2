import React from "react";
import BgTopImage from "../assets/BackgroundGradient.svg";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <img src={BgTopImage} alt="" />
      </div>
      <Header />
    </div>
  );
};

export default Home;
