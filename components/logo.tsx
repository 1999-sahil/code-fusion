import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className='flex items-center gap-1.5'>
        <Image
          src="/cf-logo.svg"
          alt="code-fusion-logo"
          width={24}
          height={24}
          className='max-md:w-[20px] max-md:h-[20px]'
        />
        <h2 className='font-medium font-kanit text-sm md:text-base'>
          CodeFusion
        </h2>
    </Link>
  )
}

export default Logo