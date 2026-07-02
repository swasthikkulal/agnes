import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";



const Home = (props) => {

  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="w-full flex flex-wrap justify-center items-center gap-4">
       
      </div>
    </div>
  );
};

export default Home;
