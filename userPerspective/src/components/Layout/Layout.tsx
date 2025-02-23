import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
  viewport?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "ProjectBCA - Question Papers",
  description = "Access question papers for all BCA semesters in one place.",
  author = "Safal Lama",
  keywords = "BCA, question papers, semester, exam, study material",
  viewport = "width=device-width, initial-scale=1",
}) => {
  const metaTags = [
    { name: "description", content: description },
    { name: "author", content: author },
    { name: "keywords", content: keywords },
    { name: "viewport", content: viewport },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Helmet>
        <title>{title}</title>
        {metaTags.map((meta, index) => (
          <meta key={index} name={meta.name} content={meta.content} />
        ))}
      </Helmet>

      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
