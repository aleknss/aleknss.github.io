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
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    link: z.string().nullish(),
    logo: z.string(),
    skills: z.array(z.string()),
    locale: z.enum(["es", "en"]),
    order: z.number().default(0),
    description: z.string(),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/clients" }),
  schema: z.object({
    name: z.string(),
    sector: z.string().nullish(),
    summary: z.string(),
    result: z.string().nullish(),
    href: z.string().nullish(),
    image: z.string().nullish(),
    year: z.number().nullish(),
    locale: z.enum(["es", "en"]),
    order: z.number().default(0),
  }),
});

const step = z.object({
  title: z.string(),
  description: z.string(),
});

const faq = z.object({
  question: z.string(),
  answer: z.string(),
});

const testimonial = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string().nullish(),
});

const monthly = z.object({
  from: z.number().nullish(),
  to: z.number().nullish(),
  note: z.string().nullish(),
  includes: z.array(z.string()).default([]),
});

const tier = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  includes: z.array(z.string()).default([]),
  monthly: monthly.nullish(),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    bullets: z.array(z.string()).default([]),
    icon: z.string(),
    stack: z.array(z.string()).default([]),
    priceFrom: z.number().nullish(),
    priceTo: z.number().nullish(),
    priceNote: z.string().nullish(),
    hourlyRate: z.number().nullish(),
    tiers: z.array(tier).default([]),
    steps: z.array(step).default([]),
    differentials: z.array(z.string()).default([]),
    faq: z.array(faq).default([]),
    testimonials: z.array(testimonial).default([]),
    featuredClient: z
      .object({ name: z.string(), href: z.string() })
      .nullish(),
    locale: z.enum(["es", "en"]),
    order: z.number().default(0),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/site" }),
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
      bach: educationEntry.nullish(),
      fp: educationEntry.nullish(),
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
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/skills" }),
  schema: z.object({
    languages: z.array(skill),
    frameworks: z.array(skill),
    tools: z.array(skill),
  }),
});

export const collections = { projects, site, skills, services, clients };
