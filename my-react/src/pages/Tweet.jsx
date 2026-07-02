import React, { useContext, useState } from "react";
import { MyContext } from "../context/CreateContext";
import Navbar from "../components/Navbar";

const Tweet = () => {
  const { sendTweet } = useContext(MyContext);
  const [file, setFile] = useState(null);
  const [tweetText, setTweetText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTweet = () => {
    if (!tweetText && !file) return; // Prevent empty submits

    const formData = new FormData();
    if (file) formData.append("image", file);
    formData.append("tweet", tweetText);

    sendTweet(formData);

    // Optional: Reset form
    setTweetText("");
    setFile(null);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-sm bg-white mt-[10%]">
        <textarea
          className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 outline-none"
          placeholder="What's happening?"
          rows="3"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />

        <div className="flex justify-between items-center mt-3">
          <input
            type="file"
            onChange={handleFileChange}
            className="text-sm text-gray-500"
          />

          <button
            onClick={handleTweet}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
          >
            Tweet
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Tweet;
