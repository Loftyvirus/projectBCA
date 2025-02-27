import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../contexts/userAuth";

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`bg-[#3730a3] text-white w-64 p-6 flex flex-col items-center transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-0" : "-ml-64"
        }`}
        style={{
          boxShadow: isSidebarOpen ? "4px 0 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-6 flex-1 flex flex-col justify-center">
          <li>
            <Link
              to="available-checksums"
              className="block text-center px-4 py-2 rounded-lg hover:bg-[#4f46e5] transition-colors duration-200"
            >
              Available Checksums
            </Link>
          </li>
          <li>
            <Link
              to="include-paper"
              className="block text-center px-4 py-2 rounded-lg hover:bg-[#4f46e5] transition-colors duration-200"
            >
              Include Paper
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 bg-[#3730a3] text-white rounded-lg hover:bg-[#4f46e5] transition-colors duration-200"
          >
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button>
          <h1 className="text-xl font-bold">ProjectBCA Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
