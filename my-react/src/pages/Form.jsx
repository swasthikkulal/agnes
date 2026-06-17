import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = axios
        .post("http://localhost:5000/api/create-user", {
          name: data.username,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          console.log("user registered successfully");
        })
        .catch((error) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="border w-[350px] h-[500px] flex justify-center items-center flex-col rounded-md bg-black ">
        <img
          src="https://imgs.search.brave.com/nqylccUp_KXjUj2K9gc7M8W4YINnsFKbWShSyu-7m_c/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/YTRlNDMyYTJkYTVh/ZDczZGY3ZWZlN2Eu/cG5n"
          alt=""
        />
        <input
          className="border border-white w-[250px] h-[40px] rounded-md text-white  px-2 mt-6"
          type="text"
          name="username"
          value={data.username}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          className="border border-white w-[250px] h-[40px] mt-5 rounded-md  text-white px-2"
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          className="border border-white w-[250px] h-[40px] mt-5 rounded-md  text-white  px-2"
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-red-400 px-6 py-2 rounded-sm mt-7"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
