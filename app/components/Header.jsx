import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div className="dark:bg-stone-900">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,

              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="absolute lg:-left-40 top-20 left-0"
            style={leaf}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,

              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="absolute lg:-right-40 top-20 right-0  "
            style={tube}
          />
          <motion.div
            initial={{ opacity: 0, scale: -0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,

              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="absolute lg:-left-20 -bottom-10 left-0"
            style={decorate_1}
          />
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.4,

              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="absolute lg:-right-20 -bottom-5 right-0"
            style={decorate_2}
          />
        </div>
        <div className="  flex flex-col items-center   gap-4  z-10">
          {/* <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Inter"
        >
          Design with passion
          <Image src={assets.hand_icon} alt="" className="rounded-full w-12" />
        </motion.h3> */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-6dl lg:text-7xl font-Inter font-bold leading-[1] lg:leading-[1.1]"
          >
            Exceptional design, unparalleled impact.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-3xl md-auto font-Inter lg:text-2xl "
          >
            Delivering perfect digital designs with expertise and precision.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 dark:bg-transparent  bg-black"
            >
              contact{" "}
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

const leaf = {
  width: 38,
  height: 38,

  backgroundImage:
    'url(\'data:image/svg+xml,<svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_1177_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 18.9924L19.0002 18.9924C19.0004 19.0986 19.0043 19.2041 19.0118 19.309C19.0039 19.3099 18.9961 19.3108 18.9883 19.3118C18.9959 19.2059 18.9998 19.0995 19.0001 18.9924ZM13.6017 24.9057C12.36 25.3171 10.969 25.5476 9.50005 25.5476C4.25332 25.5476 0 22.6078 0 18.9813C0 15.3549 4.25332 12.4151 9.50005 12.4151C10.7334 12.4151 11.9119 12.5776 12.9931 12.8732C12.7175 11.8729 12.5542 10.7908 12.5265 9.65911C12.3983 4.41395 15.2332 0.0900363 18.8585 0.0013844C22.4839 -0.0872675 25.5268 4.09291 25.655 9.33807C25.6848 10.555 25.555 11.7224 25.2929 12.7988C26.2948 12.5504 27.3747 12.4151 28.5002 12.4151C33.7469 12.4151 38.0003 15.3549 38.0003 18.9813C38.0003 22.6078 33.7469 25.5476 28.5002 25.5476C27.5278 25.5476 26.5896 25.4466 25.7062 25.259C26.0065 26.2994 26.1847 27.4314 26.2137 28.6179C26.342 33.8631 23.507 38.187 19.8817 38.2757C16.2563 38.3643 13.2135 34.1841 13.0852 28.939C13.0501 27.5028 13.2371 26.1357 13.6017 24.9057Z" fill="%23FCFF7A"/></g><defs><filter id="filter0_d_1177_4" x="0" y="0" width="38.0002" height="42.2771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.0988235 0 0 0 0 0.1 0 0 0 0 0.0478431 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_4"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1177_4" result="shape"/></filter></defs></svg>\')',
};

const tube = {
  width: 86,
  height: 86,

  backgroundImage:
    'url(\'data:image/svg+xml,<svg width="86" height="90" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_1082_391)"><g filter="url(%23filter1_d_1082_391)"><circle cx="43" cy="43" r="43" fill="%2399EAFC"/></g><circle cx="19.7568" cy="19.7568" r="19.7568" transform="matrix(1 0 0 -1 23.2432 62.7567)" fill="%2311001F"/></g><defs><filter id="filter0_d_1082_391" x="0" y="0" width="86" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.0607143 0 0 0 0 0.0928571 0 0 0 0 0.1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1082_391"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1082_391" result="shape"/></filter><filter id="filter1_d_1082_391" x="0" y="0" width="86" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.917647 0 0 0 0 0.988235 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1082_391"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1082_391" result="shape"/></filter></defs></svg>\')',
};

const decorate_1 = {
  width: 90,
  height: 90,

  backgroundImage:
    'url(\'data:image/svg+xml,<svg width="90" height="94" viewBox="0 0 90 94" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_1082_394)"><path d="M68.5887 83.62L56.3599 78.9007L49.4373 90L40.4802 80.4574L29.4117 87.4623L25.4912 74.9927L12.4762 76.5164L14.3677 63.5865L1.97946 59.3222L9.31452 48.497L0 39.2942L11.327 32.7113L6.93915 20.4007L20.0092 19.3648L21.4168 6.37455L33.64 11.0938L40.5627 0L49.5198 9.53715L60.5883 2.53228L64.5088 15.0018L77.5293 13.4836L75.6323 26.4135L88.026 30.6724L80.6909 41.503L90 50.7004L78.6785 57.2832L83.0609 69.5993L69.9963 70.6297L68.5887 83.62Z" fill="%23FFA0F2"/></g><defs><filter id="filter0_d_1082_394" x="0" y="0" width="90" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.063 0 0 0 0 0.0889 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1082_394"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1082_394" result="shape"/></filter></defs></svg>\')',
};

const decorate_2 = {
  width: 42.7,
  height: 41.94,

  backgroundImage:
    'url(\'data:image/svg+xml,<svg width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_1082_395)"><path d="M15.3691 36.2146C15.3691 33.0555 17.9376 25.0189 21.0916 25.0189C24.2456 25.0189 26.814 33.0555 26.814 36.2146C26.814 37.7323 26.2111 39.1878 25.1379 40.261C24.0647 41.3341 22.6092 41.937 21.0916 41.937C19.5739 41.937 18.1184 41.3341 17.0452 40.261C15.972 39.1878 15.3691 37.7323 15.3691 36.2146Z" fill="%237967E5"/><path d="M8.8562 31.7884C10.3253 28.9888 16.3277 23.0558 19.1298 24.5327C21.9319 26.0095 20.4628 34.308 18.9937 37.1179C18.6507 37.794 18.1767 38.3953 17.5993 38.8867C17.0219 39.3781 16.3527 39.7499 15.6304 39.9805C14.9081 40.211 14.1472 40.2957 13.3918 40.2296C12.6365 40.1636 11.9018 39.9481 11.2305 39.5957C10.5592 39.2433 9.96464 38.7609 9.48132 38.1768C8.99801 37.5926 8.63559 36.9182 8.41516 36.1927C8.19472 35.4673 8.12065 34.7052 8.19724 33.9509C8.27384 33.1966 8.49958 32.465 8.86134 31.7987L8.8562 31.7884Z" fill="%237967E5"/><path d="M5.14366 24.8352C7.74545 23.0373 15.8128 20.5845 17.6081 23.1863C19.4035 25.7881 14.2461 32.4608 11.6469 34.2561C11.029 34.7018 10.3285 35.0196 9.58623 35.1911C8.84399 35.3625 8.07499 35.3841 7.3243 35.2546C6.5736 35.1251 5.85631 34.847 5.21444 34.4367C4.57257 34.0265 4.01903 33.4922 3.58627 32.8653C3.1535 32.2384 2.85021 31.5314 2.69416 30.7857C2.53811 30.0401 2.53244 29.2708 2.67748 28.523C2.82252 27.7751 3.11537 27.0637 3.53885 26.4305C3.96232 25.7973 4.50791 25.2549 5.14366 24.8352Z" fill="%237967E5"/><path d="M5.0876 16.9657C8.22619 16.5856 16.5119 18.16 16.9023 21.2986C17.2927 24.4372 9.61569 27.9482 6.4771 28.3284C4.97033 28.5113 3.45261 28.0881 2.25783 27.152C1.06305 26.2158 0.289073 24.8434 0.106176 23.3367C-0.0767222 21.8299 0.346432 20.3122 1.28256 19.1174C2.21868 17.9226 3.59109 17.1486 5.09787 16.9657H5.0876Z" fill="%237967E5"/><path d="M8.69544 9.96734C11.6517 11.0897 18.255 16.3344 17.1352 19.2881C16.0154 22.2418 7.59103 21.7897 4.63736 20.6699C3.21811 20.1318 2.07076 19.0519 1.44772 17.6678C0.824679 16.2837 0.776993 14.7088 1.31513 13.2896C1.85326 11.8703 2.93314 10.723 4.31722 10.0999C5.7013 9.47691 7.27619 9.42921 8.69544 9.96734Z" fill="%237967E5"/><path d="M15.1454 5.44405C17.2412 7.80956 20.6521 15.525 18.2866 17.6209C15.9211 19.7167 8.67303 15.3992 6.57722 13.0337C6.07887 12.4711 5.69622 11.8159 5.45111 11.1054C5.206 10.3949 5.10322 9.64309 5.14865 8.8929C5.19408 8.1427 5.38683 7.4088 5.7159 6.73309C6.04496 6.05739 6.50389 5.45312 7.06649 4.95477C7.62909 4.45643 8.28434 4.07378 8.99482 3.82867C9.70529 3.58355 10.4571 3.48078 11.2073 3.52621C11.9575 3.57165 12.6914 3.7644 13.3671 4.09346C14.0428 4.42253 14.6471 4.88146 15.1454 5.44405Z" fill="%237967E5"/><path d="M22.9554 4.44049C23.7105 7.50716 23.1455 15.9238 20.0788 16.6789C17.0121 17.434 12.5996 10.2579 11.8419 7.17584C11.6621 6.44612 11.6279 5.68813 11.741 4.94515C11.8542 4.20218 12.1126 3.48878 12.5015 2.84567C12.8903 2.20255 13.4021 1.64233 14.0074 1.19699C14.6128 0.751646 15.3 0.429906 16.0297 0.250132C16.7594 0.0703576 17.5174 0.0360688 18.2604 0.149232C19.0034 0.262394 19.7168 0.520794 20.3599 0.909666C21.003 1.29854 21.5632 1.81027 22.0086 2.41565C22.4539 3.02103 22.7756 3.70819 22.9554 4.43792V4.44049Z" fill="%237967E5"/><path d="M30.3377 7.17961C29.5826 10.2489 25.1727 17.4378 22.1034 16.6827C19.0342 15.9276 18.4691 7.51093 19.2268 4.44426C19.3964 3.70409 19.7117 3.00509 20.1541 2.38798C20.5966 1.77086 21.1575 1.24799 21.804 0.849811C22.4506 0.451637 23.17 0.186127 23.9202 0.0687625C24.6704 -0.048602 25.4365 -0.0154751 26.1738 0.166206C26.9111 0.347888 27.6049 0.674494 28.2147 1.12699C28.8245 1.57949 29.3381 2.14882 29.7257 2.80182C30.1132 3.45483 30.3669 4.17844 30.472 4.93048C30.5771 5.68252 30.5315 6.44795 30.3377 7.18218V7.17961Z" fill="%237967E5"/><path d="M35.5977 13.0345C33.5019 15.4 26.2564 19.7124 23.8909 17.6217C21.5254 15.531 24.9363 7.81039 27.0321 5.44489C28.0429 4.32507 29.455 3.64969 30.9612 3.56566C32.4674 3.48162 33.9458 3.99574 35.0749 4.99617C36.204 5.99661 36.8924 7.40242 36.9903 8.90778C37.0882 10.4131 36.5877 11.8963 35.5977 13.0345Z" fill="%237967E5"/><path d="M37.5443 20.6703C34.5881 21.7902 26.1662 22.2448 25.0464 19.2885C23.9266 16.3323 30.53 11.0902 33.4836 9.9678C34.9029 9.42932 36.4779 9.4767 37.8622 10.0995C39.2465 10.7223 40.3268 11.8695 40.8652 13.2888C41.4037 14.708 41.3563 16.283 40.7335 17.6673C40.1107 19.0517 38.9635 20.1319 37.5443 20.6703Z" fill="%237967E5"/><path d="M35.7132 28.3283C32.5772 27.9482 24.9079 24.4346 25.288 21.2986C25.6682 18.1625 33.9564 16.5855 37.1027 16.9657C37.8488 17.0562 38.5697 17.2928 39.2244 17.662C39.879 18.0312 40.4545 18.5257 40.918 19.1173C41.3815 19.7089 41.724 20.386 41.9259 21.11C42.1277 21.8339 42.185 22.5905 42.0944 23.3366C42.0038 24.0827 41.7672 24.8036 41.3981 25.4582C41.0289 26.1129 40.5344 26.6884 39.9428 27.1519C39.3512 27.6154 38.6741 27.9579 37.9501 28.1597C37.2262 28.3616 36.4696 28.4188 35.7235 28.3283H35.7132Z" fill="%237967E5"/><path d="M30.5355 34.2622C27.9337 32.4643 22.7763 25.7865 24.5717 23.1924C26.367 20.5983 34.4369 23.0383 37.0361 24.8361C38.2854 25.6982 39.1411 27.0212 39.4149 28.5141C39.6888 30.0071 39.3583 31.5476 38.4963 32.7969C37.6342 34.0462 36.3112 34.9019 34.8183 35.1757C33.3254 35.4495 31.7848 35.1191 30.5355 34.2571V34.2622Z" fill="%237967E5"/><path d="M23.1922 37.1083C21.7231 34.3087 20.2591 26.0025 23.0561 24.5231C25.8531 23.0437 31.858 28.9793 33.3297 31.7788C34.0351 33.1228 34.1777 34.6919 33.7261 36.141C33.2745 37.5901 32.2658 38.8005 30.9218 39.5059C29.5779 40.2112 28.0087 40.3538 26.5596 39.9023C25.1105 39.4507 23.9002 38.442 23.1948 37.098L23.1922 37.1083Z" fill="%237967E5"/><path d="M21.9946 30.3885C27.2238 30.3885 31.4628 26.1494 31.4628 20.9203C31.4628 15.6911 27.2238 11.452 21.9946 11.452C16.7654 11.452 12.5264 15.6911 12.5264 20.9203C12.5264 26.1494 16.7654 30.3885 21.9946 30.3885Z" fill="%237967E5"/></g><defs><filter id="filter0_d_1082_395" x="0.0644531" y="0" width="42.0718" height="45.937" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.0528384 0 0 0 0 0.0449782 0 0 0 0 0.1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1082_395"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1082_395" result="shape"/></filter></defs></svg>\')',
};
export default Header;
