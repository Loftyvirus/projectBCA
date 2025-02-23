import React from "react";
import Layout from "../components/Layout/Layout";
import Illustration from "/assets/illustration.svg";

const Home: React.FC = () => {
  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  return (
    <Layout
      title="Home - BCA Question Papers"
      description="Access question papers for all BCA semesters and prepare with confidence."
      author="Safal Lama"
      keywords="BCA, question papers, semester, exam, study material"
    >
      {/* Hero Section with Bubbly and Clumsy Design */}
      <section className="bg-[#3730a3] text-white py-32 lg:py-48 px-6">
        <div className="container mx-auto flex items-center justify-between flex-col lg:flex-row">
          <div className="text-left mb-12 lg:mb-0 lg:w-2/3">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
              Welcome to BCA Question Papers
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl">
              Your one-stop resource for BCA exam preparations. Access past
              papers to boost your exam readiness and study smarter.
            </p>
            <button className="px-8 py-4 bg-[#4c41d0] text-white rounded-full text-xl hover:bg-[#3730a3] transition-all focus:outline-none shadow-lg hover:shadow-xl">
              Explore Papers
            </button>
          </div>

          <div className="hidden lg:block lg:w-1/3">
            <img
              src={Illustration}
              alt="Illustration"
              className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Available Question Papers Section with Previous Design */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Available Question Papers
        </h2>
        <div className="w-full bg-gray-200 text-gray-700 text-center p-4 rounded-md mt-4">
          {semesters.map((semester, index) => (
            <span
              key={index}
              className="mx-6 font-medium text-lg cursor-pointer hover:text-[#3730a3]"
            >
              {semester}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
