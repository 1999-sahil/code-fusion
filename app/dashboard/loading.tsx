import React from 'react'

function loading() {
  return (
    <div className='space-y-5 animate-pulse'>
        {/** dashboard/users and dropdown */}
        <div className='flex items-center justify-between'>
            <h1 className='h-10 w-56 bg-neutral-200 dark:bg-neutral-800 rounded-md'></h1>
            <h1 className='h-10 w-56 bg-neutral-200 dark:bg-neutral-800 rounded-md'></h1>
        </div>

        {/** table header with buttons */}
        <div className='flex items-center justify-between'>
            <h1 className='h-10 w-56 bg-neutral-200 dark:bg-neutral-800 rounded-md'></h1>
            <h1 className='h-10 w-56 bg-neutral-200 dark:bg-neutral-800 rounded-md'></h1>
        </div>

        {/** table */}
        <div className='border h-96 w-full rounded-md bg-neutral-200 dark:bg-neutral-800'></div>
    </div>
  )
}

export default loading