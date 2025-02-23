import React from "react";
import Layout from "../components/Layout/Layout";

const NotFound: React.FC = () => {
  return (
    <Layout
      title="404 - Page Not Found"
      description="Oops! The page you are looking for does not exist."
      author="Safal Lama"
      keywords="404, not found, error"
    >
      <section className="bg-white text-gray-800 py-32 lg:py-48 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Go back to the{" "}
            <a href="/" className="text-[#3730a3] hover:underline">
              homepage
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
