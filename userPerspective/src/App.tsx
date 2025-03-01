import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Adminski from "./ADMIN/Adminski";
import ProtectedRoute from "./protection/ProtectedRoute";
import AdminDashboard from "./ADMIN/AdminBucket/AdminDashboard";
import AvailableChecksums from "./ADMIN/AdminBucket/AvailableChecksums";
import IncludePaper from "./ADMIN/AdminBucket/IncludePaper";
import ViewQuestionPaper from "./students/ViewQuestions";
import AllQuestions from "./students/AllQuestions";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* gateway */}
        <Route path="/adminski" element={<Adminski />} />

        {/* Protected Routes only for admins */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />}>
            <Route
              path="available-checksums"
              element={<AvailableChecksums />}
            />
            <Route path="include-paper" element={<IncludePaper />} />
          </Route>
        </Route>
        {/* public view */}
        <Route path="/all-questions" element={<AllQuestions />} />
        <Route path="view-question-paper/:id" element={<ViewQuestionPaper />} />
      </Routes>
    </>
  );
}

export default App;
