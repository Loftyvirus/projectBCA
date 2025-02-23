import React from "react";

const Adminski: React.FC = () => {
  return (
    <div className="bg-[#3730a3] min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-[#4c41d0] mb-8">
          Admin Login
        </h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-2xl text-[#4c41d0] mb-3"
              htmlFor="usernameOrEmail"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full p-4 rounded-full border-2 border-[#4c41d0] focus:outline-none focus:ring-4 focus:ring-[#4c41d0] bg-[#f2f4f8] text-lg"
              placeholder="Enter your username or email"
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
