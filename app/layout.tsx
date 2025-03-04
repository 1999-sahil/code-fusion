import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "@/lib/metadata";
import SessionProvider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "CodeFusion | %s",
    default: "CodeFusion",
  },
  description:
    "CodeFusion is a MDX blog and document website for all engineers built using Next.js infrastructure.",
  metadataBase: baseUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 dark:bg-[#1a1a1a]`}
      >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="w-full min-h-screen">{children}</main>
            <Toaster />
          </ThemeProvider>
        <SessionProvider />
      </body>
    </html>
  );
}
