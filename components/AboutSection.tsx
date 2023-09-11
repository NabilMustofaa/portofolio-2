import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="   text-white flex flex-col min-h-screen py-8" id="about">
      <h2 className=" font-bold 2xl:text-6xl text-5xl 2xl:mt-24 xl:mt-8">
        About Me
      </h2>
      <div className=" flex md:flex-row flex-col-reverse justify-between">
        <p className=" 2xl:text-4xl text-2xl lg:mt-12 md:w-2/3 md:text-left text-center text-neutral-300">
          Enthusiastic and Driven Undergraduate Information Systems Student at
          Universitas Airlangga, fueled by an unquenchable passion for the
          dynamic world of web development. I possess an insatiable thirst for
          knowledge, an unwavering commitment to self-improvement, and an
          unbreakable resolve to push the boundaries of what I can achieve in
          this ever-evolving field.
        </p>
        <Image
          src="/avatar.png"
          alt=""
          width={1000}
          height={1000}
          className=" w-80 2xl:w-96 mx-auto my-5"
        />
      </div>
      <div className=" flex md:flex-row flex-col justify-between">
        <div className="">
          <h3 className="font-bold 2xl:text-4xl text-3xl my-4 ">
            Skills & Experience
          </h3>
          <div className="flex md:flex-row flex-col md:gap-20 gap-5">
            <ul className=" mx-4 list-disc text-xl 2xl:text-2xl flex flex-col gap-5 marker:text-indigo-600">
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Javascript</li>
              <li>HTML & CSS</li>
              <li>JQuery</li>
            </ul>
            <ul className=" mx-4 list-disc text-xl 2xl:text-2xl flex flex-col gap-5 marker:text-indigo-600">
              <li>Laravel</li>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>Next JS</li>
              <li>Flask</li>
            </ul>
            <ul className=" mx-4 list-decimal text-xl 2xl:text-2xl flex flex-col gap-5 marker:text-indigo-600">
              <li>PT. Borwita Citra Prima (Website Developer Intern) </li>
              <li>Bangkit Academy 2023 (Cloud Computing Cohort)</li>
              <li>FST Airlangga University (Project Based Website)</li>
              <li>Abaya Salma (Project Based Website)</li>
              <li>Some Universtity Organization and Activities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
