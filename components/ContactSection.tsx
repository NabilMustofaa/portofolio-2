import React from "react";
import Image from "next/image";
export default function ContactSection() {
  return (
    <div
      className="flex flex-col  md:py-8 py-20 bg-neutral-900 gap-10 rounded-2xl md:my-8 text-white text-center justify-between items-center my-20 relative overflow-hidden md:px-40 px-12"
      id="contact"
    >
      <Image
        src="/ellipse left.png"
        alt="Ellipse"
        width={1000}
        height={1000}
        className=" md:w-80 w-20 absolute  md:-top-1/4 md:-left-32 -top-10 -left-10 overflow-hidden"
      ></Image>
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
        <a
          href="https://wa.me/6285748969806"
          className=" border border-neutral-100 rounded-lg py-3 px-4 w-fit justify-self-end text-xl 2xl:text-2xl flex justify-between gap-3 align-middle"
        >
          <Image
            src={"/whatsapp.png"}
            width={24}
            height={24}
            alt="WhatsApp"
            className="my-auto"
          />
        </a>
      </div>
      <Image
        src="/ellipse right.png"
        alt="Ellipse"
        width={1000}
        height={1000}
        className="md:w-80 w-20 absolute  md:-bottom-1/4 md:-right-32 -bottom-10 -right-10 bg-clip-border overflow-hidden"
      ></Image>
    </div>
  );
}
