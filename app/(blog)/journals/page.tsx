import React from "react";
import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";

import { readBlog } from "@/lib/actions/blog";
import { cn } from "@/lib/utils";
import { categories } from "@/constant/category";
import { PiStarFourFill } from "react-icons/pi";
import {
  BookMarked,
  CircleMinus,
  Ellipsis,
  Filter,
  ThumbsUp,
} from "lucide-react";
import Categories from "../_components/categories";
import AdCard from "../_components/ad-card";
import Topics from "../_components/topics";
import Follow from "../_components/follow";

async function Journals() {
  const { data: blogs } = await readBlog();

  return (
    <div className="my-8">
      <div className="flex w-full">
        {/** main dynamic blog content */}
        <div className="w-full lg:w-[70%] min-h-screen space-y-10 px-3 md:px-8">
          {/** categories */}
          <div>
            <div className="lg:hidden flex items-center justify-between">
                <Categories />
                <div className="border dark:border-neutral-700/50 rounded-md p-1">
                  <Filter className="size-4 text-[hsl(155_78%_40%)]" />
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={cn(
                    "border dark:border-neutral-700/90 rounded-full px-3 py-[2px]",
                    category === "all"
                      ? "bg-neutral-300 dark:bg-neutral-700"
                      : "bg-transparent"
                  )}
                >
                  <span className="text-xs capitalize font-medium">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/** blogs */}
          <div className="space-y-10">
            {blogs?.map((blog, index) => {
              const date = format(blog.created_at, "MMMM dd, yyyy hh:mm a");

              return (
                <div
                  key={index}
                  className="pb-4 md:pb-6 border-b border-neutral-200 dark:border-neutral-700/50"
                >
                  {/** date */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-inter text-neutral-600 dark:text-neutral-400">
                    <PiStarFourFill className="text-emerald-600" />
                    {date}
                  </div>

                  {/** title and image */}
                  <div className="flex justify-between">
                    <div className="relative w-full h-[90px]">
                      <Link
                        href={"/journals/blog/" + blog.id}
                        className="w-[68%] hover:underline"
                      >
                        <span className="font-outfit text-[20px] md:text-[24px] font-bold leading-3 lg:leading-5 text-[#242424] dark:text-neutral-100">
                          {blog.title}
                        </span>
                      </Link>

                      {/** Icons */}
                      <div className="absolute bottom-0 w-full">
                        <div className="flex items-center justify-between pr-3 text-neutral-500">
                          <div className="flex items-center gap-3">
                            <ThumbsUp className="size-4" />
                            <BookMarked className="size-4" />
                          </div>
                          <div className="flex items-center gap-3">
                            <CircleMinus className="size-4" />
                            <Ellipsis className="size-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/** Image */}
                    <div className="w-[30%] h-[90px] flex items-start justify-end">
                      <div className="w-[100px] md:w-[140px] h-[68px] md:h-[80px] relative">
                        <Image
                          src={blog.image_url}
                          alt={blog.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="min-h-screen w-[1px] bg-neutral-200 dark:bg-neutral-700/50 mx-2 hidden lg:flex"></div>

        {/** right static content */}
        <div className="w-[30%] hidden lg:flex min-h-screen px-5">
          <div className="w-full space-y-10">
            <Follow />
            <Topics />
            <AdCard />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-8 py-8">
        <button className="rounded-full border border-neutral-600 dark:border-neutral-400 text-[#333] dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-600 px-5 py-3 lg:px-7 lg:py-5 font-medium text-sm font-raleway hover:ring-2 hover:ring-emerald-300 dark:hover:ring-emerald-600">
          Become a member
        </button>
      </div>
    </div>
  );
}

export default Journals;
