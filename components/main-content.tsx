"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
    Blocks,
    Check,
    DatabaseZap,
    Frame,
    LayoutList,
    Workflow,
    PencilRuler,
    CodeXml
} from "lucide-react";

function MainContent() {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 px-2">
      {/** block-1 (DSA) */}
      <div className="lg:col-span-2 w-full h-full lg:h-[300px] flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="flex flex-col lg:flex-row p-4 lg:px-6">
            {/** heading */}
            <div className="relative flex flex-col gap-2 lg:gap-4 lg:w-1/2">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <Frame className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Data Structure</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                    Build your Foundation. Learn <span className="text-[#333] dark:text-neutral-200">Arrays, Strings, Linked list, Stack and Queues, Trees, Graphs,</span> etc to enhance your problem solving skills.
                </p>
                <div className="absolute bottom-0 hidden lg:block">
                    <div className="flex items-center gap-1 text-[#333] dark:text-neutral-100">
                        <Check className="size-4" />
                        <h2 className="text-xs font-medium font-openSans">Arrays</h2>
                    </div>
                    <div className="flex items-center gap-1 text-[#333] dark:text-neutral-100">
                        <Check className="size-4" />
                        <h2 className="text-xs font-medium font-openSans">Linked List</h2>
                    </div>
                    <div className="flex items-center gap-1 text-[#333] dark:text-neutral-100">
                        <Check className="size-4" />
                        <h2 className="text-xs font-medium font-openSans">Stack and Queues</h2>
                    </div>
                    <div className="flex items-center gap-1 text-[#333] dark:text-neutral-100">
                        <Check className="size-4" />
                        <h2 className="text-xs font-medium font-openSans">Trees</h2>
                    </div>
                    <div className="flex items-center gap-1 text-[#333] dark:text-neutral-100">
                        <Check className="size-4" />
                        <h2 className="text-xs font-medium font-openSans">Graphs</h2>
                    </div>
                </div>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center lg:w-1/2 p-4">
                {theme === "dark"
                 ? <Image src="/features/dsa-d.svg" alt="" width={300} height={300} />
                 : <Image src="/features/dsa-l.svg" alt="" width={300} height={300} />
                }
            </div>
        </div>
      </div>

      {/** block-2 (algo) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <Blocks className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Algorithms</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                Increase your problem solving skills. Learn <span className="text-[#333] dark:text-neutral-200">BFS, DFS, Dynamic Programming, Greedy Algorithm, Divide and Conquer.</span>
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/algo-d.svg" alt="" width={100} height={200} />
                 : <Image src="/features/algo-l.svg" alt="" width={100} height={200} />
                }
            </div>
        </div>
      </div>

      {/** block-3 (Frontend) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <Workflow className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Frontend Development</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                Dive in and learn React.js from scratch! Learn <span className="text-[#333] dark:text-neutral-200">React, Hooks, Redux, React Router, Next.js,</span> and way more! 
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/react-d.svg" alt="" width={120} height={200} />
                 : <Image src="/features/react-l.svg" alt="" width={120} height={200} />
                }
            </div>
        </div>
      </div>

      {/** block-4 (UI) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <LayoutList className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Beautiful UI's</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                  Design and Create beautiful User Interfaces with CSS libraries like <span className="text-[#333] dark:text-neutral-200">Tailwind CSS, Bootstrap, Shadcn-UI, Material UI</span> and way more! 
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/ui-d.svg" alt="" width={100} height={200} />
                 : <Image src="/features/ui-l.svg" alt="" width={100} height={200} />
                }
            </div>
        </div>
      </div>

      {/** block-5 (backend) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <DatabaseZap className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Backend Development</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                Mastering Node by building a real-world <span className="text-[#333] dark:text-neutral-200">RESTful API, MySQL, MongoDB </span> and web app (with authentication, Node,js security, payments and more) 
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/back-d.svg" alt="" width={100} height={200} />
                 : <Image src="/features/back-l.svg" alt="" width={100} height={200} />
                }
            </div>
        </div>
      </div>

      {/** block-6 (programming) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <CodeXml className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">Programming</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                Learn Coding languages to build your foundation. Learn <span className="text-[#333] dark:text-neutral-200">Java, Javascript, Typescript, Python, C++,</span> and more. 
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/code-d.svg" alt="" width={120} height={200} />
                 : <Image src="/features/code-l.svg" alt="" width={120} height={200} />
                }
            </div>
        </div>
      </div>

      {/** block-7 (system design) */}
      <div className="w-full h-full lg:h-[300px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/80 rounded-lg">
        <div className="p-4 lg:py-6 h-full flex flex-col items-center justify-between">
            {/** heading */}
            <div className="flex flex-col gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-black dark:text-white">
                    <PencilRuler className=" size-4" />
                    <h2 className=" font-semibold font-openSans text-base">System Design</h2>
                </div>
                <p className="leading-5 text-[12px] font-raleway font-semibold text-neutral-500 dark:text-neutral-400">
                Master Proven Design Techniques and <span className="text-[#333] dark:text-neutral-200">SOLID Principles </span>to Build Robust and Scalable Systems! Learn LLD and HLD.
                </p>
            </div>
            {/** image */}
            <div className="hidden lg:flex items-center justify-center w-full h-full py-6">
                {theme === "dark"
                 ? <Image src="/features/system-d.svg" alt="" width={100} height={200} />
                 : <Image src="/features/system-l.svg" alt="" width={100} height={200} />
                }
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
