import React from "react";
import gridPic from "../media/grid pics.svg";

const Hero = function () {
  return (
    <header>
      <img src={gridPic} alt="collection of random pics in grid" />

      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  );
};

export default Hero;
