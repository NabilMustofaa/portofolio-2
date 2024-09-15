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
        className="w-12 h-12 my-auto mx-8 2xl:w-16 2xl:h-16 "
      />
      <div className=" flex flex-col justify-center align-middle">
        <Image
          src="/circle.png"
          alt=""
          width={60}
          height={60}
          className=" w-10 h-10 mx-auto my-12 2xl:w-14 2xl:h-14"
        />
        <Image
          src="/Ellipse 3.png"
          alt=""
          width={500}
          height={500}
          className="w-40 2xl:w-[16rem] 2xl:h-[16rem] "
        />
      </div>
      <Image
        src="/scuare.png"
        alt=""
        width={60}
        height={60}
        className="w-8 h-8 my-auto mx-8 2xl:w-12 2xl:h-12 "
      />
    </div>
  );
}
