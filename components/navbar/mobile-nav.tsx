import { mobileNavLinks } from "@/constant/nav-link";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import { ChevronDown } from "lucide-react";
import { useUser } from "@/lib/store/user";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

function MobileNav() {
  const user = useUser((state) => state.user);
  const pathname = usePathname();

  const supabase = createClient();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <div className="min-h-screen h-full w-full relative">
      <div className="py-8 px-10">
        <h2 className="text-xs mb-5 px-2 font-normal font-inter text-neutral-500">
          Getting Started
        </h2>
        <div className="flex flex-col items-start gap-1 mb-5 px-2">
          {mobileNavLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex items-center justify-between w-full py-2 border-b text-[#111] dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-500"
            >
              <span className="flex items-center gap-2">
                <link.icon className="size-3.5" />
                <h2 className="font-normal text-sm font-outfit">
                  {link.title}
                </h2>
              </span>
              <ChevronDown className="size-3.5" />
            </Link>
          ))}
        </div>
        <h2 className="text-xs px-2 my-5 font-normal font-inter text-neutral-500">
          Profile
        </h2>

        <div className="flex items-center justify-between w-full hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 py-2 px-2 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              src={user?.image_url || "/logo.svg"}
              alt={user?.display_name || ""}
              width={32}
              height={32}
              className="rounded-full ring-1 ring-neutral-300 dark:ring-neutral-700 p-[2px]"
            />
            <span className="flex flex-col">
              <h3 className="text-xs font-medium font-inter text-[#111] dark:text-neutral-200">
                {user?.display_name || "Log in to unlock all features."}
              </h3>
              <h3 className="text-xs font-mukta text-neutral-500 dark:text-neutral-400">
                {user?.email || "Haven't sign in yet? Click below"}
              </h3>
            </span>
          </div>
          <ChevronDown className="size-3.5" />
        </div>

        <div className="flex items-center justify-center gap-5 my-20">
          <Link href="/">
            <FaGithub className="h-[1.2rem] w-[1.2rem] text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white" />
          </Link>
          <Link href="/">
            <FaLinkedin className="h-[1.2rem] w-[1.2rem] text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white" />
          </Link>
          <Link href="/">
            <FaDiscord className="h-[1.2rem] w-[1.2rem] text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white" />
          </Link>
          <Link href="/">
            <FaTwitter className="h-[1.2rem] w-[1.2rem] text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white" />
          </Link>
          <ModeToggle />
        </div>
      </div>

      <div className="absolute bottom-[9%] w-full">
        <div className="h-16 w-full px-3 flex items-center justify-center text-center bg-neutral-200 dark:bg-neutral-950">
          {user?.id ? (
            <Link
              href="/dashboard"
              className="w-full text-center border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md py-2 text-xs font-mukta"
            >
              Dashboard
            </Link>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full text-center border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-2 text-xs font-mukta"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
