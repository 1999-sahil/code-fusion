"use client";

import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronsUpDown, Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function Navlinks() {
  const pathname = usePathname();
  const [selectedText, setSelectedText] = useState("Dashboard");

  const links = [
    {
      href: "/dashboard",
      text: "dashboard",
    },
    {
      href: "/dashboard/user",
      text: "user",
    },
  ];

  // Get the option that is NOT currently selected
  const availableOption = links.find((link) => link.text !== selectedText);

  return (
    <div className="flex items-center justify-between px-4 py-6 lg:px-6 lg:py-6">
      {/* Dynamic Heading */}
      <h2 className="text-lg md:text-xl font-medium font-inter capitalize">{selectedText}</h2>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-between text-xs ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-md py-1 px-3 w-[180px] md:w-[220px] bg-neutral-100 dark:bg-neutral-800 hover:ring-neutral-500 dark:hover:ring-neutral-600">
            <h2 className="font-medium font-inter">
              <span className=" text-neutral-500 dark:text-neutral-400">select: </span>
              {selectedText}
            </h2>
            <ChevronsUpDown className="size-3 text-neutral-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[180px] md:w-[220px] dark:bg-neutral-800">
          <DropdownMenuLabel className="flex items-center gap-2 text-xs font-mukta text-neutral-500 font-normal">
            <Search className="size-3" />
            Search here...
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {availableOption && (
            <DropdownMenuItem
              onClick={() => setSelectedText(availableOption.text)}
              className="cursor-pointer text-xs font-mukta font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50"
            >
              <Link href={availableOption.href} legacyBehavior>
                <a className="w-full block">
                  {availableOption.text}
                </a>
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navlinks;
