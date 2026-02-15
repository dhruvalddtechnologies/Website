import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight md:leading-[6rem] lg:leading-[7rem] xl:leading-[8rem] w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col items-start justify-center px-9 md:px-16 lg:px-24 xl:px-32 2xl:px-40 pt-20 md:pt-24 font-normal md:font-light">
      <div className="max-w-screen-3xl w-full">We build web apps,</div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="h-12 md:h-20 lg:h-24 xl:h-32 w-20 md:w-32 lg:w-36 xl:w-44 rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
          <video
            src="https://cdn.cuberto.com/cb/home/hero/1.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span
            id="design"
            className="font-normal tracking-wide text-[2.8rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[9rem]"
          >
            &nbsp;automate and&nbsp;
          </span>
        </div>
      </div>
      <div>scale your business</div>
    </div>
  );
};

export default Hero;
