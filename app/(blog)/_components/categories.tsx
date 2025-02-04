import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { categories } from '@/constant/category'
import { ChevronsUpDown, Search } from 'lucide-react'
import React from 'react'

function Categories() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-between text-xs ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-md py-1 px-3 w-[180px] md:w-[220px] bg-neutral-100 dark:bg-neutral-800 hover:ring-neutral-500 dark:hover:ring-neutral-600">
            <h2 className="font-medium font-inter">
              <span className=" text-neutral-500 dark:text-neutral-400">select: </span>
              All
            </h2>
            <ChevronsUpDown className="size-3 text-neutral-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[180px] md:w-[220px] dark:bg-neutral-800">
          <DropdownMenuLabel className="flex items-center gap-2 text-xs font-mukta text-neutral-500 font-normal">
            <Search className="size-3" />
            Search here...
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((category, index) => (
            <DropdownMenuItem
              key={index}
              className="cursor-pointer text-xs font-mukta font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50"
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Categories