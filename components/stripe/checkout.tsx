'use client'

import React from 'react'
import { Check, Lock } from 'lucide-react'
import { useUser } from '@/lib/store/user'
import Login from '../login';

function Checkout() {
  const user = useUser((state) => state.user);

  if (!user?.id) {
    return (
      <div>
        <Login />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-10 items-center justify-center p-5 w-full max-md:min-w-full max-w-[80%]'>
      {/** lock */}
      <div className='flex items-center gap-2 text-xs font-openSans text-neutral-600 dark:text-neutral-400'>
        <Lock className='size-3 text-emerald-600 dark:text-emerald-400' />
        Premium members only
      </div>

      {/** Member Features */}
      <div className='flex flex-col gap-5 items-center justify-center'>
        <h2 className='text-xl lg:text-2xl text-center font-raleway font-medium'>
          Become a member to read this journal, and all of CodeFusion, starting at <span className='w-fit p-1 rounded-[2px] text-base font-inter bg-emerald-300 dark:bg-emerald-700'>$5/month</span>.
        </h2>
        <p className='font-raleway font-normal text-xs lg:text-sm text-center dark:text-neutral-300'>
          This journal is put behind our paywall, so it's only available to read with a paid CodeFusion membership, which comes with a host of benefits:
        </p>

        <div className='w-full my-5 h-[1px] bg-neutral-200 dark:bg-neutral-700'></div>
        
        <div className='text-[14px] space-y-2'>
          <p className='font-mukta mb-4 text-neutral-500 dark:text-neutral-400/70'>Everything in the Free Plan, plus:</p>
          <span className='flex items-center gap-2'>
            <Check className='size-4 text-emerald-500 dark:text-emerald-400' />
            <p className='font-mukta'>Access all member-only stories on CodeFusion</p>
          </span>
          <span className='flex items-center gap-2'>
            <Check className='size-4 text-emerald-500 dark:text-emerald-400' />
            <p className='font-mukta'>Get unlimited access to programming stories from industry leaders</p>
          </span>
          <span className='flex items-center gap-2'>
            <Check className='size-4 text-emerald-500 dark:text-emerald-400' />
            <p className='font-mukta'>Become an expert in your areas of interest</p>
          </span>
          <span className='flex items-center gap-2'>
            <Check className='size-4 text-emerald-500 dark:text-emerald-400' />
            <p className='font-mukta'>Get in-depth articles answering thousands of programming questions</p>
          </span>
          <span className='flex items-center gap-2'>
            <Check className='size-4 text-emerald-500 dark:text-emerald-400' />
            <p className='font-mukta'>Grow your career or build a new one</p>
          </span>
        </div>
      </div>

      {/** Upgrade btn */}
      <div className='w-full max-md:min-w-full max-w-[80%] p-5 rounded-md bg-neutral-200/50 dark:bg-[#111]'>
        <div className='flex items-start gap-2 mb-3'>
          <p className='font-semibold font-poppins text-xl'>PRO</p>
          <span className='w-fit px-2 py-[2px] rounded-md text-center bg-white dark:bg-neutral-700'>
            <h3 className='text-xs font-ubuntu'>Most Popular</h3>
          </span>
        </div>
        <p className='text-xs font-outfit mb-5 text-[#111] dark:text-neutral-300'>
          For premium membership. Unlock all journal contents and code blocks.
        </p>
        <button className='w-full text-center rounded-md py-1.5 font-inter text-sm border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[#111] dark:text-[hsl(0_0%_98%)]'>
          Upgrade now
        </button>
      </div>  
    </div>
  )
}

export default Checkout
