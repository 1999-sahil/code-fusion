import React from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.min.css'

import { cn } from '@/lib/utils';
import { icons } from '@/lib/icons';

import CopyButton from './copy-btn';
import { FaTerminal } from 'react-icons/fa';

interface MarkdownPreviewProps {
    content: string;
    className?: string;
}

function MarkdownPreview({ content, className }: MarkdownPreviewProps) {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      className={cn(
        "space-y-6",
        className
      )}
      components={{
        h1: ({ node, ...props }) => {
            return <h1 {...props} className='text-3xl font-semibold font-inter' />
        },
        h2: ({ node, ...props }) => {
            return <h1 {...props} className='text-2xl font-semibold font-inter' />
        },
        h3: ({ node, ...props }) => {
            return <h1 {...props} className='text-xl font-semibold font-inter' />
        },
        code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");

            if (match?.length) {
                let Icon = FaTerminal;

                // id to implement copy button
                const id = (Math.floor(Math.random() * 100) + 1).toString();

                // to rendering the icon with given extension
                const isMatch = icons.hasOwnProperty(match[1]);

                if (isMatch) {
                    Icon = icons[match[1] as keyof typeof icons];
                }

                return (
                    <div className='bg-neutral-200/30 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-gray-400 rounded-md border'>
                        {/** terminal icon and copy btn */}
                        <div className='border-b dark:border-neutral-700 px-2 py-1 lg:px-3 lg:py-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <Icon className='size-4 text-neutral-500' />
                              <span className='font-mono text-xs text-neutral-600 dark:text-neutral-500 font-medium'>
                                {
                                  // @ts-ignore
                                  node?.data?.meta
                                }
                              </span>
                            </div>
                            <CopyButton id={id} />
                        </div>

                        {/** code block */}
                        <div className='overflow-x-auto w-full'>
                            <div className='text-xs p-3 lg:p-5' id={id}>
                              {children}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <code className='bg-neutral-800 rounded-md'>
                        {children}
                    </code>
                )
            }
        }
      }}
    >
        {content}
    </Markdown>
  )
}

export default MarkdownPreview