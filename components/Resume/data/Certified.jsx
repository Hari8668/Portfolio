import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaCalendarAlt, FaChalkboardTeacher } from "react-icons/fa";
import { SiCoursera, SiPython, SiTensorflow, SiUdemy } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Certified = () => {
  const certified = {
    title: "My Certificate",
    description:
      "These certifications demonstrate my proficiency in web development, data visualization, and cryptography, showcasing my ability to apply modern technologies and best practices.",
    item: [
      {
        platform: "Coursera",
        coursename: "Creative Thinking: Techniques and Tools for Success",
        duration: "Sep 2021",
        description:
          "Focused on improving problem-solving, innovation, and creative thinking skills using structured techniques and real-world applications.",
        logo: <SiCoursera />,
        // link: "https://www.coursera.org/account/accomplishments/certificate/L4SYFDZQSS4Z",
      },
      {
        platform: "Infosys Springboard",
        coursename: "Basics of Python",
        duration: "Sep 2022",
        description:
          "Learned fundamental Python concepts including data types, control structures, and programming logic.",
        logo: <SiPython />, // or any icon you prefer
      },
      {
        platform: "Parul University",
        coursename: "Advance Trends in Machine Learning Techniques",
        duration: "Dec 2022",
        description:
          "Gained knowledge of modern machine learning algorithms, concepts, and real-world AI applications.",
        logo: <SiTensorflow />, // or use a generic icon
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 text-center xl:text-left px-3">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left lg:text-center xl:text-left"
      >
        <h3 className="text-4xl font-extrabold text-white">
          {certified.title}
        </h3>
        <p className="text-white/60 mt-2 text-justify">
          {certified.description}
        </p>
      </motion.div>

      <ScrollArea className="h-[430px] lg:h-[420px]">
        <ul className="grid grid-cols-1 gap-6">
          {certified.item.map((item, index) => (
            <motion.li
              key={index}
              className="bg-[#232329] p-6 rounded-xl flex flex-col items-center lg:items-start gap-4 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Platform and Duration */}
              <div className="flex justify-between w-full text-white">
                <div className="flex items-center gap-2">
                  {item.logo}{" "}
                  <h3 className="text-lg font-semibold">{item.platform}</h3>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <FaCalendarAlt />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Course Name */}
              <div className="flex items-center gap-2 text-white">
                <FaChalkboardTeacher className="text-2xl" />
                <p className="text-white/60 max-w-[250px] md:max-w-[300px] lg:max-w-full truncate">
                  {item.coursename}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/60 text-left lg:text-left">
                {item.description}
              </p>

              {/* Certificate Button */}
              {item.link && (
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-black py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-accent-dark transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LiaCertificateSolid className="text-2xl" />
                  <span>Certificate</span>
                </motion.a>
              )}
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Certified;
