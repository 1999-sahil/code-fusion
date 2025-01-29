'use client';

import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Filter, Grid2x2, Search, UserRoundSearch } from 'lucide-react';
import { usePathname } from 'next/navigation';

function Navlinks() {
  const pathname = usePathname();

  const links = [
    {
        href: "/dashboard",
        text: "dashboard",
        Icon: Grid2x2,
    },
    {
        href: "/dashboard/user",
        text: "all user",
        Icon: UserRoundSearch,
    },
  ];

  return (
    <div className='flex items-center w-full justify-between'>
        <div className='ring-1 ring-neutral-200 dark:ring-neutral-700/70 border rounded-md flex items-center p-[2px] gap-1'>
        {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={cn(
                "flex items-center gap-1 transition-all capitalize text-xs font-inter font-medium text-[#333] dark:text-neutral-300 hover:border rounded-md px-3 py-2",
                {"bg-neutral-200 dark:bg-neutral-700/70 text-black dark:text-white border" : pathname === link.href}
              )}
            >
                <link.Icon className='size-4' />
                {link.text}
            </Link>
        ))}
    </div>
    <div className='flex items-center gap-2'>
        <div className='hidden lg:block relative w-full'>
            <input
              type='text'
              placeholder='Find a blog using title...'
              className='w-[300px] pl-6 border-none outline-none rounded-md py-2 text-xs font-mukta ring-1 ring-neutral-300 dark:ring-neutral-700/70 bg-neutral-100 dark:bg-neutral-800 text-[#333] dark:text-neutral-300'
            />
            <Search className='absolute top-[10px] left-2 size-3 text-[#333] dark:text-neutral-400' />
        </div>
        <div className='flex items-center gap-2 ring-1 ring-neutral-300 dark:ring-neutral-700/70 bg-neutral-100 dark:bg-neutral-800 rounded-md px-4 py-2 text-[#333] dark:text-neutral-300'>
            <Filter className='size-3 lg:size-4' />
            <h2 className='text-xs font-inter font-medium'>Filter</h2>
        </div>
    </div>
    </div>
  )
}

export default Navlinks