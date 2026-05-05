import NavBar from "./NavBar";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center px-6 sm:px-8 text-[#F6F8FF]"
    >
      <div className="flex flex-col mt-16 w-full max-w-2xl items-start">
        <NavBar />

        <div className="my-10 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-inter leading-tight">
            Brandon Viaje
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl mt-2 font-medium font-inter">
            CS @ OTU
          </h2>

          <h3 className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-inter text-gray-300">
            I am a student who likes building systems-level projects and enjoys
            exploring low-level concepts.
            <br />
            <br />
            My other hobbies include playing piano, chess, fishing,
            cooking and web dev.
          </h3>

          <div className="flex flex-wrap gap-6 mt-6 text-xl sm:text-2xl">
            <a href="mailto:viajebrandon@gmail.com">
              <MdEmail className="hover:text-white transition-colors duration-200" />
            </a>

            <a
              href="https://github.com/brandonviaje"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-white transition-colors duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/brandon-viaje/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-white transition-colors duration-200" />
            </a>

            <a
              href="/Brandon_Viaje_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf className="hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
