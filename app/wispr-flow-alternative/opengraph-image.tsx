import { renderOg, ogSize } from "../_components/og";

export const alt = "FreeFlow vs Wispr Flow: the free, open-source Wispr Flow alternative for Mac";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "The free Wispr Flow", accent: "alternative for Mac.", kicker: "Comparison" });
}
