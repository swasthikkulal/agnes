import React, { useContext, useState } from "react";
import { MyContext } from "../context/CreateContext";

const Tweet = () => {
  const { sendTweet } = useContext(MyContext);
  const [tweet, settweet] = useState({
    tweet: "",
  });
  const [image, setimage] = useState(" ");

  const handleChange = (e) => {
    settweet(e.target.value);
  };
  const handleFIleChange = (e) => {
    setimage(e.target.files[0]);
  };

  const handleSubmit = () => {
    const fromData = new FormData();
    fromData.append("tweet", tweet);
    fromData.append("image", image);

    sendTweet(fromData);
  };
  return (
    <div>
      <input type="file" onChange={handleFIleChange} />
      <input
        type="text"
        name="tweet"
        value={tweet.tweet}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Tweet;
