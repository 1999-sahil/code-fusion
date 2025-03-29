"use client";

import React, { useTransition } from "react";

import { LoaderCircle, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

import { useUser } from "@/lib/store/user";
import { manageBilling } from "@/lib/actions/stripe";
import { cn } from "@/lib/utils";

function ManageBilling() {
  const [isPending, startTransition] = useTransition();
  const user = useUser((state) => state.user);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const customerId = user?.stripe_customer_id;
    if (!customerId) return; // Safe check before using it
  
    startTransition(async () => {
      const response = await manageBilling(customerId);
      
      try {
        const data = JSON.parse(response);
        if (data?.url) {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error("Failed to parse billing response:", error);
      }
    });
  };
  

  return (
    <Button
      onClick={onSubmit}
      variant="ghost"
      size="sm"
      className="w-full flex items-center justify-between text-sm font-mukta dark:hover:bg-neutral-700/50"
    >
      <span className="flex items-center gap-2">
        <LoaderCircle className={cn("size-3 animate-spin", { hidden: !isPending })} />
        Billing
      </span>
      <ShoppingBag />
    </Button>
  );
}

export default ManageBilling;
