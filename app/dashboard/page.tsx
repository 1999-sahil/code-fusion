import CFButton from '@/components/cf-button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BlogTable from './_components/blog-table'

function Dashboard() {
  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Blogs</h1>
        <Link href="/dashboard/blog/create" className='flex items-center gap-1'>
          <button className="flex items-center gap-1 border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-[2px] text-sm font-mukta">
            Create
            <Plus className='size-4' />
          </button>
        </Link>
      </div>
      <BlogTable />
    </div>
  )
}

export default Dashboard