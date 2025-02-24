import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { LayoutDashboardIcon, LockOpen } from "lucide-react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import ManageBilling from "../stripe/manage-billing";

function Profile() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const supabase = createClient();
  const router = useRouter();
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/")
  };

  const isAdmin = user?.role === "admin";
  const isSubscribed = user?.subscription_status;

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={user?.image_url || ""}
          alt={user?.display_name || ""}
          width={35}
          height={35}
          className="max-md:w-[30px] max-md:h-[30px] mr-2 lg:mr-1 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-600 p-[2px] rounded-full cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="dark:bg-neutral-800 border dark:border-neutral-700">
        <div className="mb-2">
          <p className="text-sm font-inter font-medium text-[#111] dark:text-neutral-200">
            {user?.display_name}
          </p>
          <p className="text-xs font-mukta text-[#333] dark:text-neutral-400">
            {user?.email}
          </p>
        </div>
        {isAdmin && (
          <Link href="/dashboard" className="block">
            <Button size="sm" variant="ghost" className="w-full flex items-center justify-between text-sm font-mukta dark:hover:bg-neutral-700/50">
              Dashboard
              <LayoutDashboardIcon className="size-4" />
            </Button>
          </Link>
        )}
        {isSubscribed && <ManageBilling />}
        <Button onClick={handleLogout} size="sm" variant="ghost" className="w-full flex items-center justify-between text-sm font-mukta dark:hover:bg-neutral-700/50">
          Logout
          <LockOpen className="size-4" />
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default Profile;
