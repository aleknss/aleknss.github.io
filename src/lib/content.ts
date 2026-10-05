import { getCollection, getEntry } from "astro:content";
import type { ProjectData, SiteData, SkillsData } from "./types";

type Entry<T> = { data: T };

function normalize(locale: string | undefined): "es" | "en" {
  return locale === "en" ? "en" : "es";
}

export async function getSite(locale: string | undefined): Promise<SiteData | undefined> {
  const entry = (await getEntry("site", normalize(locale))) as Entry<SiteData> | undefined;
  return entry?.data;
}

export async function getProjects(locale: string | undefined): Promise<ProjectData[]> {
  const lang = normalize(locale);
  const entries = (await getCollection("projects")) as Entry<ProjectData>[];
  return entries
    .map((entry) => entry.data)
    .filter((project) => project.locale === lang)
    .sort((a, b) => a.order - b.order);
}

export async function getProjectSlugs(locale: string | undefined): Promise<string[]> {
  const projects = await getProjects(locale);
  return projects.map((project) => project.logo);
}

export async function getSkills(): Promise<SkillsData | undefined> {
  const entries = (await getCollection("skills")) as Entry<SkillsData>[];
  return entries[0]?.data;
}
