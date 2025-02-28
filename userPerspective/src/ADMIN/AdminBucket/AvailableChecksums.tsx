import React, { useEffect, useState, useMemo } from "react";

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
  Semester: Semester; //implements the foreign element here
}

const AvailableChecksums: React.FC = () => {
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [semesterResponse, seasonResponse, subjectResponse] =
          await Promise.all([
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/semesters`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/seasons`),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/public/subjects`),
          ]);

        if (!semesterResponse.ok || !seasonResponse.ok || !subjectResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        setSemesters(await semesterResponse.json());
        setSeasons(await seasonResponse.json());
        setSubjects(await subjectResponse.json());
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Memoize table rows to prevent unnecessary re-renders
  const semesterRows = useMemo(
    () =>
      semesters.map((semester) => (
        <tr
          key={semester.id}
          className="hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          <td className="px-6 py-4 text-sm text-gray-700">{semester.id}</td>
          <td className="px-6 py-4 text-sm text-gray-700">
            {semester.semester_number} semester
          </td>
        </tr>
      )),
    [semesters]
  );

  const seasonRows = useMemo(
    () =>
      seasons.map((season) => (
        <tr
          key={season.id}
          className="hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          <td className="px-6 py-4 text-sm text-gray-700">{season.id}</td>
          <td className="px-6 py-4 text-sm text-gray-700">
            {season.season_name}
          </td>
        </tr>
      )),
    [seasons]
  );

  const subjectRows = useMemo(
    () =>
      subjects.map((subject) => (
        <tr
          key={subject.id}
          className="hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          <td className="px-6 py-4 text-sm text-gray-700">{subject.id}</td>
          <td className="px-6 py-4 text-sm text-gray-700">
            {subject.course_code}
          </td>
          <td className="px-6 py-4 text-sm text-gray-700">
            {subject.subject_name}
          </td>
          <td className="px-6 py-4 text-sm text-gray-700">
            {subject.Semester.semester_number} semester
          </td>
        </tr>
      )),
    [subjects]
  );

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Available Checksums
      </h2>

      {/* Loading State */}
      {!semesters.length || !seasons.length || !subjects.length ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Semesters Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 p-6 bg-gray-50 border-b">
              Semesters
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Semester Number
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {semesterRows}
                </tbody>
              </table>
            </div>
          </div>

          {/* Seasons Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 p-6 bg-gray-50 border-b">
              Seasons
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Season Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">{seasonRows}</tbody>
              </table>
            </div>
          </div>

          {/* Subjects Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 p-6 bg-gray-50 border-b">
              Subjects
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Course Code
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Subject Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Semester
                    </th>{" "}
                    {/* Added semester column */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subjectRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableChecksums;
