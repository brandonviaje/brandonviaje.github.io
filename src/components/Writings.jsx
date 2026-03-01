import NavBar from "./NavBar";

function Writings() {
  return (
    <section id="projects" className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-15 w-[30em]">
        <NavBar />
        <div className="flex flex-col mt-15 group">
          <div className="bg-[#313638] p-8 mb-2">
            <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
              WIP
            </h1>
            <h3 className="text-sm font-light hyphens-auto text-pretty">
              Still making the pages for my writings/blog
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Writings;
