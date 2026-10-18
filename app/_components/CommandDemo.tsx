"use client";

import { useEffect, useState } from "react";
import { FlowBar } from "./FlowBar";

const original = "hey team the deploy broke again because someone pushed without running tests, we need to fix this asap and stop doing that";

const commands = [
  {
    say: "Make this more formal",
    out: "Hi team, today's deployment failed because changes were pushed without running the test suite. Let's fix this as a priority and make sure tests run before every push.",
  },
  {
    say: "Turn into bullets",
    out: "• The deploy broke again\n• Cause: changes pushed without running tests\n• Fix it ASAP\n• Always run tests before pushing",
  },
  {
    say: "Translate to Hindi",
    out: "नमस्ते टीम, डिप्लॉय फिर से टूट गया क्योंकि किसी ने टेस्ट चलाए बिना पुश कर दिया। हमें इसे जल्द से जल्द ठीक करना होगा और ऐसा करना बंद करना होगा।",
  },
  {
    say: "Make it shorter",
    out: "Deploy broke again — untested push. Please fix ASAP and always run tests first.",
  },
];

export function CommandDemo() {
  const [i, setI] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!busy) return;
    const t = setTimeout(() => setBusy(false), 1100);
    return () => clearTimeout(t);
  }, [busy, i]);

  function run(n: number) {
    setI(n);
    setBusy(true);
  }

  const showing = i !== null && !busy;

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs text-muted">
        <span className="font-medium">Notes</span>
        <span className="flex items-center gap-1.5">
          Hold <span className="kbd">control</span> + <span className="kbd">fn</span> and say…
        </span>
      </div>
      <div className="p-5 sm:p-7">
        <div className="min-h-[10rem] text-[15px] leading-relaxed sm:text-base">
          {showing ? (
            <p key={i} className="pop whitespace-pre-line">{commands[i!].out}</p>
          ) : (
            <p>
              <span className={`rounded px-0.5 ${busy ? "bg-amber-soft" : "bg-accent-soft"} transition-colors`}>{original}</span>
            </p>
          )}
        </div>

        <div className="mt-4 flex h-11 justify-center">
          {busy ? (
            <FlowBar state="command" label={`“${commands[i!].say}”`} className="pop" />
          ) : showing ? (
            <button onClick={() => setI(null)} className="pop text-sm font-medium text-accent-ink hover:underline">
              ↺ Reset text
            </button>
          ) : (
            <span className="self-center text-sm text-faint">Pick a command below</span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {commands.map((c, n) => (
            <button
              key={c.say}
              onClick={() => run(n)}
              disabled={busy}
              className={`rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                i === n ? "border-accent bg-accent-soft text-accent-ink" : "border-line hover:border-line-strong hover:bg-fg/[0.03]"
              }`}
            >
              &ldquo;{c.say}&rdquo;
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
