"use client";

import { useEffect, useState } from "react";
import { FlowBar } from "./FlowBar";
import { useInView } from "./Reveal";

type Scene = {
  app: string;
  where: string;
  context: { who: string; text: string }[];
  spoken: string;
  clean: string;
};

const scenes: Scene[] = [
  {
    app: "Chat",
    where: "# product-team",
    context: [
      { who: "Priya", text: "Can we move the design review? Tuesday is packed." },
    ],
    spoken: "um yeah so let's do tuesday at three actually no make it wednesday at three",
    clean: "Yeah, let's do Wednesday at 3.",
  },
  {
    app: "Mail",
    where: "Re: Launch plan",
    context: [{ who: "Sam", text: "Any update on the launch checklist?" }],
    spoken: "hi sam uh the checklist is basically done new paragraph I'll send it to john I mean sarah by friday",
    clean: "Hi Sam, the checklist is done.\n\nI'll send it to Sarah by Friday.",
  },
  {
    app: "Code editor",
    where: "AI chat · app.tsx",
    context: [{ who: "You", text: "Selected: function handleSubmit()" }],
    spoken: "so like refactor this to use async await and um add error handling for the fetch call",
    clean: "Refactor this to use async/await and add error handling for the fetch call.",
  },
];

type Phase = "idle" | "listening" | "processing" | "inserted";

export function HeroDemo() {
  const [ref, visible] = useInView<HTMLDivElement>(0.2);
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [words, setWords] = useState(0);
  const scene = scenes[i];
  const spokenWords = scene.spoken.split(" ");

  useEffect(() => {
    if (!visible) return;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "idle") t = setTimeout(() => { setWords(0); setPhase("listening"); }, 1100);
    else if (phase === "listening") {
      if (words < spokenWords.length) t = setTimeout(() => setWords((w) => w + 1), 170);
      else t = setTimeout(() => setPhase("processing"), 450);
    } else if (phase === "processing") t = setTimeout(() => setPhase("inserted"), 700);
    else t = setTimeout(() => { setI((n) => (n + 1) % scenes.length); setPhase("idle"); }, 3400);
    return () => clearTimeout(t);
  }, [phase, words, visible, spokenWords.length]);

  const pressed = phase === "listening";
  const preview = spokenWords.slice(Math.max(0, words - 6), words).join(" ");

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-4xl">
      <div className="glow pointer-events-none absolute -inset-x-20 -top-20 -bottom-10 -z-10 opacity-90" />

      {/* App window */}
      <div className="overflow-hidden rounded-[22px] border border-line bg-card shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-2 border-b border-line bg-bg-2/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex gap-1.5 text-xs">
            {scenes.map((s, n) => (
              <span
                key={s.app}
                className={`rounded-md px-2 py-1 transition ${n === i ? "bg-card text-fg shadow-sm ring-1 ring-line" : "text-faint"}`}
              >
                {s.app}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-h-[260px] flex-col gap-4 p-5 sm:min-h-[280px] sm:p-7">
          <div className="text-sm font-semibold text-muted">{scene.where}</div>
          {scene.context.map((m, n) => (
            <div key={`${i}-${n}`} className="pop flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-ink">
                {m.who[0]}
              </div>
              <div>
                <div className="text-xs font-semibold">{m.who}</div>
                <div className="text-[15px] text-muted">{m.text}</div>
              </div>
            </div>
          ))}

          {/* Text field where the result lands */}
          <div className="mt-auto rounded-2xl border border-line-strong bg-bg px-4 py-3.5 text-[15px] leading-relaxed sm:text-base">
            {phase === "inserted" ? (
              <span key={`ins-${i}`} className="pop whitespace-pre-line">
                {scene.clean}
                <span className="caret" />
              </span>
            ) : (
              <span className="text-faint">
                <span className="caret" />
                {phase === "idle" ? " Hold fn and speak…" : ""}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Below the window: the key + the Flow bar */}
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="flex items-center gap-3 text-sm text-muted">
          <span
            className={`kbd !h-11 !min-w-14 !rounded-xl !text-sm transition-all duration-150 ${
              pressed ? "translate-y-[2px] !border-b !border-accent !bg-accent-soft !text-accent-ink" : ""
            }`}
          >
            fn
          </span>
          <span className="w-24">{pressed ? "Holding…" : phase === "inserted" ? "Released" : "Hold to talk"}</span>
        </div>
        <div className="h-11">
          {phase === "listening" && <FlowBar state="listening" label={preview || "Listening…"} className="pop" />}
          {phase === "processing" && <FlowBar state="processing" label="Cleaning up…" className="pop" />}
          {phase === "inserted" && <FlowBar state="done" label="Inserted" className="pop" />}
          {phase === "idle" && <FlowBar state="listening" label="Ready" className="opacity-40" />}
        </div>
      </div>

      {/* What you said vs what was typed */}
      <div className="mx-auto mt-5 max-w-2xl text-center text-sm text-faint">
        <span className="font-medium text-muted">You said:</span>{" "}
        <span className="italic">&ldquo;{phase === "idle" ? "…" : spokenWords.slice(0, phase === "listening" ? words : undefined).join(" ")}&rdquo;</span>
      </div>
    </div>
  );
}
