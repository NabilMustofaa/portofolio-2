"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProjectItem from "./ProjectItem";

interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  image: string;
}

const works: Project[] = [
  {
    id: 1,
    title: "Easy Stock Opname",
    year: "2023",
    role: "Fullstack Website Developer",
    description:
      "Easy Stock Opname is a robust and user-friendly inventory management system designed to streamline stock-taking processes in PT Borwita Citra Prima. With this powerful tool, the company can effortlessly keep track of inventory, update stock levels, and generate detailed reports. Gain real-time insights into your inventory, reduce errors, and optimize your supply chain with this interactive application.",
    image: "/stock-opname.png",
  },
  {
    id: 2,
    title: "Project Tracker",
    year: "2023",
    role: "Fullstack Website Developer",
    description:
      "Project Tracker is an internal PT Borwita Citra Prima project management tool. Track project progress, set tasks, allocate personnel, and collaborate seamlessly with your team. With an intuitive interface and features, Project Tracker empowers you to manage company projects and meet deadlines with ease.",
    image: "/project-tracker.png",
  },
  {
    id: 3,
    title: "AMERTA UNAIR",
    year: "2022",
    role: "Front End Website Developer",
    description:
      "AMERTA UNAIR is a comprehensive application designed specifically to meet the unique needs of Universitas Airlangga's student orientation process. This innovative platform provides a holistic approach to student orientation, offering a wide range of features and tools to ensure a smooth and informative onboarding experience. It empowers incoming students with valuable information about the university, its resources, and the vibrant campus community.",
    image: "/amerta.png",
  },
  {
    id: 4,
    title: "Abaya Salma SCM",
    year: "2023",
    role: "Back End Website Developer",
    description:
      "Abaya Salma Supply Chain Management (SCM) software is your company's strategic partner in optimizing every facet of your supply chain operations. With Abaya Salma SCM, you gain unparalleled visibility into your entire supply chain, from procurement to distribution. This robust and sophisticated solution empowers you to make data-driven decisions, enhance operational efficiency, and reduce costs. It facilitates seamless collaboration with suppliers, streamlines inventory management, and minimizes lead times.",
    image: "/abaya-salma.png",
  },
];

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
    <div className="text-white flex flex-col" id="project">
      <h2 className="font-bold 2xl:text-6xl text-5xl 2xl:mt-24 xl:mt-8">
        Projects
      </h2>
      <p className="2xl:text-2xl text-xl lg:my-12 md:w-2/3 text-neutral-300">
        Here's a glimpse of some of my recent and exciting projects. Each of
        them reflects my focus on create impactful solutions for others people.
      </p>
      {displayedProjects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
      {!showAllProjects && (
        <button
          className="2xl:text-2xl text-xl underline text-center"
          onClick={toggleShowAllProjects}
        >
          See All More
        </button>
      )}
    </div>
  );
}
