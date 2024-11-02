import React from "react";
import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/homeimg.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[18px] lg:text-2xl text-primary "
        >
          Design & Build
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl lg:text-[52px] lg:leading-normal uppercase text-white font-medium "
        >
          Building Is Our Passion
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-primary"></div>
        <motion.div
          initial="hidden"
          variants={zoomInVariants}
          whileInView="visible"
          className="flex justify-center items-center gap-10"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-primary text-white hover:bg-white hover:text-secondary px-5 py-3  rounded-lg font-bold"
          >
            Learn More
          </motion.button>
          <motion.div className="border-white hover:border-primary hover:text-primary border-2  px-5 py-3 rounded-lg text-white font-bold">
            Our Folio
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-[40%] flex flex-col justify-end items-end">
        <img
          src={heroimg}
          alt="hero image"
          className="lg:h-[600px] md:h-[400px] h-[200px] lg:mb-[-100px]"
        />
        {/* <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="hero image"
          className="lg:h-[600px] md:h-[400px] h-[200px] lg:mb-[-100px]"
        /> */}
      </div>
    </div>
  );
}
