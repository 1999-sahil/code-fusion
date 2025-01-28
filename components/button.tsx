import React from 'react'

interface ButtonProps {
    text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className="border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-200/60 hover:border-neutral-400 dark:hover:border-neutral-600 dark:bg-neutral-800 text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-[2px] text-sm font-mukta">
            {text}
        </button>
  )
}

export default Button