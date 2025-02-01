"use server";

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { createSupabaseServerClient } from "@/utils/supabase";

// create blog and save it to database
export async function createBlog(data: BlogFormSchemaType) {
  const { ["content"]: excludeKey, ...blog } = data;

  const supabase =  await createSupabaseServerClient();

  const blogResult = await supabase
    .from("blog")
    .insert(blog)
    .select("id")
    .single();

  if (blogResult.error?.message) {
    return JSON.stringify(blogResult);
  } else {
    const result = await supabase.from("blog_content").insert({
      blog_id: blogResult?.data?.id!,
      content: data.content,
    });

    // re-validate
    return JSON.stringify(result);
  }
}


// read blogs from database and fill it to blog-table
export async function readBlog() {
  const supabase =  await createSupabaseServerClient();

  return supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: true });
}
