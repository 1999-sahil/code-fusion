import React from 'react'

function BlogLoading() {
  return (
    <div className='animate-pulse space-y-4 w-full max-w-[80%]'>
        <div className="h-10 bg-neutral-200 dark:bg-neutral-800 w-full rounded-lg"></div>
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 w-full rounded-lg"></div>
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 w-[80%] rounded-lg"></div>
        <div className="h-5 bg-neutral-200 dark:bg-neutral-800 w-full rounded-lg"></div>
    </div>
  )
}

export default BlogLoading