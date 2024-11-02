import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export default function Contact() {
  return (
    <div id="contact" className="bg-white w-full">
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-secondary text-[40px] font-medium"
          >
            Contact Us
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.form
            initial="visible"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-center gap-4 w-full"
          >
            <input
              type="text"
              placeholder="Fullname"
              className="px-6 py-3 border-[2px] border-secondary text-secondary rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-3 border-[2px] border-secondary text-secondary rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="px-6 py-3 border-[2px] border-secondary text-secondary rounded-lg w-full"
            />
            <textarea
              name=""
              placeholder="Your message"
              id=""
              rows="4"
              className="px-6 py-3 border-[2px] border-secondary text-secondary rounded-lg w-full"
            ></textarea>
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-secondary hover:text-white px-10 py-4 text-secondary tracking-wider font-bold rounded-lg w-full"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
