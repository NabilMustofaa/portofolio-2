import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

const ProjectItem: React.FC<Project> = ({
  slug,
  title,
  year,
  role,
  company,
  description,
  image,
  stack,
  metrics,
  link,
}) => {
  return (
    <div className="flex xl:flex-row flex-col gap-10 p-8 md:p-12 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/60 shadow-xl group">
      {/* Description / Content Column */}
      <div className="flex flex-col justify-between xl:w-5/12 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm md:text-base text-neutral-400 font-medium tracking-wider uppercase">
            {company ? (
              <>
                <span>{company}</span>
                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
              </>
            ) : null}
            <span>{year}</span>
          </div>

          <h3 className="font-bold text-3xl 2xl:text-4xl text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          <div className="text-cyan-400 font-semibold text-lg md:text-xl">
            {role}
          </div>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
            {description}
          </p>

          {/* Metrics Dashboard */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-col gap-2 my-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                Key Results
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2.5 bg-neutral-950/40 border border-neutral-800/80 rounded-xl hover:border-neutral-700/80 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                    <span className="text-xs 2xl:text-sm text-neutral-200 font-medium leading-none">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-neutral-950/80 text-xs font-medium rounded-lg text-neutral-300 border border-neutral-800/80 tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-neutral-800/50">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-colors duration-300 group/link"
          >
            Read Case Study
            <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-300 text-lg">
              →
            </span>
          </Link>

          {link && link.length > 0 && (
            <a
              href={link[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <span>Download / Access</span>
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Image Showcase Column */}
      <div className="xl:w-7/12 flex items-center justify-center">
        <div className="w-full relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/80 p-2 md:p-3 shadow-2xl group-hover:border-neutral-700/50 transition-all duration-500">
          <div className="relative w-full h-[220px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
