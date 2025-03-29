"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LoaderCircle, Proportions } from "lucide-react";
import { useTheme } from "next-themes";

function UserInterface() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering the theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a fallback or nothing until the component is mounted
    return null;
  }

  return (
    <div className="w-full h-full relative overflow-hidden border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="sm:h-[100px] space-y-2">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <Proportions className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">Beautiful UI&apos;s</h2>
        </div>

        {/** description */}
        <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
          Design and Create beautiful User Interfaces with CSS libraries like{" "}
          <span className="text-[#111] dark:text-neutral-200">
            Tailwind CSS, Bootstrap, Shadcn-UI, Material UI
          </span>{" "}
          and way more!
        </p>
      </div>
      {/** image */}
      <div className="sm:h-[170px] w-full absolute top-[40%] left-0 max-sm:hidden">
        <div className="absolute top-16 flex items-center justify-center w-full">
            <span className="z-10 bg-white dark:bg-neutral-800 flex items-center gap-1 text-[12px] text-neutral-600 dark:text-neutral-200 ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-full px-4 py-1">
                <LoaderCircle className="size-2.5 animate-spin duration-1000" /> codefusion <h3 className="text-emerald-500">user interface</h3>
            </span>
        </div>
        {theme === "dark" ? (
          <Image
            src="/blocks/ui-dark.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        ) : (
          <Image
            src="/blocks/ui-light.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        )}
      </div>
    </div>
  );
}

export default UserInterface;
