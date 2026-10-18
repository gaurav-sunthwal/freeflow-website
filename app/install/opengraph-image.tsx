import { renderOg, ogSize } from "../_components/og";

export const alt = "Install FreeFlow, free voice typing for Mac, in one line";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Install FreeFlow", accent: "in one line.", kicker: "Install guide" });
}
