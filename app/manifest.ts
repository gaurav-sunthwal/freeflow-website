import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FreeFlow — Free voice typing for Mac",
    short_name: "FreeFlow",
    description: "Free, open-source, on-device voice typing for Mac.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#7d6bff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
