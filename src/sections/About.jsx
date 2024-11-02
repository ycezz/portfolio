import React from "react";
import aboutimg from "../assets/about.png";
import aboutValue from "../assets/aboutvalue.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export default function About() {
  return (
    <div className="w-full m-auto mt-[60px]" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl lg:text-[40px] font-bold text-secondary"
        >
          About Us
        </motion.h1>
        <div className="mx-auto my-6 w-[120px] h-[6px] bg-primary"></div>
        <p className="text-secondary text-base lg:text-2xl leading-tight font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          culpa!
        </p>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={aboutimg}
          alt="about image"
          className="lg:mt-14 mt-5 w-[70%] lg:w-[60%] mx-auto"
        />
      </motion.div>
      <div className="relative flex justify-center">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={aboutValue}
          alt="about image"
          className="mx-auto"
        />
        <div className="absolute top-3 lg:top-16 left-1/2 transform -translate-x-1/2 flex justify-around w-full max-w-md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-center"
          >
            <motion.h2
              variants={slideUpVariants}
              className="text-[13px] lg:text-[40px] text-primary"
            >
              367
            </motion.h2>
            <p className="text-primary text-[10px] lg:text-[13px] uppercase py-0 lg:py-3">
              Project Completed
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-center"
          >
            <motion.h2
              variants={slideUpVariants}
              className="text-[13px] lg:text-[40px] text-primary"
            >
              1205
            </motion.h2>
            <p className="text-primary text-[10px] lg:text-[13px] uppercase py-0 lg:py-3">
              Happy Clients
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-center"
          >
            <motion.h2
              variants={slideUpVariants}
              className="text-[13px] lg:text-[40px] text-primary"
            >
              314
            </motion.h2>
            <p className="text-primary text-[10px] lg:text-[13px] uppercase py-0 lg:py-3">
              Workers Employed
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
