import React, { useRef } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import { motion, useScroll, useTransform } from "framer-motion";

const FollowUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div
      ref={containerRef}
      className="bg-stone-950 text-white overflow-hidden py-12 lg:py-16 font-light"
    >
      <motion.div
        style={{ x }}
        className="flex justify-around items-center text-[3rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]"
      >
        <span className="flex shrink-0 space-x-1 items-center whitespace-nowrap">
          Follow Us{" "}
          <AiFillTwitterCircle className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-300 mx-6 lg:mx-9" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center whitespace-nowrap">
          Follow Us{" "}
          <ImLinkedin className="text-[4rem] md:text-[5rem] lg:text-7xl xl:text-8xl text-stone-300 mx-6 lg:mx-9 rounded-full" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center whitespace-nowrap">
          Follow Us{" "}
          <LiaGithub className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-300 mx-6 lg:mx-9" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center">Follow Us</span>
      </motion.div>
    </div>
  );
};

export default FollowUs;
