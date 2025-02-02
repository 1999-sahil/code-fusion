"use client"

import React from 'react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical, Eye, FilePenLine } from 'lucide-react'
import DeleteAlert from './delete-alert'

function Actions({ id }: { id: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='border rounded-md p-1 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800/80'>
        <EllipsisVertical className='size-6 cursor-pointer text-neutral-600 dark:text-neutral-400' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className=' dark:bg-neutral-800'>
        <DropdownMenuItem className='flex items-center gap-2 text-xs font-kanit cursor-pointer text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50'>
          <Link href={"/dashboard/blog/edit/" + id} className='flex items-center gap-2'>
            <FilePenLine className='size-3' />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex items-center gap-2 text-xs font-kanit cursor-pointer text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50'>
          <Eye className='size-3' />
          View
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='flex items-center gap-2 text-xs font-kanit cursor-pointer text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50'>
          <DeleteAlert blogId={id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Actions
