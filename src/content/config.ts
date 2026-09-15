import { defineCollection, z } from 'astro:content';

const categoryEnum = z.enum(['Full-Stack', 'Mobile', 'DevOps & Systems', 'Data & GIS']);

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(80),
    summary: z.string().max(200),
    role: z.string(),
    category: z.union([categoryEnum, z.array(categoryEnum)]),
    techStack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
