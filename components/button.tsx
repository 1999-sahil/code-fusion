import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    href: string;
    text: string;
}

function Button({ href, text }: ButtonProps) {
  return (
    <Link href={href}>
        <button className="border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-200/60 hover:border-neutral-400 dark:hover:border-neutral-600 dark:bg-neutral-800 text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-[2px] text-sm font-mukta">
            {text}
        </button>
    </Link>
  )
}

export default Button