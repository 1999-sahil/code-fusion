import React, { ReactNode } from "react";
import Navlinks from "./_components/navlinks";
import Navbar from "./_components/navbar";
import MobileNav from "./_components/mobile-nav";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="m-auto min-h-screen">
            <Navbar />
            <div className="md:hidden">
                <MobileNav />
            </div>
            
            <div className=" max-w-6xl m-auto md:border-l md:border-r border-zinc-300 dark:border-zinc-700 min-h-screen">
              <Navlinks />
              {children}
            </div>
        </div>
    )
}
