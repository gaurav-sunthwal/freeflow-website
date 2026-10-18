import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // One canonical host for search engines: send the auto-assigned Vercel address to the main one.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "freeflow-website-beta.vercel.app" }],
        destination: "https://freeflow-voice.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
