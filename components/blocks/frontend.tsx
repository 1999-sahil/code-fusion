import { ChevronRight, Combine, CornerDownLeft, Minus } from 'lucide-react'
import React from 'react'

function Frontend() {
  return (
    <div className="w-full h-full relative overflow-hidden border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="space-y-2">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <Combine className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">Frontend Development</h2>
        </div>

        {/** image */}
        <div className="h-full w-full max-sm:hidden absolute top-[14%] -right-[20%]">
          <div className='space-y-5 p-8 rounded-tl-xl rounded-bl-xl w-[80%] bg-neutral-200/50 dark:bg-neutral-800/40 h-[200px]'>
            <h2 className='h-2 w-[50%] rounded-full bg-neutral-300 dark:bg-neutral-700/50 animate-pulse'></h2>
            <h2 className='h-2 w-[60%] rounded-full bg-neutral-300 dark:bg-neutral-700/50 animate-bounce'></h2>
            <h2 className='h-2 w-[40%] rounded-full bg-neutral-300 dark:bg-neutral-700/50 animate-pulse'></h2>
            <span className='flex items-center gap-4'>
              <h2 className='flex items-center gap-1 font-mono text-sm'>
                <ChevronRight className='size-4 text-green-500' />
                npm run dev
                <p className=' animate-bounce text-green-500 ease-in-out duration-500'>|</p>
              </h2>
              <h2 className='border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 rounded-sm p-1'>
                <CornerDownLeft className='size-4 text-[#333] dark:text-neutral-300' />
              </h2>
            </span>
          </div>
        </div>

        {/** description */}
        <div className='sm:absolute bottom-3 sm:h-[120px] space-y-3'>
          <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
            Dive in and learn React.js from scratch! Learn by creating <span className="text-[#333] dark:text-neutral-200">user-friendly responsive web interfaces</span> and way more! 
          </p>
          <div className='max-md:hidden grid grid-cols-2 gap-2'>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              State Management
            </span>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              Server-side rendering with Next.js
            </span>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              Asynchronous coding technique
            </span>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              Web performance optimization
            </span>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              Frameworks and libraries
            </span>
            <span className='flex items-center gap-1 text-xs font-poppins text-[#333] dark:text-neutral-200'>
              <Minus className='text-green-500 size-3' />
              Typescript for type safety
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend