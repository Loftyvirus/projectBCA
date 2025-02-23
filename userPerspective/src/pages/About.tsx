import React from "react";
import Layout from "../components/Layout/Layout";

const About: React.FC = () => {
  return (
    <Layout
      title="About - BCA Question Papers"
      description="Learn more about BCA Question Papers and its mission."
      author="Safal Lama"
      keywords="about, BCA, question papers, mission"
    >
      <section className="bg-white text-gray-800 py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            BCA Question Papers is a platform designed to assist BCA students in
            their exam preparations. We provide a wide selection of past
            question papers from all BCA semesters, ensuring that students have
            reliable resources to prepare effectively.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Instead of providing static images of past question papers, we offer
            interactive markdown files. These markdown files provide a more
            dynamic, flexible way to engage with the question papers, allowing
            you to navigate them easily and study in a more effective manner.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Our mission is simple: To offer accessible, organized, and reliable
            study resources, enabling students to focus on what matters most —
            mastering their exams.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
