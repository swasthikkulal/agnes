import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Effect = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setdata(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="w-screen min-h-screen flex justify-center items-center flex-wrap gap-1 mt-8">
        {data.map((item, index) => {
          return (
            <div key={index} className="border rounded-md text-center">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Effect;
