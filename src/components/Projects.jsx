import NavBar from "./NavBar";

function Projects() {
  return (
    <section id="projects" className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-15 w-[30em]">
        <NavBar />
        <div className="flex flex-col mt-15 group">
          <a target="_blank" href="https://github.com/brandonviaje/semp">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                C++20, CMake, GoogleTest
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Semp
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Currently building my own custom compiler and language using a
                recursive descent parser and an LL(1) grammar. Using CSCI4020U
                to its fullest
              </h3>
            </div>
          </a>
          <a target="_blank" href="https://github.com/brandonviaje/Infera">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                C++17, ONNX, Google Protobuf
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Infera
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Machine Learning Inference Engine. Inspired from Michal Pitr's
                blog on how he implemented an inference engine from scratch.
              </h3>
            </div>
          </a>
          <a target="_blank" href="https://github.com/brandonviaje/Echo">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Python, Asyncio, OpenAI Whisper, NumPy
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Echo
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Voice assistant discord bot that listens to your commands.
              </h3>
            </div>
          </a>
          <a target="_blank" href="https://github.com/brandonviaje/ViaMate">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                C, Google Cloud, Lichess API
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                ViaMate
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                UCI Chess Engine in C. Deployed as a bot on Lichess.
              </h3>
            </div>
          </a>

          <a target="_blank" href="https://github.com/brandonviaje/CacheVault">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                C++17, POSIX, Linux
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                CacheVault
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                In-Memory Database. Helped me understand the fundamentals of
                networks like TCP protocol and concurrency
              </h3>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/brandonviaje/NLP-Case-Study"
          >
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Pytorch, Google Colab
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                NLP Case Study
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Comparative case study between early and modern NLP
                architectures.
              </h3>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/brandonviaje/Vision-Transformers"
          >
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Pytorch, Google Colab
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Vision Transformers
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Implemented a Vision Transformer in PyTorch to understand the
                architecture
              </h3>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/brandonviaje/SpamDetector"
          >
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Java, Maven
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Spam Detector
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Built a spam detector that classifies a set of emails as SPAM or
                HAM using the naive bayes approach.
              </h3>
            </div>
          </a>
          <a target="_blank" href="https://github.com/brandonviaje/FilmFlix">
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Spring Boot, JavaScript, Docker, PlayWright, HTML, CSS
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                FilmFlix
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                Full-Stack movie cataloging application done using agile
                methodologies such as sprints, kanban boards and weekly
                stand-ups with our customer
              </h3>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/brandonviaje/Student-Performance-Wellness-Analysis"
          >
            <div className="bg-[#313638] p-8 mb-2">
              <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
                Python, Matplotlib, Pandas,NumPy,Seaborn
              </h3>
              <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
                Student-Performance-Wellness-Analysis
              </h1>
              <h3 className="text-sm font-light hyphens-auto text-pretty">
                An exploratory data analysis where I explored how high-achieving
                students handle stress, sleep, social life, and physical
                activity. Just a fun way to apply data analysis to real-life
                student behavior
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
