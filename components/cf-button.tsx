import Link from "next/link";
import React from "react";

interface CFButtonProps {
  href: string;
  text: string;
}

function CFButton({ href, text }: CFButtonProps) {
  return (
    <Link href={href}>
      <button className="border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-[2px] text-sm font-mukta">
        {text}
      </button>
    </Link>
  );
}

export default CFButton;
