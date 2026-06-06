"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BlurBg() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create a spring configuration for smooth, organic movement
  const springConfig = { damping: 35, stiffness: 120, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Initial centering of the bubble before mouse movement starts
    mouseX.set(window.innerWidth / 2 - 250);
    mouseY.set(window.innerHeight / 2 - 250);

    const handleMouseMove = (event: MouseEvent) => {
      // Offset the cursor coordinate by half of the bubble size (250px) to center it
      mouseX.set(event.clientX - 250);
      mouseY.set(event.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-neutral-950">
      {/* Dynamic Cursor-Following Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-25 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.5) 0%, rgba(99,102,241,0.2) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Ambient static glows to add constant depth */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[150px]" />
    </div>
  );
}
