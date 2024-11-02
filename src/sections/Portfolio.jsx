import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full bg-gray m-auto ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center"
      >
        <p className="text-base pt-[30px] lg:pt-[60px] lg:text-2xl text-primary">
          Portfolio
        </p>
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl pt-[20px] lg:text-[40px] font-bold text-secondary"
        >
          Recent Works
        </motion.h1>
        <div className="mx-auto my-3 lg:my-6 w-[120px] h-[6px] bg-primary"></div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full m-auto mt-[30px] lg:mt-[78px] grid lg:grid-cols-4 grid-cols-1"
      >
        <img src={project1} alt="project image" className="h-[250px] w-full" />
        <img src={project2} alt="project image" className="h-[250px] w-full" />
        <img src={project3} alt="project image" className="h-[250px] w-full" />
        <img src={project4} alt="project image" className="h-[250px] w-full" />
        <img src={project5} alt="project image" className="h-[250px] w-full" />
        <img src={project6} alt="project image" className="h-[250px] w-full" />
        <img src={project7} alt="project image" className="h-[250px] w-full" />
        <img src={project8} alt="project image" className="h-[250px] w-full" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <div className="bg-primary w-full lg:h-[114px] h-[80px] flex justify-around items-center">
          <p className="text-white font-medium text-[10px] lg:text-[20px]">
            Contractors & Construction Managers Since 1981
          </p>
          <motion.button
            variants={zoomInVariants}
            className="bg-white text-secondary hover:bg-secondary hover:text-white lg:px-5 lg:py-3 text-[12px] lg:text-base px-6 py-2"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
