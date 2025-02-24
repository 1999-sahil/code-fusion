'use client'

import React, { useTransition } from 'react'
import { usePathname } from 'next/navigation';

import { loadStripe } from '@stripe/stripe-js'

import { cn } from '@/lib/utils';
import { useUser } from '@/lib/store/user'
import { checkout } from '@/lib/actions/stripe';
import { createClient } from '@/utils/supabase/client';

import { Check, LoaderCircle, Lock } from 'lucide-react'
import { FaGithub } from 'react-icons/fa';

function Checkout() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const user = useUser((state) => state.user);
  
    const supabase = createClient();
  
    const handleLogin = () => {
      supabase.auth.signInWithOAuth({
          provider: "github",
          options: {
              redirectTo: location.origin + "/auth/callback?next=" + pathname,
          },
      });
    };

  const handleCheckout = (e: any) => {
    e.preventDefault();
    startTransition(async () => {
      const data = JSON.parse(
        await checkout(user?.user_metadata?.email!, location.origin + pathname)
      );

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
      await stripe?.redirectToCheckout({ sessionId: data.id });
    })
  };

  if (!user?.id) {
    return (
      <div className='w-full p-5 max-md:min-w-full max-w-[80%] flex flex-col items-center justify-center gap-6'>
        <h2 className='text-xl lg:text-2xl text-center font-raleway font-medium'>
          Create an account to read the full journal.
        </h2>
        <span className='space-y-1'>
          <p className='text-center font-raleway font-normal text-xs lg:text-sm dark:text-neutral-300'>
            The author made this journal available to CodeFusion members only.
          </p>
          <p className='font-raleway font-normal text-xs lg:text-sm text-center dark:text-neutral-300'>
            If you're new to CodeFusion, create a new account to read this journal on us.
          </p>
        </span>
        <button onClick={handleLogin} className='flex items-center justify-center gap-2 border rounded-md py-1.5 w-full md:w-1/2 font-inter text-sm bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700'>
          <FaGithub />
          Continue with Github
        </button>
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
      <div className={cn('w-full max-md:min-w-full max-w-[80%] p-5 rounded-md bg-neutral-200/50 dark:bg-[#111]',
        {'animate-pulse': isPending}    
      )}>
        <div className='flex items-start gap-2 mb-3'>
          <p className='font-semibold font-poppins text-xl'>PRO</p>
          <span className='w-fit px-2 py-[2px] rounded-md text-center bg-white dark:bg-neutral-700'>
            <h3 className='text-xs font-ubuntu'>Most Popular</h3>
          </span>
        </div>
        <p className='text-xs font-outfit mb-5 text-[#111] dark:text-neutral-300'>
          For premium membership. Unlock all journal contents and code blocks.
        </p>
        <button onClick={handleCheckout} className='w-full text-center rounded-md py-1.5 font-inter text-xs border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[#111] dark:text-[hsl(0_0%_98%)]'>
          {isPending ? <h2 className='flex items-center justify-center text-center gap-2'>
            <LoaderCircle className='size-3 animate-spin' />
            Redirecting to Stripe Payment
          </h2> : <h2>Upgrade now</h2>}
        </button>
      </div>
    </div>
  )
}

export default Checkout
