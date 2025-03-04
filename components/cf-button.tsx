import React from "react";

interface CFButtonProps {
  text: string;
}

function CFButton({ text }: CFButtonProps) {
  return (
    <button className="border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-3 py-[2px] text-xs font-mukta">
      {text}
    </button>
  );
}

export default CFButton;
