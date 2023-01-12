import React from "react";
import resume from "../assets/jordan_ang_resume.pdf";
import github from "../assets/github.png";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap max-sm:flex-row max-sm:justify-center max-sm:py-3 max-sm:px-0 p-5 flex-row items-center">
        <a className="title-font font-medium text-gray-800 mb-4 max-sm:mb-0 md:mb-0">
          <a href="#hero" className="ml-3 text-xl max-sm:text-sm max-sm:ml-0">
            Jordan Ang
          </a>
        </a>
        {}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black max-sm:ml-3 max-sm:text-xs flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/jordung" target="_blank" rel="noreferrer">
            <img
              src={github}
              className="w-8 mr-5 hover:opacity-50 max-sm:w-5 max-sm:mr-3 max-sm:mb-0.5"
              alt="github logo"
            />
          </a>
          <a
            href="#about"
            className="max-sm:hidden mr-5 text-gray-800 hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="max-sm:hidden mr-5 text-gray-800 hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="max-sm:hidden mr-5 text-gray-800 hover:text-gray-400"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="max-sm:hidden mr-5 text-gray-800 hover:text-gray-400"
          >
            Contact
          </a>
        </nav>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 text-black"
        >
          <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Resume
          </span>
        </a>
      </div>
    </header>
  );
}
