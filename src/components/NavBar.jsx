import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="ml-10 flex justify-center gap-30">
      <Link className="group text-xl font-medium" to="/">
        about
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>

      <Link className="group text-xl font-medium" to="/projects">
        projects
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>

      <Link className="group text-xl font-medium" to="/writings">
        writings
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>
    </div>
  );
}

export default NavBar;
