import React, { ReactNode } from "react";

import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer';


export default function layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="m-auto overflow-hidden min-h-screen max-w-6xl my-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}