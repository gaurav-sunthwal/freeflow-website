"use client";

import { useState } from "react";
import { Check, Copy } from "./icons";

export function CopyCommand({ command, compact = false }: { command: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
  }

  return (
    <div
      className={`group flex w-full items-center gap-3 rounded-2xl bg-ink text-ink-fg ring-1 ring-white/10 ${
        compact ? "px-4 py-3" : "px-5 py-4"
      }`}
    >
      <span className="select-none font-mono text-sm text-[#8f80ff]">$</span>
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[13px] leading-6 text-white/85 [scrollbar-width:none]">
        {command}
      </code>
      <button
        onClick={copy}
        aria-label="Copy install command"
        className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
      >
        {copied ? <Check width={14} height={14} /> : <Copy width={14} height={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
