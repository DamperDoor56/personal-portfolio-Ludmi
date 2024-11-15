"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const titles = [
  "Software Developer",
  "Front End Developer",
  "Back End Developer",
  "Game Developer",
];

export function PresentationSection() {
  const [scrollY, setScrollY] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const bounceAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center 
      relative overflow-hidden bg-background-gray ${raleway.className}`}
    >
      <motion.div
        className="absolute top-[-100px] left-[-100px] md:w-[300px] w-60 h-60 md:h-[300px] rounded-full bg-aqua-green"
        animate={bounceAnimation}
      />
      <motion.div
        className="absolute bottom-[150px] right-[-50px] md:w-[200px] w-60 h-60 md:h-[200px] rounded-full bg-dark-blue"
        animate={{
          ...bounceAnimation,
          transition: { ...bounceAnimation.transition, delay: 1 },
        }}
      />
      <div className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">
            Hello there! I&apos;m <span className="text-lily">Ludmi</span>, a
          </h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={titles[titleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold md:text-5xl mb-6 text-[#55B8C4]"
            >
              {titles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
        <h1 className="text-2xl md:text-2xl font-bold mb-4 text-white">
          nice to meet you!
        </h1>
        <motion.div
          animate={{
            y: Math.sin(scrollY * 0.1) * 20,
          }}
          className="mt-12 flex justify-center"
        >
          <ChevronDown className="h-12 w-12 text-white animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
