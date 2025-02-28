"use client";

import React, { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/constant/nav-link";
import Logo from "../logo";
import { ModeToggle } from "../mode-toggle";
import { FaGithub } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import MobileNav from "./mobile-nav";
import Login from "../login";
import { useUser } from "@/lib/store/user";
import Profile from "./profile";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const user = useUser((state) => state.user);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`p-3 md:mx-2 md:p-2 md:px-4 border-b md:border md:rounded-2xl sticky backdrop-blur top-1 md:top-2 shadow-sm z-50`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((nav, index) => (
                <div key={index}>
                  <Link
                    href={nav.href}
                    className="text-sm font-normal font-inter text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <h2>{nav.title}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {user?.id ? <Profile /> : <Login />}
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Link
                href="/"
                className="hover:bg-accent hover:text-accent-foreground p-1.5 rounded-md"
              >
                <FaGithub className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex items-center gap-1">
              {user?.id ? <Profile /> : <Login />}
              <div
                className="hover:bg-accent hover:text-accent-foreground p-1 rounded-md"
                onClick={toggleMenu}
              >
                {open ? (
                  <ChevronUp className="cursor-pointer h-[1.2rem] w-[1.2rem] dark:text-neutral-300" />
                ) : (
                  <ChevronDown className="cursor-pointer h-[1.2rem] w-[1.2rem] dark:text-neutral-300" />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay and MobileNav */}
      {open && (
        <>
          {/* MobileNav */}
          <div className="fixed w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-900 z-50">
            <MobileNav />
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
