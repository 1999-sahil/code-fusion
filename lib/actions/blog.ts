"use server";

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { createSupabaseServerClient } from "@/utils/supabase";
import { revalidatePath, unstable_noStore } from "next/cache";

const DASHBOARD = "/dashboard";

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

    revalidatePath(DASHBOARD);
    return JSON.stringify(result);
  }
}


// for both (USERS and ADMIN) read blogs from database and show it to the blog (journal) home page
export async function readBlog() {
  const supabase =  await createSupabaseServerClient();

  return supabase
    .from("blog")
    .select("*")
    .eq("is_published", true)  // user will see only published articles
    .order("created_at", { ascending: true });
}

// for ADMIN: read blogs from database and fill it to blog-table
export async function readBlogAdmin() {
  const supabase =  await createSupabaseServerClient();

  return supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: true });
}


// delete blog by ID on clicking delete button
export async function deleteBlogById(blogId: string) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("blog")
    .delete()
    .eq("id", blogId);

  revalidatePath(DASHBOARD);

  return JSON.stringify(result);
}

// update switch toggle by ID (premium, publish)
export async function updateBlogById(blogId: string, data: BlogFormSchemaType) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("blog")
    .update(data)
    .eq("id", blogId);

  revalidatePath(DASHBOARD);

  return JSON.stringify(result);
}

// edit blog by ID
export async function editBlogById(blogId: string) {
  unstable_noStore();
  const supabase = await createSupabaseServerClient();

  return supabase
    .from("blog")
    .select("*, blog_content(*)")
    .eq("id", blogId)
    .single();

}

// function to edit blog details when call from edit-from
export async function updateBlogDetailsById(blogId: string, data: BlogFormSchemaType) {
  const supabase = await createSupabaseServerClient();

  const { ["content"]: excludeKey, ...blog } = data;

  const resultBlog = await supabase
    .from("blog")
    .update(blog)
    .eq("id", blogId);

  if (resultBlog.error) {
    return JSON.stringify(resultBlog);
  } else {
    const result = await supabase
      .from("blog_content")
      .update({ content: data.content })
      .eq("blog_id", blogId);
    
    revalidatePath(DASHBOARD);
    return JSON.stringify(result);
  }
}