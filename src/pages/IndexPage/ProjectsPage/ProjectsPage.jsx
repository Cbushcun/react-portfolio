import { useState } from "react";
import projectsData from "./projects.json";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectThumbnail from "../../../components/ProjectThumbnail";

function ProjectsPage() {
  // fix prop setting on press when opening details pane
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectOnClick = (project) => {
    setSelectedProject(project);
    toggleInfoPanel();
  };

  const toggleInfoPanel = () => {
    setShowInfoPanel(!showInfoPanel);
  };

  return (
    <section id="projects" className="h-screen w-screen p-5 lg:pt-12">
      <div className="mx-auto flex h-5/6 min-h-[200px] w-full max-w-5xl flex-col rounded-lg bg-slate-900/45 pt-3 text-stone-200 shadow-inner shadow-white/15 lg:h-[95%]">
        <div className="flex px-2">
          <div className="flex min-w-52 items-center gap-2 rounded-t-md bg-slate-700/45 px-3 py-1">
            <i className="fa-solid fa-house-user"></i>
            <p>Projects</p>
            <i className="fa-solid fa-xmark ml-auto opacity-50"></i>
          </div>
          <div className="ml-auto mr-1 flex gap-3">
            <i className="fa-solid fa-window-minimize"></i>
            <i className="fa-solid fa-window-maximize"></i>
            <i className="fa-solid fa-xmark text-lg"></i>
          </div>
        </div>
        <div className="flex h-10 w-full bg-slate-700/45 px-2">
          <div className="my-auto flex gap-2 text-2xl opacity-50">
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-rotate-right"></i>
          </div>
          <div className="my-1.5 ml-2 flex flex-grow items-center gap-2 rounded-full bg-slate-500/45 pl-2">
            <i className="fa-solid fa-house"></i>
            <p> &gt; Portfolio &gt; Projects &gt;</p>
          </div>
        </div>
        {showInfoPanel ? (
          <ProjectDetails
            name={selectedProject.name}
            desc={selectedProject.desc}
            frameworks={selectedProject.technologies}
            designer={selectedProject.designer}
            repoLink={selectedProject.repoLink}
            hrefLink={selectedProject.hrefLink}
            onClick={toggleInfoPanel}
          />
        ) : (
          ""
        )}
        <div className="grid grid-cols-2 place-items-center overflow-y-scroll py-5 md:grid-cols-3">
          {projectsData.projects.map((project, index) => (
            <ProjectThumbnail
              key={index}
              project={project}
              handleClick={() => projectOnClick(project)}
            />
          ))}
        </div>
        <div className="mt-auto flex h-6 w-full rounded-b-lg bg-slate-700/45">
          <p className="ml-auto pb-2 pr-2">Made with Tailwind</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
