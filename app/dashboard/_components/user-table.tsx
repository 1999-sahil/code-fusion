import { getAllUsers } from "@/lib/actions/blog";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { Shield } from "lucide-react";

async function UserTable() {
  const { data: users } = await getAllUsers();

  //console.log("Get all users: ", users);

  return (
    <div className="my-7 mx-5">
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-max border rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-100/80 dark:from-neutral-800/90 dark:to-neutral-800/80">
        {/** Table Heading */}
        <div className="grid grid-cols-9 md:grid-cols-11 py-3 lg:py-4 font-inter text-xs font-medium border-b border-neutral-200 dark:border-neutral-700/50 bg-neutral-200/40 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400">
          <h1></h1>
          <h1 className="col-span-2 max-md:hidden">UID</h1>{" "}
          {/* Hide UID on small screens */}
          <h1 className="">Name</h1>
          <h1 className="col-span-2">Email</h1>
          <h1>Providers</h1>
          <h1>Role</h1>
          <h1>User type</h1>
          <h1 className="col-span-2">Created at</h1>
        </div>

        {/** table content */}

        {users?.map((user, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-9 md:grid-cols-11 text-xs border-b py-3 bg-white dark:bg-neutral-900/50"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={user?.image_url || ""}
                  alt={user?.display_name || ""}
                  width={28}
                  height={28}
                  className="rounded-full ring-1 p-[2px] ring-neutral-300 dark:ring-neutral-700"
                />
              </div>
              <h1 className="col-span-2 max-md:hidden lg:pr-3 font-mono text-neutral-600 dark:text-neutral-400">{user?.id}</h1>
              <h1 className="font-inter">{user?.display_name}</h1>
              <h1 className="col-span-2 font-inter pr-3">{user?.email}</h1>
              <h1 className="flex gap-1 font-inter">
                <FaGithub className="size-4 ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-full p-[1px]" />
                Github
              </h1>

              <div>
                {user?.role === "admin" 
                ? <h1 className="flex items-center gap-1 w-fit font-inter text-[10px] border rounded-xl px-2 py-[2px] border-orange-300 dark:border-orange-800 bg-orange-300/50 dark:bg-orange-900">
                    <Shield className="size-3" />
                    Admin
                  </h1>
                : <h1 className="w-fit font-inter">User</h1>
                }
              </div>

              <div>
                {user?.subscription_status === true ? (
                  <h1 className="font-inter w-fit rounded-xl text-[10px] px-2 py-[2px] border border-[hsl(155_78%_40%)] bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)]">Premium</h1>
                ) : (
                  <h1 className="font-inter w-fit rounded-xl text-[10px] px-2 py-[2px] border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-700/50">Guest</h1>
                )}
              </div>

              <h1 className="col-span-2 font-inter text-[10px]">
                {format(user?.created_at, "MMMM dd, yyyy hh:mm a")}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="my-3">
        <h2 className="text-xs font-poppins text-neutral-700 dark:text-neutral-300">Total: {users?.length} users</h2>
      </div>
      </div>
    </div>
  );
}

export default UserTable;
