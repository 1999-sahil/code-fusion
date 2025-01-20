import { mobileNavLinks } from "@/constant/nav-link";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";

function MobileNav() {
  return (
    <div className="px-4">
      <h2 className="text-sm mb-2 font-semibold font-inter text-neutral-600 dark:text-neutral-400">Getting Started</h2>
      <div className="flex flex-col items-start gap-3 mb-5">
        {mobileNavLinks.map((link, index) => (
          <Link href={link.href} key={index} className="flex items-center gap-2 w-full text-neutral-900 dark:text-neutral-200 hover:text-black dark:hover:text-white">
              <link.icon className="size-4" />
              <h2 className="font-medium font-poppins">
              {link.title}
              </h2>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="hover:bg-accent hover:text-accent-foreground p-1.5 rounded-md"
        >
          <FaGithub className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

export default MobileNav;
