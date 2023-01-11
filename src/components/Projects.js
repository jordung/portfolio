import React from "react";
import { projects } from "../data";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  return (
    <section id="projects" className="text-black-400 bg-white-900 body-font">
      <div className="container px-5 py-28 mx-auto text-center lg:px-40 max-sm:py-5">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="max-sm:h-5 max-sm:mb-1 h-9 w-auto text-gray-300 mb-3" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base -mb-12">
            Here are some of my projects!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          {projects.map((project) => (
            <div className="h-200 w-[650px] max-sm:w-[325px]  flex flex-col justify-center items-center pb-10 rounded shadow-lg">
              <div className="flex flex-col justify-center items-center mt-0">
                <div className="w-[650px] h-[320px] max-sm:w-[325px] max-sm:h-[160px]">
                  <img
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-covers"
                  />
                </div>
              </div>
              <div className="w-full px-10">
                <h1 className="title-font text-2xl font-black text-black mt-3 mb-0 max-sm:text-lg w-full text-left">
                  {project.title}
                </h1>
                <p className="leading-relaxed text-black text-sm text-left">
                  {project.description}
                </p>
                <div className="pt-4 w-full flex flex-start flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 max-sm:mr-0">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 text-black"
                  >
                    <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Github
                    </span>
                  </a>
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 text-black"
                    >
                      <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Website
                      </span>
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
