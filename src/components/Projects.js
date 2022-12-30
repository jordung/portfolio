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
        <div className="flex flex-col -m-4 items-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noreferrer"
              className="w-100 2xl:w-1/2 xl:w-4/5 p-4 saturate-0 transition hover:saturate-100"
            >
              <div className="flex flex-row max-sm:flex-col max-sm:items-center">
                <img
                  alt={project.title}
                  className="w-1/2 max-md:w-1/2 h-auto border-4 border-black rounded-3xl"
                  src={project.image}
                />
                <div className="px-8 py-10 max-sm:pt-5 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-black mb-3 typewriter">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-black text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
