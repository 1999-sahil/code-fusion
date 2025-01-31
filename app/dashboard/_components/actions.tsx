import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Ellipsis } from 'lucide-react'

function Actions() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className='dark:bg-neutral-800'>
          <DropdownMenuItem>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            View
          </DropdownMenuItem>
          <DropdownMenuItem>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Actions

{/**
const Actions = () => {
    return (
        <div className='flex items-start justify-start gap-3 lg:gap-5'>
            <button className='flex items-center gap-1 px-2 py-[2px] text-xs font-mukta border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-200/60 hover:border-neutral-400 dark:hover:border-neutral-600 dark:bg-neutral-800 text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md'>
                <Eye className='size-3 lg:size-4' />
                View
            </button>
            <button className='flex items-center gap-1 px-2 py-[2px] text-xs font-mukta border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-200/60 hover:border-neutral-400 dark:hover:border-neutral-600 dark:bg-neutral-800 text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md'>
                <Pencil className='size-3 lg:size-4' />
                Edit
            </button>
            <Popover>
                <PopoverTrigger>
                    <Ellipsis className='size-5 lg:size-6 text-[#333] dark:text-neutral-300' />
                </PopoverTrigger>
                <PopoverContent className=' w-[140px] px-2 py-2 flex items-center justify-center'>
                    <button className='flex items-center justify-center gap-1 rounded-md py-1 text-xs font-mukta w-full bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-800 text-rose-600 dark:text-rose-300'>
                        <Trash className='size-3 lg:size-4' />
                        Delete
                    </button>
                </PopoverContent>
            </Popover>
        </div>
    )
}    
*/}