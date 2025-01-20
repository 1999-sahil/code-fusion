import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-1'>
        <Image
          src="/cf-logo.svg"
          alt="code-fusion-logo"
          width={24}
          height={24}
        />
        <h2 className='font-semibold font-poppins'>
            code.fusion
        </h2>
    </div>
  )
}

export default Logo