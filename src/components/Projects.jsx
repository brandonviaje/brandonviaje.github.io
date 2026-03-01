import { useState } from "react";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";
import SortButtons from "./SortButtons";

const projectsData = [
  { name: "CacheVault", tech: "C++17, POSIX, Linux", description: "In-Memory Database. Helped me understand the fundamentals of networks like TCP protocol and concurrency.", link: "https://github.com/brandonviaje/CacheVault", categories: ["Systems"] },
  { name: "Echo", tech: "Python, Asyncio, OpenAI Whisper, NumPy", description: "Voice assistant discord bot that listens to your commands.", link: "https://github.com/brandonviaje/Echo", categories: ["ML"] },
  { name: "FilmFlix", tech: "Spring Boot, JavaScript, SupaBase, Docker, PlayWright, HTML, CSS", description: "Full-Stack movie cataloging application done using agile methodologies such as sprints, kanban boards and weekly stand-ups with our customer.", link: "https://github.com/brandonviaje/FilmFlix", categories: ["Web Dev"] },
  { name: "Infera", tech: "C++17, ONNX, Google Protobuf", description: "Machine Learning Inference Engine. Inspired from Michal Pitr's blog on how he implemented an inference engine from scratch.", link: "https://github.com/brandonviaje/Infera", categories: ["ML", "Systems"] },
  { name: "NLP Case Study", tech: "PyTorch, Google Colab, Hugging Face", description: "Comparative case study between early and modern NLP architectures.", link: "https://github.com/brandonviaje/NLP-Case-Study", categories: ["ML"] },
  { name: "Semp", tech: "C++20, CMake, GoogleTest", description: "Currently building my own custom compiler and language using a recursive descent parser and an LL(1) grammar. Using CSCI4020U to its fullest", link: "https://github.com/brandonviaje/semp", categories: ["Systems"] },
  { name: "Spam Detector", tech: "Java, Maven", description: "Built a spam detector that classifies a set of emails as SPAM or HAM using the naive bayes approach.", link: "https://github.com/brandonviaje/SpamDetector", categories: ["ML", "Web Dev"] },
  { name: "Student Performance Wellness Analysis", tech: "Python, Matplotlib, Pandas, NumPy, Seaborn", description: "An exploratory data analysis where I explored how high-achieving students handle stress, sleep, social life, and physical activity. Just a fun way to apply data analysis to real-life student behavior", link: "https://github.com/brandonviaje/Student-Performance-Wellness-Analysis", categories: ["ML"] },
  { name: "ViaMate", tech: "C, Google Cloud, Lichess API", description: "UCI Chess Engine in C. Deployed as a bot on Lichess.", link: "https://github.com/brandonviaje/ViaMate", categories: ["Systems"] },
  { name: "Vision Transformers", tech: "PyTorch, Google Colab", description: "Implemented a Vision Transformer in PyTorch to understand the architecture.", link: "https://github.com/brandonviaje/Vision-Transformers", categories: ["ML"] },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Systems", "ML", "Web Dev"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((proj) =>
          proj.categories.includes(filter)
        );

  return (
    <section className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-16 w-full max-w-2xl px-6 sm:px-8">
        <NavBar />
        <SortButtons
          categories={categories}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <div className="flex flex-col mt-4">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.name} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
