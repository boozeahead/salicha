import React from "react";
import Image from "next/image";
import salichalogo from "../../assets/salichalogo.svg";
import salichalogo_white from "../../assets/salichalogo-white.svg";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? salichalogo_white : salichalogo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          <Link href="mailto:info@salicha.com">info@salicha.com</Link>
          <Link href="tel:+9779808393215"> +9779808393215 </Link>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-top border-gray-400 mx-[10%] mt-12 py-6 ">
        <p>Copyright © 2025 salicha. All right reserved</p>
        <Link href={"./join"}>Join</Link>
        {/* <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
