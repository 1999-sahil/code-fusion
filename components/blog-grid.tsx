import React from "react";
import Image from "next/image";

function BlogGrid() {
  return (
    <div>
      {/** container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
        {/** First Column */}
        <div className="flex flex-col gap-3 lg:gap-8">
          {/** blog-1 */}
          <div className="lg:h-[270px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/47.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Jordan Craver
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @jordancraver
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                {`CSS view(): The Death of Javascript Scroll Animations`}
              </h1>
              <p className="hidden lg:block text-sm font-mukta font-normal text-neutral-500 dark:text-neutral-400">
                How a 5-line CSS feature replaced 50+ lines of janky JavaScript
                and changed web animation forever. How a 5-line CSS feature replaced 50+ lines of janky JavaScript
                and changed web animation forever.
              </p>
            </div>
          </div>

          {/** blog-4 */}
          <div className="lg:h-[210px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/8.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Duane Polman
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @duanepaulmon
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                Architectures of modern Front-end applications
              </h1>
              <p className="hidden lg:block text-sm font-mukta font-normal text-neutral-500 dark:text-neutral-400">
                This post explores the advantages of popular architectures and
                helps you choose the best solution to meet your unique
                requirements.
              </p>
            </div>
          </div>

          {/** blog-7 */}
          <div className="lg:h-[150px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/65.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Tristan Zweck
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @tristanzweck
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                You must use middleware like this in Next.js
              </h1>
            </div>
          </div>
        </div>

        {/** Second Column */}
        <div className="flex flex-col gap-3 lg:gap-8">
          {/** blog-2 */}
          <div className="lg:h-[230px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/56.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Coy Tulp
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @coytulp
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                The Future of Server-Side Rendering: Trends for 2025
              </h1>
              <p className="hidden lg:block text-sm font-mukta font-normal text-neutral-500 dark:text-neutral-400">
                SSR is evolving, and 2025 promises innovations that will change
                how we build the web — faster, smarter, and greener.
              </p>
            </div>
          </div>

          {/** blog-5 */}
          <div className="lg:h-[210px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/69.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Thaddeus Arras
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @arrasthaddeus
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                Next.js 14+ Design Patterns: Best Practices for Modern Web Dev
              </h1>
              <p className="hidden lg:block text-sm font-mukta font-normal text-neutral-500 dark:text-neutral-400">
                As Next.js continues to evolve, the release of Next.js 14+
                brings new features and enhancements that enable developers.
              </p>
            </div>
          </div>

          {/** blog-8 */}
          <div className="lg:h-[150px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/66.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Herschel Bouey
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @harschelbuoey
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                The Real Reason OpenAI abandoned Next.js for Remix
              </h1>
            </div>
          </div>
        </div>

        {/** Third Column */}
        <div className="flex flex-col gap-3 lg:gap-8">
          {/** blog-3 */}
          <div className="lg:h-[210px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/7.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Clinton Yellott
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @clintonott
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                Express.js Secrets That Senior Developers Don&apos;t Share
              </h1>
              <p className="hidden lg:block text-sm font-mukta font-normal text-neutral-500 dark:text-neutral-400">
                Express.js has been the backbone of Node.js web development for
                years, but are you truly harnessing its full potential?
              </p>
            </div>
          </div>

          {/** blog-6 */}
          <div className="lg:h-[150px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/77.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Graham Kappen
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @kappengraham
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                Build a Validated Multistep Form with ShadCN and React
                Hook Form
              </h1>
            </div>
          </div>

          {/** blog-9 */}
          <div className="lg:h-[150px] flex flex-col items-start justify-center p-3 lg:p-5 border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 space-y-4 rounded-lg">
            {/** Image and name */}
            <div className="flex items-center gap-2">
              <Image
                src="/blogs/46.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium font-inter text-[#333] dark:text-neutral-200">
                  Herman Rodell
                </h2>
                <h4 className="text-sm font-medium font-mukta text-neutral-400 dark:text-neutral-500">
                  @hermanrodell
                </h4>
              </div>
            </div>

            {/** title and desc */}
            <div className="space-y-2">
              <h1 className="font-inter font-medium text-[#111] dark:text-neutral-100">
                React Component Reusability in Micro-Frontends
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
