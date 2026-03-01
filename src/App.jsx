import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Writings from "./components/Writings";

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-[#242F40] text-white">
      <Routes>
        <Route index element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="writings" element={<Writings />} />
      </Routes>
    </div>
  );
}

export default App;
