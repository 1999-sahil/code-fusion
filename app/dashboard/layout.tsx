import React, { ReactNode } from "react";
import Navlinks from "./_components/navlinks";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-5 lg:space-y-10 px-3 max-w-6xl m-auto my-8 min-h-screen">
            <Navlinks />
            {children}
        </div>
    )
}
