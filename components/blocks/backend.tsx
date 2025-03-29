import React from 'react'
import { CircleStop, Layers2 } from 'lucide-react'

function Backend() {

  return (
    <div className="w-full h-full relative border rounded-lg shadow p-5 flex flex-col justify-between">
      <div className="sm:h-[100px] space-y-2">
        {/** title and icon */}
        <div className="flex items-center gap-2 ">
          <Layers2 className="size-3.5 md:size-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="font-medium font-poppins text-sm text-[#333] dark:text-neutral-100">Backend Dev</h2>
        </div>

        {/** description */}
        <p className="text-xs font-inter text-neutral-600 dark:text-neutral-400">
          Mastering Node by building a real-world <span className="text-[#333] dark:text-neutral-200">RESTful API, MySQL, MongoDB </span> and web app (with authentication, Node,js security, payments and more) 
        </p>
      </div>
      {/** image */}
      <div className="sm:h-[110px] w-full flex items-center justify-center absolute top-[55%] left-0 max-sm:hidden">
        <div className='flex justify-between w-full gap-2 px-8'>
          <div className='flex items-end justify-end shadow-md shadow-green-300 dark:shadow-green-900 border dark:border-green-950 rounded-lg p-1 w-[70px] h-[64px]'>
            <h2 className='w-fit font-inter text-xl font-medium text-[#333] dark:text-neutral-100'>.JS</h2>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='flex items-center gap-2 h-[30px] border border-green-200 dark:border-green-900 rounded-lg px-6 text-xs font-mono bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-900 dark:to-green-950'>
              <CircleStop className='size-3 text-green-500' />
              Client
            </span>
            <span className='flex items-center gap-2 h-[30px] border border-green-200 dark:border-green-900 rounded-lg px-6 text-xs font-mono bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-950 dark:to-green-900'>
              <CircleStop className='size-3 text-green-500' />
              Server
            </span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Backend