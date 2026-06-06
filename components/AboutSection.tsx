"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const skillsCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React JS",
        "Next JS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "JQuery",
        "HTML5 & CSS3",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Laravel",
        "Node JS",
        "Express JS",
        "Flask (Python)",
        "MySQL",
        "SQLite",
        "PostgreSQL",
      ],
    },
    {
      title: "Cloud & Tooling",
      skills: [
        "GCP (Google Cloud)",
        "Git & GitHub",
        "RESTful APIs",
        "Vercel / VPS",
        "Expo",
        "Docker",
      ],
    },
  ];

  const [showAllWork, setShowAllWork] = useState(false);
  const maxWorkToShow = 3;

  const experiences = [
    {
      role: "Supporting and Development Digital Application",
      company: "PT Perkebunan Nusantara XII",
      period: "Nov 2023 - May 2024",
      description:
        "Maintained and enhanced enterprise applications (SUPERMAN, OSS Planters, SINOFA) by optimizing backend logic, improving database queries, and implementing caching strategies to increase system performance and reliability.",
    },
    {
      role: "Website Developer Intern",
      company: "PT. Borwita Citra Prima",
      period: "Aug 2023 - Jan 2024",
      description:
        "Designed and implemented high-volume internal tools (Easy Stock Opname, Project Tracker) using Laravel, jQuery, and React Native. Streamlined warehouse inventory checks and increased tracking efficiency by 35%.",
    },
    {
      role: "Cloud Computing Cohort",
      company: "Bangkit Academy 2023",
      period: "Feb 2023 - July 2023",
      description:
        "Selected as one of the Google-led cloud cohort students. Achieved competencies in API design, cloud architecture on Google Cloud Platform (GCP), backend service deployment, and DevOps practices.",
    },
    {
      role: "Website Developer",
      company: "FST Airlangga University & Organizations",
      period: "2022 - 2023",
      description:
        "Collaborated with academic developers to construct custom university-associated web platforms, student portals, and event landing pages using modern stack implementations.",
    },
    {
      role: "Fullstack Website Developer",
      company: "Abaya Salma",
      period: "2023",
      description:
        "Designed and deployed the custom inventory database and purchase order synchronization logic for their supply chain management tool.",
    },
  ];

  return (
    <div className="text-white flex flex-col py-20 gap-16" id="about">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <h2 className="font-bold 2xl:text-7xl md:text-5xl text-3xl">
          About Me
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
      </motion.div>

      {/* Profile and Biography */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-7/12 flex flex-col gap-6"
        >
          <p className="text-xl 2xl:text-2xl text-neutral-300 leading-relaxed font-light">
            I am a results-driven{" "}
            <span className="text-cyan-400 font-semibold">
              Fullstack Engineer
            </span>
            . I specialize in building reliable, scalable backend
            infrastructures and matching them with interactive, responsive user
            interfaces.
          </p>
          <p className="text-xl 2xl:text-2xl text-neutral-300 leading-relaxed font-light">
            My engineering philosophy centers on digitizing workflows, cutting
            latencies, and producing actual, measurable business impact. With
            hands-on experience in fullstack web, cloud systems, and hybrid
            mobile applications, I turn complex systems into accessible
            solutions.
          </p>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-4/12 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl p-2">
            <Image
              src="/avatar.png"
              alt="Nabil Mustofa profile picture"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Skills and Experience Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mt-8">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h3 className="font-bold text-2xl md:text-3xl border-b border-neutral-800 pb-3">
            Core Toolkit
          </h3>
          <div className="flex flex-col gap-6">
            {skillsCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
                  {category.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 bg-neutral-900/60 border border-neutral-800/80 rounded-xl text-sm text-neutral-300 font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h3 className="font-bold text-2xl md:text-3xl border-b border-neutral-800 pb-3">
            Work
          </h3>
          <div className="relative border-l border-neutral-800 ml-4 flex flex-col gap-8">
            {experiences
              .slice(0, showAllWork ? experiences.length : maxWorkToShow)
              .map((exp, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-cyan-400 group-hover:border-cyan-900 transition-colors duration-300 shadow-[0_0_8px_rgba(34,211,238,0)] group-hover:shadow-[0_0_8px_#22d3ee]"></div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <h5 className="text-sm font-semibold text-neutral-400">
                      {exp.company}
                    </h5>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light mt-1.5">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            {experiences.length > maxWorkToShow && (
              <button
                onClick={() => setShowAllWork(!showAllWork)}
                className="mt-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm md:text-base flex items-center gap-1.5 transition-colors duration-300 pl-8 w-fit"
              >
                {showAllWork
                  ? "Show Less"
                  : `See More Work (${
                      experiences.length - maxWorkToShow
                    } more)`}
                <span className="text-xs">{showAllWork ? "▲" : "▼"}</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
