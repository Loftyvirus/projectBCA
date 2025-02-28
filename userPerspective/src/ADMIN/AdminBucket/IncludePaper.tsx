import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./md.css";
import useAuth from "../contexts/userAuth";

interface Subject {
  id: number;
  subject_name: string;
  semester_id: number; // Adding semesterid to filter subjects by semester
}

interface Semester {
  id: number;
  semester_number: number;
}

interface Season {
  id: number;
  season_name: string;
}

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

const IncludePaper: React.FC = () => {
  const { token } = useAuth(); 
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]); 
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | string>("");
  const [selectedSemester, setSelectedSemester] = useState<number | string>("");
  const [selectedSeason, setSelectedSeason] = useState<number | string>("");
  const [year, setYear] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [markdownInput, setMarkdownInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectsResponse, semestersResponse, seasonsResponse] =
          await Promise.all([
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/subjects`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/semesters`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/seasons`),
          ]);

        if (
          !subjectsResponse.ok ||
          !semestersResponse.ok ||
          !seasonsResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const fetchedSubjects = await subjectsResponse.json();
        setSubjects(fetchedSubjects); 
        setFilteredSubjects(fetchedSubjects); 
        setSemesters(await semestersResponse.json());
        setSeasons(await seasonsResponse.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs only once

  // Effect to filter subjects based on the selected semester
  useEffect(() => {
    if (selectedSemester) {
      const filtered = subjects.filter(
        (subject) => subject.semester_id === Number(selectedSemester)
      );
      setFilteredSubjects(filtered); // Update filtered subjects
    } else {
      setFilteredSubjects(subjects); // Reset to all subjects if no semester is selected
    }
  }, [selectedSemester, subjects]);

  useEffect(() => {
    if (selectedSubject && selectedSemester && selectedSeason && year) {
      const subjectName =
        subjects.find((s) => s.id === Number(selectedSubject))?.subject_name ||
        "N/A";
      const semesterNumber =
        semesters.find((s) => s.id === Number(selectedSemester))
          ?.semester_number || "N/A";
      const seasonName =
        seasons.find((s) => s.id === Number(selectedSeason))?.season_name ||
        "N/A";

      // Format the header with proper line breaks
      const header = `# Pokhara University\n\n**Year**: ${year}\n\n**Semester**: ${semesterNumber}\n\n**Season**: ${seasonName}\n\n**Subject**: ${subjectName}`;

      // Combine the header and paragraph with proper spacing
      const fullMarkdown = `${header}\n\n${paragraph}`;
      setMarkdownInput(fullMarkdown);
    }
  }, [
    year,
    selectedSubject,
    selectedSemester,
    selectedSeason,
    paragraph,
    subjects,
    semesters,
    seasons,
  ]);

  const handleSubmit = async () => {
    if (!token) {
      setError("No authentication token found.");
      return;
    }

    setSubmitLoading(true);
    setError(""); // Reset any previous errors

    const newQuestionPaper = {
      semester_id: selectedSemester,
      season_id: selectedSeason,
      subject_id: selectedSubject,
      question_text: markdownInput,
      year,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/addqp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
          body: JSON.stringify(newQuestionPaper),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to add question paper");
      }

      const data = await response.json();
      console.log("Question paper added successfully:", data);
      alert("Question paper added successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while submitting the data");
      } else {
        setError("An error occurred while submitting the data");
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Markdown Editor</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Year Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Year"
          />
        </div>

        {/* Semester Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Semester
          </label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={semesters.length === 0}
          >
            <option value="">Select Semester</option>
            {semesters.map((semester) => (
              <option key={semester.id} value={semester.id}>
                {semester.semester_number}
              </option>
            ))}
          </select>
        </div>

        {/* Season Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Season
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={seasons.length === 0}
          >
            <option value="">Select Season</option>
            {seasons.map((season) => (
              <option key={season.id} value={season.id}>
                {season.season_name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={filteredSubjects.length === 0}
          >
            <option value="">Select Subject</option>
            {filteredSubjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.subject_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Paragraph Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Additional Paragraph
        </label>
        <textarea
          rows={3}
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter additional content..."
        />
      </div>

      {/* Markdown Preview */}
      <div className="textarea-container">
        <div className="border p-4 rounded mt-4">
          {markdownInput ? (
            <MarkdownRenderer content={markdownInput} />
          ) : (
            <p className="text-gray-500">No Markdown to display</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          disabled={submitLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {submitLoading ? "Submitting..." : "Submit Question Paper"}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default IncludePaper;
