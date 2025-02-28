"use client";

import { Box, Check } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Dsa() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="space-y-3">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <Box className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">
            Data structures and Algorithms
          </h2>
        </div>

        {/** description */}
        <div className="sm:h-[120px] space-y-3">
          <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
            Build your Foundation. Learn all types of{" "}
            <span className="text-[#333] dark:text-neutral-200">
              data structures and algorithms techniques
            </span>{" "}
            and enhance your problem solving skills.
          </p>
          <div className="max-md:hidden grid grid-cols-2 gap-2">
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Arrays and Strings
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Linked List
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Stack and Queue
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Trees and Graphs
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Sorting and Searching
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200">
              <Check className="text-green-500 size-3" />
              Recursion and Backtracking
            </span>
          </div>
        </div>

        {/** image */}
        <div className="h-full w-full max-sm:hidden absolute top-[12%] right-[2px]">
          {mounted ? (
              <Image
                src={
                  theme === "dark"
                    ? "/blocks/dsa-dark.svg"
                    : "/blocks/dsa-light.svg"
                }
                alt="dsa-dark"
                fill
                className="object-cover object-center"
              />
            ) : (
              <div className="h-full w-full bg-neutral-200 dark:bg-neutral-800" /> // Placeholder to avoid mismatch
            )}
        </div>
      </div>
    </div>
  );
}

export default Dsa;
