"use client";
import React from "react";
import HeroPhoto from "@/components/HeroPhoto";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="2xl:px-40 lg:px-30 text-white text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroPhoto />
        </motion.div>

        <motion.h1
          className="font-bold 2xl:text-[7rem] md:text-7xl text-4xl 2xl:mt-16 mt-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Nabil Mustofa
          </span>
        </motion.h1>

        <motion.h2
          className="font-semibold text-2xl md:text-4xl text-cyan-400 mt-4 tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fullstack Engineer
        </motion.h2>

        <motion.p
          className="2xl:text-3xl md:text-2xl text-lg xl:mt-8 lg:mt-6 mt-4 max-w-3xl text-neutral-300 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I design and build high-performance, scalable web and mobile solutions
          that bridge robust backend systems with fluid, pixel-perfect user
          experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12 w-full sm:w-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#project"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-neutral-950 font-bold py-4 px-10 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300 text-lg flex items-center justify-center gap-2"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-neutral-700 hover:border-neutral-500 text-white hover:text-cyan-400 font-semibold py-4 px-10 rounded-full bg-neutral-900/40 hover:bg-neutral-900/80 hover:scale-[1.03] transition-all duration-300 text-lg flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
