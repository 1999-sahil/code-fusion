'use client'

import React from 'react'
import BlogForm from '../../_components/blog-form'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { BlogFormSchemaType } from '../../schema'
import { toast } from '@/hooks/use-toast'
import { createBlog } from '@/lib/actions/blog'
import { useRouter } from 'next/navigation'

function CreateForm() {
  const router = useRouter();

  const handleCreate = async (data: BlogFormSchemaType) => {
    const blog = await createBlog(data);
    const { error } = JSON.parse(blog);

    if (error?.message) {
      toast({
        title: "Failed to save the blog. Please try again.",
        description: (
          <pre className="mt-2 text-wrap overflow-hidden w-[340px] rounded-md border border-rose-300 bg-rose-200 dark:border-rose-600 dark:bg-rose-800 p-4">
            <code className="text-white">
              {data.title}
            </code>
          </pre>
        ),
      })
    } else {
      toast({
        title: "Blog post created successfully!",
      });
      router.push("/dashboard");
    }
  };

  return (
    <div className='space-y-4 overflow-hidden mb-8'>
      <div className='flex items-center gap-3 lg:gap-4 px-4 lg:px-6'>
        <Link href="/dashboard">
          <button className='border rounded-md p-1 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'>
            <ChevronLeft className='size-3 text-neutral-700 dark:text-neutral-500' />
          </button>
        </Link>
        <span className='font-inter font-medium'>
          Create
        </span>
      </div>
      <BlogForm onHandleSubmit={handleCreate} />
    </div>
  )
}

export default CreateForm