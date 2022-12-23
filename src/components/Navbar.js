import React from "react";
import resume from "../assets/jordan_ang_resume_2022.docx";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap max-sm:flex-row max-sm:items-between max-sm:justify-between max-sm:p-3 p-5 flex-row items-center">
        <a className="title-font font-medium text-gray-800 mb-4 max-sm:mb-0 md:mb-0">
          <a href="#hero" className="ml-3 text-xl max-sm:text-xs max-sm:ml-0">
            Jordan Ang
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black max-sm:ml-3 max-sm:text-xs max-sm:items-start flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/jordung">
            <img
              src="./github.png"
              className="w-8 mr-5 hover:opacity-50 max-sm:w-4"
            />
          </a>
          <a href="#about" className="mr-5 text-gray-800 hover:text-gray-400">
            About
          </a>
          <a
            href="#projects"
            className="mr-5 text-gray-800 hover:text-gray-400"
          >
            Projects
          </a>
          <a href="#skills" className="mr-5 text-gray-800 hover:text-gray-400">
            Skills
          </a>
        </nav>
        <a
          className="inline-flex items-center justify-items-center bg-gray-200 border-0 py-1 px-3 max-sm:text-xs max-sm:mt-0 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-black"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
