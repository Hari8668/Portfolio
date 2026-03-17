"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaJs, FaGit, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiBootstrap,
  SiFirebase,
  SiVite,
  SiGoogleanalytics,
  SiGoogleadsense,
  SiApollographql,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TbBrandRedux } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { MdAnimation } from "react-icons/md";

const Skills = () => {
  const skills = {
    title: "My Skills",
    description:
      "Here are some of the tools and technologies I have experience with:",
    skillCategories: [
      {
        category: "Languages",
        skillList: [
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3 /> },
          { name: "JavaScript", icon: <FaJs /> },
          // { name: "Typescript", icon: <BiLogoTypescript /> },
        ],
      },
      {
        category: "JavaScript Technologies",
        skillList: [
          { name: "React.js", icon: <FaReact /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Redux", icon: <TbBrandRedux /> },
          { name: "Vite React", icon: <SiVite /> },
        ],
      },
      {
        category: "CSS Frameworks & Libraries",
        skillList: [
          { name: "Bootstrap", icon: <SiBootstrap /> },
          { name: "Material UI", icon: <AiOutlineCode /> },
          { name: "Tailwind", icon: <SiTailwindcss /> },
        ],
      },
      {
        category: "Animation Libraries",
        skillList: [
          // { name: "Framer Motion", icon: <SiFramer /> },
          { name: "AOS", icon: <MdAnimation /> },
        ],
      },
      {
        category: "Developer Tools",
        skillList: [
          { name: "Adsense", icon: <SiGoogleadsense /> },
          { name: "Git", icon: <FaGit /> },
          { name: "Google Analytics", icon: <SiGoogleanalytics /> },
          { name: "VSCode", icon: <VscVscode /> },
          { name: "AWS", icon: <FaAws /> },
        ],
      },
      {
        category: "Backend & Database",
        skillList: [
          // { name: "Apollo", icon: <SiApollographql /> },
          { name: "Firebase", icon: <SiFirebase /> },
          // { name: "GraphQL", icon: <SiGraphql /> },
          { name: "MongoDB", icon: <SiMongodb /> },
        ],
      },
      {
        category: "Design",
        skillList: [{ name: "Figma", icon: <FaFigma /> }],
      },
    ],
  };

  return (
    <section className="min-h-fit flex flex-col justify-center py-1 lg:py-4 px-3">
      {/* <div className="container mx-auto"> */}
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left lg:text-center xl:text-left mb-3"
      >
        <h3 className="text-4xl font-extrabold text-white">{skills.title}</h3>
        <p className="text-white/60 mt-2">{skills.description}</p>
      </motion.div>

      {/* Skills Grid */}
      <ScrollArea className="h-[450px]">
        <div className="grid grid-cols-1 gap-12">
          {skills.skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Category Title */}
              <h4 className="text-2xl font-semibold text-accent">
                {category.category}
              </h4>

              {/* Skill Items */}
              {/* <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-[#27272C] backdrop-blur-lg shadow-lg h-[160px] py-6 px-8 rounded-xl flex flex-col 
                      justify-center items-center gap-3 transform transition-all duration-300 hover:text-accent hover:bg-gray-800"
                  >
                    <div className="text-5xl text-white/80 group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-lg font-medium text-white">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
      {/* </div> */}
    </section>
  );
};

export default Skills;
