import NavBar from "./NavBar";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <section id="about" className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-15 w-[30em] items-start">
        <NavBar />
        <div className="my-10">
          <h1 className="text-6xl text font-black font-inter">Brandon Viaje</h1>
          <h2 className="text-2xl mt-2 font-medium font-inter">CS @ OTU</h2>
          <h3 className="text-foreground mt-2 font-inter">
            I am a student who likes building systems-level projects and enjoys
            exploring low-level concepts.
            <br></br>
            <br></br>
            My other hobbies include playing piano, video games, rubiks cubing,
            cooking and web dev.
          </h3>

          <div className="flex gap-6 mt-6 text-2xl">
            <a href="mailto:viajebrandon@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="hover:text-[#F6F8FF] transition-colors duration-200" />
            </a>
            <a href="https://github.com/brandonviaje" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#F6F8FF] transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/brandon-viaje/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#F6F8FF] transition-colors duration-200" />
            </a>
            <a href="/Brandon_Viaje_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf className="hover:text-[#F6F8FF] transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
