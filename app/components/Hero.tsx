"use client";
import Image from "next/image";
import heroImage from "../assets/images/hero.png";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-green-200  py-5 md:min-h-[60vh] w-100 mt-20 relative max-sm:flex-col"
    >
      <Image
        src={heroImage}
        alt="Hero image"
        className="max-sm:hidden sm:ms-auto w-50 h-50 md:w-100 md:h-100"
      />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        transition={{ duration: 1, ease: "linear" }}
        animate={{ opacity: 1, x: 0 }}
        className="hero-dec px-2 py-16 sm:py-0 sm:absolute sm:top-9 sm:left-4 md:top-16 md:left-10"
      >
        <h1 className="text-[var(--main-color)] leading-normal tracking-wider	 font-bold text-3xl md:text-6xl ">
          Shopping and <br />
          Department Store{" "}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.3, ease: "linear" }}
          animate={{ opacity: 1, y: 0 }}
          className=" text-[var(--sec-color)] font-semibold tracking-wider w-[90%] sm:w-[70%] my-8 md:text-lg"
        >
          Shopping is bit of a relaxing hobby for me , which is sometimes
          troubling for bank balance{" "}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.3, ease: "linear" }}
          animate={{ opacity: 1, y: 0 }}
          href={"#categories"}
          className={`border-2 block w-fit  rounded-3xl bg-[var(--main-color)] px-5 py-3 text-white text-lg lg:text-xl cursor-pointer hover:bg-green-600 hover:text-green-200`}
        >
          Get Started
        </motion.a>
      </motion.div>
    </motion.main>
  );
}

export default Hero;
