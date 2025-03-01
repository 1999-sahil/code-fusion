'use client';

import { DatabaseZap } from 'lucide-react';
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function Database() {
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
    <div className="w-full h-full relative border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="sm:h-[100px] space-y-2">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <DatabaseZap className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">DBMS</h2>
        </div>

        {/** description */}
        <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
          Fundamentals of Database Engineering. Learn {" "}
          <span className="text-[#111] dark:text-neutral-200">
            ACID, Indexing, Partitioning, Sharding, Concurrency, DB Engines,
          </span>{" "}
          and more!
        </p>
      </div>
      {/** image */}
      <div className="sm:h-[160px] w-full absolute top-[33%] left-0 max-sm:hidden">
        {theme === "dark" ? (
          <Image
            src="/blocks/dbms-dark.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        ) : (
          <Image
            src="/blocks/dbms-light.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        )}
      </div>
    </div>    
  )
}

export default Database