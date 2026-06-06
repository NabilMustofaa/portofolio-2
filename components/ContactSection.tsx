"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ContactSection() {
  return (
    <div
      className="flex flex-col  md:py-8 py-20 bg-neutral-900 bg-opacity-80 gap-10 rounded-2xl md:my-8 text-white text-center justify-between items-center my-20 relative overflow-hidden md:px-40 px-12"
      id="contact"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute -top-12 -left-12 md:-top-1/4 md:-left-24 w-44 h-44 md:w-80 md:h-80 opacity-30 blur-[2px] pointer-events-none select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#ring-grad-1)"
          strokeWidth="4"
          fill="none"
        />
      </motion.svg>
      <h2 className=" font-bold 2xl:text-6xl md:text-5xl text-3xl 2xl:mt-24 xl:mt-8">
        Lets Talks!
      </h2>
      <p className=" 2xl:text-3xl md:text-2xl lg:mt-12 text-neutral-300 text-neutral-300 2xl:px-64">
        Interested in working together or have a question? Feel free to reach
        out. I`m here to help you turn your ideas into amazing digital
        realities. Looking forward to hearing from you soon!
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <a
          href="/Muhammad Nabil Mustofa-resume.pdf"
          className=" border border-neutral-100 rounded-lg py-3 px-4 w-fit justify-self-end text-xl 2xl:text-2xl flex justify-between gap-3 align-middle"
          download
        >
          <Image
            src={"/docs.svg"}
            width={24}
            height={24}
            alt="Resume"
            className="my-auto"
          />
          <span>Check My Resume</span>
        </a>
        <a
          className=" border border-neutral-100 rounded-lg py-3 px-4 w-fit justify-self-end md:text-xl 2xl:text-2xl flex justify-between gap-3 align-middle"
          href="mailto:nabilmustofa6@gmail.com"
        >
          <Image
            src={"/email.png"}
            width={24}
            height={24}
            alt="Email"
            className="my-auto"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nabilmustofa/"
          className=" border border-neutral-100 rounded-lg py-3 px-4 w-fit justify-self-end text-xl 2xl:text-2xl flex justify-between gap-3 align-middle"
        >
          <Image
            src={"/linkedin.png"}
            width={24}
            height={24}
            alt="LinkedIn"
            className="my-auto"
          />
        </a>
        <a
          href="https://github.com/NabilMustofaa"
          className=" border border-neutral-100 rounded-lg py-3 px-4 w-fit justify-self-end text-xl 2xl:text-2xl flex justify-between gap-3 align-middle"
        >
          <Image
            src={"/github.png"}
            width={24}
            height={24}
            alt="GitHub"
            className="my-auto"
          />
        </a>
      </div>
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute -bottom-12 -right-12 md:-bottom-1/4 md:-right-24 w-44 h-44 md:w-80 md:h-80 opacity-30 blur-[2px] pointer-events-none select-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="ring-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#ring-grad-2)"
          strokeWidth="4"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
