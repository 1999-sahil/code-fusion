import { X } from 'lucide-react'
import React from 'react'

function AdCard() {
  return (
    <div className='relative border rounded-lg p-5 w-[90%] bg-neutral-100 dark:bg-neutral-800 shadow dark:shadow-neutral-800/70'>
        <button className='absolute right-2 top-2'>
            <X className='size-4 text-[#333] dark:text-neutral-200' />
        </button>
        <div className='space-y-3'>
        <h2 className='font-openSans font-medium text-[#111] dark:text-neutral-100'>Writing on CodeFusion</h2>
        <div className='font-raleway text-sm text-[#333] dark:text-neutral-200'>
            <h3>New writer FAQ</h3>
            <h3>Expert writing advice</h3>
            <h3>Grow your readership</h3>
        </div>
        <button className="flex items-center gap-2 px-4 py-1 rounded-md text-xs font-medium font-inter ring-1 ring-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]">
            Start writing
            </button>
        </div>
    </div>
  )
}

export default AdCard