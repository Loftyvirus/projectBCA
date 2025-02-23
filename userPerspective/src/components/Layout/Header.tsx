import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-[#3730a3] text-white font-bold text-center">
        <div className="container mx-auto">
          <p className="text-lg">
            Access question papers for all BCA semesters!
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-60 py-4 backdrop-blur-md bg-white/30">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800 ml-6">ProjectBCA</h1>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className={`text-gray-800 text-lg relative group transition-all duration-350 ease-in-out ${
                    location.pathname === "/" ? "text-[#3730a3]" : ""
                  }`}
                >
                  Home
                  <span
                    className={`block w-0 h-0.5 bg-[#3730a3] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-0.5 mt-1 ${
                      location.pathname === "/" ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/semesters/"
                  className={`text-gray-800 text-lg relative group transition-all duration-350 ease-in-out ${
                    location.pathname === "/semesters/" ? "text-[#3730a3]" : ""
                  }`}
                >
                  semesters
                  <span
                    className={`block w-0 h-0.5 bg-[#3730a3] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-0.5 mt-1 ${
                      location.pathname === "/semesters/" ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
