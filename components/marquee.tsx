"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

{/*
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
*/}

const data = [
  "/motion/angularjs.png",
  "/motion/dockerjs.png",
  "/motion/github.png",
  "/motion/gitjs.png",
  "/motion/mongo.png",
  "/motion/sql.png",
  "/motion/next.png",
  "/motion/node.png",
  "/motion/npmjs.png",
  "/motion/reactjs.png",
  "/motion/tsjs.png",
  "/motion/verceljs.png",
  "/motion/vue.png",
]

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
    <div className="max-md:max-w-[440px] md:max-w-2xl flex gap-6 lg:gap-10 items-center marqueeMaskGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6 lg:gap-10"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={80}
            height={80}
            className="aspect-video mix-blend-color-burn image-color"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6 lg:gap-10"
      >
        {images.map((item, index) => (
          <Image
            src={item}
            alt="marquee-images"
            key={index}
            width={80}
            height={80}
            className="aspect-video mix-blend-color-burn image-color"
          />
        ))}
      </motion.div>
    </div>
  )
}