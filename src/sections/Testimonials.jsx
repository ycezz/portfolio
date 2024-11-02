import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";
import { div } from "framer-motion/client";

export default function Testimonials() {
  return (
    <div id="testimonials" className="w-full m-auto ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center"
      >
        <p className="text-base pt-[30px] lg:pt-[60px] lg:text-2xl text-primary">
          Testimonials
        </p>
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl pt-[20px] lg:text-[40px] font-bold text-secondary"
        >
          What Other Say About Us
        </motion.h1>
        <div className="mx-auto my-3 lg:my-6 w-[120px] h-[6px] bg-primary"></div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="lg:w-full w-[90%] lg:px-10 px-5 mx-auto grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px]"
      >
        {clients.map((item, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div className="border-2 border-secondary hover:bg-yellow-500 pb-[100px] pt-[30px] rounded-[40px]">
              <p className="text-secondary hover:text-white text-lg text-center">
                {item.about}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <img
                src={item.image}
                className="mt-[-50px] w-20"
                alt="client image"
              />
              <h1 className="text-secondary text-[27px] font-semibold">
                {item.name}
              </h1>
              <h1 className="text-yellow-500 text-[22px]">{item.post}</h1>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
