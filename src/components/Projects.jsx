import Box from "./Box";

function About() {
  return (
    <section id="about" className="w-full mt-40 px-6 text-[#F6F8FF]">
      <h1 className="font-bold text-center text-5xl mb-12">projects</h1>
      <p className="text-center text-xl">
        below are some of my current projects
      </p>
      <div className="max-w-6xl mx-auto flex flex-row md:flex-row items-center gap-10">
        <Box className="bg-transparent shadow-xs">
          <h2>Frontend</h2>
          <p>I build React apps.</p>
        </Box>

        <Box className="bg-transparent shadow-xs">
          <h2>Backend</h2>
          <p>I work with Node and Express.</p>
        </Box>
      </div>
    </section>
  );
}

export default About;
