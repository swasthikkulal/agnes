import React from "react";
import Navbar from "../components/Navbar";
import Box from "./Box";

const About = (props) => {
  return (
    <div>
      <Navbar />

      <h1 className="text-9xl">{props.name}</h1>
      <Box name={props.name} />
    </div>
  );
};

export default About;
