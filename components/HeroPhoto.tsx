import React from "react";
import Image from "next/image";

export default function HeroPhoto() {
  return (
    <div className=" flex flex-row mx-auto">
      <Image
        src="/polygon.png"
        alt=""
        width={60}
        height={60}
        className=" w-14 h-14 my-auto mx-8 2xl:w-28 2xl:h-28"
      />
      <div className=" flex flex-col justify-center align-middle">
        <Image
          src="/circle.png"
          alt=""
          width={60}
          height={60}
          className=" w-12 h-12 mx-auto my-12 2xl:w-20 2xl:h-20"
        />
        <Image
          src="/Ellipse 3.png"
          alt=""
          width={1000}
          height={1000}
          className=" w-56 2xl:w-[24rem] 2xl:h-[24rem]"
        />
      </div>
      <Image
        src="/scuare.png"
        alt=""
        width={60}
        height={60}
        className=" w-12 h-12 my-auto mx-8 2xl:w-20 2xl:h-20"
      />
    </div>
  );
}
