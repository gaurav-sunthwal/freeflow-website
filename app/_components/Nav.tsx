"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GITHUB } from "./site";
import { Github, Menu, X } from "./icons";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/wispr-flow-alternative", label: "Compare" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="FreeFlow home" onClick={() => setOpen(false)}>
          <Image src="/icon.png" alt="" width={30} height={30} className="rounded-[8px]" priority />
          <span className="text-[17px] font-semibold tracking-tight">FreeFlow</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm text-muted transition hover:bg-fg/5 hover:text-fg">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm font-medium transition hover:border-line-strong sm:flex"
          >
            <Github width={16} height={16} /> GitHub
          </a>
          <Link href="/install" className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-85">
            Get it free
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base text-muted hover:bg-fg/5 hover:text-fg">
              {l.label}
            </Link>
          ))}
          <a href={GITHUB} target="_blank" rel="noopener" className="mt-1 flex items-center gap-2 rounded-xl px-3 py-3 text-base text-muted hover:bg-fg/5">
            <Github width={16} height={16} /> Star on GitHub
          </a>
        </div>
      )}
    </header>
  );
}
