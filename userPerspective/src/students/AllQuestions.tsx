import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

interface Semester {
  id: number;
  semester_number: number;
}

interface Season {
  id: number;
  season_name: string;
}

interface Subject {
  id: number;
  course_code: string;
  subject_name: string;
  semester_id: number;
}

interface QuestionPaper {
  id: number;
  year: number;
  semester_id: number;
  season_id: number;
  subject_id: number;
}

const AllQuestions: React.FC = () => {
  const [questionPapers, setQuestionPapers] = useState<QuestionPaper[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [qpResponse, semesterResponse, seasonResponse, subjectResponse] =
          await Promise.all([
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/admin/getqps`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/semesters`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/seasons`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/subjects`),
          ]);

        if (
          !qpResponse.ok ||
          !semesterResponse.ok ||
          !seasonResponse.ok ||
          !subjectResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const [questionPapersData, semestersData, seasonsData, subjectsData] =
          await Promise.all([
            qpResponse.json(),
            semesterResponse.json(),
            seasonResponse.json(),
            subjectResponse.json(),
          ]);

        setQuestionPapers(questionPapersData);
        setSemesters(semestersData);
        setSeasons(seasonsData);
        setSubjects(subjectsData);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const semesterMap = useMemo(
    () => new Map(semesters.map((sem) => [sem.id, sem])),
    [semesters]
  );
  const seasonMap = useMemo(
    () => new Map(seasons.map((sea) => [sea.id, sea])),
    [seasons]
  );
  const subjectMap = useMemo(
    () => new Map(subjects.map((sub) => [sub.id, sub])),
    [subjects]
  );

  if (loading)
    return <div className="text-center text-gray-500 py-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-8">{error}</div>;
  if (questionPapers.length === 0)
    return (
      <div className="text-center text-gray-500 py-8">
        No question papers found.
      </div>
    );

  return (
    <Layout
      title="All Question Papers"
      description="Browse through all the question papers available."
      author="Safal Lama"
      keywords="question papers, all, BCA, academic"
    >
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          All Question Papers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {questionPapers.map((qp) => {
            const semester = semesterMap.get(qp.semester_id);
            const season = seasonMap.get(qp.season_id);
            const subject = subjectMap.get(qp.subject_id);

            if (!semester || !season || !subject) return null;

            return (
              <div
                key={qp.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {subject.subject_name}
                </h2>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Year:</strong> {qp.year}
                  </p>
                  <p>
                    <strong>Course Code:</strong> {subject.course_code}
                  </p>
                  <p>
                    <strong>Semester:</strong> {semester.semester_number}
                  </p>
                  <p>
                    <strong>Season:</strong> {season.season_name}
                  </p>
                </div>
                <Link
                  to={`/view-question-paper/${qp.id}`}
                  state={{
                    subject_name: subject.subject_name,
                    year: qp.year,
                    season_name: season.season_name,
                    semester_number: semester.semester_number,
                  }}
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AllQuestions;
