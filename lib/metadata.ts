import { Metadata } from "next";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    title: "About Us",
    description: "Learn more about CodeFusion.",
    openGraph: {
      url: "/about",
    },
    twitter: {
      creator: "@codefusion_team",
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);
