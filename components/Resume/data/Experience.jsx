import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaBuilding, FaUserTie, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experience = {
    title: "My Experience",
    description: "An overview of my professional journey.",
    item: [
      // {
      //   company: "Jebrix Technologies",
      //   position: "Frontend Developer",
      //   duration: "Sep 2024 - Current",
      //   description: [
      //     "Built Raw Gate, a marketplace for raw materials like steel and coal, using Vite React and Tailwind CSS with mobile-responsive product catalogs and inquiry systems.",
      //     "Developed Lumic, a global showcase platform for 36 products, including paper and building materials, with seamless navigation and responsive design.",
      //     "Implemented secure login and registration systems across projects, ensuring user-friendly account management.",
      //     "Created responsive, interactive designs using Tailwind CSS, AOS animations, and modern UI techniques.",
      //     "Designed an inventory management platform with features for tracking, sales, purchases, and reporting using Next.js, Tailwind CSS, and GraphQL.",
      //     "Built a gaming platform with 30+ games, GSAP.js animations, Google AdSense, and Google Analytics for optimization.",
      //   ],
      // },
      {
        company: "Ananta Services",
        position: "React Developer",
        duration: "Dec 2023 - Dec 2025",
        description: [
          "Led frontend development for multiple applications including Interview Management System, AI Interview Platform, and Student Test Portal using React.js and Next.js.",
          "Built real-time chat applications (one-to-one and group chat) using Socket.IO and Firebase, handling full-stack responsibilities.",
          "Managed a team of 5 developers, assigned tasks, reviewed pull requests, and ensured high code quality and timely delivery.",
          "Developed scalable, responsive UI using React.js, Next.js, MUI, and Tailwind CSS with focus on performance optimization.",
          "Deployed and managed applications on AWS EC2 with CI/CD pipelines using Jenkins.",
        ],
      },
      {
        company: "Silverwing Technologies Pvt. Ltd.",
        position: "Web Design Intern",
        duration: "Oct 2021 – Nov 2021",
        description: [
          "Crafted visually appealing and user-centric web pages using HTML, CSS, and JavaScript.",
          "Collaborated with designers and developers to convert wireframes into responsive, mobile-optimized interfaces.",
          "Improved website layout, typography, and UI structure to enhance accessibility and user experience.",
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 text-left lg:text-center xl:text-left px-3 mb-1">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left "
      >
        <h3 className="text-4xl font-extrabold text-white">
          {experience.title}
        </h3>
        <p className="text-white/60 mt-2">{experience.description}</p>
      </motion.div>

      {/* Experience List */}
      <ScrollArea className="h-[430px] lg:h-[450px]">
        <ul className="grid grid-cols-1 gap-6">
          {experience.item.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#232329] p-6 rounded-xl flex flex-col items-center lg:items-start gap-6 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Company Name */}
              <div className="flex items-center gap-2 text-white">
                <FaBuilding className="text-lg" />
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {item.company}
                </h3>
              </div>

              {/* Role & Duration */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 w-full">
                <div className="flex items-center gap-2 text-white">
                  <FaUserTie />
                  <p className="text-white/60">{item.position}</p>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <FaCalendarAlt />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc pl-4 text-white/60 space-y-2">
                {item.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
