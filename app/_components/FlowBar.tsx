/** The dark floating pill FreeFlow shows at the bottom of the screen while you dictate. */
export function FlowBar({
  state,
  label,
  className = "",
}: {
  state: "listening" | "processing" | "done" | "command";
  label?: string;
  className?: string;
}) {
  const bars = 16;
  return (
    <div
      className={`inline-flex h-11 items-center gap-3 rounded-full bg-ink px-4 text-ink-fg shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)] ring-1 ring-white/10 ${className}`}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${
          state === "processing" ? "bg-[#8f80ff]" : state === "done" ? "bg-[#3ccf7c]" : state === "command" ? "bg-[#f2a446]" : "bg-[#f06b7c]"
        } ${state === "listening" || state === "command" ? "animate-pulse" : ""}`}
      />
      {state === "processing" ? (
        <span className="spin h-4 w-4 rounded-full border-2 border-white/20 border-t-white" />
      ) : state === "done" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3ccf7c" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      ) : (
        <span className="flex h-5 items-center gap-[3px]" aria-hidden>
          {Array.from({ length: bars }).map((_, i) => (
            <span
              key={i}
              className="wave-bar w-[3px] rounded-full bg-white/85"
              style={{
                height: `${8 + ((i * 7) % 12)}px`,
                animationDelay: `${(i * 83) % 700}ms`,
                animationDuration: `${700 + ((i * 131) % 500)}ms`,
              }}
            />
          ))}
        </span>
      )}
      {label && <span className="max-w-[16rem] truncate text-[13px] text-white/70">{label}</span>}
    </div>
  );
}
