import React from "react";

interface ProjectCardProps {
  title: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url }) => {
  return (
    <div className="my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 group">
      <div className="w-full aspect-video sm:aspect-[4/3] md:aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[1.75rem] xl:rounded-[2rem] overflow-hidden bg-stone-800/50 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <video
          src={url}
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="mt-3 sm:mt-4 lg:mt-5 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium">{title}</p>
    </div>
  );
};

export default ProjectCard;
