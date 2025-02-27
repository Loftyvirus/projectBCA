import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./contexts/userAuth";
const Adminski: React.FC = () => {
  const { token, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${apiBaseUrl}/api/auth/login`, {
        email,
        password,
      });

      const { token } = response.data;
      login(token);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password. Please try again.");
    }
  };

  if (token) {
    return null;
  }

  return (
    <div className="bg-[#3730a3] min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-[#4c41d0] mb-8">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              className="block text-2xl text-[#4c41d0] mb-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 rounded-full border-2 border-[#4c41d0] focus:outline-none focus:ring-4 focus:ring-[#4c41d0] bg-[#f2f4f8] text-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-2xl text-[#4c41d0] mb-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-4 rounded-full border-2 border-[#4c41d0] focus:outline-none focus:ring-4 focus:ring-[#4c41d0] bg-[#f2f4f8] text-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full text-xl bg-[#4c41d0] text-white hover:bg-[#3730a3] transition-all ease-in-out duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adminski;
