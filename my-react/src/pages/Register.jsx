import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await axios
        .post("http://localhost:5000/api/create-user", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          console.log(res.data.token);
          const token = res.data.token;
          localStorage.setItem("token", token);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <div className="flex flex-col items-center mb-6">
            <h2 className="card-title text-3xl font-extrabold text-primary tracking-tight">
              Create Account
            </h2>
            <p className="text-sm text-base-content/60 mt-2">
              Join us and start tweeting!
            </p>
          </div>

          {error && (
            <div className="alert alert-error mb-4 shadow-sm py-2 text-sm">
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success mb-4 shadow-sm py-2 text-sm">
              <span>{success}</span>
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
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="input input-bordered w-full focus:input-primary transition-all duration-200"
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
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input input-bordered w-full focus:input-primary transition-all duration-200"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full mt-6 text-white font-bold transition-all duration-200 ${
                loading ? "loading" : ""
              }`}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <div className="divider my-6 text-base-content/40 text-xs">OR</div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="link link-primary font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
