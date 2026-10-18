import { renderOg, ogSize } from "./_components/og";

export const alt = "FreeFlow — free, open-source voice typing for Mac. Don't type, just speak.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Don't type,", accent: "just speak.", kicker: "Free voice typing for Mac" });
}
