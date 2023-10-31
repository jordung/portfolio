import { projects, upcomingProjects } from "../data";
import { PiLinkBold, PiCodeBold, PiVideoBold } from "react-icons/pi";

function Projects() {
  return (
    <div className="pt-12 flex flex-col justify-center h-screen" id="projects">
      <div className="py-5 px-10 flex flex-col items-start md:px-40">
        <span className="uppercase font-semibold mb-2 text-sm">Projects</span>
        <div className="w-full bg-white p-4 rounded-xl shadow-lg mb-4">
          <p className="text-xs uppercase font-semibold">Now Building</p>
          <div className="flex flex-col gap-3">
            <div className="overflow-x-auto w-full h-full">
              <table className="table table-pin-rows table-sm">
                {/* head */}
                <thead>
                  <tr className="bg-white">
                    <th className="font-normal">#</th>
                    <th className="font-normal">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingProjects.map((project, index) => (
                    <tr
                      key={project.title}
                      className="hover:bg-base-200 transition-all duration-200 cursor-default"
                    >
                      <td>
                        <p className="text-xs">{index + 1}</p>
                      </td>
                      <td className="flex items-center gap-4">
                        {project.icon ? (
                          <img
                            src={project.icon}
                            alt="project"
                            className="w-8 h-8 object-contain rounded-lg bg-base-100 lg:w-12 lg:h-12 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-base-100 rounded-lg lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                            <p className="font-bold text-lg">
                              {project.title.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-sm">{project.title}</p>
                          <p className="text-xs opacity-50">
                            {project.subtitle}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full max-h-[calc(100vh_-_30rem)] lg:max-h-[calc(100vh_-_15rem)] flex flex-col items-start justify-start bg-neutral overflow-x-auto xl:flex-row xl:flex-wrap p-4">
          <p className="text-xs uppercase font-semibold mb-1">Past Builds</p>
          <div className="overflow-x-auto w-full h-full">
            <table className="table table-pin-rows table-sm">
              {/* head */}
              <thead>
                <tr>
                  <th className="font-normal">#</th>
                  <th className="font-normal">Title</th>
                  <th className="font-normal">Demo</th>
                  <th className="font-normal">Website</th>
                  <th className="font-normal">Codebase</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={project.title}
                    className="hover:bg-base-200 transition-all duration-200 cursor-default"
                  >
                    <td>
                      <p className="text-xs">{index + 1}</p>
                    </td>
                    <td className="flex items-center gap-4">
                      {project.icon ? (
                        <img
                          src={project.icon}
                          alt="project"
                          className="w-8 h-8 object-contain rounded-lg bg-white lg:w-12 lg:h-12 "
                        />
                      ) : (
                        <div className="w-8 h-8 bg-white rounded-lg lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                          <p className="font-bold text-lg">
                            {project.title.slice(0, 1)}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-sm">{project.title}</p>
                        <p className="text-xs opacity-50">{project.subtitle}</p>
                      </div>
                    </td>
                    <td>
                      {project.demo && (
                        <a
                          className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center justify-start gap-1 group flex-nowrap hover:no-underline"
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
                    </td>
                    <th className="">
                      {project.website && (
                        <a
                          className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center justify-start gap-1 group flex-nowrap hover:no-underline"
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <PiLinkBold className="text-sm group-hover:scale-110 group-hover:text-base-300 transition-all duration-200" />
                          <span className="text-xs group-hover:text-base-300 transition-all duration-200 text-left">
                            {project.title}
                          </span>
                        </a>
                      )}
                    </th>
                    <th className="self-start">
                      {project.github && (
                        <a
                          className="btn btn-link btn-xs normal-case font-medium no-underline flex items-center justify-start gap-1 group flex-nowrap hover:no-underline"
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
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
