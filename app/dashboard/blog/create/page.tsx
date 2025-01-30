import React from 'react'
import BlogForm from '../../_components/blog-form'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

function CreateForm() {
  return (
    <div>
      <div className='flex items-center gap-3 lg:gap-5 px-4 lg:px-6'>
        <Link href="/dashboard">
          <button className='border rounded-md p-1 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'>
            <ChevronLeft className='size-3 text-neutral-700 dark:text-neutral-500' />
          </button>
        </Link>
        <span className='font-inter font-medium'>
          Create
        </span>
      </div>
      <div className='px-4 lg:px-6 border'>
        <BlogForm />
      </div>
    </div>
  )
}

export default CreateForm