import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  url: string;
}

const SocialMediaLinks: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const textRefs = useRef<HTMLDivElement[]>([]);
  textRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (hoveredLink === null) return;

    let xPercent = 0;
    const direction = -1;
    let frameId: number;

    const animation = () => {
      const targets = textRefs.current.filter(Boolean);
      if (targets.length === 0) {
        frameId = requestAnimationFrame(animation);
        return;
      }
      if (xPercent <= -100) {
        xPercent = 0;
      }
      gsap.set(targets, { xPercent });
      xPercent += 0.6 * direction;
      frameId = requestAnimationFrame(animation);
    };

    frameId = requestAnimationFrame(animation);

    return () => cancelAnimationFrame(frameId);
  }, [hoveredLink]);

  const socialLinks: SocialLink[] = [
    { name: "Twitter", url: "https://x.com/ddtechnologies" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ddtechnologies" },
    { name: "GitHub", url: "https://github.com/ddtechnologies" },
    { name: "Website", url: "https://ddtechnologies.in" },
  ];

  return (
    <div className="bg-stone-950 text-white text-xl md:text-2xl lg:text-2xl xl:text-3xl">
      <div className="w-full max-w-screen-3xl mx-auto">
      <p className="border-b-[1px] border-stone-500 text-sm md:text-base lg:text-lg py-9 px-6 md:px-12 lg:px-20 xl:px-24">
        SOCIAL MEDIA AND CONTACTS
      </p>
      {socialLinks.map((link, index) => (
        <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
          <div
            className={`${
              hoveredLink === index
                ? "text-stone-950 bg-white"
                : "bg-stone-950 text-white"
            } border-b-[1px] border-stone-500 py-7 px-0 mx-0 overflow-x-hidden`}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink !== index ? (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-24"
              >
                <span>{link.name}</span>
                <MdOutlineArrowOutward className="text-4xl" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, type: "spring" }}
                className="flex"
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center mx-0 justify-between"
                    ref={addToRefs}
                  >
                    <span className="px-1 md:px-6 lg:px-10">{link.name}</span>
                    <MdOutlineArrowOutward className="text-4xl" />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </a>
      ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
