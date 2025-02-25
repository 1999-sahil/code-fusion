import React from 'react'

import { BookOpen, Filter, ListFilter, Plus, Search } from "lucide-react";
import Link from 'next/link';
import UserTable from '../_components/user-table';

function page() {
  return (
    <>
    <div className="bg-neutral-200/40 dark:bg-neutral-800 border-y border-neutral-200 dark:border-neutral-700/50 px-3 lg:px-6 py-2">
      {/** buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        {/** search input and filter */}
        <div className="flex items-center justify-between gap-3">
          <div className="relative w-full">
            <Search className="absolute top-1 left-2.5 size-4 text-neutral-500 dark:text-neutral-400" />
            <input
              type="text"
              placeholder="Search blog title..."
              className="outline-none w-full px-8 text-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-md text-xs font-mukta font-medium py-1 ring-1 ring-neutral-300 dark:ring-neutral-700"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-1 rounded-md text-xs font-medium font-inter bg-white dark:bg-neutral-800 hover:bg-neutral-100 text-neutral-600 dark:text-neutral-300 ring-1 ring-neutral-300 dark:ring-neutral-700 hover:ring-neutral-400 dark:hover:ring-neutral-600">
            <Filter className="size-3" />
            Filter
          </button>
        </div>

        {/** refresh and create button */}
        <div className="flex flex-1 items-center justify-between md:justify-end gap-3">
          <div className="border border-dashed rounded-md bg-white dark:bg-neutral-800 border-neutral-400 dark:border-neutral-600 p-1">
            <ListFilter className="size-3 dark:text-neutral-300 text-neutral-700" />
          </div>
          <div className="flex items-center gap-3">
          <Link href="/journals">
            <button className="flex items-center gap-2 px-4 py-1 rounded-md text-xs font-medium font-inter bg-white dark:bg-neutral-800 hover:bg-neutral-100 text-neutral-600 dark:text-neutral-300 ring-1 ring-neutral-300 dark:ring-neutral-700 hover:ring-neutral-400 dark:hover:ring-neutral-600">
              <BookOpen className="size-3" />
              Journals
            </button>
          </Link>
          <Link href="/dashboard/blog/create">
            <button className="flex items-center gap-2 px-4 py-1 rounded-md text-xs font-medium font-inter ring-1 ring-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]">
              <Plus className="size-3" />
              Add User
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <UserTable />
    </>
  )
}

export default page