import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SITE_URL, jsonLd } from "./site";
import * as I from "./icons";

/** Shell for long-form pages: nav, breadcrumb (+ BreadcrumbList data), hero, article body, CTA, footer. */
export function Article({
  path,
  crumb,
  eyebrow,
  title,
  intro,
  updated,
  children,
  structuredData = [],
}: {
  path: string;
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  updated?: string;
  children: ReactNode;
  structuredData?: object[];
}) {
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FreeFlow", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: crumb, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({ "@context": "https://schema.org", "@graph": [breadcrumb, ...structuredData] })}
      />
      <Nav />
      <main className="flex-1">
        <header className="relative overflow-hidden px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-faint">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-fg">
                    FreeFlow
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-muted">
                  {crumb}
                </li>
              </ol>
            </nav>
            <div className="eyebrow mb-4">{eyebrow}</div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">{title}</h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-muted sm:text-xl">{intro}</div>
            {updated && (
              <p className="mt-6 text-sm text-faint">
                Last updated <time dateTime={updated}>{new Date(updated + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time>
              </p>
            )}
          </div>
        </header>

        <div className="px-4 pb-20 sm:px-6">
          <article className="prose-ff mx-auto max-w-3xl">{children}</article>
        </div>

        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-[28px] bg-ink p-8 text-ink-fg sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <div className="text-2xl font-semibold tracking-tight">
                Try FreeFlow. <span className="serif text-[#a99dff]">It&apos;s free.</span>
              </div>
              <p className="mt-1 text-white/60">Open source, on-device, no account. Installs in one line.</p>
            </div>
            <Link
              href="/install"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-[#16151a] transition hover:-translate-y-0.5"
            >
              <I.Apple width={18} height={18} /> Get FreeFlow
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/** Highlighted summary box at the top of an article. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-accent/30 bg-accent-soft p-6 text-[16px] leading-relaxed text-fg">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-ink">{title}</div>
      {children}
    </aside>
  );
}

/** Builds FAQPage structured data from [question, answer] pairs. */
export function faqLd(items: [string, string][]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

/** Renders a list of FAQs as native disclosure elements. */
export function FaqList({ items }: { items: [string, string][] }) {
  return (
    <div className="not-prose divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
      {items.map(([q, a]) => (
        <details key={q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-4 text-[16px] font-medium text-fg">
            {q}
            <I.Plus className="faq-icon shrink-0 text-muted transition-transform duration-300" />
          </summary>
          <p className="!mb-0 px-5 pb-5 text-[15px] leading-relaxed text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
