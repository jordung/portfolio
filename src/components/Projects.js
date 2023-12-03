import { projects, upcomingProjects } from "../data";
import { PiLinkBold, PiCodeBold, PiVideoBold } from "react-icons/pi";

function Projects() {
  return (
    <div
      className="pt-12 flex flex-col justify-center min-h-screen"
      id="projects"
    >
      <div className="py-5 px-10 flex flex-col items-start md:px-40">
        <span className="uppercase font-semibold mb-2 text-sm">Projects</span>
        <div className="w-full">
          {upcomingProjects.map((project, index) => (
            <div key={index} className="flex gap-1 p-1 items-center">
              <div className="badge badge-primary badge-sm px-2 py-3">
                Ongoing
              </div>
              <img
                src={project.icon}
                alt={project.title}
                className="h-6 w-6 object-contain"
                draggable={false}
              />
              <h2 className="text-sm normal-case font-normal no-underline">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="w-full grid gap-2 lg:grid-cols-2 mt-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-base-100 h-full w-full rounded-lg p-4"
            >
              {project.icon ? (
                <div className="w-full flex items-center justify-center">
                  <div className="bg-white rounded-xl w-20 h-20 p-2 flex items-center justify-center">
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="w-12 h-12 object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-center justify-center">
                  <div className="h-20 w-20 bg-white rounded-lg flex items-center justify-center">
                    <p className="text-3xl font-semibold">
                      {project.title.slice(0, 1)}
                    </p>
                  </div>
                </div>
              )}
              <p className="font-medium">{project.title}</p>
              <p className="text-xs">{project.description}</p>
              {project?.skills && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {project?.skills.map((skill) => (
                    <div
                      key={skill}
                      className="badge badge-sm badge-ghost px-2 py-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
              {(project?.website || project?.github || project?.demo) && (
                <div className="flex gap-2 items-center my-2 flex-wrap">
                  {project?.website && (
                    <a
                      href={`${project?.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs font-normal normal-case bg-white border-0"
                    >
                      <PiLinkBold />
                      Website
                    </a>
                  )}
                  {project?.github && (
                    <a
                      href={`${project?.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs font-normal normal-case bg-white border-0"
                    >
                      <PiCodeBold />
                      Repository
                    </a>
                  )}
                  {project?.demo && (
                    <a
                      href={`${project?.demo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs font-normal normal-case bg-white border-0"
                    >
                      <PiVideoBold />
                      Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
