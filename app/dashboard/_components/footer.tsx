import React from 'react'

import { Heart, Copyright } from 'lucide-react'

function Footer() {
  return (
    <div className='bg-white dark:bg-[#111] border-t dark:border-none w-full py-8 px-4'>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <h2 className='flex items-center gap-1 font-inter font-medium text-sm lg:text-base text-[#333] dark:text-neutral-300'>
                Build with <Heart className='size-4 text-emerald-600' /> by <span className='text-black dark:text-white font-poppins'>Sahil Ahmed</span>
            </h2>
            <span className='flex items-center gap-1 font-semibold font-openSans text-xs lg:text-sm text-[#333] dark:text-neutral-400'>
                Copyright <Copyright className='size-3' /> 2025 CodeFusion & CF Contributors
            </span>
        </div>
    </div>
  )
}

export default Footer