import React from 'react'
import { Switch } from '@/components/ui/switch'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Ellipsis, Eye, Pencil, Trash } from 'lucide-react'

function BlogTable() {
  return (
    <div className='overflow-x-auto'>
        <div className='border rounded-md w-[900px] md:w-full'>
            <div className="grid grid-cols-5 px-3 lg:px-4 py-2 border-b bg-neutral-100 dark:bg-neutral-800 text-xs lg:text-sm font-mono font-semibold text-neutral-600 dark:text-neutral-400">
              <h1 className='col-span-2'>Title</h1>
              <h1>Premium</h1>
              <h1>Publish</h1>
              <h1 className=''>Actions</h1>
            </div>
            <div className="grid grid-cols-5 px-3 lg:px-4 py-3 border-b">
              <h1 className='col-span-2 font-openSans text-sm'>Blog Title</h1>
              <Switch checked={false} className='bg-green-500' />
              <Switch checked={true} className='bg-red-500' />
              <Actions />
            </div>
            <div className="grid grid-cols-5 px-3 lg:px-4 py-3 border-b">
              <h1 className='col-span-2 font-openSans text-sm'>Blog Title</h1>
              <Switch checked={false} className='bg-green-500' />
              <Switch checked={true} className='bg-red-500' />
              <Actions />
            </div>
        </div>
    </div>
  )
}

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

export default BlogTable