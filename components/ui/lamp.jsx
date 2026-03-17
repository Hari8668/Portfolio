"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// LampDemo Component
export function LampDemo() {
  const start = `Hello, I'm`;
  return (
    <LampContainer>
      {/* Light Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative text-center text-white z-50"
      >
        {/* Software Developer Text */}
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="block text-lg font-bold sm:text-xl uppercase text-white  hover:text-accent-hover tracking-widest"
        >
          Frontend DEVELOPER
        </motion.span>

        {/* Name & Greeting */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
          className="mt-4 bg-gradient-to-br from-accent via-white to-[#33bbc5] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-7xl drop-shadow-md"
        >
          {start} <br />
          <span className="text-accent">
            {/* Dynamic Accent Color */}Hariom Gauswami
          </span>
        </motion.h1>

        <p></p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="max-w-[320px] sm:max-w-[600px] mx-auto mt-4 text-white/80 text-sm sm:text-base leading-relaxed"
        >
          Frontend Developer with 2+ years of experience building scalable,
          user-friendly web apps using React.js, Next.js, and modern UI
          frameworks.
          {/* Frontend Developer with 2+ years experience and 3+ years freelancing.
          Skilled in React.js, Next.js, and building scalable web apps. */}
        </motion.p>
      </motion.div>
    </LampContainer>
  );
}

// LampContainer Component
export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex h-[45vh] md:h-screen lg:h-[23rem] flex-col items-center justify-start overflow-hidden w-full rounded-md z-0 bg-transparent pt-1 sm:pt-2",
        className,
      )}
    >
      {/* Gradient Light Effects */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left Light */}
        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            width: ["12rem", "32rem", "12rem"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[32rem] bg-gradient-conic from-primary via-transparent to-transparent text-white bg-opacity-40 [--conic-position:from_70deg_at_center_top]"
        ></motion.div>

        {/* Right Light */}
        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            width: ["12rem", "32rem", "12rem"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[32rem] bg-gradient-conic from-transparent via-transparent to-accent text-white bg-opacity-40 [--conic-position:from_290deg_at_center_top]"
        ></motion.div>

        {/* Glow Around Text */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-20 h-56 w-56 bg-accent opacity-20 blur-3xl rounded-full"
        ></motion.div>

        {/* Soft Shadow at the Bottom */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-transparent blur-2xl opacity-20"></div>

        {children}
      </div>
    </div>
  );
};
