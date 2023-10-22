import { PiFilePdf } from "react-icons/pi";
import resume from "../assets/jordan_ang_resume.pdf";

function Navbar() {
  const iconStyles = "cursor-pointer text-2xl h-5 w-5";

  return (
    <div className="navbar fixed z-50 bg-base-100 w-screen">
      <div className="navbar-start">
        <div className="dropdown curosr-pointer xl:hidden">
          <label
            tabIndex={0}
            className="btn btn-link btn-square no-underline hover:no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => window.location.replace("/#about")}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => window.location.replace("/#projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => window.location.replace("/#contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-link no-underline hover:no-underline btn-sm normal-case text-xl"
          onClick={() => window.scrollTo(0, 0)}
        >
          Jordan Ang
        </button>
      </div>
      <div className="hidden navbar-center xl:flex md:gap-4">
        <button
          className="btn btn-link no-underline font-medium hover:text-base-300 hover:no-underline transition-all duration-200"
          onClick={() => window.location.replace("/#about")}
        >
          About
        </button>

        <button
          className="btn btn-link no-underline font-medium hover:text-base-300 hover:no-underline transition-all duration-200"
          onClick={() => window.location.replace("/#projects")}
        >
          Projects
        </button>

        <button
          className="btn btn-link no-underline font-medium hover:text-base-300 hover:no-underline transition-all duration-200"
          onClick={() => window.location.replace("/#contact")}
        >
          Contact
        </button>
      </div>
      <div className=" navbar-end">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="btn btn-xs btn-link no-underline hover:no-underline md:btn-sm"
        >
          Resume
          <PiFilePdf className={iconStyles} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
