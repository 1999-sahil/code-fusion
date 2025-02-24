import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function ManageBilling() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full flex items-center justify-between text-sm font-mukta dark:hover:bg-neutral-700/50"
    >
      Billing
      <ShoppingBag />
    </Button>
  );
}

export default ManageBilling;
