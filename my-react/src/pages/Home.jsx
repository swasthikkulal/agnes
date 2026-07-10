import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { MyContext } from "../context/CreateContext";

const Home = (props) => {
  const { getAllTweets, tweet } = useContext(MyContext);
  useEffect(() => {
    getAllTweets();
  }, []);

  return (
    <div>
      <Navbar />

      {/* <div className="w-full flex flex-wrap justify-center items-center gap-4">
        {tweet.map((item, index) => {
          return (
            <div key={index}>
              <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
              <p>{item.tweet}</p>
              <p>{item.userId.name}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home;
