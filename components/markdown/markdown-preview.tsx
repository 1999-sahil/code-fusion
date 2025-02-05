import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.min.css";

import { cn } from "@/lib/utils";
import { icons } from "@/lib/icons";

import CopyButton from "./copy-btn";
import { FaLinkedin, FaSquareXTwitter, FaYCombinator } from "react-icons/fa6";
import { RiHome3Line } from "react-icons/ri";
import { PiTerminalFill } from "react-icons/pi";
import { ArrowRight } from "lucide-react";

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

function MarkdownPreview({ content, className }: MarkdownPreviewProps) {
  return (
    <>
      <Markdown
        rehypePlugins={[rehypeHighlight]}
        className={cn(
          "space-y-6 text-sm lg:text-[1rem] font-inter font-normal dark:text-[hsl(0,1%,71%)] text-[hsl(0_0%_32%)] w-full max-md:min-w-full max-w-[80%] leading-5 lg:leading-6 rounded-lg",
          className
        )}
        components={{
          h1: ({ node, ...props }) => {
            return (
              <h1
                {...props}
                className="text-3xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          h2: ({ node, ...props }) => {
            return (
              <h1
                {...props}
                className="text-2xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          h3: ({ node, ...props }) => {
            return (
              <h1
                {...props}
                className="text-xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");

            if (match?.length) {
              let Icon = PiTerminalFill;

              // id to implement copy button
              const id = (Math.floor(Math.random() * 100) + 1).toString();

              // to rendering the icon with given extension
              const isMatch = icons.hasOwnProperty(match[1]);

              if (isMatch) {
                Icon = icons[match[1] as keyof typeof icons];
              }

              return (
                <div className="bg-neutral-100 dark:bg-neutral-800/50 border-neutral-200/60 dark:border-neutral-700/20 text-gray-400 rounded-lg border">
                  {/** terminal icon and copy btn */}
                  <div className="bg-neutral-50 dark:bg-neutral-700/30 border-b border-neutral-200/60 dark:border-neutral-700/20 px-4 lg:px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="size-4 text-neutral-500/80 dark:text-neutral-400" />
                      <span className="font-mono text-sm text-neutral-500/80 dark:text-neutral-400 font-medium">
                        {
                          // @ts-ignore
                          node?.data?.meta
                        }
                      </span>
                    </div>
                    <CopyButton id={id} />
                  </div>

                  {/** code block */}
                  <div className="overflow-x-auto w-full">
                    <div className="text-xs font-mono p-4 lg:p-5" id={id}>
                      {children}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <code className="bg-neutral-800 rounded-lg">{children}</code>
              );
            }
          },
        }}
      >
        {content}
      </Markdown>

      <div className="w-full max-md:min-w-full max-w-[80%] h-[1px] bg-neutral-200 dark:bg-neutral-700/50"></div>

      {/** social icons and home page btn */}
      <div className="space-y-12 w-full max-md:min-w-full max-w-[80%]">
        <div className="dark:text-neutral-500 text-neutral-600 space-y-3">
          <h2 className="font-poppins text-xs">Share this article</h2>
          <div className="flex items-center gap-2 text-lg lg:text-xl">
            <FaSquareXTwitter className="dark:hover:text-white hover:text-black" />
            <FaLinkedin className="dark:hover:text-white hover:text-black" />
            <FaYCombinator className="dark:hover:text-white hover:text-black" />
          </div>
        </div>

        <div className="w-full">
          <Link href="/journals" className="w-full">
            <button className="w-full flex flex-col gap-3 border rounded-md py-7 px-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/50">
              <span className="font-mukta text-sm flex items-center gap-1 text-[hsl(155_78%_40%)]">
                <RiHome3Line className="size-4" />
                Home
              </span>
              <span className="font-outfit text-lg flex items-center justify-between w-full">
                Go to Journals/Articles Home
                <ArrowRight className="dark:text-neutral-400 text-neutral-600 size-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MarkdownPreview;
