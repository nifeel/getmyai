import { defineCollection, z } from "astro:content";

const sharedSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  order: z.number().int().positive().default(1),
  tags: z.array(z.string()).default([])
});

const tutorials = defineCollection({
  schema: sharedSchema.extend({
    category: z.literal("tutorial")
  })
});

const guides = defineCollection({
  schema: sharedSchema.extend({
    category: z.literal("guide")
  })
});

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.string(),
    groupOrder: z.number().int().positive(),
    pageOrder: z.number().int().positive(),
    navTitle: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  docs,
  tutorials,
  guides
};
