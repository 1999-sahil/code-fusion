import React from 'react'

function loading() {
  return (
    <div className='space-y-5 animate-pulse'>
        {/** dashboard/users and dropdown */}
        <div className='flex items-center justify-between'>
            <h1 className='h-10 w-56 bg-gradient-dark rounded-md'></h1>
            <h1 className='h-10 w-56 bg-gradient-dark rounded-md'></h1>
        </div>

        {/** table header with buttons */}
        <div className='flex items-center justify-between'>
            <h1 className='h-10 w-56 bg-gradient-dark rounded-md'></h1>
            <h1 className='h-10 w-56 bg-gradient-dark rounded-md'></h1>
        </div>

        {/** table */}
        <div className='border h-96 rounded-md bg-gradient-dark'></div>
    </div>
  )
}

export default loading