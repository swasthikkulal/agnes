import axios from "axios";
import React, { createContext, useState } from "react";

export const MyContext = createContext();

const CreateContext = ({ children }) => {
  const [data, setdata] = useState(" ");
  const [tweet, settweet] = useState([]);
  const [myTweet, setmyTweet] = useState([]);

  const getUserData = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/get-user", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const sendData = (user) => {
    const token = localStorage.getItem("token");
    axios
      .put("http://localhost:5000/api/update-user", user, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendTweet = (formData) => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:5000/api/create-tweet", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        getAllTweets();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllTweets = () => {
    axios
      .get("http://localhost:5000/api/get-tweets")
      .then((res) => {
        console.log(res.data.data);
        settweet(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMyTweet = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/get-mytweets", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setmyTweet(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTweet = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:5000/api/delete-tweet/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        getMyTweet();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MyContext.Provider
      value={{
        getUserData,
        data,
        sendData,
        sendTweet,
        getAllTweets,
        getMyTweet,
        deleteTweet,
        tweet,
        myTweet,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default CreateContext;
