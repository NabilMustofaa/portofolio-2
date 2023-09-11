import React from "react";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";
import BlurBg from "@/components/BlurBg";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ProjectItem from "@/components/ProjectItem";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-screen flex flex-col align-middle">
      <BlurBg />
      <Navigation />
      <section className="2xl:px-60 md:px-40 px-8">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </section>
      <p className=" text-white text-xl py-12 text-center">
        {" "}
        &copy; 2023 Nabil Mustofa
      </p>
    </div>
  );
}
