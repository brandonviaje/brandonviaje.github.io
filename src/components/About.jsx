function About() {
  return (
    <section id="about" className="w-full mt-80 px-6 text-[#F6F8FF]">
      <h1 className="font-bold text-center text-5xl mb-12">about me</h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-xl leading-relaxed text-center md:text-left">
          <p>
            I am a third-year Computer Science student at Ontario Tech
            University. I focus on building systems-level projects and enjoy
            exploring low-level concepts, performance, and architecture. My
            other hobbies include playing piano and cooking.
          </p>

          <p className="mt-20">
            I am currently looking for an internship where I can apply what I
            have learned through my academic coursework and personal projects to
            a real environment.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-72 h-100 object-cover rounded-xl shadow-lg"
            src="/images/me.jpg"
            alt="Brandon"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
