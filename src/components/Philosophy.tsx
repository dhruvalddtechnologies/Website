import React from "react";

const Philosophy: React.FC = () => {
  return (
    <div className="text-stone-950 font-normal h-fit pb-16 md:pb-24 lg:pb-36 md:rounded-t-[4rem] md:-mt-[4rem] bg-white overflow-hidden">
      <div className="w-full max-w-screen-3xl mx-auto">
        <div className="text-[4rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] py-9 md:py-24 lg:py-32 xl:py-36 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
          <h1 className="leading-none">Our</h1>
          <h1
            id="design"
            className="text-[4.3rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-none tracking-wide"
          >
            philosophy
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-12 lg:gap-x-16 xl:gap-x-24 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
          <video
            src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
            autoPlay
            muted
            loop
            playsInline
            className="w-[90%] mx-auto md:mx-0 md:w-2/5 lg:w-1/3 max-w-xl rounded-2xl shadow-2xl object-cover"
          />
          <div className="space-y-4 lg:space-y-5 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium md:max-w-xl lg:max-w-2xl">
          <p>
            At DDTechnologies, developers and automation engineers work side{" "}
            <br className="hidden md:block" />
            by side with strategists and product thinkers. We don&apos;t deliver{" "}
            <br className="hidden md:block" />
            off-the-shelf solutions — every system we build is engineered{" "}
            <br className="hidden md:block" />
            precisely to your workflow, with no shortcuts or compromises.
          </p>
          <p>
            We&apos;re driven by outcomes: faster processes, leaner{" "}
            <br className="hidden md:block" />
            operations, and products people actually want to use. Our work{" "}
            <br className="hidden md:block" />
            doesn&apos;t stop at launch — we measure, iterate, and{" "}
            <br className="hidden md:block" />
            continuously raise the bar on everything we ship.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Philosophy;
