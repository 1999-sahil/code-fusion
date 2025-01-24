import { algorithms, backend, framework } from '@/constant/topics'
import Image from 'next/image'
import React from 'react'

function TopicsGrid() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
        {/** heading */}
        <div className='flex flex-col items-center justify-center gap-3 px-3'>
            <Image src="/logo.svg" alt='logo' width={40} height={40} />
            <h2 className='text-xl lg:text-2xl font-inter font-medium text-[#111] dark:text-neutral-200'>
                Free & open source
            </h2>
            <p className='text-sm lg:text-base font-normal font-mono text-center leading-4 lg:leading-5 max-w-md text-neutral-700 dark:text-neutral-400'>
                Learn and share your creativity with everyone through CodeFusion. Kickstart your next journey with our resources. 
            </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 px-3 pb-5'>
            <h3 className='font-openSans text-neutral-700 dark:text-neutral-400'>
                Brought to you by
            </h3>
            <h1 className='text-4xl lg:text-5xl font-kanit font-medium'>
                {`CodeFusion(0)`} 
            </h1>
        </div>

        {/** Grid */}
        <div className='w-full px-3 space-y-5'>
            {/** framwork */}
            <div className='space-y-5'>
                <div className='w-full bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-lg flex items-center justify-center py-3'>
                    <h2 className='text-sm font-raleway font-medium'>javascript frameworks</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {framework.map((data, index) => (
                        <div key={index} className='h-[120px] lg:h-[150px] bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-400 dark:hover:border-neutral-600/80 rounded-lg flex items-center justify-center cursor-pointer'>
                            <Image src={data.href} alt={data.title} width={100} height={100} className='filter brightness-0 grayscale dark:invert group-hover:filter-none' />
                        </div>
                    ))}
                </div>
            </div>

            {/** development */}
            <div className='space-y-5'>
                <div className='w-full bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-lg flex items-center justify-center py-3'>
                    <h2 className='text-sm font-raleway font-medium'>backend development</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {backend.map((data, index) => (
                        <div key={index} className='h-[120px] lg:h-[150px] bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-400 dark:hover:border-neutral-600/80 rounded-lg flex items-center justify-center cursor-pointer'>
                            <Image src={data.href} alt={data.title} width={80} height={100} className='filter brightness-0 grayscale dark:invert group-hover:filter-none' />
                        </div>
                    ))}
                </div>
            </div>

            {/** dsa */}
            <div className='space-y-5'>
                <div className='w-full bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-lg flex items-center justify-center py-3'>
                    <h2 className='text-sm font-raleway font-medium'>data structures & algorithms</h2>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {algorithms.map((data, index) => (
                        <div key={index} className='h-[80px] lg:h-[100px] bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-400 dark:hover:border-neutral-600/80 rounded-lg flex items-center justify-center cursor-pointer group'>
                            <h2 className='text-sm lg:text-base font-kanit font-medium transition-all duration-300 group-hover:scale-110'>
                                {data}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopicsGrid