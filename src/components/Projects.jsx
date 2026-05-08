import { useState } from "react";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";
import SortButtons from "./SortButtons";

const projectsData = [
  {
    name: "CacheVault",
    tech: "C++17, POSIX",
    description:
      "A concurrent, in-memory database engineered from scratch in C++17, implementing custom TCP networking protocols and POSIX threading.",
    link: "https://github.com/brandonviaje/CacheVault",
    categories: ["Systems"],
  },
  {
    name: "Clarity",
    tech: "Python, PyTorch",
    description:
      "Engineered an open-vocabulary detection system achieving real-time inference speeds by integrating Vision Transformers with YOLO-World grounding models.",
    link: "https://github.com/brandonviaje/Clarity",
    categories: ["ML"],
  },
  {
    name: "cuQuant8",
    tech: "C++, CUDA, cuBLAS",
    description:
      "An INT8 GEMM Accelerator built with C++ and CUDA. Outperformed an FP32 cuBLAS baseline by 86% by designing a custom quantization pipeline.",
    link: "https://github.com/brandonviaje/cuQuant8",
    categories: ["ML", "Systems"],
  },
  {
    name: "Echo",
    tech: "Python, Asyncio, OpenAI Whisper, NumPy",
    description: "An asynchronous voice-assistant Discord bot utilizing OpenAI Whisper for speech-to-text processing and natural language commands.",
    link: "https://github.com/brandonviaje/Echo",
    categories: ["ML"],
  },
  {
    name: "FilmFlix",
    tech: "Spring Boot, JavaScript, SupaBase, Docker, PlayWright, HTML, CSS",
    description:
      "Full-stack movie cataloging application built within an Agile framework. Reduced API latency by 84% via database indexing.",
    link: "https://github.com/brandonviaje/FilmFlix",
    categories: ["Web Dev"],
  },
  {
    name: "Infera",
    tech: "C++17, ONNX, Google Protobuf",
    description:
      "A scalable Machine Learning Inference Engine that parses ONNX models using Protobuf, featuring topological sorting for deterministic execution.",
    link: "https://github.com/brandonviaje/Infera",
    categories: ["ML", "Systems"],
  },
  {
    name: "NLP Case Study",
    tech: "PyTorch, Google Colab, Hugging Face",
    description:
      "A comparative analysis benchmarking the performance and architectural differences between early and modern NLP models.",
    link: "https://github.com/brandonviaje/NLP-Case-Study",
    categories: ["ML"],
  },
  {
    name: "Semp",
    tech: "C++20, CMake, GoogleTest",
    description:
      "A custom programming language and compiler implemented from scratch using a recursive descent parser and an LL(1) grammar.",
    link: "https://github.com/brandonviaje/semp",
    categories: ["Systems"],
  },
  {
    name: "Spam Detector",
    tech: "Java, Maven",
    description:
      "A machine learning classifier that categorizes emails as SPAM or HAM using a custom implementation of the Naive Bayes algorithm.",
    link: "https://github.com/brandonviaje/SpamDetector",
    categories: ["ML", "Web Dev"],
  },
  {
    name: "Spyder",
    tech: "C++17, Python, MongoDB, libcurl",
    description:
      "A multithreaded web crawler and search engine. Archived 50k+ Wikipedia pages from a frontier of 4 million URLs with <10ms search latency.",
    link: "https://github.com/brandonviaje/spyder",
    categories: ["Systems"],
  },
  {
    name: "Student Wellness EDA",
    tech: "Python, Matplotlib, Pandas, NumPy, Seaborn",
    description:
      "Exploratory Data Analysis investigating the correlations between academic performance, stress, sleep, and social habits.",
    link: "https://github.com/brandonviaje/Student-Performance-Wellness-Analysis",
    categories: ["ML"],
  },
  {
    name: "Sudoku Solver",
    tech: "FastAPI, OpenCV, Python, PyTorch, React, Render",
    description:
      "A computer vision pipeline that uses a CNN to extract digits from an image of a Sudoku board and solves it using a backtracking algorithm.",
    link: "https://github.com/brandonviaje/Infera",
    categories: ["ML", "Systems"],
  },
  {
    name: "ViaMate",
    tech: "C, Google Cloud, Lichess API",
    description: "A UCI chess engine written in C using Bitboards. Facilitated 100+ automated games via deployment to Google Cloud.",
    link: "https://github.com/brandonviaje/ViaMate",
    categories: ["Systems"],
  },
  {
    name: "Vision Transformers",
    tech: "PyTorch, Google Colab",
    description:
      "A custom implementation of a Vision Transformer (ViT) in PyTorch to explore attention mechanisms in image classification.",
    link: "https://github.com/brandonviaje/Vision-Transformers",
    categories: ["ML"],
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Systems", "ML", "Web Dev"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.categories.includes(filter));

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
