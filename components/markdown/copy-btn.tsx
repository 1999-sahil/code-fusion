import React, { useState } from 'react'

import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
    id: string;
}

function CopyButton({ id }: CopyButtonProps) {

  const [onCopy, setOnCopy] = useState(false);
  const [onDone, setOnDone] = useState(false);

  const handleCopy = async () => {
    const text = document.getElementById(id)?.textContent;

    try {
        await navigator.clipboard.writeText(text!);
        setOnCopy(true);
    } catch (error) {
        console.log("Error Copy", error);
    }
  };

  return (
    <div 
      onClick={handleCopy}
      className='relative'
    >
      <Check
        className={cn(
            'cursor-pointer transition-all size-4 text-emerald-500',
            onDone ? 'scale-100' : 'scale-0'
        )}
        onTransitionEnd={() => {
            setTimeout(() => {
                setOnCopy(false)
                setOnDone(false)
            }, 500);
        }}
      />

      <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center'>
        <Copy
          className={cn(
            "transition-all size-3 cursor-pointer text-neutral-500 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400",
            onCopy ? "scale-0" : "scale-100"
          )}
          onTransitionEnd={() => {
            if (onCopy) {
                setOnDone(true)
            }
          }}
        />
      </div>
    </div>
  )
}

export default CopyButton
