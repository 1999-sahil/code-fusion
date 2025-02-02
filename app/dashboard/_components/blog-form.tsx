"use client"

import { useState, useTransition } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { BlogFormSchema, BlogFormSchemaType } from "../schema"
import { CornerRightUp, Ellipsis, Eye, LoaderCircle, Pencil, Save } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import MarkdownPreview from "@/components/markdown/markdown-preview"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { IBlogDetail } from "@/lib/types"

export default function BlogForm({
  onHandleSubmit,
  blog,
} : {
  onHandleSubmit: (data: BlogFormSchemaType) => void;
  blog?: IBlogDetail;
}) {
  const [isPreview, setIsPreview] = useState(false);

  const [isPending, startTransition] = useTransition();

  // Form Schema
  const form = useForm<BlogFormSchemaType>({
    mode: "all",
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: blog?.title || "",
      image_url: blog?.image_url || "",
      content: blog?.blog_content?.content || "",
      is_premium: blog?.is_premium || false,
      is_published: blog?.is_published || true,
    },
  })

  // To handle submit form data to DB
  function onSubmit(data: BlogFormSchemaType) {
    startTransition(() => {
      onHandleSubmit(data);
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 pb-8 border-b dark:border-neutral-700">
        {/** actions */}
        <div className="flex items-center justify-between px-4 lg:px-6 py-3 bg-neutral-200/40 dark:bg-neutral-800 border-y border-neutral-200 dark:border-neutral-700/50">
          <div className="flex items-center gap-3 lg:gap-3">
            {/** premium */}
            <FormField
              control={form.control}
              name="is_premium"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2 text-xs font-medium font-inter">
                      Premium
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      //style={{ backgroundColor: "hsl(155,78%,40%)" }}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/** publish */}
            <FormField
              control={form.control}
              name="is_published"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2 text-xs font-medium font-inter">
                      Publish
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-3">
            {/** preview */}
            <span
              role="button"
              tabIndex={0}
              onClick={() => setIsPreview(!isPreview && !form.getFieldState("image_url").invalid)}
              className="whitespace-nowrap"
            >
              {isPreview ? (
                <h2 className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium font-inter bg-white dark:bg-neutral-800 hover:bg-neutral-100 text-neutral-600 dark:text-neutral-300 ring-1 ring-neutral-300 dark:ring-neutral-700 hover:ring-neutral-400 dark:hover:ring-neutral-600">
                  <Pencil className="size-3" />
                  Edit
                </h2>
              ) : (
                <h2 className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium font-inter ring-1 ring-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]">
                  <Eye className="size-4" />
                  Preview
                </h2>
              )}
            </span>

            {/** save */}
            <div className="flex items-center gap-1">
              {isPending ? (
                <button
                disabled={!form.formState.isValid}
                className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium font-inter ring-1 ring-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]"
              >
                <LoaderCircle className="size-4 animate-spin" />
                Saving
              </button>
              ) : (
              <button
                disabled={!form.formState.isValid}
                className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium font-inter ring-1 ring-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)]"
              >
                <Save className="size-4" />
                Save
              </button>
              )}
            </div>

            <button className='max-md:hidden border rounded-md p-1 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'>
              <Ellipsis className='size-3 text-neutral-700 dark:text-neutral-400' />
            </button>
          </div>
        </div>

        {/** form */}
        <div className="px-2 lg:px-5 space-y-5">
          {/** Title field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  "text-neutral-600 dark:text-neutral-400 text-sm font-inter font-medium flex items-center",
                  isPreview ? "hidden" : "block"
                )}>
                  Title
                  <span className="text-emerald-600 text-xs font-ubuntu pl-2">required</span>
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    "w-full flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}>
                    <Input
                      placeholder="Enter your title"
                      {...field}
                      className={cn(
                        "outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 ring-neutral-300 dark:ring-neutral-700/50 bg-neutral-200/50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-xs font-poppins font-medium leading-relaxed",
                        isPreview ? "hidden" : "w-full lg:w-1/2"
                      )}
                    />
                    <div className={cn(
                      "lg:px-10",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "w-1/2 lg:block hidden"
                    )}>
                      <h1 className="text-2xl lg:text-4xl font-medium font-inter">
                        {form.getValues().title || "Untitled blog"}
                      </h1>
                    </div>
                  </div>
                </FormControl>

                {form.getFieldState("title").invalid && form.getValues().title && (
                  <div>
                    <FormMessage />
                  </div>
                )}
              </FormItem>
            )}
          />

          {/** Image URL field */}
          <FormField
            control={form.control}
            name="image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  "text-neutral-600 dark:text-neutral-400 text-sm font-inter font-medium flex items-center",
                  isPreview ? "hidden" : "block"
                )}>
                  Image URL
                  <span className="text-emerald-600 text-xs font-ubuntu pl-2">required</span>
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    "w-full flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}>
                    <Input
                      placeholder="Paste your image url here"
                      {...field}
                      className={cn(
                        "outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 ring-neutral-300 dark:ring-neutral-700/50 bg-neutral-200/50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-xs font-mukta font-normal leading-relaxed",
                        isPreview ? "hidden" : "w-full lg:w-1/2"
                      )}
                    />
                    <div className={cn(
                      "lg:px-10",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "w-1/2 lg:block hidden"
                    )}>
                      {!isPreview ? (
                        <>
                          <p className="flex items-center gap-2 text-sm font-inter font-normal">
                            Click on Preview to see the image
                            <CornerRightUp className="size-4 text-emerald-500" />
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="relative h-60 lg:h-80 rounded-md border bg-neutral-200/40 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700">
                            {form.getValues().image_url ? (
                              <Image
                                src={form.getValues().image_url}
                                alt="preview-image"
                                fill
                                className="object-cover object-center rounded-md p-1"
                              />
                            ) : (
                              <p className="text-center text-gray-500 dark:text-gray-400">No image selected</p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </FormControl>

                {form.getFieldState("image_url").invalid && form.getValues().image_url && (
                  <div className="font-medium font-mukta">
                    <FormMessage />
                  </div>
                )}
              </FormItem>
            )}
          />

          {/** Content field */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  "text-neutral-600 dark:text-neutral-400 text-sm font-inter font-medium flex items-center ",
                  isPreview ? "hidden" : "block"
                )}>
                  MDX Content
                  <span className="text-emerald-600 text-xs font-ubuntu pl-2">required</span>
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    "w-full flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x h-[70vh]"
                  )}>
                    <Textarea
                      placeholder="Write your markdown content here"
                      {...field}
                      className={cn(
                        "outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 ring-neutral-300 dark:ring-neutral-700/50 bg-neutral-200/50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-xs font-mono font-normal leading-relaxed text-neutral-800 dark:text-neutral-300",
                        isPreview ? "hidden" : "w-full lg:w-1/2"
                      )}
                    />
                    <div className={cn(
                      "overflow-auto lg:px-10 h-full",
                      isPreview
                        ? "mx-auto w-full lg:w-4/5"
                        : "w-1/2 lg:block hidden"
                    )}>
                      <MarkdownPreview
                        content={form.getValues().content}
                      />
                    </div>
                  </div>
                </FormControl>

                {form.getFieldState("content").invalid && form.getValues().content && (
                  <div>
                    <FormMessage />
                  </div>
                )}
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
