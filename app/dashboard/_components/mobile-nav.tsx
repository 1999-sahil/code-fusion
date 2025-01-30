import React from 'react'

import NavComponents from './nav-components'
import { TbMenu } from 'react-icons/tb'
import { ModeToggle } from '@/components/mode-toggle'

function MobileNav() {
  return (
    <div className='flex h-12 min-h-12 max-h-12 items-center justify-between border-t border-b border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-[#191919]'>
            {/** left */}
            <div className="flex-0 border-r border-zinc-300 dark:border-zinc-700 h-full flex items-center justify-center px-3 ">
                <TbMenu className=' text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white cursor-pointer' />
            </div>
            
            {/** middle */}
            <div className='relative flex-1 overflow-hidden'>
                <div className='flex w-full items-center justify-between py-2 pl-1 flex-nowrap overflow-x-auto'>
                    <NavComponents />
                </div>
            </div>

            {/** right */}
            <div className="flex-0 border-l border-zinc-300 dark:border-zinc-700 h-full flex items-center justify-center px-3">
                <div className='flex items-center gap-5'>
                    <ModeToggle />
                </div>
            </div>
        </div>
  )
}

export default MobileNav