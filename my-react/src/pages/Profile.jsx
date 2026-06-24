import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/CreateContext";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { getUserData, data, sendData } = useContext(MyContext);
  const [user, setuser] = useState({
    name: "",
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (data) {
      setuser({
        name: data.name || "",
        email: data.email || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(user);
    setSuccessMsg("Profile updated successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />
      <div className="flex items-center justify-center p-6 mt-10">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
          <div className="card-body">


            {successMsg && (
              <div className="alert alert-success shadow-sm py-2 text-sm mb-4">
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:input-primary transition-all duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="input input-bordered w-full bg-base-200 text-base-content/50 cursor-not-allowed"
                  readOnly
                />
                <span className="text-xs text-base-content/40 mt-1">Email cannot be changed.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-6 text-white font-bold transition-all duration-200"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
