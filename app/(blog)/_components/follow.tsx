import Image from 'next/image'
import React from 'react'

const users = [
    {
        name: "Sahil Ahmed",
        occupation: "Software Developer",
        image: "/blogs/7.jpg",
    },
    {
        name: "John Doe",
        occupation: "Data Engineer",
        image: "/blogs/69.jpg",
    },
    {
        name: "Jen Hopkin",
        occupation: "Analyst",
        image: "/blogs/8.jpg",
    },
    {
        name: "Full Frame",
        occupation: "AI Specialist",
        image: "/blogs/46.jpg",
    },
]

function Follow() {
  return (
    <div className='space-y-5 w-full'>
        <h2 className="font-medium font-poppins text-[#111] dark:text-neutral-100">Who to follow</h2>
    
        <div className='space-y-5'>
            {users.map((user, index) => (
                <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={40}
                          height={40}
                          className='rounded-full'
                        />
                        <span className='leading-4'>
                            <h3 className='text-sm font-inter font-medium text-[#111] dark:text-neutral-200'>{user.name}</h3>
                            <h3 className='text-xs font-mukta text-neutral-500 dark:text-neutral-400'>{user.occupation}</h3>
                        </span>
                    </div>
                    <button className="border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-3 py-[2px] text-xs font-mukta">
                        Follow
                    </button>
                </div>
            ))}
        </div>

        <div className="text-xs font-openSans text-neutral-600 dark:text-neutral-400">
        See more suggestions
      </div>
    </div>
  )
}

export default Follow