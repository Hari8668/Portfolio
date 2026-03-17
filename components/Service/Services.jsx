"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to your business needs using the latest technologies such as HTML, CSS, JavaScript, and modern front-end frameworks.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI Design",
    description:
      "Crafting intuitive and aesthetically pleasing user interfaces with a focus on user experience. I use tools like Figma to design beautiful, functional websites and applications.",
    href: "/contact",
  },
  {
    num: "03",
    title: "React.js Development",
    description:
      "Building dynamic and scalable web applications with React.js. I create fast, responsive, and component-driven user interfaces ensuring performance optimization.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Next.js Development",
    description:
      "Developing modern, SEO-friendly web applications with Next.js. I specialize in server-side rendered (SSR) and static websites for fast load times and better SEO ranking.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-fit mt-2 lg:mt-4 flex flex-col justify-center py-3 lg:py-12 xl:py-0">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                rotateX: -10,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
              style={{ transformPerspective: 1000 }}
              className="flex flex-col justify-between p-6 h-fit lg:h-[260px] bg-gray-800 rounded-xl shadow-lg 
              hover:bg-gray-700 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <motion.div
                  whileHover={{ rotate: -5 }}
                  className="text-6xl font-extrabold text-gray-700 group-hover:text-gray-300 transition-all duration-300"
                >
                  {service.num}
                </motion.div>
                <Link
                  href={service.href}
                  className="w-[60px] h-[60px] rounded-full bg-white flex justify-center 
                  items-center transition-all duration-500 transform group-hover:bg-accent group-hover:rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-[30px] font-semibold text-white group-hover:text-accent transition-all duration-500"
              >
                {service.title}
              </motion.h2>

              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
