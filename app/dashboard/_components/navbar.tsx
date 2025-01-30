import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BadgeInfo, Megaphone, Menu, Search } from 'lucide-react'
import NavComponents from './nav-components'
import { ModeToggle } from '@/components/mode-toggle'

function Navbar() {
  return (
    <div className='max-w-full m-auto'>
        {/** container */}
        <div className='flex h-12 min-h-12 max-h-12 items-center justify-between md:border-b md:border-zinc-300 md:dark:border-zinc-700'>
            {/** left */}
            <div className="flex-0 md:border-r border-zinc-300 dark:border-zinc-700 h-full flex items-center justify-center px-5">
                <Link href="/">
                    <Image src="/logo.svg" alt='' width={30} height={30} />
                </Link>
            </div>
            
            {/** middle */}
            <div className='max-md:hidden relative flex-1 overflow-hidden'>
                <div className='flex w-full items-center justify-between py-2 pl-3 pr-3 md:px-3 flex-nowrap overflow-x-auto'>
                    <NavComponents />
                    <div className='flex items-center gap-2'>
                        <Link href="/">
                          <button className='border border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-xs font-inter font-medium rounded-md px-3 py-1'>
                            Home
                          </button>
                        </Link>
                        <BadgeInfo className='text-neutral-500 hover:bg-neutral-200 hover:text-[#333] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 cursor-pointer rounded-md p-1' />
                        <Megaphone className='text-neutral-500 hover:bg-neutral-200 hover:text-[#333] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 cursor-pointer rounded-md p-1' />
                    </div>
                </div>
            </div>

            {/** right */}
            <div className="flex-0 md:border-l border-zinc-300 dark:border-zinc-700 h-full flex items-center justify-center px-5">
                <div className='flex items-center gap-3'>
                    <div className='hidden md:flex items-center justify-center'>
                      <ModeToggle />
                    </div>
                    <Search className='md:hidden size-4 text-neutral-600 dark:text-neutral-500' />
                    <Menu className='md:hidden border rounded-md p-1 text-[#333] dark:text-neutral-500 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 bg-zinc-100 dark:bg-neutral-800 cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar