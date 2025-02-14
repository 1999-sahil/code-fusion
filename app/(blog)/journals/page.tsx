"use client";

import React, { useEffect, useMemo, useState } from "react";

import { readBlog } from "@/lib/actions/blog";
import { cn } from "@/lib/utils";
import { categories } from "@/constant/category";

import Categories from "../_components/categories";
import Blogs from "../_components/blogs";
import Search from "../_components/search";

import { Filter, LoaderCircle } from "lucide-react";
import { TbMenu } from "react-icons/tb";

function Journals() {
  //const { data: blogs } = await readBlog();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchBlog, setSearchBlog] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  async function fetchBlogs(pageNum: number) {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const offset = pageNum * 15;
      const { data, error } = await readBlog(offset, 15);

      if (error) {
        setError(error.message);
      } else {
        if (data.length < 15) setHasMore(false);

        setBlogs((prev) => (pageNum === 0 ? data : [...prev, ...data])); // Append new blogs to existing list
        setPage(pageNum);
      }
    } catch (err) {
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs(0);
  }, []);

  // 🔍 Filter blogs based on search term
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchBlog.toLowerCase())
    );
  }, [blogs, searchBlog]);

  if (loading)
    return (
      <p className="w-full h-screen py-10 md:py-20 text-sm flex items-center justify-center font-inter m-auto gap-2">
        <LoaderCircle className="animate-spin size-4" />
        Please wait. While it is loading...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 min-h-screen w-full flex items-center justify-center">
        {error}
      </p>
    );

  return (
    <div className="px-3 lg:py-3">
      <div className="w-full h-full space-y-6">
        {/** search bar */}
        <div>
          <div className="lg:hidden px-3 space-y-3">
            <div className="flex items-center justify-between">
              <Categories />
              <div className="border dark:border-neutral-700/50 rounded-md p-1">
                <Filter className="size-4 text-[hsl(155_78%_40%)]" />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full min-w-full max-w-full">
              <Search value={searchBlog} onChange={setSearchBlog} />
              <div className="border border-zinc-300 dark:border-zinc-700 bg-neutral-200 dark:bg-neutral-800 h-full flex items-center justify-center p-2 rounded-md">
                <TbMenu className=" text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={cn(
                    "border dark:border-neutral-700/90 rounded-full px-3 py-[2px]",
                    category === "all"
                      ? "bg-neutral-300 dark:bg-neutral-700/60 dark:border-neutral-600"
                      : "bg-transparent dark:bg-neutral-900"
                  )}
                >
                  <span className="text-xs capitalize font-medium">
                    {category}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full max-w-[300px]">
              <Search value={searchBlog} onChange={setSearchBlog} />
              <div className="border border-zinc-300 dark:border-zinc-700 bg-neutral-200 dark:bg-neutral-800 h-full flex items-center justify-center p-2 rounded-md">
                <TbMenu className=" text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <Blogs blogs={filteredBlogs} />

        {/* Load More Button */}
        <div className="flex items-center justify-center my-8 py-8">
          {loading ? (
            <div className="w-full flex items-center gap-2 rounded-md border font-mono py-3 text-center text-neutral-600 dark:text-neutral-200 border-neutral-300/50 dark:border-neutral-700/50 hover:border-neutral-400/50 dark:hover:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50">
              <LoaderCircle className="size-5" />
              Loading
            </div>
          ) : hasMore ? (
            <button
              onClick={() => fetchBlogs(page + 1)}
              disabled={!hasMore}
              className="w-full rounded-md border font-mono py-3 text-center text-neutral-600 dark:text-neutral-200 border-neutral-300/50 dark:border-neutral-700/50 hover:border-neutral-400/50 dark:hover:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50"
            >
              Load More
            </button>
          ) : (
            <LoaderCircle className="size-5 animate-spin text-[#333] dark:text-neutral-200" />
          )}
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
