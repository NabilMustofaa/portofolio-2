import React from "react";

export default function BlurBg() {
  return (
    <div className="absolute -z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-screen"
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
            x1="1192.89"
            y1="-362.814"
            x2="418.876"
            y2="837.452"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D9D9D9" stop-opacity="0.26" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
