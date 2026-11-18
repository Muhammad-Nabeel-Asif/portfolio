import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.url() });

/** One station on a track diagram. `kind` says who acts at that step. */
const step = z.object({
  kind: z.enum(['start', 'code', 'model', 'person', 'planned', 'end']),
  title: z.string(),
  note: z.string().optional(),
  /** Where the line stops if the step does not pass. */
  exit: z.string().optional(),
});

const single = (name: string) => glob({ pattern: `${name}.yaml`, base: './src/content' });

export const collections = {
  profile: defineCollection({
    loader: single('profile'),
    schema: z.object({
      name: z.string(),
      shortName: z.string(),
      role: z.string(),
      location: z.string(),
      availability: z.string(),
      email: z.email(),
      links: z.object({ linkedin: z.url(), github: z.url() }),
      repository: z.string(),
      resumeFile: z.string(),
      meta: z.object({ title: z.string(), description: z.string() }),
      hero: z.object({
        headline: z.string(),
        intro: z.string(),
        trackCaption: z.string(),
        track: z.array(step),
      }),
      about: z.array(z.string()),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
      recommendation: z
        .object({
          quote: z.string(),
          author: z.string(),
          authorRole: z.string(),
          context: z.string(),
          sourceLabel: z.string(),
          sourceUrl: z.url(),
        })
        .optional(),
      contact: z.object({
        heading: z.string(),
        body: z.string(),
        held: z.string(),
        clear: z.string(),
      }),
    }),
  }),

  projects: defineCollection({
    loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
    schema: z.object({
      order: z.number(),
      name: z.string(),
      summary: z.string(),
      org: z.string(),
      dates: z.string(),
      link: link.optional(),
      access: z.string(),
      story: z.array(z.object({ label: z.string(), text: z.string() })),
      tech: z.array(z.string()),
      track: z.object({ title: z.string(), steps: z.array(step) }),
    }),
  }),

  moreWork: defineCollection({
    loader: file('src/content/more-work.yaml'),
    schema: z.object({
      order: z.number(),
      name: z.string(),
      context: z.string(),
      text: z.string(),
      link: link.optional(),
    }),
  }),

  experience: defineCollection({
    loader: file('src/content/experience.yaml'),
    schema: z.object({
      order: z.number(),
      company: z.string(),
      title: z.string(),
      dates: z.string(),
      place: z.string(),
      summary: z.string(),
      points: z.array(z.string()),
    }),
  }),

  education: defineCollection({
    loader: file('src/content/education.yaml'),
    schema: z.object({ order: z.number(), title: z.string(), where: z.string(), year: z.string() }),
  }),

  skills: defineCollection({
    loader: single('skills'),
    schema: z.object({
      places: z.array(z.object({ key: z.string(), name: z.string() })),
      groups: z.array(
        z.object({
          name: z.string(),
          skills: z.array(z.object({ name: z.string(), used: z.array(z.string()).min(1) })),
        }),
      ),
    }),
  }),
};

export type Step = z.infer<typeof step>;
