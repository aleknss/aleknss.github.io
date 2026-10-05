import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const skill = z.object({
  name: z.string(),
  icon: z.string(),
});

const educationEntry = z.object({
  modalidad: z.string(),
  grado: z.string(),
  ciudad: z.string(),
  graduacion: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    link: z.url().optional(),
    logo: z.string(),
    skills: z.array(z.string()),
    locale: z.enum(["es", "en"]),
    order: z.number().default(0),
    description: z.string(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/content/site" }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    contacts: z.object({
      phone: z.string(),
      email: z.string(),
      github: z.string(),
      twitter: z.string(),
      linkedin: z.string(),
      location: z.string(),
    }),
    education: z.object({
      bach: educationEntry.optional(),
      fp: educationEntry.optional(),
    }),
    experience: z.array(
      z.object({
        from: z.number(),
        to: z.number().nullable(),
        company: z.string(),
        role: z.string(),
        logo: z.string(),
        descriptions: z.array(z.string()),
      }),
    ),
    participaciones: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        clave: z.string(),
      }),
    ),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/content/skills" }),
  schema: z.object({
    languages: z.array(skill),
    frameworks: z.array(skill),
    tools: z.array(skill),
  }),
});

export const collections = { projects, site, skills };
