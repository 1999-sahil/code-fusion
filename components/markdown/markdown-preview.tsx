import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import "highlight.js/styles/atom-one-dark.min.css";

import { cn } from "@/lib/utils";
import { icons } from "@/lib/icons";

import CopyButton from "./copy-btn";
import { PiTerminalFill } from "react-icons/pi";

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

function MarkdownPreview({ content, className }: MarkdownPreviewProps) {
  return (
    <>
      <Markdown
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className={cn(
          "space-y-6 lg:space-y-8 text-[14px] lg:text-[1rem] font-inter font-normal dark:text-[hsl(0,1%,67%)] text-[hsl(0,0%,27%)] w-full max-md:min-w-full max-w-[80%] leading-5 lg:leading-6 rounded-lg",
          className
        )}
        components={{
          h1: ({ ...props }) => {
            return (
              <h1
                {...props}
                className="text-3xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          h2: ({ ...props }) => {
            return (
              <h1
                {...props}
                className="text-2xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          h3: ({ ...props }) => {
            return (
              <h1
                {...props}
                className="text-xl font-semibold font-inter text-[#111] dark:text-neutral-50"
              />
            );
          },
          blockquote: ({ ...props }) => (
            <blockquote {...props} className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 text-[#111] dark:text-neutral-100 font-mono text-sm font-medium" />
          ),
          ul: ({ ...props }) => (
            <ul {...props} className="list-none custom-ul" />
          ),
          ol: ({ ...props }) => (
            <ol {...props} className="list-none custom-ol" />
          ),
          li: ({ ...props }) => (
            <li
              {...props}
              className="relative pl-5 my-4"
            />
          ),
          em: ({ ...props }) => (
            <em {...props} className="italic font-inter text-neutral-500 dark:text-neutral-200" />
          ),
          strong: ({ ...props }) => (
            <strong {...props} className="font-bold font-inter text-[#333] dark:text-neutral-200" />
          ),
          table: ({ ...props }) => (
            <table {...props} className="border-separate border-spacing-1 border border-neutral-300 dark:border-neutral-700 rounded-md w-full overflow-hidden" />
          ),
          thead: ({ ...props }) => (
            <thead {...props} className="bg-neutral-200/50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded" />
          ),
          tbody: ({ ...props }) => (
            <tbody {...props} className="text-gray-700 dark:text-gray-300 bg-transparent" />
          ),
          tr: ({ ...props }) => (
            <tr {...props} className="border-b border-neutral-300 dark:border-neutral-700" />
          ),
          th: ({ ...props }) => (
            <th {...props} className="py-2 px-4 rounded font-raleway text-left text-xs border border-neutral-300 dark:border-neutral-700 font-medium" />
          ),
          td: ({ ...props }) => (
            <td {...props} className="py-2 px-4 rounded text-sm font-inter text-[#111] dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700" />
          ),
          a: ({ href, ...props }) => (
            <Link href={href || "#"} {...props} className="text-[#111] dark:text-neutral-50 underline underline-offset-2 decoration-neutral-500 dark:decoration-neutral-500 hover:decoration-black dark:hover:decoration-white font-inter" />
          ),
          img: ({ ...props }) => (
            <img {...props} className="rounded-lg m-auto w-full h-full border dark:border-neutral-700/50 p-1 my-6 lg:my-10" alt="" />
          ),
          code: ({ node, className, children }) => {
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
                        {node?.data?.meta}
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
                <code className="bg-neutral-100 dark:bg-neutral-800/50 border-neutral-200/60 dark:border-neutral-700/20 text-gray-400 rounded-lg border">{children}</code>
              );
            }
          },
        }}
      >
        {content}
      </Markdown>
    </>
  );
}

export default MarkdownPreview;
