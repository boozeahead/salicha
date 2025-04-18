import { serviceData, assets } from "@/assets/assets";
import { motion } from "motion/react";

import Image from "next/image";
import React from "react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      className="w-full px-[12%] pt-[120px] scroll-mt-20 bg-yellow flex lg:flex-row flex-col-reverse  "
      id="services"
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
          Services we offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-left text-5xl font-Outfit  text-black lg:w-3/5"
        >
          Master in Variety of Disciplinary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-left max-w-2xl mt-5 mb-12 font-Inter  text-black lg:text-2xl"
        >
          Design services are all about crafting visuals and experiences that
          help businesses or individuals stand out and connect with their
          audience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,

            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="absolute -bottom-10 left-0"
          style={cloud}
        />
      </div>
      <div className="lg:flex-1 lg:w-3/5 text-center">
        <ul className="flex flex-col items-center justify-between">
          <motion.li
            initial={{ y: -100, rotate: 45 }}
            whileInView={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white text-black  font-semibold w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Lading Page
          </motion.li>
          <motion.li
            initial={{ y: -100, x: 10, rotate: -45 }}
            whileInView={{ y: 0, x: -100, rotate: -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-black text-white font-semibold w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Branding
          </motion.li>
          <motion.li
            initial={{ y: -80, x: 0, rotate: 65 }}
            whileInView={{ y: -50, x: 100, rotate: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white font-semibold text-black w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Logos
          </motion.li>
          <motion.li
            initial={{ y: -80, x: 0, rotate: -10 }}
            whileInView={{ y: -50, x: -40, rotate: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white font-semibold text-black w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Mobile Apps
          </motion.li>
          <motion.li
            initial={{ y: -100, x: 0, rotate: 45 }}
            whileInView={{ y: -90, x: 110, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-black font-semibold text-white w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Webflow
          </motion.li>
          <motion.li
            initial={{ y: -70, x: 0, rotate: 45 }}
            whileInView={{ y: -90, x: -110, rotate: -10 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white font-semibold text-black w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Social Media
          </motion.li>
          <motion.li
            initial={{ y: -100, x: 0, rotate: 105 }}
            whileInView={{ y: -120, x: 60, rotate: 5 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white font-semibold text-black w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Email Design
          </motion.li>

          <motion.li
            initial={{ y: -150, rotate: 45 }}
            whileInView={{ y: -120, rotate: -2 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-black text-white font-semibold w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Packaging & Mercendise Design
          </motion.li>
          <motion.li
            initial={{ y: -150, x: 50, rotate: 45 }}
            whileInView={{ y: -120, x: -140, rotate: 30 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white text-black font-semibold w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Icon
          </motion.li>
          <motion.li
            initial={{ y: -200, x: 50, rotate: 45 }}
            whileInView={{ y: -170, x: 0, rotate: -5 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white text-black font-semibold w-auto p-2 lg:text-3xl text-xl inline-block font-Inter"
          >
            Print Design
          </motion.li>
        </ul>
      </div>
    </motion.div>

    // <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ duration: 1 }}
    //       id="services"
    //       className="w-full px-[12%] py-10 scroll-mt-20 bg-yellow "
    //     >
    //       <motion.h4
    //         initial={{ y: -20, opacity: 0 }}
    //         whileInView={{ y: 0, opacity: 1 }}
    //         transition={{ duration: 0.5, delay: 0.3 }}
    //         className="text-center mb-2 text-lg font-Inter text-black"
    //       >
    //         Services we offer
    //       </motion.h4>
    //       <motion.h2
    //         initial={{ y: -20, opacity: 0 }}
    //         whileInView={{ y: 0, opacity: 1 }}
    //         transition={{ duration: 0.5, delay: 0.5 }}
    //         className="text-center text-5xl font-Outfit  text-black"
    //       >
    //         Master in Variety of Disciplinary
    //       </motion.h2>
    //       <motion.p
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1 }}
    //         transition={{ duration: 0.5, delay: 0.7 }}
    //         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Inter  text-black"
    //       >
    //         Design services are all about crafting visuals and experiences that help
    //         businesses or individuals stand out and connect with their audience.
    //       </motion.p>
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1 }}
    //         transition={{ duration: 0.6, delay: 0.9 }}
    //         className="grid grid-cols-auto gap-6 my-10"
    //       >
    //         {serviceData.map(({ icon, title, description, link }, index) => (
    //           <motion.div
    //             whileHover={{ scale: 1.05 }}
    //             transition={{ duration: 0.3 }}
    //             key={index}
    //             className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
    //           >
    //             <Image src={icon} alt="" className="w-10" />
    //             <h3 className="text-lg my-4 text-gray-700">{title}</h3>
    //             <p className="text-sm text-gray-600 leading-5">{description}</p>
    //             {/* <a href="{link}" className="flex items-center gap-2 text-sm mt-5">
    //               Read more{" "}
    //               <Image
    //                 src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
    //                 className="w-4"
    //                 alt=""
    //               ></Image>
    //             </a> */}
    //           </motion.div>
    //         ))}
    //       </motion.div>
    //     </motion.div>
  );
};

const cloud = {
  width: 119,
  height: 71.14,

  backgroundImage:
    'url(\'data:image/svg+xml,<svg width="119" height="76" viewBox="0 0 119 76" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_1082_423)"><circle cx="45.6679" cy="25.4612" r="25.0295" fill="%2398EAFC"/><circle cx="40.8376" cy="49.6125" r="21.9557" fill="%2398EAFC"/><circle cx="75.0885" cy="41.7084" r="21.0775" fill="%2398EAFC"/><circle cx="102.533" cy="41.928" r="16.4668" fill="%2398EAFC"/><circle cx="18.8819" cy="41.7084" r="18.8819" fill="%2398EAFC"/></g><defs><filter id="filter0_d_1082_423" x="0" y="0.431641" width="119" height="75.1365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.0603175 0 0 0 0 0.0928571 0 0 0 0 0.1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1082_423"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1082_423" result="shape"/></filter></defs></svg>\')',
};

export default Services;
