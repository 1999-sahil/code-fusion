import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-red-500 max-w-6xl m-auto my-6 min-h-screen">
            {children}
        </div>
    )
}
