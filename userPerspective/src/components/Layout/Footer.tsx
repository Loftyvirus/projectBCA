import React from "react";
import { Link } from "react-router-dom";
import {
  GithubLogo,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#3730a3] text-white py-12">
      <footer className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">BCA Question Papers</h4>
            <p className="text-gray-300 text-sm">
              Find past question papers to prepare with confidence.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/semesters" className="hover:text-white">
                  Semesters
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Follow Creator</h4>
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com/happilli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <GithubLogo size={28} />
              </a>
              <a
                href="https://www.instagram.com/happilli_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <InstagramLogo size={28} />
              </a>
              <a
                href="https://www.facebook.com/safal.lama.726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FacebookLogo size={28} />
              </a>
              <a
                href="https://x.com/yoyuehappy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <TwitterLogo size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-10 pt-5 text-gray-300 text-sm">
          &copy; 2024 BCA Question Papers. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
