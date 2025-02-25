import React from 'react'

function loading() {
  return (
    <div className='space-y-5 animate-pulse p-3'>
        {/** dashboard/users and dropdown */}
        <div className='w-full h-8 bg-neutral-200 dark:bg-neutral-800 rounded-md'></div>

        {/** table */}
        <div className='border h-96 w-full rounded-md bg-neutral-200 dark:bg-neutral-800'></div>
    </div>
  )
}

export default loading