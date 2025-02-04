import React from "react";

const topics = [
  "Programming",
  "Data Science",
  "Technology",
  "Developers",
  "Database",
  "User Interface",
  "Next.js",
  "AI",
  "Writing",
  "Politics"
];

function Topics() {
  return (
    <div className="space-y-5">
      <h2 className="font-medium font-poppins text-[#111] dark:text-neutral-100">Recommended topics</h2>

      <div className="flex items-center flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full px-3 py-1 text-xs font-mono"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="text-xs font-openSans text-neutral-600 dark:text-neutral-400">
        See more topics
      </div>
    </div>
  );
}

export default Topics;
