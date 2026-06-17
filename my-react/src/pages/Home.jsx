import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className=" w-full flex flex-wrap justify-center items-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
