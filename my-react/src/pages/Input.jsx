import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Input = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data)
  const handleClick = () => {};

  return (
    <div>
      <Navbar />
      <div>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button onClick={handleClick}>register</button>
      </div>
    </div>
  );
};

export default Input;
