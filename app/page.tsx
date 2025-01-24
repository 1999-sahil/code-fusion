import Image from "next/image";
import { Hash, Terminal } from "lucide-react";

import MainContent from "@/components/main-content";
import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar/navbar";
import CFButton from "@/components/cf-button";
import Button from "@/components/button";
import BlogGrid from "@/components/blog-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="relative overflow-hidden px-2 md:px-4 lg:px-8 flex flex-col items-center my-8 lg:my-12">
        {/** main banner */}
        <div className="relative z-10 border w-[98%] lg:w-[84%] pt-8 lg:pt-12 flex flex-col gap-24 bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
          {/** Main Heading with buttons */}
          <div className="space-y-6 px-3 lg:px-5">
            <div className="space-y-1">
              <span className="text-xs lg:text-sm font-semibold font-poppins text-[#00c774]">
                {"<Code.Fusion />"}
              </span>
              <h1 className="text-2xl lg:text-4xl max-w-lg lg:max-w-2xl font-poppins font-medium text-[#111] dark:text-neutral-200">
                Empowering the new dimension of learning with our comprehensive
                docs and blogs
              </h1>
            </div>
            <p className="text-sm lg:text-base font-inter max-w-xl lg:max-w-2xl text-neutral-500 dark:text-neutral-400">
              Codefusion is a <strong>beautiful & robust</strong> documentation
              to learn <strong>engineering</strong>. Unlocking Potential,
              Igniting <strong>curiosity</strong>, Explore #Codefusion mdx blogs
            </p>
            <div className="space-x-4 w-fit">
              <button className="text-xs lg:text-sm font-medium font-poppins rounded-full px-4 py-2 text-neutral-100 dark:text-[#333] bg-gradient-to-b from-neutral-800 to-neutral-500 hover:from-neutral-800 hover:to-neutral-800 dark:from-neutral-200 dark:to-neutral-400 dark:hover:from-neutral-200 dark:hover:to-neutral-200">
                Getting started
              </button>
              <button className="text-xs lg:text-sm font-medium font-poppins rounded-full px-4 py-2 shadow-md text-neutral-700 dark:text-neutral-200 bg-gradient-to-b from-neutral-300 to-neutral-100 hover:from-neutral-300 hover:to-neutral-300 dark:from-neutral-800 dark:to-neutral-600 dark:hover:from-neutral-800 dark:hover:to-neutral-800">
                ⚡️ Docs
              </button>
            </div>
          </div>

          <section className="bg-neutral-50 dark:bg-[#1a1a1a]">
            {/** card */}
            <div className="pt-8">
              <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-xs md:text-sm lg:text-base font-medium font-poppins text-neutral-500 dark:text-neutral-400">
                  Trusted by Codefusion teams and developers
                </h2>
                <div className="rounded-lg border max-w-[300px] lg:max-w-xl flex flex-col gap-4 lg:gap-6 p-4 bg-gradient-to-b from-zinc-200/60 to-zinc-50 dark:from-neutral-800 dark:to-neutral-900">
                  <h2 className="text-xs lg:text-sm lg:whitespace-nowrap font-medium font-inter text-black dark:text-zinc-200">
                    {`"A gorgeous documentations that composes beautifully into #CodeFusion blogs."`}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <Image
                        src="/logo.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="rounded-full p-1 bg-white dark:bg-black"
                      />
                      <div>
                        <h2 className="text-xs font-poppins font-medium text-[#111] dark:text-zinc-200">
                          Sahil Ahmed
                        </h2>
                        <h4 className="text-[10px] font-mukta font-medium text-zinc-500 dark:text-zinc-400">
                          sahilahmed466@gmail.com
                        </h4>
                      </div>
                    </div>
                    <button className="text-xs lg:text-sm font-medium font-mukta rounded-md border px-2 lg:px-4 py-1 ring-1 text-[#333] dark:text-zinc-200 ring-zinc-300 dark:ring-zinc-700 bg-zinc-200 dark:bg-zinc-800">
                      Showcase
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/** marquee motion */}
            <div className="relative py-20 lg:py-24 w-full h-full flex items-center justify-center border-b">
              <Marquee />
            </div>

            {/** main concepts */}
            <div className="flex flex-col gap-8 lg:gap-12 py-10 lg:py-20">
              {/** Heading */}
              <div className="flex items-center justify-center">
                <h1 className="flex flex-col items-center justify-center text-xl md:text-2xl font-poppins font-medium max-w-md md:max-w-xl text-[#333] dark:text-zinc-200">
                  <Terminal className="md:size-8" />
                  <span>Start instantly.</span>
                  <span className="text-center">
                    Write, Learn and Share your knowledge.
                  </span>
                </h1>
              </div>
              {/** Grid cards */}
              <MainContent />
            </div>

            {/** Blogs Grid */}
            <div className="px-3 lg:px-8 py-10">
              {/** heading */}
              <div className="flex flex-col lg:flex-row lg:items-end gap-5 lg:justify-between">
                <div className="max-w-full lg:max-w-xl space-y-4">
                  <h4 className="flex items-center ">
                    <Hash className="text-emerald-500 size-4" />
                    <span className="text-sm font-normal font-ubuntu text-neutral-600 dark:text-neutral-400">CodeFusion Blogs</span>
                  </h4>
                  <h2 className="font-semibold font-inter text-2xl text-start text-[#333] dark:text-neutral-400">
                    <span className="text-black dark:text-white">
                      MDX Blogs
                    </span>{" "}
                    to enhance and innovate your knowledge with ease.
                  </h2>
                  <p className="lg:max-w-lg text-sm lg:text-base font-medium font-inter text-neutral-500 dark:text-neutral-500/90">
                    See how CodeFusion blogs empowers users for all domain to
                    accelerate their growth and streamline their work.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CFButton href="" text="View all blogs" />
                  <Button href="" text="Go to editor" />
                </div>
              </div>
              {/** blogs */}
              <div className="pt-12">
                <BlogGrid />
              </div>
            </div>
          </section>
        </div>

        {/** bg grid lines */}
        <div className="max-lg:hidden absolute top-10 z-0 w-full h-[300px] bg-neutral-50 dark:bg-[#1a1a1a] bg-[linear-gradient(to_right,#dddddd_1px,transparent_1px),linear-gradient(to_bottom,#dddddd_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#343434_1px,transparent_1px),linear-gradient(to_bottom,#343434_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </main>
      <Footer />
    </div>
  );
}
