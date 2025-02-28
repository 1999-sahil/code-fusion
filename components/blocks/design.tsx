import { Check, LassoSelect } from 'lucide-react';
import { useTheme } from 'next-themes'
import Image from 'next/image';
import React from 'react'

function Design() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full overflow-hidden relative border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="sm:h-[100px] space-y-2">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <LassoSelect className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">System Design</h2>
        </div>

        {/** description */}
        <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
          Master Proven Design Techniques and <span className="text-[#111] dark:text-neutral-200">SOLID Principles </span>to Build Robust and Scalable Systems! Learn LLD and HLD.
        </p>
      </div>
      {/** image */}
      <div className="sm:h-[110px] w-full absolute top-[60%] left-0 max-sm:hidden">
        <div className="absolute -top-3 flex items-center justify-center gap-2 w-full px-2">
            <span className="z-10 bg-white dark:bg-neutral-800 whitespace-nowrap font-mono flex items-center gap-1 text-[10px] text-neutral-600 dark:text-neutral-200 ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-sm px-4 py-1">
                Design Lifecycle <h3 className='text-emerald-500'>HLD</h3> and <h3 className='text-emerald-500'>LLD</h3>
            </span>
        </div>
        {theme === "dark" ? (
          <Image
            src="/blocks/design-dark.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        ) : (
          <Image
            src="/blocks/design-light.svg"
            alt="light-ui"
            fill
            className="object-cover object-center"
          />
        )}
      </div>
    </div> 
  )
}

export default Design