import React from 'react'

import Actions from './actions'
import { Switch } from '@/components/ui/switch'
import { ChevronDown } from 'lucide-react'

function BlogTable() {
  return (
    <div className='overflow-x-auto'>
        <div className='w-[900px] md:w-full'>
            <div className='grid grid-cols-8 px-2 py-2 font-inter text-xs font-medium border-b border-neutral-200 dark:border-neutral-700/50 bg-neutral-200/40 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400'>
                <h1></h1>
                <h1 className='col-span-2'>UID</h1>
                <h1 className='col-span-2'>Title</h1>
                <h1>Premium</h1>
                <h1>Publish</h1>
                <h1 className='flex items-center justify-between'>
                    Actions
                    <ChevronDown className='size-4' />
                </h1>
            </div>
            <div className='grid grid-cols-8'>
                <h1>img</h1>
                <h1 className='col-span-2'>asdfghjkl234567890</h1>
                <h1 className='col-span-2'>blog title</h1>
                <Switch checked={false} />
                <Switch checked={true} />
                <Actions />
            </div>
        </div>
    </div>
  )
}

export default BlogTable
