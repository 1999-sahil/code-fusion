import React, { ReactNode } from "react"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar/>
      <main className="m-auto my-8 overflow-hidden min-h-screen max-w-4xl">
        {children}
      </main>
      <Footer />
    </div>
  );
}
