import "./styles/index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#5EFC8D] flex flex-col items-center justify-start">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
