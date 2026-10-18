"use client";

import { useState } from "react";

type Seg = [text: string, kind?: "" | "filler" | "fix" | "cmd" | "snip" | "dict"];

const examples: { tab: string; said: Seg[]; typed: string; note: string }[] = [
  {
    tab: "Filler words",
    said: [["Um, ", "filler"], ["so I think ", ""], ["like, ", "filler"], ["we should ", ""], ["uh, ", "filler"], ["ship the update ", ""], ["you know, ", "filler"], ["this week", ""]],
    typed: "I think we should ship the update this week.",
    note: "Ums, uhs, likes and you-knows disappear. Punctuation and capitals are added for you.",
  },
  {
    tab: "Self-corrections",
    said: [["Let's meet on ", ""], ["Tuesday. Actually no, make it ", "fix"], ["Wednesday at 3. Invite John, ", ""], ["I mean ", "fix"], ["Sarah.", ""]],
    typed: "Let's meet on Wednesday at 3. Invite Sarah.",
    note: "Change your mind mid-sentence. “Actually no”, “I mean” and “scratch that” keep only what you meant.",
  },
  {
    tab: "Voice commands",
    said: [["Groceries ", ""], ["new line ", "cmd"], ["milk ", ""], ["new line ", "cmd"], ["eggs ", ""], ["new paragraph ", "cmd"], ["Don't forget the coffee", ""]],
    typed: "Groceries\nmilk\neggs\n\nDon't forget the coffee.",
    note: "Say “new line” or “new paragraph” to format as you go.",
  },
  {
    tab: "Snippets",
    said: [["Sure, grab a slot here: ", ""], ["my calendar link", "snip"]],
    typed: "Sure, grab a slot here: https://cal.com/you/30min",
    note: "Save long text once. Say a short phrase and the full text is typed for you.",
  },
  {
    tab: "Dictionary",
    said: [["Push the ", ""], ["next jay ass", "dict"], [" fix to ", ""], ["get hub", "dict"], [" and ping ", ""], ["gaurav", "dict"]],
    typed: "Push the Next.js fix to GitHub and ping Gaurav.",
    note: "Teach it names, product terms and jargon. Words it often mishears are fixed automatically.",
  },
];

const style: Record<string, string> = {
  filler: "bg-red-soft text-red line-through decoration-2",
  fix: "bg-amber-soft text-amber line-through decoration-2",
  cmd: "bg-accent-soft text-accent-ink",
  snip: "bg-green-soft text-green",
  dict: "bg-amber-soft text-amber",
};

const dot: Record<string, string> = { filler: "bg-red", fix: "bg-amber", cmd: "bg-accent", snip: "bg-green", dict: "bg-amber" };

const legend: Record<string, string> = {
  filler: "Filler removed",
  fix: "Correction applied",
  cmd: "Formatting command",
  snip: "Snippet expanded",
  dict: "Dictionary fix",
};

export function CleanupDemo() {
  const [i, setI] = useState(0);
  const ex = examples[i];
  const kinds = Array.from(new Set(ex.said.map((s) => s[1]).filter(Boolean))) as string[];

  return (
    <div>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist">
        {examples.map((e, n) => (
          <button
            key={e.tab}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              n === i ? "bg-fg text-bg" : "border border-line bg-card text-muted hover:text-fg"
            }`}
          >
            {e.tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">What you say</span>
            <div className="flex flex-wrap justify-end gap-x-3 gap-y-1">
              {kinds.map((k) => (
                <span key={k} className="flex items-center gap-1.5 text-xs text-muted">
                  <span className={`h-2 w-2 rounded-full ${dot[k]}`} />
                  {legend[k]}
                </span>
              ))}
            </div>
          </div>
          <p key={`s-${i}`} className="pop text-xl leading-[1.7] sm:text-2xl">
            {ex.said.map(([t, k], n) =>
              k ? (
                <span key={n} className={`rounded-md px-1 py-0.5 ${style[k]}`}>
                  {t}
                </span>
              ) : (
                <span key={n}>{t}</span>
              ),
            )}
          </p>
        </div>

        <div className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-soft blur-2xl" />
          <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-accent-ink">What FreeFlow types</span>
          <p key={`t-${i}`} className="pop whitespace-pre-line text-xl leading-[1.7] sm:text-2xl" style={{ animationDelay: "120ms" }}>
            {ex.typed}
          </p>
        </div>
      </div>
      <p key={`n-${i}`} className="pop mx-auto mt-5 max-w-xl text-center text-[15px] text-muted">
        {ex.note}
      </p>
    </div>
  );
}
