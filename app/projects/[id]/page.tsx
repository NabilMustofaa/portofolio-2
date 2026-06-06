"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/projects";
import { motion } from "framer-motion";
import BlurBg from "@/components/BlurBg";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectCaseStudy({ params }: PageProps) {
  const project = works.find((p) => p.slug === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-screen min-h-screen flex flex-col bg-neutral-950 text-white relative overflow-x-hidden">
      <BlurBg />

      {/* Navigation */}
      <nav className="flex flex-row leading-6 text-xl justify-between items-center py-6 px-6 md:px-20 lg:px-40 text-neutral-400 border-b border-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link
          href="/"
          className="hover:text-neutral-50 flex items-center gap-2 font-semibold"
        >
          <span className="text-cyan-400 font-bold">Nabil</span>
          <span>Mustofa</span>
        </Link>
        <Link
          href="/#project"
          className="hover:text-neutral-50 text-sm md:text-base border border-neutral-800 rounded-full px-4 py-1.5 bg-neutral-900/40 hover:bg-neutral-800/80 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-20 lg:px-40 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#project"
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 font-semibold transition-colors duration-300"
          >
            <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300 text-lg">
              ←
            </span>
            Back to home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-xs md:text-sm text-cyan-400 font-semibold tracking-widest uppercase">
              {project.company && (
                <>
                  <span>{project.company}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                </>
              )}
              <span>{project.year}</span>
            </div>

            <h1 className="font-bold text-4xl md:text-6xl text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <div className="text-lg md:text-xl font-medium text-neutral-300">
              Role:{" "}
              <span className="text-cyan-400 font-semibold">
                {project.role}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs md:text-sm font-semibold text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Metrics card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-5/12 w-full p-8 bg-neutral-900/60 border border-neutral-800/85 rounded-3xl backdrop-blur-sm shadow-2xl flex flex-col gap-6"
          >
            <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
              Project Performance Impact
            </h3>
            <div className="flex flex-col gap-3.5">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 px-4 bg-neutral-950/50 border border-neutral-900 rounded-2xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    ✓
                  </div>
                  <span className="text-sm md:text-base font-semibold text-neutral-200">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Large Screen Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full h-[250px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-3xl border border-neutral-800/80 p-2 md:p-3 bg-neutral-900/40"
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Dynamic Study Grid Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-4">
          {/* Challenge Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
              !
            </div>
            <h3 className="text-2xl font-bold text-white">The Challenge</h3>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              {project.caseStudy.challenge}
            </p>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              *
            </div>
            <h3 className="text-2xl font-bold text-white">
              The Approach & Solution
            </h3>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              {project.caseStudy.approach}
            </p>
          </motion.div>

          {/* Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
              #
            </div>
            <h3 className="text-2xl font-bold text-white">
              Technical Architecture
            </h3>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              {project.caseStudy.architecture}
            </p>
          </motion.div>

          {/* Results Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">
              Results & Outcomes
            </h3>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              {project.caseStudy.results}
            </p>
          </motion.div>
        </div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mt-8 pt-8 border-t border-neutral-900"
        >
          <Link
            href="/"
            className="text-neutral-400 hover:text-cyan-400 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>

          {project.link && project.link.length > 0 && (
            <a
              href={project.link[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-neutral-950 font-bold px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              Access Resource
            </a>
          )}
        </motion.div>
      </main>

      <footer className="w-full text-center border-t border-neutral-900/50 py-12 text-neutral-400 mt-20 text-sm">
        &copy; 2023 Nabil Mustofa. All rights reserved.
      </footer>
    </div>
  );
}
