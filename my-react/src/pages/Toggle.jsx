import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Toggle = () => {
 const [isOn, setisOn] = useState(true)
  return (
    <div>
      <Navbar />
      <h1>{isOn ? "Lights On" : "Lights Off"}</h1>
      <button onClick={()=>setisOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default Toggle;
