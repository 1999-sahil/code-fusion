import React from "react";
import { Search as SearchIcon } from "lucide-react";

function Search() {
  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700 dark:text-neutral-300 size-4" />
      <input
        type="text"
        placeholder="Search your journal"
        className="w-full pl-10 pr-3 py-2 rounded-md focus:outline-none focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 ring-1 ring-neutral-300 dark:ring-neutral-700 bg-neutral-100 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700 text-xs font-inter font-medium leading-relaxed"
      />
    </div>
  );
}

export default Search;
