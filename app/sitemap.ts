import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "./_components/site";

/** Bump when page content meaningfully changes, so crawlers revisit. */
const LAST_UPDATED = new Date("2026-10-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path === "/" ? "" : p.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.priority,
  }));
}
