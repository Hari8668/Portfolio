"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photos = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="w-[298px] h-[298px] 
        xl:w-[498px] xl:h-[450px] 
         mix-blend-lighten absolute  rounded-2xl"
      >
        
        <Image
          // src="/45.png"
          src="/Hariom2.png"

          // priority
          // quality={100}
          fill
          alt=""
          className="object-contain rounded-3xl  "
        />
      </motion.div>
       

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [" 15 120 25 25", "16 25 92 72", " 4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photos;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Photos = () => {
//   return (
//     <div className="w-full h-full flex items-center justify-center">
      
//       {/* Wrapper (important) */}
//       <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="relative w-[70%] h-[70%]">
//             <Image
//               src="/Hariom2.png"
//               fill
//               alt=""
//               className="object-contain rounded-3xl mix-blend-lighten"
//             />
//           </div>
//         </motion.div>

//         {/* Circle */}
//         <motion.svg
//           className="absolute inset-0 w-full h-full"
//           fill="transparent"
//           viewBox="0 0 506 506"
//         >
//           <motion.circle
//             cx="253"
//             cy="253"
//             r="250"
//             stroke="#00ff99"
//             strokeWidth="4"
//             strokeLinecap="round"
//             initial={{ strokeDasharray: "24 10 0 0" }}
//             animate={{
//               strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//               rotate: [120, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.svg>

//       </div>
//     </div>
//   );
// };

// export default Photos;