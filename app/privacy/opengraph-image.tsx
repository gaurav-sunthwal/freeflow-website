import { renderOg, ogSize } from "../_components/og";

export const alt = "FreeFlow privacy: your voice stays on your Mac";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Your voice", accent: "stays on your Mac.", kicker: "Privacy" });
}
