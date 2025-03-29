import Link from "next/link";
import React from "react";

import { IBlog } from "@/lib/types";
import {
  ChevronLeft,
  Dot,
  IndianRupee,
} from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import BlogContent from "./_components/blog-content";

// ----- FOR SEO (STARTS HERE) ----- //

// export async function generateStaticParams() {
//   const { data: blog } = (await fetch(
//     process.env.NEXT_PUBLIC_SITE_URL + "/api/blog?id=" + "*"
//   ).then((res) => res.json())) as { data: IBlog };

//   return blog;
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const { id } = await params;

//   const { data: blog } = (await fetch(
//     process.env.NEXT_PUBLIC_SITE_URL + "/api/blog?id=" + id
//   ).then((res) => res.json())) as { data: IBlog };

//   return {
//     title: blog?.title,
//     authors: {
//       name: "CodeFusion and Teams"
//     },
//     openGraph: {
//       title: blog?.title,
//       url: process.env.NEXT_PUBLIC_SITE_URL+"/blog/"+params.id,
//       sitename: "CodeFusion",
//       images: blog?.image_url,
//       type: "website",
//     },
//     keywords: ["CodeFusion", "Blogs", "Codefusion blogs", "Web blogs", "Code blogs", "Coding", "Learn", "Free blogs"]
//   }

// }

// ----- FOR SEO (ENDS HERE) ----- //


export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  
  const { data: blog } = (await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/blog?id=" + id
  ).then((res) => res.json())) as { data: IBlog };

  if (!blog?.id) {
    return (
      <h1>Not found</h1>
    )
  }

  return (
    <div className="flex items-start gap-12">
      {/** back btn */}
      <div className="hidden md:block">
        <Link href="/journals">
          <button className="flex items-center gap-1 text-sm font-medium font-inter text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-100">
            <ChevronLeft className="size-5" />
            Back
          </button>
        </Link>
      </div>

      {/** blog */}
      <div className="w-full space-y-5 md:space-y-7 pb-5 px-5">
        <span className="text-[hsl(151_67%_67%)] dark:text-[hsl(155_78%_40%)] font-medium font-outfit">
          Blog
        </span>
        <div className="space-y-2 md:space-y-3">
          <h2 className="text-2xl lg:text-3xl font-outfit font-medium text-[#242424] dark:text-neutral-50">
            {blog?.title}
          </h2>
          <div className="flex items-center gap-2 font-kanit text-xs lg:text-sm">
            <p className="flex items-center gap-2 text-neutral-500 dark:text-neutral-300">
              {format(blog?.created_at || "", "MMMM dd, yyyy")}
            </p>
            <Dot className="text-[#333] dark:text-white" />
            <span>
              {blog?.is_premium ? (
                <p className="flex items-center gap-1 text-yellow-500">
                  {" "}
                  <IndianRupee className="size-4" /> Premium
                </p>
              ) : (
                <p className="dark:text-neutral-300 text-neutral-500">Free</p>
              )}
            </span>
          </div>
        </div>
        <div className="w-full max-md:min-w-full h-60 lg:h-80 relative max-w-[80%] border rounded-lg">
          <Image
            priority
            src={blog?.image_url || "/"}
            alt="cover"
            fill
            className="object-cover object-center p-1 rounded-lg"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px): 50vw, 33vw"
          />
        </div>
        <BlogContent blogId={blog.id} />
      </div>
    </div>
  );
}

