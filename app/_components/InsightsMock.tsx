/** A static preview of FreeFlow's Insights screen (sample data). */
export function InsightsMock() {
  // deterministic pseudo-random activity so server and client render the same thing
  const cells = Array.from({ length: 7 * 20 }, (_, n) => {
    const v = (Math.sin(n * 12.9898) * 43758.5453) % 1;
    const r = Math.abs(v);
    const recent = n > 90 ? 0.25 : 0;
    return r + recent > 0.85 ? 4 : r + recent > 0.65 ? 3 : r + recent > 0.45 ? 2 : r + recent > 0.28 ? 1 : 0;
  });
  const heat = ["bg-fg/[0.07]", "bg-green/35", "bg-green/55", "bg-green/80", "bg-green"];
  const fillers = [
    ["um", 214],
    ["like", 131],
    ["uh", 88],
    ["you know", 41],
  ] as const;

  return (
    <div className="card p-5 sm:p-6">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Words dictated", "48,210"],
          ["Average speed", "152 wpm"],
          ["Day streak", "🔥 23"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-bg p-3 ring-1 ring-line sm:p-4">
            <div className="text-[11px] font-medium text-faint sm:text-xs">{k}</div>
            <div className="mt-1 text-lg font-semibold tracking-tight sm:text-2xl">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Activity</div>
        <div className="grid grid-flow-col grid-rows-7 gap-[3px] sm:gap-1">
          {cells.map((l, n) => (
            <span key={n} className={`aspect-square rounded-[3px] ${heat[l]}`} />
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Filler words removed</div>
          <div className="space-y-2">
            {fillers.map(([w, c]) => (
              <div key={w} className="flex items-center gap-3 text-sm">
                <span className="w-16 text-muted">&ldquo;{w}&rdquo;</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-fg/5">
                  <span className="block h-full rounded-full bg-red/70" style={{ width: `${(c / 214) * 100}%` }} />
                </span>
                <span className="w-8 text-right font-mono text-xs text-faint">{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Today&apos;s goal</div>
          <div className="flex items-center gap-4 rounded-2xl bg-bg p-4 ring-1 ring-line">
            <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90" aria-hidden>
              <circle cx="18" cy="18" r="15" fill="none" stroke="var(--line-strong)" strokeWidth="4" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="24" />
            </svg>
            <div>
              <div className="text-lg font-semibold">1,520 / 2,000</div>
              <div className="text-xs text-faint">words today · 76%</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-faint">Sample data. Stats stay on your Mac unless you turn on optional backup.</p>
    </div>
  );
}
