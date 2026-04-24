import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  toolId: z.string().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  // Optional author meta (used in article header when present)
  author: z.string().optional(),
  authorTitle: z.string().optional(),
  authorRole: z.string().optional(),
});

export const collections = {
  de: defineCollection({ type: "content", schema: postSchema }),
  en: defineCollection({ type: "content", schema: postSchema }),
};
