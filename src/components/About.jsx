import NavBar from "./NavBar";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center px-6 sm:px-8 text-[#F6F8FF] min-h-screen"
    >
      <div className="flex flex-col mt-16 w-full max-w-2xl items-start">
        <NavBar />

        <div className="my-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Fall 2026 Internships
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
            Brandon Viaje
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl mt-3 font-semibold text-blue-400">
            Computer Science @ Ontario Tech University
          </h2>

          <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed text-gray-400 max-w-prose">
            <p>
              I specialize in <span className="text-white">high-performance systems</span>, 
              machine learning pipelines, and robust backend architecture. I'm driven by the 
              challenge of squeeze every bit of efficiency out of modern hardware.
            </p>
            
            <p>
              When I'm not optimizing <code className="text-sm bg-white/10 px-1 rounded text-pink-400">CUDA</code> kernels 
              or writing systems-level <code className="text-sm bg-white/10 px-1 rounded text-pink-400">C++</code>, you'll likely find me at a piano, analyzing a 
              chess middle-game, fishing, or hitting the gym.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 text-2xl text-gray-400">
            <a href="mailto:viajebrandon@gmail.com" aria-label="Email">
              <MdEmail className="hover:text-white hover:-translate-y-1 transition-all duration-300" />
            </a>

            <a
              href="https://github.com/brandonviaje"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-white hover:-translate-y-1 transition-all duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/brandon-viaje/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-white hover:-translate-y-1 transition-all duration-300" />
            </a>

            <a
              href="/Brandon_Viaje_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FaFilePdf className="hover:text-white hover:-translate-y-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
