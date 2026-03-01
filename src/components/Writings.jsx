import NavBar from "./NavBar";

function Writings() {
  return (
    <section className="flex justify-center text-[#F6F8FF]">
      <div className="flex flex-col mt-16 w-full max-w-2xl px-6 sm:px-8">
        <NavBar />
        <div className="mt-10">
          <div className="bg-[#313638] p-5 sm:p-8 rounded-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
              WIP
            </h1>
            <h3 className="text-sm sm:text-base font-light text-gray-300 mt-2">
              Still making the pages for my writings/blog
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Writings;
