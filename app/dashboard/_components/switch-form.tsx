'use client'

import React, { ChangeEvent } from 'react'

import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';

interface SwitchFormProps {
    checked: boolean;
    onToggle: () => Promise<string>;
    name: string;
}

function SwitchForm({ checked, onToggle, name }: SwitchFormProps) {
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = JSON.parse(await onToggle());

    if (error?.message) {
        toast({
          title: "Failed to update " + `${name}.` + " Please try again.",
          description: (
            <pre className="mt-2 w-[340px] rounded-md border border-rose-300 bg-rose-200 dark:border-rose-600 dark:bg-rose-800 p-4">
              <code className="text-white">
                {error.message}
              </code>
            </pre>
          ),
        })
    } else {
        toast({
          title: "Blog post " + `${name}` + " updated successfully!",
        });
    }
  };
    
  return (
    <form onSubmit={onSubmit}>
        <Switch checked={checked} type="submit" />
    </form>
  )
}

export default SwitchForm