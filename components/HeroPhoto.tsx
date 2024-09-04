"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HeroPhoto() {
  return (
    <div className={`flex flex-row mx-auto`}>
      <Image
        src="/polygon.png"
        alt=""
        width={60}
        height={60}
        className="w-14 h-14 my-auto mx-8 2xl:w-20 2xl:h-20 "
      />
      <div className=" flex flex-col justify-center align-middle">
        <Image
          src="/circle.png"
          alt=""
          width={60}
          height={60}
          className=" w-12 h-12 mx-auto my-12 2xl:w-16 2xl:h-16"
        />
        <Image
          src="/Ellipse 3.png"
          alt=""
          width={500}
          height={500}
          className="w-56 2xl:w-[20rem] 2xl:h-[20rem] "
        />
      </div>
      <Image
        src="/scuare.png"
        alt=""
        width={60}
        height={60}
        className="w-12 h-12 my-auto mx-8 2xl:w-14 2xl:h-14 "
      />
    </div>
  );
}
