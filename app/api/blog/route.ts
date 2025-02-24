import { Database } from "@/database.types";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ error: "No ID provided" }, { status: 400 });
  }

  if (id === "*") {
    // Fetching multiple blogs
    const { data, error } = await supabase
      .from("blog")
      .select("id")
      .limit(10);

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ data });
  } else if (id) {
    // Fetching a specific blog by ID
    const { data, error } = await supabase
      .from("blog")
      .select("*")
      .eq("id", id)
      .single(); // Since you're expecting only one result

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ data });
  }

  return Response.json({ error: "No ID provided" }, { status: 400 });
}
