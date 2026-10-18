import { renderOg, ogSize } from "../_components/og";

export const alt = "Voice typing on Mac: how to dictate in any app";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Voice typing on Mac:", accent: "the complete guide.", kicker: "Guide" });
}
