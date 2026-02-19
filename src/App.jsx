import "./styles/index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#5EFC8D] flex flex-col">
      <section id="home"></section>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
