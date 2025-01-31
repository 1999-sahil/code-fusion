"use server";

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { Database } from "@/database.types";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createBlog(data: BlogFormSchemaType) {
    const cookieStore = await cookies()

    const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!, 
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
              get(name: string) {
                return cookieStore.get(name)?.value;
              }
            },
        }
    );

    const { ["content"]: excludeKey, ...blog } = data;

    const blogResult = await supabase
        .from("blog")
        .insert(blog)
        .select("id")
        .single();

    if (blogResult.error?.message) {
        return JSON.stringify(blogResult);
    } else {
        const result = await supabase
            .from("blog_content")
            .insert({ 
                blog_id: blogResult?.data?.id!,
                content: data.content, 
            });

        // re-validate
        return JSON.stringify(result);
    }
}