import NavBar from "./NavBar";

function About() {
  return (
    <section id="about" className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-15 w-[30em] items-start">
        <NavBar />
        <div className="my-10 gap-3">
          <h1 className="text-6xl text font-black">Brandon Viaje</h1>
          <h2 className="text-2xl font-medium">CS @ OTU</h2>
          <h3 className="text-foreground mt-2">
            I am a student who likes building systems-level projects and enjoys
            exploring low-level concepts.
            <br></br>
            <br></br>
            My other hobbies include playing piano, video games, rubiks cubing,
            cooking and web dev.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
