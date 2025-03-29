'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

import BlogForm from '@/app/dashboard/_components/blog-form'
import { BlogFormSchemaType } from '@/app/dashboard/schema';
import { IBlogDetail } from '@/lib/types'
import { updateBlogDetailsById } from '@/lib/actions/blog';
import { toast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

function EditForm({ blog }: { blog: IBlogDetail }) {
    const router = useRouter();

    const handleEdit = async (data: BlogFormSchemaType) => {
      if (!blog?.id) {
        toast({ title: "Error: Blog ID is missing." });
        return;
      }
      
      const result = await updateBlogDetailsById(blog.id, data);
      
      const { error } = JSON.parse(result);
  
      if (error?.message) {
        toast({
          title: "Failed to update the blog. Please try again.",
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
          title: "Blog post updated successfully!",
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
          Edit
        </span>
      </div>
      <BlogForm
        onHandleSubmit={handleEdit}
        blog={blog}
      />
    </div>
  )
}

export default EditForm