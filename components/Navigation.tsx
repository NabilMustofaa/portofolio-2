"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-md py-6 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 md:px-12">
        {/* Brand logo */}
        <Link
          href="/"
          className="text-white hover:text-cyan-400 transition-colors font-bold text-xl tracking-wider uppercase flex items-center gap-1.5"
        >
          <span className="text-cyan-400 font-extrabold text-2xl">N</span>
          <span>Nabil.M</span>
        </Link>

        {/* Links */}
        <div className="flex flex-row leading-6 text-base md:text-lg justify-end md:gap-10 gap-4 text-neutral-400 items-center font-medium">
          <Link
            href="/"
            className="hover:text-neutral-50 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/#project"
            className="hover:text-neutral-50 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="hover:text-neutral-50 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-gradient border-gradient px-4 py-1.5 rounded-full hover:scale-[1.03] transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
