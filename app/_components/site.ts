export const GITHUB = "https://github.com/gaurav-sunthwal/freeflow";
export const INSTALL_CMD = "curl -fsSL https://raw.githubusercontent.com/gaurav-sunthwal/freeflow/main/install.sh | bash";
export const UNINSTALL_CMD = "curl -fsSL https://raw.githubusercontent.com/gaurav-sunthwal/freeflow/main/uninstall.sh | bash";
export const VERSION = "1.1.0";

/** Canonical site origin. Set NEXT_PUBLIC_SITE_URL when you move to a custom domain. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://freeflow-voice.vercel.app").replace(/\/$/, "");
export const SITE_NAME = "FreeFlow";
export const TAGLINE = "Free, open-source voice typing for Mac";
export const AUTHOR = { name: "Gaurav Sunthwal", url: "https://github.com/gaurav-sunthwal" };

/** Date the comparison facts were last checked against competitors' public pages. */
export const FACTS_CHECKED = "October 2026";

/** Pages listed in the sitemap, footer and llms.txt. */
export const PAGES = [
  { path: "/", title: "FreeFlow — Free voice typing for Mac", priority: 1 },
  { path: "/wispr-flow-alternative", title: "Free Wispr Flow alternative for Mac", priority: 0.9 },
  { path: "/voice-typing-mac", title: "Voice typing on Mac: the complete guide", priority: 0.8 },
  { path: "/install", title: "Install FreeFlow", priority: 0.8 },
  { path: "/privacy", title: "Privacy", priority: 0.5 },
] as const;

/** Safe JSON-LD serialiser (escapes "<" so content can't close the script tag). */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
