"use client";

import { useState } from "react";

const said = "hey can you send me the q3 numbers when you get a chance thanks";

const styles = [
  { app: "Email", hint: "Mail, Gmail, Outlook", out: "Hi,\n\nCould you send me the Q3 numbers when you get a chance?\n\nThanks," },
  { app: "Chat", hint: "Slack, Messages, WhatsApp", out: "hey, can you send me the Q3 numbers when you get a chance? thanks!" },
  { app: "Docs", hint: "Notion, Pages, Google Docs", out: "Please send the Q3 numbers when available." },
  { app: "Code", hint: "VS Code, Cursor, Terminal", out: "Can you send me the Q3 numbers when you get a chance? Thanks." },
];

export function StylesDemo() {
  const [i, setI] = useState(0);
  return (
    <div className="card overflow-hidden">
      <div className="grid grid-cols-4 border-b border-line">
        {styles.map((s, n) => (
          <button
            key={s.app}
            onClick={() => setI(n)}
            className={`relative px-2 py-3.5 text-sm font-medium transition ${n === i ? "text-fg" : "text-faint hover:text-muted"}`}
          >
            {s.app}
            {n === i && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent" />}
          </button>
        ))}
      </div>
      <div className="p-5 sm:p-7">
        <div className="text-xs font-semibold uppercase tracking-wider text-faint">You say</div>
        <p className="mt-2 italic text-muted">&ldquo;{said}&rdquo;</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-ink">In {styles[i].app.toLowerCase()} apps</span>
          <span className="text-xs text-faint">{styles[i].hint}</span>
        </div>
        <p
          key={i}
          className={`pop mt-2 min-h-[8.5rem] whitespace-pre-line rounded-xl bg-bg p-4 leading-relaxed ring-1 ring-line ${
            styles[i].app === "Code" ? "font-mono text-sm text-green" : "text-[15px]"
          }`}
        >
          {styles[i].out}
        </p>
      </div>
    </div>
  );
}
