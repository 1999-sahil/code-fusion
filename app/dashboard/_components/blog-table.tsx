import React from "react";

import Actions from "./actions";
import { readBlogAdmin, updateBlogById } from "@/lib/actions/blog";

import { Table2 } from "lucide-react";
import SwitchForm from "./switch-form";
import { BlogFormSchemaType } from "../schema";

async function BlogTable() {
  const { data: blogs } = await readBlogAdmin();

  return (
    <div className="my-7 mx-5">
      <div className="w-full border rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-100/80 dark:from-neutral-800/90 dark:to-neutral-800/80">
        <div className="grid grid-cols-6 md:grid-cols-8 px-2 py-3 lg:py-4 font-inter text-xs font-medium border-b border-neutral-200 dark:border-neutral-700/50 bg-neutral-200/40 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400">
          <h1></h1>
          <h1 className="col-span-2 hidden md:flex">UID</h1>
          <h1 className="col-span-2">Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
          <h1>Actions</h1>
        </div>

        {blogs?.map((blog, index) => {
          const updatePremium = updateBlogById.bind(null, blog.id, {
            is_premium: !blog.is_premium,
          } as BlogFormSchemaType);

          const updatePubilished = updateBlogById.bind(null, blog.id, {
            is_published: !blog.is_published,
          } as BlogFormSchemaType);

          return (
            <div
              key={index}
              className="grid grid-cols-6 md:grid-cols-8 border-b py-3 bg-white dark:bg-neutral-900/50"
            >
              <h1 className="flex items-center justify-center">
                <Table2 className="size-3.5 text-neutral-400 dark:text-neutral-500" />
              </h1>
              <h1 className="col-span-2 hidden md:flex font-mono text-xs text-neutral-600 dark:text-neutral-400">
                {blog.id}
              </h1>
              <h1 className="col-span-2 lg:pr-2 font-inter text-sm text-neutral-600 dark:text-neutral-300">
                {blog.title}
              </h1>
              <SwitchForm
                onToggle={updatePremium}
                checked={blog.is_premium}
                name="premium"
              />
              <SwitchForm
                onToggle={updatePubilished}
                checked={blog.is_published}
                name="publish"
              />
              <Actions id={blog.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogTable;
