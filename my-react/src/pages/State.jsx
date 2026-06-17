import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const State = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setState(res.data.users);
      console.log(res.data.users)
    });
  }, []);

  return (
    <div>
      <Navbar />
      {state.map((item, index) => {
        return (
          <div key={index}>
            <li>{item.firstName}</li>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default State;
