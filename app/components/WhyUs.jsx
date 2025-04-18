import React from "react";
import { motion } from "motion/react";
import { whyUs } from "@/assets/assets";

const WhyUs = ({ isDarkMode }) => {
  return (
    <motion.div
      className="w-full px-[12%] py-[120px] scroll-mt-20 bg-white "
      id="why-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="lg:flex-1 lg:w-2/5 relative ">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-left mb-2 text-base font-Inter text-black"
        >
          On demand design request
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-left text-5xl font-Outfit  text-black "
        >
          Why partner with us
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-10 dark:text-black"
      >
        {whyUs.map((whyData, index) => (
          <div key={index}>
            <h2
              className="font-Inter text-2xl font-normal pb-4"
              style={{ color: `${whyData.colorTone}` }}
            >
              {whyData.title}
            </h2>
            <p className="leading-[1.5] text-gray-700 font-Inter">
              {whyData.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
