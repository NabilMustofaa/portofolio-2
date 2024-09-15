import React from "react";

export default function Navigation() {
  return (
    <div className="">
      <nav className="flex flex-row leading-6 text-xl justify-center md:gap-12 gap-4 py-6 text-neutral-400 z-10">
        <a href="" className="hover:text-neutral-50">
          Home
        </a>
        <a href="#project" className="hover:text-neutral-50">
          Project
        </a>
        <a href="#about" className="hover:text-neutral-50">
          About
        </a>
        <a href="#contact" className="text-gradient">
          Contact
        </a>
      </nav>
    </div>
  );
}
