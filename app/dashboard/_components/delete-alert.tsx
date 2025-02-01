"use client";

import React, { ChangeEvent, useTransition } from "react";

import { toast } from "@/hooks/use-toast";
import { deleteBlogById } from "@/lib/actions/blog";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { LoaderCircle, Trash } from "lucide-react";

function DeleteAlert({ blogId }: { blogId: string }) {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
        const result = await deleteBlogById(blogId);

        const { error } = JSON.parse(result);

        if (error?.message) {
            toast({
              title: "Failed to delete the blog. Please try again.",
              description: (
                <pre className="mt-2 w-[340px] rounded-md border border-rose-300 bg-rose-200 dark:border-rose-600 dark:bg-rose-800 p-4">
                  <code className="text-white">
                    {error.message}
                  </code>
                </pre>
              ),
            })
        } else {
            toast({
              title: "Blog post deleted successfully!",
            });
        }
    })
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-2 text-xs font-kanit cursor-pointer text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50">
          <Trash className="size-3 text-rose-500 dark:text-red-600" />
          Delete
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form onSubmit={onSubmit}>
            {isPending ? (
                <Button variant="outline" className="flex items-center gap-2 border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]">
                  <LoaderCircle className="size-4 animate-spin" />
                  Deleting
                </Button>
            ) : (
                <Button variant="outline" className="border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]">
                  Continue
                </Button>
            )}
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteAlert;
