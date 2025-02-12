import Image from "next/image";
import React from "react";

import { format } from "date-fns";
import { Dot, IndianRupee } from "lucide-react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
  is_premium: boolean;
  is_published: boolean;
}

interface BlogProps {
  blogs: Blog[];
}

function Blogs({ blogs }: BlogProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {blogs?.map((blog, index) => (
        <Link
          key={index}
          href={"/blog/" + blog?.id}
          className="w-full h-full flex flex-col items-start justify-center cursor-pointer space-y-3 px-3 pt-3 pb-10 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800/50"
        >
          <div className="w-full h-full min-h-[180px] relative border rounded-lg">
            <Image
              src={blog.image_url}
              alt={blog.title}
              fill
              priority
              className="rounded-lg object-cover object-center p-1"
            />
          </div>
          <div className="space-y-2 h-full w-full">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-1 font-mukta">
                {format(blog.created_at, "MMMM dd, yyyy")}
                <Dot className="size-5 text-black dark:text-white" />
                {format(blog.created_at, "hh:mm a")}
              </span>
              <span className="">
                {blog.is_premium ? (
                  <p className="w-fit rounded-md px-1.5 py-[2px] ring-1 ring-emerald-400 dark:ring-emerald-500 bg-emerald-200 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-100 font-medium text-xs font-mono flex items-center gap-1">
                    <IndianRupee className="size-3" /> Premium
                  </p>
                ) : (
                  <p className="w-fit border border-neutral-300 dark:border-neutral-700 bg-neutral-200/60 hover:border-neutral-400 dark:hover:border-neutral-600 dark:bg-neutral-800 text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-1 py-[2px] text-xs font-mono">
                    Free
                  </p>
                )}
              </span>
            </div>
            <h1 className="font-outfit font-medium text-xl text-[#242424] dark:text-neutral-100">{blog.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
