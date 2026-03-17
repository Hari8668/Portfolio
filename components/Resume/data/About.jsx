import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  const about = {
    title: "About Me",
    description:
      "Passionate front-end developer dedicated to crafting seamless and user-friendly web experiences. Proven track record of delivering innovative projects and translating complex concepts into intuitive interfaces. Combines creativity with problem-solving skills to push boundaries and drive impactful results.",
    info: [
      { fieldName: "Name", fieldValue: "Hariom Gauswami", icon: FaUser },
      { fieldName: "Phone", fieldValue: "8780340458", icon: FaPhone },
      { fieldName: "Experience", fieldValue: "2 Years", icon: FaBriefcase },
      {
        fieldName: "GitHub",
        fieldValue: "Hari8668",
        icon: FaGithub,
        link: "https://github.com/Hari8668",
      },
      { fieldName: "Language", fieldValue: "English", icon: FaGlobe },
      {
        fieldName: "Email",
        fieldValue: "gauswamihariomgiri@gmail.com",
        icon: FaEnvelope,
        link: "mailto:gauswamihariomgiri@gmail.com",
      },
      {
        fieldName: "Location",
        fieldValue: "Vadodara, India",
        icon: FaMapMarkerAlt,
      },
      {
        fieldName: "LinkedIn",
        fieldValue: "Hariom Gauswami",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/harigauswami/",
      },
    ],
  };

  return (
    <motion.div
      className="flex flex-col gap-6 px-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left lg:text-center xl:text-left"
      >
        <h3 className="text-4xl font-extrabold text-white">{about.title}</h3>
        <p className="text-white/60 mt-2 text-justify">{about.description}</p>
      </motion.div>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[850px] bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg lg:mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center lg:justify-center xl:justify-start gap-4 text-white/80"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl text-accent">{<item.icon />}</span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline transition"
              >
                {item.fieldValue}
              </a>
            ) : (
              <span className="text-lg">{item.fieldValue}</span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default About;
