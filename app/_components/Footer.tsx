import Image from "next/image";
import Link from "next/link";
import { GITHUB } from "./site";

const columns: [string, [string, string][]][] = [
  [
    "Product",
    [
      ["Features", "/#features"],
      ["How it works", "/#how"],
      ["Install FreeFlow", "/install"],
      ["FAQ", "/#faq"],
    ],
  ],
  [
    "Learn",
    [
      ["Wispr Flow alternative", "/wispr-flow-alternative"],
      ["Voice typing on Mac", "/voice-typing-mac"],
      ["Privacy", "/privacy"],
    ],
  ],
  [
    "Open source",
    [
      ["GitHub", GITHUB],
      ["Issues", `${GITHUB}/issues`],
      ["Releases", `${GITHUB}/releases`],
      ["MIT License", `${GITHUB}/blob/main/LICENSE`],
    ],
  ],
];

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="FreeFlow logo" width={28} height={28} className="rounded-[7px]" />
            <span className="font-semibold">FreeFlow</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Free, open-source voice typing for Mac. Speech-to-text that runs on your device, in every app.
          </p>
        </div>
        {columns.map(([title, items]) => (
          <nav key={title} aria-label={title}>
            <div className="text-sm font-semibold">{title}</div>
            <ul className="mt-3 space-y-2">
              {items.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith("http") ? (
                    <a href={href} target="_blank" rel="noopener" className="text-sm text-muted transition hover:text-fg">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-sm text-muted transition hover:text-fg">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row">
        <span>© 2026 FreeFlow · MIT licensed · Not affiliated with Wispr or Apple</span>
        <span>No cookies. No tracking. Just a website.</span>
      </div>
    </footer>
  );
}
