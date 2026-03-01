import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const linkStyles =
    "group text-base sm:text-lg md:text-xl font-medium transition-colors duration-200";
  const underline =
    "block max-w-0 h-[0.1em] bg-white transition-all duration-200 group-hover:max-w-full";

  return (
    <nav className="w-full flex justify-center sm:justify-start gap-6 sm:gap-10 md:gap-16 mt-6">
      <Link
        to="/"
        className={`${linkStyles} ${
          location.pathname === "/" ? "text-white" : "text-gray-300"
        }`}
      >
        about
        <span className={underline}></span>
      </Link>

      <Link
        to="/projects"
        className={`${linkStyles} ${
          location.pathname === "/projects" ? "text-white" : "text-gray-300"
        }`}
      >
        projects
        <span className={underline}></span>
      </Link>

      <Link
        to="/writings"
        className={`${linkStyles} ${
          location.pathname === "/writings" ? "text-white" : "text-gray-300"
        }`}
      >
        writings
        <span className={underline}></span>
      </Link>
    </nav>
  );
}

export default NavBar;
