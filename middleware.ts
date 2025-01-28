import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.url);
  let response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
		cookies: {
			get(name: string) {
			  return request.cookies.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
			  response.cookies.set({
				name,
				value,
				...options,
			  });
			},
			remove(name: string, options: CookieOptions) {
			  response.cookies.set({
				name,
				value: "",
				...options,
				maxAge: 0, // Expire the cookie immediately
			  });
			},
		}
    }
  );

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (data?.session) {
    console.log("Session user metadata:", data.session.user.user_metadata);

    if (data.session.user.user_metadata.role !== "admin") {
      console.warn("Unauthorized access attempt:", data.session.user.id);
      return NextResponse.redirect(new URL("/", request.url));
    }

    console.log("Authorized admin access.");
  } else {
    console.warn("No session found, redirecting.");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: "/dashboard/:path*",
};
