import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  url: string;
}

const Projects: React.FC = () => {
  const leftColumnProjects: Project[] = [
    { title: "FlowSync", url: "https://cdn.cuberto.com/cb/projects/puntopago/cover.mp4" },
    { title: "NexaBank", url: "https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4" },
    { title: "ShipTrack", url: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4" },
    { title: "PulseHR", url: "https://cdn.cuberto.com/cb/projects/zelt/cover.mp4" },
    { title: "Stackly", url: "https://cdn.cuberto.com/cb/projects/cisco/cover.mp4" },
  ];

  const rightColumnProjects: Project[] = [
    { title: "Cortex", url: "https://cdn.cuberto.com/cb/projects/kzero/cover.mp4?2" },
    { title: "Velo", url: "https://cdn.cuberto.com/cb/projects/magma/cover.mp4" },
    { title: "Forma", url: "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4" },
    { title: "Ordo", url: "https://cdn.cuberto.com/cb/projects/potion/cover.mp4" },
    { title: "Layr", url: "https://cdn.cuberto.com/cb/projects/ferrumpipe/cover.mp4" },
  ];

  return (
    <div className="bg-stone-950 text-white h-fit pt-2 sm:pt-4 md:pt-0 pb-0 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40 md:rounded-t-[4rem] overflow-hidden">
      <div className="w-full max-w-screen-3xl mx-auto">
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] py-10 sm:py-14 md:py-20 lg:py-24 xl:py-28 font-light">
          <div>Featured</div>
          <div className="flex items-center md:items-end my-1 gap-2 sm:gap-3">
            <div className="h-12 w-16 sm:h-14 sm:w-20 md:h-20 md:w-28 lg:h-24 lg:w-32 xl:h-28 xl:w-40 2xl:h-32 2xl:w-48 rounded-full overflow-hidden flex-shrink-0 shadow-2xl ring-2 ring-white/10">
              <video
                src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
                playsInline
              />
            </div>
            <div className="min-w-0">
              <span
                id="design"
                className="font-normal tracking-wide text-[2.5rem] sm:text-[3.2rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[10rem] leading-tight"
              >
                &nbsp;projects
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20">
          <div data-scroll data-scroll-speed="0" className="w-full max-w-full lg:w-[46%] xl:w-[38%] 2xl:w-[36%] mx-auto lg:mx-0">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} url={project.url} />
            ))}
          </div>
          <div data-scroll data-scroll-speed="0.5" className="w-full max-w-full lg:w-[46%] xl:w-[38%] 2xl:w-[36%] mx-auto lg:mx-0 mt-0 lg:mt-36 xl:mt-48 2xl:mt-56">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} url={project.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
