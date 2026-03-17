import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { motion } from "framer-motion";

const Education = () => {
  const education = {
    title: "My Education",
    description:
      "An overview of my educational journey through high school, higher secondary education, and a B.Tech in Information Technology.",
    item: [
      {
        institution: "Parul University",
        degree:
          "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
        duration: "Completed in 2024",
        level: "B.Tech",
        description:
          "Bachelor’s degree focused on Artificial Intelligence, data structures, and core computer science concepts. Worked on multiple academic and practical projects that strengthened problem-solving and development skills.",
      },
      {
        institution: "SMT R.C Patel School",
        degree: "Higher Secondary Certificate (HSC)",
        duration: "Completed in 2020",
        level: "HSC",
        description:
          "Completed higher secondary education with a focus on science subjects including Physics, Chemistry, and Mathematics. Built a strong analytical and logical foundation.",
      },
      {
        institution: "Santiniketan Rotary Vidyalaya",
        degree: "Secondary School Certificate (SSC)",
        duration: "Completed in 2018",
        level: "SSC",
        description:
          "Completed secondary education with a strong academic base and overall development in core subjects.",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 text-center sm:text-left px-3"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left lg:text-center xl:text-left"
      >
        <h3 className="text-4xl font-extrabold text-white">
          {education.title}
        </h3>
        <p className="text-white/60 mt-2 text-justify">
          {education.description}
        </p>
      </motion.div>
      {/* <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
        {education.title}
      </h3>
      <p className="max-w-[800px] text-white/60 mx-auto sm:mx-0 text-sm sm:text-base">
        {education.description}
      </p> */}
      <ScrollArea className="h-[420px] sm:h-[380px]">
        <ul className="grid grid-cols-1 gap-6">
          {education.item.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#232329] py-4 sm:py-6 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-4"
            >
              {/* <div className="flex flex-col sm:flex-row sm:justify-between justify-start   lg:items-center gap-2">
                <div className="flex items-center gap-2">
                  <FaUniversity className="text-lg text-accent" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{item.institution}</h3>
                </div>
                <div className="flex items-center  gap-2 text-accent text-sm sm:text-base">
                  <HiOutlineCalendar className="text-lg" />
                  <span>{item.duration}</span>
                </div>
              </div> */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-start">
                  <FaUniversity className="text-lg text-accent" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.institution}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-accent text-sm sm:text-base w-full sm:w-auto justify-end sm:justify-end">
                  <HiOutlineCalendar className="text-lg" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white">
                <MdSchool className="text-xl sm:text-2xl text-accent" />
                <p className="text-white/70 text-sm sm:text-lg">
                  {item.degree}
                </p>
              </div>

              <p className="text-white/60 text-base sm:text-sm text-justify">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </motion.div>
  );
};

export default Education;
