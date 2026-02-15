import React from "react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] md:min-h-[100vh] lg:min-h-[120vh] flex items-center justify-center gap-x-6 lg:gap-x-12 xl:gap-x-20 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
      <div className="w-full max-w-screen-3xl mx-auto flex items-center justify-center gap-x-6 lg:gap-x-12 xl:gap-x-20">
        <video
          loop
          autoPlay
          muted
          playsInline
          src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
          className="hidden lg:block w-2/5 xl:w-1/3 max-w-xl rounded-2xl shadow-2xl object-cover"
        />
        <div className="space-y-9 text-xl md:text-2xl lg:text-2xl xl:text-3xl px-0 font-normal max-w-2xl">
        <p>
          DDTechnologies is a digital product agency specializing in{" "}
          <br className="hidden md:block" />
          workflow automation, web applications, and mobile{" "}
          <br className="hidden md:block" />
          development — helping businesses move faster and do more with less.
        </p>
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-black overflow-hidden hover:cursor-pointer w-fit"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-10%", opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="relative rounded-full py-9 md:py-12 lg:py-14 xl:py-16 px-8 md:px-12 text-stone-900/90 border-2 bg-white border-none text-lg md:text-xl lg:text-2xl font-medium"
          >
            How we work
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-xl py-9 md:py-12 lg:py-14 xl:py-16 px-8 md:px-12 text-white border-2 bg-stone-950 border-none text-lg md:text-xl lg:text-2xl font-medium"
          >
            How we work
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Services;
