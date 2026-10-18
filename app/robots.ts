import type { MetadataRoute } from "next";
import { SITE_URL } from "./_components/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Everyone, including AI search crawlers (GPTBot, ClaudeBot, PerplexityBot…), may read the public pages.
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
