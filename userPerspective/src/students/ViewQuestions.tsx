import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Layout from "../components/Layout/Layout";
import "../ADMIN/AdminBucket/md.css";

interface QuestionPaper {
  question_text: string;
  year: number;
  subject_name: string;
  season_name: string;
  semester_number: number;
}

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => (
  <div className="markdown-container">
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  </div>
);

const ViewQuestionPaper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [questionPaper, setQuestionPaper] = useState<QuestionPaper | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Access the passed metadata from location.state
  const { subject_name, year, season_name, semester_number } =
    location.state || {
      subject_name: "Unknown Subject",
      year: 0,
      season_name: "Unknown Season",
      semester_number: 0,
    };

  useEffect(() => {
    const fetchQuestionPaper = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/admin/getqp/${id}`
        );

        if (!response.ok) throw new Error("Failed to fetch question paper");

        const data = await response.json();
        setQuestionPaper(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionPaper();
  }, [id]);

  if (loading)
    return <div className="text-center text-gray-500 py-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-8">{error}</div>;
  if (!questionPaper)
    return (
      <div className="text-center text-red-500 py-8">
        Question paper not found
      </div>
    );

  return (
    <Layout
      title={`${subject_name} - ${year} ${season_name} Semester ${semester_number}`}
      description={`Question paper for ${subject_name} (${year} ${season_name}, Semester ${semester_number}).`}
      author="Safal Lama"
      keywords={`${subject_name}, ${year}, ${season_name}, Semester ${semester_number}, question paper`}
    >
      <div className="container mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {subject_name} - {year} {season_name} (Semester {semester_number})
          </h1>
          <div className="prose max-w-none">
            <MarkdownRenderer content={questionPaper.question_text} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewQuestionPaper;
