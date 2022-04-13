import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./components/data.js";

import "./css/reset.css";
import "./css/app.scss";

const App = function () {
  return (
    <>
      <Nav />
      <Hero />
      <Card data={data} />
    </>
  );
};

export default App;
