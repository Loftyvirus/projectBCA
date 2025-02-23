import React from "react";
import Layout from "../components/Layout/Layout";

const Contact: React.FC = () => {
  return (
    <Layout
      title="Contact Us - BCA Question Papers"
      description="Get in touch with us for any queries or support."
      author="Safal Lama"
      keywords="contact, query, support, BCA"
    >
      <section className="bg-white text-gray-800 py-32 lg:py-48 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Have any questions or feedback? Feel free to message me at{" "}
            <a
              href="mailto:yoyuehappy@gmail.com"
              className="text-[#3730a3] hover:underline"
            >
              yoyuehappy@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
