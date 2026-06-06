"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { works } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const maxProjectsToShow = 3;

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const displayedProjects = showAllProjects
    ? works
    : works.slice(0, maxProjectsToShow);

  return (
    <div className="text-white flex flex-col py-20" id="project">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mb-16"
      >
        <h2 className="font-bold 2xl:text-7xl md:text-5xl text-3xl">
          Featured Projects
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
        <p className="2xl:text-2xl text-xl md:w-2/3 text-neutral-400 mt-2 leading-relaxed">
          A collection of production-grade systems, automated solutions, and
          mobile applications designed to solve real-world operational problems
          and drive business growth.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
          >
            <ProjectItem {...project} />
          </motion.div>
        ))}
      </div>

      {!showAllProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            className="group px-8 py-4 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-semibold text-xl rounded-full transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] flex items-center gap-2"
            onClick={toggleShowAllProjects}
          >
            View More Projects
            <span className="transform group-hover:translate-y-0.5 transition-transform duration-300">
              ↓
            </span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
