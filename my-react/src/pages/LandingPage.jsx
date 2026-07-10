import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/CreateContext";

const LandingPage = () => {
  const { getAllTweets, tweet } = useContext(MyContext);

  useEffect(() => {
    getAllTweets();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-[25%] border-r border-gray-800 p-6 sticky top-0 h-screen">
        <div className="mb-10 ">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-20 h-20 fill-current text-white"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <div className="space-y-5 text-xl font-medium ">
          <p className="cursor-pointer hover:text-blue-400"> Home</p>
          <p className="cursor-pointer hover:text-blue-400"> Explore</p>

          <p className="cursor-pointer hover:text-blue-400"> Profile</p>
        </div>
      </div>

      {/* Feed */}
      <div className="w-[50%] border-r border-gray-800 overflow-y-auto h-screen ">
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-5 z-10">
          <h2 className="text-2xl font-bold">Home</h2>
        </div>

        <div className="p-5 space-y-5">
          {tweet.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 border border-gray-800 rounded-2xl hover:bg-zinc-900 transition duration-300"
            >
              {/* Profile */}
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Tweet Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{item.userId?.name}</h3>

                  <span className="text-gray-500 text-sm">
                    @{item.userId?.name?.toLowerCase().replace(/\s/g, "")}
                  </span>

                  <span className="text-gray-600">·</span>

                  <span className="text-gray-500 text-sm">Now</span>
                </div>

                <p className="text-gray-200 leading-7 mb-4">{item.tweet}</p>

                {item.image && (
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt=""
                    className="rounded-2xl w-full max-h-[500px] object-cover border border-gray-700"
                  />
                )}

                {/* Actions */}
                <div className="flex justify-between mt-5 text-gray-500 text-lg">
                  <button className="hover:text-pink-500 transition">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[25%] p-6">
        <div className="bg-zinc-900 rounded-2xl p-5">
          <h2 className="text-xl font-bold mb-4">Trending</h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm">Technology</p>
              <h3 className="font-semibold">#ReactJS</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Programming</p>
              <h3 className="font-semibold">#MERN</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Web Development</p>
              <h3 className="font-semibold">#TailwindCSS</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">DevOps</p>
              <h3 className="font-semibold">#Docker</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
