import React from "react";
import Image from "next/image";

interface ProjectItemProps {
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

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  year,
  role,
  description,
  image,
  stack,
  link,
}) => {
  return (
    <div className="flex md:flex-row flex-col-reverse p-12 bg-neutral-900 gap-10 rounded-2xl my-4">
      <div className="flex flex-col text-white md:w-5/12 gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className=" font-bold 2xl:text-4xl text-2xl">{title}</h1>
          <p className=" font-semibold text-xl 2xl:text-2xl">
            {year} - {role}
          </p>
          <p className=" text-xl 2xl:text-2xl text-neutral-300">
            {description}
          </p>
          <p className=" font-bold text-xl 2xl:text-2xl">Tech Stack :</p>
          <ul className=" text-xl 2xl:text-2xl text-neutral-300 list-disc px-6">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {link && (
            <div>
              <button className="2xl:text-2xl text-xl underline text-center border border-neutral-100 rounded-lg py-3 px-4 flex flex-row items-center hover:bg-neutral-800">
                <Image
                  src={link[0].type + ".svg"}
                  alt={link[0].type}
                  width={20}
                  height={20}
                  color="white"
                />
                <div className="w-px h-6 bg-neutral-100 mx-2"></div>
                <a href={link[0].url} className="">
                  Download
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-col text-white md:w-7/12">
        <div className="py-10 px-6 bg-neutral-500 rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
