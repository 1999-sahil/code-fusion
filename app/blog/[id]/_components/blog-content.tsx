'use client'

import React, { useEffect, useState } from 'react'

import { Database } from '@/database.types';
import { createBrowserClient } from '@supabase/ssr';
import MarkdownPreview from '@/components/markdown/markdown-preview';

function BlogContent({ blogId }: { blogId: string }) {
  const [blog, setBlog] = useState<{
    blog_id: string;
    content: string;
    created_at: string;
  } | null>();

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const readBlogContent = async () => {
    const { data } = await supabase
        .from("blog_content")
        .select("*")
        .eq("blog_id", blogId)
        .single();
    
    setBlog(data);
  };

  useEffect(() => {
    readBlogContent();
  }, []);

  return (
    <MarkdownPreview
      content={blog?.content || ""}
    />
    
  )
}

export default BlogContent