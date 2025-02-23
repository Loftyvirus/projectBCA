import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Adminski from "./ADMIN/Adminski";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/adminski" element={<Adminski />} />
      </Routes>
    </>
  );
}

export default App;
