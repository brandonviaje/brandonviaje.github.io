function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#272D2D] text-[#F6F8FF] p-4 flex justify-center-safe gap-8 shadow-md">
      <h1 className="font-bold font-inter text-xl">
        <a href="#home">home</a>
      </h1>
      <h1 className="font-bold font-inter text-xl">
        <a href="#about">about</a>
      </h1>
      <h1 className="font-bold font-inter text-xl">
        <a href="#projects"> projects</a>
      </h1>
      <h1 className="font-bold font-inter text-xl">experience</h1>
    </nav>
  );
}

export default NavBar;
