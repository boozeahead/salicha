"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Footer from "../components/Footer";
import logoiconsalincha from "../../assets/logoiconsalincha.svg";
import { title } from "process";

const JoinPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3fc5aba-a4f6-4847-8511-a1bcd42ff18a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="w-full fixed px-5 g:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="./">
          <Image
            src={logoiconsalincha}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
      </div>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-[600px] -mb-[150px] flex flex-col items-center justify-center gap-4 relative  z-10">
        <h4 className="text-center mb-2 text-lg font-Outfit">
          Apply as a Designer
        </h4>
        <h2 className="text-center text-5xl font-Outfit">
          Graphic, Web & Motion
        </h2>
        <p className="text-center max-w-2x mx-auto mt-5   font-Inter">
          We are actively hiring designers
        </p>
      </div>
      <div className="flex z-50 relative">
        <form className="lg:w-[600px] mx-auto" onSubmit={onSubmit}>
          <div className="grid   gap-2 mt-6 mb-4">
            <label className="  font-medium block" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="fullname"
              id="fullname"
            />
          </div>
          <div className="grid gap-2 mt-6 mb-4">
            <label className="  font-medium block" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="email"
              id="email"
            />
          </div>
          <div className="grid gap-2 mt-6 mb-4">
            <label className="font-medium block" htmlFor="phone">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="phone"
              id="phone"
            />
          </div>

          {/* <div className="grid gap-2 mt-6 mb-4">
            <label className="font-medium block" htmlFor="upload">
              Upload Your Resume
            </label>
            <input
              type="file"
              placeholder="Upload your resume"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="upload"
              accept="image/*,.pdf, .doc,.docx"
              id="upload"
            />
          </div> */}

          <div className="grid   gap-2 mt-6 mb-4">
            <label className="font-medium   block" htmlFor="design_category">
              Design Category
            </label>
            <select
              className=" p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
              id="design_category"
              name="design category"
              required
            >
              <option value="">-- Select Design Category --</option>
              <option>Graphics</option>
              <option>Motion</option>
              <option>UI &amp; UX</option>
              <option>Branding</option>
              <option>Social Media Designer</option>
              <option>Web Designer</option>
            </select>
          </div>
          <div className="grid gap-2 mt-6 mb-4">
            <label className="font-medium   block" htmlFor="experience">
              Years of Experience
            </label>
            <select
              className=" p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
              id="experience"
              name="experience"
              required
            >
              <option value="">-- Select your experince --</option>
              <option>1-2 years</option>
              <option>3-5 years</option>
              <option>5-10 years</option>
              <option>10+ years</option>
            </select>
          </div>
          <div className="grid   gap-2 mt-6 mb-4">
            <label className="  font-medium block" htmlFor="linkedin">
              Linkedin Profile
            </label>
            <input
              type="text"
              placeholder="Enter your Linkedin profile"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="linkedin"
              id="linkedin"
            />
          </div>
          <div className="grid   gap-2 mt-6 mb-4">
            <label className="font-medium   block" htmlFor="coverletter">
              Why you want to join
            </label>
            <textarea
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
              name="cover letter"
              id="converletter"
            ></textarea>
          </div>
          <div className="grid gap-2 mt-6 mb-4">
            <button
              type="submit"
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
            >
              Submit now{" "}
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </button>
            <p className="mt-4">{result}</p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JoinPage;
