import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Rendered automatically as a "Presentace" section (see src/plugins/remark-presentation.mjs)
				presentation: z
					.object({
						type: z.enum(['canva', 'pdf']),
						src: z.string(),
					})
					.optional(),
			}),
		}),
	}),
};
