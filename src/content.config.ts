import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      thumbnail: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      post: reference('posts').optional(),
      order: z.number().default(100),
    }),
});

export const collections = { posts, projects };
