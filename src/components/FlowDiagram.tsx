function Node({ label, tone = "white" }: { label: string; tone?: "white" | "orange" }) {
  return (
    <div
      className={`flex h-full cursor-default items-center justify-center rounded-2xl border px-4 py-4 text-center font-heading text-sm font-bold leading-snug transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-20px_rgba(11,42,82,0.4)] ${
        tone === "orange"
          ? "border-orange bg-orange text-white animate-pulse-ring"
          : "border-line bg-white text-navy hover:border-orange-soft"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center text-orange-deep ${
        vertical ? "h-8 w-full" : "h-full w-8 shrink-0"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className={vertical ? "h-5 w-5 rotate-90" : "h-5 w-5"}
        fill="none"
      >
        <path className="animate-dash" d="M2 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M14 6L20 12L14 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function FlowDiagram() {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
      <div>
        <p className="mb-4 font-heading text-xs font-bold uppercase tracking-wide text-orange-deep">
          Archive
        </p>
        <div className="overflow-x-auto">
          <div className="grid min-w-[640px] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 sm:min-w-0 sm:gap-3">
            <Node label="Storage sources" />
            <Arrow />
            <Node label="Scan and index" />
            <Arrow />
            <Node label="Archive to tape" />
            <Arrow />
            <Node label="LTO tape (LTFS)" />
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-center sm:my-8">
        <div className="flex flex-col items-center gap-2">
          <Arrow vertical />
          <Node label="Searchable catalog (database)" tone="orange" />
          <Arrow vertical />
        </div>
      </div>

      <div>
        <p className="mb-4 font-heading text-xs font-bold uppercase tracking-wide text-orange-deep">
          Restore
        </p>
        <div className="overflow-x-auto">
          <div className="grid min-w-[640px] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 sm:min-w-0 sm:gap-3">
            <Node label="Request a file" />
            <Arrow />
            <Node label="Search catalog" />
            <Arrow />
            <Node label="Queue recovery" />
            <Arrow />
            <Node label="Restored file" />
          </div>
        </div>
      </div>
    </div>
  );
}
