"use client";

import React from "react";
import MarqueeEffect from "react-fast-marquee";
import Image from "next/image";

function Marquee() {
  const data = [
    "/nextjs.svg",
    "/github.svg",
    "/npm.svg",
    "/reactjs.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/node-js.svg",
    "/git.svg",
    "/vscode.svg",
  ];

  return (
    <div className="max-w-2xl bg-red-500">
      marquee effect
    </div>
  );
}

export default Marquee;
