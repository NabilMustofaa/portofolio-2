"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPhoto() {
  return (
    <div className="flex flex-row mx-auto items-center justify-center relative select-none">
      {/* Floating Polygon */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-12 h-12 my-auto mx-8 2xl:w-16 2xl:h-16 flex-shrink-0"
      >
        <Image
          src="/polygon.png"
          alt="Polygon"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        {/* Floating Circle */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            x: [0, 4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-10 h-10 mx-auto my-6 2xl:w-14 2xl:h-14 flex-shrink-0"
        >
          <Image
            src="/circle.png"
            alt="Circle"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Pulse/Glow Profile Photo Container */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-2xl"
        >
          <div className="rounded-full overflow-hidden bg-neutral-900 w-40 h-40 2xl:w-[16rem] 2xl:h-[16rem]">
            <Image
              src="/Ellipse 3.png"
              alt="Profile Picture Nabil Mustofa"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Square */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-8 h-8 my-auto mx-8 2xl:w-12 2xl:h-12 flex-shrink-0"
      >
        <Image
          src="/scuare.png"
          alt="Square"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
