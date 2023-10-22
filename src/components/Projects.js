import { projects } from "../data";
import { PiLinkBold, PiCodeBold, PiVideoBold } from "react-icons/pi";

function Projects() {
  return (
    <div className="pt-12 flex flex-col justify-center" id="projects">
      <div className="py-5 px-10 flex flex-col items-start md:px-40">
        <span className="uppercase font-semibold mb-2 text-sm">Projects</span>
        <div className="w-full flex flex-col items-start justify-start xl:flex-row xl:flex-wrap">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-2 transition-all duration-200 w-full xl:h-96 xl:w-1/2 xl:my-2 xl:p-8 xl:rounded-lg xl:hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-lg">{project.title}</p>
                  </div>
                  {/* <p className="text-xs font-medium">{project.subtitle}</p> */}
                  <p className="text-sm">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge badge-sm p-2 border-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  {project.website && (
                    <a
                      className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center gap-1 group hover:no-underline"
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PiLinkBold className="text-sm group-hover:scale-110 group-hover:text-base-300 transition-all duration-200" />
                      <span className="text-xs group-hover:text-base-300 transition-all duration-200">
                        {project.title}
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center gap-1 group hover:no-underline"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PiCodeBold className="text-sm group-hover:scale-110 group-hover:text-base-300 transition-all duration-200" />
                      <span className="text-xs group-hover:text-base-300 transition-all duration-200">
                        Codebase
                      </span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center gap-1 group hover:no-underline"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PiVideoBold className="text-sm group-hover:scale-110 group-hover:text-base-300 transition-all duration-200" />
                      <span className="text-xs group-hover:text-base-300 transition-all duration-200">
                        Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-80 h-48 object-cover object-top rounded-lg"
                draggable={false}
              />
              <div className="divider xl:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
