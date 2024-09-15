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
  stack: string[];
  link?: Link[];
}

interface Link {
  type: string;
  url: string;
}

const works: Project[] = [
  {
    id: 8,
    title: "Stock Opname Mobile App",
    year: "2024",
    role: "Mobile App Developer | React Native Developer",
    description:
      "Mobile Stock Opname Application are mobile application inspired by Easy Stock Opname from PT BORWITA CITRA PRIMA. Right now application are just replica without any addition feature from PWA Easy Stock Opname. Public feature are still under development and will be available soon on playstore.",
    image: "/stock-opname-mobile.png",
    stack: ["React Native", "Expo", "Nativewind"],
    link: [
      {
        type: "drive",
        url: "https://drive.google.com/file/d/1tItNDfe2RQRWaJECBji3PhAq4AVgWrfG/view?usp=sharing",
      },
    ],
  },
  {
    id: 6,
    title: "Scoutition AI",
    year: "2024",
    role: "Fullstack Website Developer",
    description:
      "Scoutition AI is a website that can offer recommendations for determining the best playing position along with suitable training modules for football players. This website aims to enhance the quality of players performance in their optimal positions, with feature like position recommendation and training articles.",
    image: "/scoutition.png",
    stack: ["React", "Next.js", "Tailwind", "Flask"],
  },
  {
    id: 7,
    title: "Financing Analyst System",
    year: "2024",
    role: "Software Engineer",
    description:
      "Financing Analyst System are Credit Assessment Application with Machine Learning method to determine the customer's grade before being given a credit loan with range A - C. The application aim to assist financial institutions to make better decisions on credit. The application also had features for determining customer grading, storing customer data, and printing customer reports.",
    image: "/fas.png",
    stack: ["Laravel", "Tailwind", "jQuery", "Flask"],
  },
  {
    id: 1,
    title: "Easy Stock Opname",
    year: "2023",
    role: "Fullstack Website Developer",
    description:
      "Easy Stock Opname is a robust and user-friendly inventory management system designed to streamline stock-taking processes in PT Borwita Citra Prima. With this powerful tool, the company can effortlessly keep track of inventory, update stock levels, and generate detailed reports. Gain real-time insights into your inventory, reduce errors, and optimize your supply chain with this interactive application.",
    image: "/stock-opname.png",
    stack: ["Laravel", "Bootstrap", "jQuery"],
  },
  {
    id: 2,
    title: "Project Tracker",
    year: "2023",
    role: "Fullstack Website Developer",
    description:
      "Project Tracker is an internal PT Borwita Citra Prima project management tool. Track project progress, set tasks, allocate personnel, and collaborate seamlessly with your team. With an intuitive interface and features, Project Tracker empowers you to manage company projects and meet deadlines with ease.",
    image: "/project-tracker.png",
    stack: ["Laravel", "Bootstrap", "jQuery"],
  },
  {
    id: 3,
    title: "AMERTA UNAIR",
    year: "2022",
    role: "Front End Website Developer",
    description:
      "AMERTA UNAIR is a comprehensive application designed specifically to meet the unique needs of Universitas Airlangga's student orientation process. This innovative platform provides a holistic approach to student orientation, offering a wide range of features and tools to ensure a smooth and informative onboarding experience. It empowers incoming students with valuable information about the university, its resources, and the vibrant campus community.",
    image: "/amerta.png",
    stack: ["Tailwind", "jQuery"],
  },
  {
    id: 4,
    title: "Abaya Salma SCM",
    year: "2023",
    role: "Back End Website Developer",
    description:
      "Abaya Salma Supply Chain Management (SCM) software is your company's strategic partner in optimizing every facet of your supply chain operations. With Abaya Salma SCM, you gain unparalleled visibility into your entire supply chain, from procurement to distribution. This robust and sophisticated solution empowers you to make data-driven decisions, enhance operational efficiency, and reduce costs. It facilitates seamless collaboration with suppliers, streamlines inventory management, and minimizes lead times.",
    image: "/abaya-salma.png",
    stack: ["Laravel", "Tailwind", "jQuery"],
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
      <h2 className="font-bold 2xl:text-6xl md:text-5xl text-3xl 2xl:mt-24 xl:mt-8">
        Projects
      </h2>
      <p className="2xl:text-2xl text-xl lg:my-12 md:w-2/3 text-neutral-300">
        Here`s a glimpse of some of my recent and exciting projects. Each of
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
