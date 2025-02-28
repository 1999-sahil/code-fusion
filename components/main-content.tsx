"use client";

import React from "react";
import UserInterface from "./blocks/user-interface";
import Database from "./blocks/database";
import Dsa from "./blocks/dsa";
import Frontend from "./blocks/frontend";
import Design from "./blocks/design";
import Backend from "./blocks/backend";

function MainContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-2 lg:px-6">
      <div className="w-full h-full sm:h-[280px] bg-neutral-50 dark:bg-neutral-900/50">
        <UserInterface />
      </div>
      <div className="w-full h-full sm:h-[280px] bg-neutral-50 dark:bg-neutral-900/50">
        <Database />
      </div>
      <div className="md:col-span-2 md:row-span-2 w-full h-full sm:h-[420px] bg-neutral-50 dark:bg-neutral-900/50">
        <Dsa />
      </div>
      <div className="md:col-span-2 md:row-span-2 w-full h-full sm:h-[420px] bg-neutral-50 dark:bg-neutral-900/50">
        <Frontend />
      </div>
      <div className="w-full h-full sm:h-[280px] bg-neutral-50 dark:bg-neutral-900/50">
        <Design />
      </div>
      <div className="w-full h-full sm:h-[280px] bg-neutral-50 dark:bg-neutral-900/50">
        <Backend />
      </div>
    </div>
  );
}

export default MainContent;
