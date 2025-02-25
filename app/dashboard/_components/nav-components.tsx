"use client"

import { useUser } from '@/lib/store/user'
import { ChevronsUpDown, ShieldCheck, Slash } from 'lucide-react';
import React from 'react'

function NavComponents() {
  const user = useUser((state) => state.user);

  return (
    <div>
        <div>
            {user?.id && (
                <div className='flex items-center gap-1 md:gap-2 overflow-hidden'>
                    {/** free */}
                    <div className='flex items-center text-nowrap gap-1 md:gap-2 cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-700/50 rounded-md px-3 py-[2px]'>
                      <span className='text-xs font-medium font-inter dark:text-neutral-200'>{user?.display_name}</span>
                      <span className='text-xs font-inter border border-neutral-300 dark:border-neutral-500 dark:text-neutral-400 rounded-full px-2.5 py-[2px]'>Free</span>
                    </div>

                    <Slash className='size-3 text-neutral-400 dark:text-neutral-600' />

                    {/** dashboard */}
                    <div className='flex items-center text-nowrap gap-1 md:gap-2 cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-700/50 rounded-md px-3 py-1'>
                      <span className='text-xs font-medium font-inter dark:text-neutral-200'>
                        {user?.display_name}{" "}
                        Dashboard
                      </span>
                      <ChevronsUpDown className='size-3 text-neutral-500 dark:text-neutral-400' />
                    </div>

                    {/** admin btn */}
                    <button className='flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-inter font-medium border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-full px-2 py-[2px] md:px-3 md:py-1'>
                        <ShieldCheck className='size-3' />
                        Admin
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default NavComponents