import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    status:      z.enum(['ONLINE', 'IN_DEV', 'ARCHIVED']),
    summary:     z.string(),
    problem:     z.string(),
    stack:       z.array(z.string()),
    features:    z.array(z.string()),
    metrics:     z.array(z.string()),
    category:    z.string(),
    year:        z.number(),
    featured:    z.boolean().default(false),
  }),
});

export const collections = { projects };
