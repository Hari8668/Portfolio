import { FaHtml5, FaCss3, FaReact, FaJs, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiFirebase,
  SiVite,
  SiGraphql,
  SiMongodb,
  SiChakraui,
} from "react-icons/si";
import {
  SiGoogleanalytics,
  SiGoogleads,
  SiApollographql,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import { SiMui } from "react-icons/si";
import rawgate from "./projectdata/rawgate";
import quickweb from "./projectdata/quickweb";
import quickportal from "./projectdata/quickportal";
import News from "./projectdata/News";
import ai from "./projectdata/Ai";
import ados from "./projectdata/ADOS";
import inventory from "./projectdata/inventory";
import lumici from "./projectdata/lumici";
import jebrixapi from "./projectdata/Jebrixapi";
import ssd from "./projectdata/ssd";
import game from "./projectdata/game";
import knowquest from "./projectdata/knowquest";

export const projects = [
  {
    num: "01",
    category: "Quickhirez Website",
    title: "Quickhirez g",
    description: quickweb,
    stack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiGoogleanalytics />, name: "Googleanalytics" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    image: "/Work/work1.png",
    live: "https://quickhirez.com/",
    github: "",
  },
  {
    num: "02",
    category: "rawgate",
    title: "fuirhfiuerh",
    description: rawgate,
    stack: [
      { icon: <SiVite />, name: "Vite React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    image: "/Work/work2.png",
    live: "https://rawgate.jebrix.com/",
    github: "",
  },
  {
    num: "03",
    category: "Storemanagement",
    title: "inventory",
    description: inventory,
    stack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiChakraui />, name: "Chakara ui" },
      { icon: <SiGraphql />, name: "Graphql" },
      { icon: <SiApollographql />, name: "Apollo" },
      { icon: <SiMongodb />, name: "Mongodb" },
    ],
    image: "/Work/work3.png",
    live: "https://storemanagement-bice.vercel.app/auth/login",
    github: "",
  },
  {
    num: "04",
    category: "Quickhirez Portal",
    title: "News",
    description: quickportal,
    stack: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiMui />, name: "Material Ui" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
    image: "/Work/work4.png",
    live: "https://hire.quickhirez.com/login",
    github: "",
  },
  {
    num: "05",
    category: "KnowQuest",
    title: "KnowQuest",
    description: knowquest,
    stack: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiMongodb />, name: "Mongodb" },
    ],
    image: "/Work/n3.png",
    live: "https://kq.jebrix.com/",
    github: "",
  },
  // {
  //   num: "06",
  //   category: "Jebrix APIs",
  //   title: "Jebrix APIs",
  //   description: jebrixapi,
  //   stack: [
  //     { icon: <FaReact />, name: "React" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //     { icon: <SiTailwindcss />, name: "Tailwind" },
  //     { icon: <SiMongodb />, name: "Mongodb" },
  //   ],
  //   image: "/Work/n4.png",
  //   live: "jebrix-api.jebrix.com",
  //   github: "",
  // },
  // {
  //   num: "new",
  //   category: "SuperSide",
  //   title: "SuperSide",
  //   description: jebrixapi,
  //   stack: [
  //     { icon: <SiNextdotjs />, name: "Next.js" },
  //     { icon: <BiLogoTypescript />, name: "Typescript" },
  //     { icon: <SiTailwindcss />, name: "Tailwind" },
  //   ],
  //   image: "/Work/n4.png",
  //   live: "jebrix-api.jebrix.com",
  //   github: "",
  // },
  // {
  //   num: "07",
  //   category: "SSDSST",
  //   title: "News",
  //   description: ssd,
  //   stack: [
  //     { icon: <FaReact />, name: "React" },
  //     { icon: <SiMui />, name: "Material Ui" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //     { icon: <SiFirebase />, name: "Firebase" },
  //     { icon: <SiMongodb />, name: "Mongodb" },
  //   ],
  //   image: "/Work/work5.png",
  //   live: "https://ssdsst.com/",
  //   github: "",
  // },
  // {
  //   num: "06",
  //   category: "Ai Interview",
  //   title: "fuirhfiuerh",
  //   description: ai,
  //   stack: [
  //     { icon: <SiNextdotjs />, name: "Next.js" },
  //     { icon: <SiTailwindcss />, name: "Tailwind" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //     { icon: <FaDatabase />, name: "Neon Database" },
  //   ],
  //   image: "",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "08",
  //   category: "News",
  //   title: "News",
  //   description: News,
  //   stack: [
  //     { icon: <SiVite />, name: "Vite React" },
  //     { icon: <SiTailwindcss />, name: "Tailwind" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //   ],
  //   image: "/Work/work7.png",
  //   live: "https://harmeetnews.netlify.app/",
  //   github: "",
  // },
  // {
  //   num: "09",
  //   category: "lumici",
  //   title: "fuirhfiuerh",
  //   description: lumici,
  //   stack: [
  //     { icon: <FaHtml5 />, name: "HTML5" },
  //     { icon: <FaCss3 />, name: "CSS3" },
  //     { icon: <SiTailwindcss />, name: "Tailwind" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //   ],
  //   image: "/Work/work8.png",
  //   live: "https://dev.lumiciinternational.com/",
  //   github: "",
  // },
  // {
  //   num: "10",
  //   category: "Game",
  //   title: "fuirhfiuerh",
  //   description: game,
  //   stack: [
  //     { icon: <FaHtml5 />, name: "HTML5" },
  //     { icon: <FaCss3 />, name: "CSS3" },
  //     { icon: <SiBootstrap />, name: "Bootstrap" },
  //     { icon: <SiGoogleads />, name: "Google AdSense" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //   ],
  //   image: "/Work/work11.png",
  //   live: "https://gameplay.jebrix.com/",
  //   github: "",
  // },
  // {
  //   num: "11",
  //   category: "ADOS",
  //   title: "ADOS",
  //   description: ados,
  //   stack: [
  //     { icon: <FaHtml5 />, name: "HTML5" },
  //     { icon: <FaCss3 />, name: "CSS3" },
  //     { icon: <FaJs />, name: "JavaScript" },
  //     { icon: <SiBootstrap />, name: "Bootstrap" },
  //   ],
  //   image: "/Work/work10.png",
  //   live: "https://harmeet163.github.io/ADOS/",
  //   github: "",
  // },
];
