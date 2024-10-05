"use client";

import React, { useState, useEffect } from "react";

export default function BlurBg() {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Clamp the mouse position within the viewable area (e.g., inside the SVG)
      const x = Math.max(0, Math.min(event.clientX, window.innerWidth));
      const y = Math.max(0, Math.min(event.clientY, window.innerHeight));
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 1440 1314"
        fill="none"
      >
        <g filter="url(#filter0_f_4_280)">
          <path
            d="M925.243 842.5C776.243 944 433.243 982.5 302.743 890.5C172.243 798.5 252.244 655.5 321.743 553.863C391.243 452.226 1308.53 -625 1451.74 -625C1594.95 -625 1074.24 741 925.243 842.5Z"
            fill="url(#paint0_linear_4_280)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4_280"
            x="-138.18"
            y="-996.18"
            width="1985.77"
            height="2309.96"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="185.59"
              result="effect1_foregroundBlur_4_280"
            />
          </filter>
          <linearGradient
            id="paint0_linear_4_280"
            x1={mousePosition.x + 120}
            y1={mousePosition.y - 200}
            x2={mousePosition.x + 100}
            y2={mousePosition.y + 100 + scrollPosition}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9D9D9" stopOpacity="0.26" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
