"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  "/marquees/nextjs.svg",
  "/marquees/github.svg",
  "/marquees/npm.svg",
  "/marquees/reactjs.svg",
  "/marquees/js.svg",
  "/marquees/ts.svg",
  "/marquees/nodejs.svg",
  "/marquees/git.svg",
  "/marquees/vercel.svg",
  "/marquees/angular.svg",
  "/marquees/docker.svg",
  "/marquees/mongodb.svg",
  "/marquees/sql.svg",
  "/marquees/vuejs.svg"
];

function Marquee() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <MarqueeItem images={data} from={0} to={"-100%"} />
    </div>
  );
}

export default Marquee;

interface MarqueeProps {
  images: string[];
  from: number | string;
  to: number | string;
};

const MarqueeItem = ({ images, from, to}: MarqueeProps) => {
  return (
    <div className="max-w-[300px] md:max-w-2xl flex gap-5 items-center marqueeMaskGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-5"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={50}
            height={50}
            className="max-md:w-10 max-md:h-10"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-5"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={50}
            height={50}
            className="max-md:w-10 max-md:h-10"
          />
        ))}
      </motion.div>
    </div>
  )
}