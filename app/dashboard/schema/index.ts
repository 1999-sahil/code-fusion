import { z } from "zod"

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;

export const BlogFormSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 5 characters.",
    }),
    image_url: z.string().url({
      message: "Invalid URL"
    }),
    content: z.string().min(2, {
      message: "Content must be at least 20 characters.",
    }),
    is_published: z.boolean(),
    is_premium: z.boolean(),
  }).refine((data) => {
    const image_url = data.image_url;
  
    try {
      const url = new URL(image_url);
  
      return ["images.unsplash.com", "plus.unsplash.com"].some((host) => url.hostname.includes(host));
    } catch {
      return false;
    }
  }, {
    message: "Currently we are support only the image from unsplash.com",
    path: ["image_url"],
  });