"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Database } from "@/database.types";
import { createBrowserClient } from "@supabase/ssr";
import MarkdownPreview from "@/components/markdown/markdown-preview";

import { FaLinkedin, FaSquareXTwitter, FaYCombinator } from "react-icons/fa6";
import { RiHome3Line } from "react-icons/ri";
import { ArrowRight } from "lucide-react";
import BlogLoading from "./blog-loading";

function BlogContent({ blogId }: { blogId: string }) {
  const [isLoading, setIsLoading] = useState(true);

  const [blog, setBlog] = useState<{
    blog_id: string;
    content: string;
    created_at: string;
  } | null>();

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const readBlogContent = async () => {
    const { data } = await supabase
      .from("blog_content")
      .select("*")
      .eq("blog_id", blogId)
      .single();

    setBlog(data);
    setIsLoading(false);
  };

  useEffect(() => {
    readBlogContent();
  }, []);

  if (isLoading) {
    return <BlogLoading />
  }

  return (
    <>
      <MarkdownPreview content={blog?.content || ""} />

      <div className="w-full max-md:min-w-full max-w-[80%] h-[1px] bg-neutral-200 dark:bg-neutral-700/50"></div>

      {/** social icons and home page btn */}
      <div className="space-y-12 w-full max-md:min-w-full max-w-[80%]">
        <div className="dark:text-neutral-500 text-neutral-600 space-y-3">
          <h2 className="font-poppins text-xs">Share this article</h2>
          <div className="flex items-center gap-2 text-lg lg:text-xl">
            <FaSquareXTwitter className="dark:hover:text-white hover:text-black" />
            <FaLinkedin className="dark:hover:text-white hover:text-black" />
            <FaYCombinator className="dark:hover:text-white hover:text-black" />
          </div>
        </div>

        <div className="w-full">
          <Link href="/journals" className="w-full">
            <button className="w-full flex flex-col gap-3 border rounded-md py-7 px-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/50">
              <span className="font-mukta text-sm flex items-center gap-1 text-[hsl(155_78%_40%)]">
                <RiHome3Line className="size-4" />
                Home
              </span>
              <span className="font-outfit text-lg flex items-center justify-between w-full">
                Go to Journals/Articles Home
                <ArrowRight className="dark:text-neutral-400 text-neutral-600 size-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
