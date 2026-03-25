import React from "react";
import { motion } from "framer-motion";

const ContactDetails: React.FC = () => {
  return (
    <div className="bg-stone-950 text-white text-sm md:text-xl lg:text-2xl xl:text-3xl font-light text-center py-16 md:py-20 lg:py-24 xl:py-28 w-full px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="w-full max-w-screen-3xl mx-auto flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-10 lg:gap-x-12 xl:gap-x-16">
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-stone-200 overflow-hidden hover:cursor-pointer hover:border-stone-100 transition-colors shadow-lg hover:shadow-xl"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-2 md:py-3 lg:py-4 px-6 md:px-8 text-white bg-stone-950 border-none rounded-full"
          >
            devanshi.ddtechnologies@gmail.com
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="relative rounded-full py-2 md:py-3 lg:py-4 px-6 md:px-8 text-stone-950 bg-stone-200 border-none"
          >
            devanshi.ddtechnologies@gmail.com
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-stone-200 overflow-hidden hover:cursor-pointer hover:border-stone-100 transition-colors shadow-lg hover:shadow-xl"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-2 md:py-3 lg:py-4 px-6 md:px-8 text-white bg-stone-950 border-none rounded-full"
          >
            +91 9134523456
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="relative rounded-full py-2 md:py-3 lg:py-4 px-6 md:px-8 text-stone-950 bg-stone-200 border-none"
          >
            +91 9134523456
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
