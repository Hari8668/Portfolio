"use client";
import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaRegLightbulb,
  FaUser,
  FaCertificate,
} from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";

import { motion } from "framer-motion";

// main parts
import Experience from "./data/Experience";
import About from "./data/About";
import Education from "./data/Education";
import Skills from "./data/Skills";
import Certified from "./data/Certified";

const Resume = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile devices
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[25vh] lg:min-h-[79vh]  flex items-center justify-center py-3 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col   xl:flex-row gap-x-[60px] gap-y-6"
        >
          <TooltipProvider>
            {isMobile ? (
              <TabsList className="flex flex-row w-full mx-auto xl:mx-0 gap-4 rounded-3xl">
                <Tooltip content="Experience" delayDuration={300}>
                  <TabsTrigger
                    value="experience"
                    className="flex items-center rounded-2xl"
                  >
                    <FaBriefcase className="text-2xl" /> {/* Larger icon */}
                  </TabsTrigger>
                </Tooltip>

                <Tooltip content="Education" delayDuration={300}>
                  <TabsTrigger
                    value="education"
                    className="flex items-center rounded-2xl"
                  >
                    <FaGraduationCap className="text-2xl" />
                  </TabsTrigger>
                </Tooltip>

                <Tooltip content="Skills" delayDuration={300}>
                  <TabsTrigger
                    value="skills"
                    className="flex items-center rounded-2xl"
                  >
                    <FaRegLightbulb className="text-2xl" />
                  </TabsTrigger>
                </Tooltip>
                <Tooltip content="Certificate" delayDuration={300}>
                  <TabsTrigger
                    value="Certificate"
                    className="flex items-center rounded-2xl"
                  >
                    <PiCertificateFill className="text-2xl" />
                  </TabsTrigger>
                </Tooltip>

                <Tooltip content="About" delayDuration={300}>
                  <TabsTrigger
                    value="about"
                    className="flex items-center rounded-2xl"
                  >
                    <FaUser className="text-2xl" />
                  </TabsTrigger>
                </Tooltip>
              </TabsList>
            ) : (
              <TabsList className="flex flex-col w-full justify-center items-center max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger
                  value="experience"
                  className="flex items-center gap-2"
                >
                  <FaBriefcase /> Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex items-center gap-2"
                >
                  <FaGraduationCap /> Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <FaRegLightbulb /> Skills
                </TabsTrigger>

                <TabsTrigger
                  value="Certificate"
                  className="flex items-center gap-2"
                >
                  <PiCertificateFill /> Certificate
                </TabsTrigger>

                <TabsTrigger value="about" className="flex items-center gap-2">
                  <FaUser /> About
                </TabsTrigger>

              
              </TabsList>
            )}
          </TooltipProvider>

          {/* content box */}
          <div className="min-h-[10vh] lg:min-h-[80vh]  w-full  ">
            {/* exp */}
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <Skills />
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-left lg:text-center xl:text-left"
            >
              <About />
            </TabsContent>

            {/* Certificate */}
            <TabsContent
              value="Certificate"
              className="w-full text-left lg:text-center xl:text-left"
            >
              <Certified />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
