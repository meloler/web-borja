import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PATHS = [
  "",
  "nutricionista-deportivo-gran-canaria",
  "nutricionista-online",
  "perdida-de-grasa",
  "recomposicion-corporal",
  "nutricion-para-futbolistas",
  "nutricion-crossfit",
  "blog",
  "contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: now,
    changeFrequency: p === "blog" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "contacto" ? 0.6 : 0.8,
  }));
}
