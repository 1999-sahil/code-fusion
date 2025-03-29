"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  "/marquees/angular.svg",
  "/marquees/docker.svg",
  "/marquees/express.svg",
  "/marquees/github.svg",
  "/marquees/git.svg",
  "/marquees/mongo.svg",
  "/marquees/sql.svg",
  "/marquees/next.svg",
  "/marquees/node.svg",
  "/marquees/npm.svg",
  "/marquees/react.svg",
  "/marquees/typescript.svg",
  "/marquees/vercel.svg",
]

function Marquee() {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 md:gap-8 mx-auto">
      <MarqueeItem images={data} from={0} to={"-100%"} />
      <MarqueeItem images={data} from={"-100%"} to={0} />
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
    <div className="max-md:max-w-[440px] md:max-w-2xl flex gap-6 lg:gap-10 items-center marqueeMaskGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-12 lg:gap-16"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={80}
            height={80}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-12 lg:gap-16"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={80}
            height={80}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          />
        ))}
      </motion.div>
    </div>
  )
}