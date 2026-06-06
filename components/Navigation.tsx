"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        scrolled || isOpen
          ? "bg-neutral-950/25 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 md:px-12 relative">
        {/* Brand logo */}
        <Link
          href="/"
          className="text-white hover:text-cyan-400 transition-colors font-bold text-xl tracking-wider uppercase flex items-center gap-1.5 z-50"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-cyan-400 font-extrabold text-2xl mb-0.5">
            N
          </span>
          <span>Nabil M</span>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex flex-row leading-6 text-base md:text-lg justify-end md:gap-10 gap-4 text-neutral-400 items-center font-medium">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4.5 z-50 relative focus:outline-none py-0.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 bg-white rounded-full transition-all duration-300 w-6 origin-left ${
              isOpen ? "rotate-45 translate-x-1 translate-y-[-10px]" : "my-0.5"
            }`}
          />
          <span
            className={`h-0.5 bg-white rounded-full transition-all duration-300 w-6 ${
              isOpen ? "opacity-0" : "opacity-100 my-0.5"
            }`}
          />
          <span
            className={`h-0.5 bg-white rounded-full transition-all duration-300 w-6 origin-left ${
              isOpen ? "-rotate-45 translate-x-1 translate-y-[2px]" : "my-0.5"
            }`}
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-neutral-950/25 backdrop-blur-lg border-b border-neutral-900/80 shadow-2xl overflow-hidden py-8 px-6 flex flex-col items-center gap-6 z-40"
            >
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-white text-lg font-semibold tracking-wide transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/#project"
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-white text-lg font-semibold tracking-wide transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-white text-lg font-semibold tracking-wide transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-gradient border-gradient px-6 py-2 text-lg font-semibold tracking-wide hover:scale-[1.03] transition-all"
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
