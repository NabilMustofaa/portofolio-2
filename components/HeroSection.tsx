import React from "react";
import HeroPhoto from "@/components/HeroPhoto";

export default function HeroSection() {
  return (
    <div className="2xl:px-80 lg:px-60 text-white text-center flex flex-col h-screen 2xl:py-20 py-8">
      <HeroPhoto />
      <h1 className=" font-bold  2xl:text-[7rem] text-7xl 2xl:mt-24 mt-4">
        Hi, I`m Nabil Mustofa
      </h1>
      <p className=" 2xl:text-4xl text-3xl xl:mt-8 lg:mt-4 mt-4">
        I`m an enthusiastic Web Developer dedicated to crafting exceptional
        online experiences. My goal is to seamlessly merge functionality and
        aesthetics, producing impactful digital solutions.
      </p>
    </div>
  );
}
