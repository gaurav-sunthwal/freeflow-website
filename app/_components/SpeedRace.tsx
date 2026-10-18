"use client";

import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

const text =
  "Thanks for the update. I reviewed the draft and it looks great. Two small notes: let's tighten the intro and move the pricing table above the FAQ. Happy to ship it Friday.";

/** Typing (~40 wpm) vs speaking (~160 wpm), animated side by side. */
export function SpeedRace() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const [t, setT] = useState(0); // elapsed seconds (simulated)
  const words = text.split(" ");

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setT((v) => (v >= 16 ? 0 : v + 0.1)), 100);
    return () => clearInterval(id);
  }, [inView]);

  // simulated 4× speed so it fits the screen
  const typedCount = Math.min(words.length, Math.floor((t * 40 * 4) / 60));
  const spokenCount = Math.min(words.length, Math.floor((t * 160 * 4) / 60));

  const rows = [
    { label: "Typing", wpm: 40, count: typedCount, tone: "bg-faint" },
    { label: "FreeFlow", wpm: 160, count: spokenCount, tone: "bg-accent" },
  ];

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-2">
      {rows.map((r) => (
        <div key={r.label} className={`card p-6 ${r.label === "FreeFlow" ? "ring-2 ring-accent/40" : ""}`}>
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-semibold">{r.label}</span>
            <span className="font-mono text-sm text-muted">
              <span className={`text-2xl font-semibold ${r.label === "FreeFlow" ? "text-accent-ink" : "text-fg"}`}>{r.wpm}</span> wpm
            </span>
          </div>
          <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-fg/5">
            <div className={`h-full rounded-full ${r.tone} transition-[width] duration-100`} style={{ width: `${(r.count / words.length) * 100}%` }} />
          </div>
          <p className="min-h-[7.5rem] text-[15px] leading-relaxed">
            {words.slice(0, r.count).join(" ")}
            {r.count < words.length && <span className="caret" />}
            {r.count >= words.length && <span className="ml-2 rounded-full bg-green-soft px-2 py-0.5 text-xs font-semibold text-green">Done</span>}
          </p>
        </div>
      ))}
    </div>
  );
}
