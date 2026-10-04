const TAPE_COUNT = 12;
const FAIL_INDEX = 7;
const CHECK_INDICES = [2, 5, 9];

function TapeCell({ index, label, active }: { index: number; label: string; active: number }) {
  const obscured = active === 0;
  const isFailed = active === 2 && index === FAIL_INDEX;
  const checking = active === 1 && CHECK_INDICES.includes(index);

  return (
    <div
      className={`relative flex aspect-[4/3] flex-col justify-between rounded-[3px] border p-1.5 transition-colors duration-500 ease-out ${
        isFailed ? "border-dashed border-orange bg-orange/15" : "border-white/10 bg-grey"
      } ${checking ? "animate-fail-pulse" : ""}`}
      style={checking ? { animationDelay: `${CHECK_INDICES.indexOf(index) * 450}ms` } : undefined}
    >
      <div className={`flex gap-[3px] transition-opacity duration-500 ${isFailed ? "opacity-30" : "opacity-100"}`}>
        <span className="h-[3px] flex-1 rounded-full bg-white/15" />
        <span className="h-[3px] flex-1 rounded-full bg-white/15" />
      </div>

      <div
        className={`rounded-[2px] px-1 py-[3px] font-mono text-[8px] leading-none tracking-tight transition-all duration-500 ease-out sm:text-[9px] ${
          isFailed
            ? "bg-orange/20 text-orange-soft line-through"
            : obscured
              ? "bg-white/15 text-white/25 blur-[1.5px]"
              : "bg-white/95 text-grey-deep blur-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export function TapeLibraryViz({ active }: { active: number }) {
  const tapes = Array.from({ length: TAPE_COUNT }, (_, i) => `LTO-${String(i + 1).padStart(3, "0")}`);

  return (
    <div className="border border-white/15 bg-grey-deep p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-7">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/60">
        <span>LTO library — Rack A</span>
        <span
          className={`text-orange-soft transition-opacity duration-300 ${active === 0 ? "opacity-100" : "opacity-0"}`}
        >
          barcodes unreadable
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[4px]">
        {active === 0 ? (
          <div key="scan-bar" className="animate-scan-sweep pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        ) : null}

        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {tapes.map((label, i) => (
            <TapeCell key={label} index={i} label={label} active={active} />
          ))}
        </div>
      </div>

      <div className="relative mt-5 h-[2px] rounded-full bg-white/15">
        {active === 1 ? (
          <span
            key="dot-search"
            className="animate-track-search absolute -top-[3px] h-2 w-2 rounded-full bg-orange"
          />
        ) : null}
        {active === 2 ? (
          <span
            key="dot-fail"
            className="animate-track-fail absolute -top-[3px] h-2 w-2 rounded-full bg-orange"
          />
        ) : null}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-wider text-white/55">
        <span>Request</span>
        <span className={`transition-colors duration-300 ${active === 2 ? "text-orange-soft" : ""}`}>
          {active === 0
            ? "No index available"
            : active === 1
              ? "Scanning tapes…"
              : "LTO-008 not responding"}
        </span>
      </div>
    </div>
  );
}
