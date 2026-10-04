const bar = (w: string, tone: string) => (
  <div className="h-2 rounded-full" style={{ width: w, backgroundColor: tone }} />
);

function Chrome({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between px-5 pt-5">
      <p className="font-heading text-sm font-bold text-white">{title}</p>
      {action ? (
        <span className="rounded-full bg-orange px-3 py-1 text-[11px] font-bold text-white">
          {action}
        </span>
      ) : null}
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[280px]">
      <div className="hidden w-14 flex-col items-center gap-4 border-r border-white/10 bg-black/20 py-5 sm:flex">
        {["bg-orange", "bg-white/25", "bg-white/25", "bg-white/25", "bg-white/25"].map(
          (c, i) => (
            <span key={i} className={`h-6 w-6 rounded-lg ${c}`} />
          )
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function InventoryMockup() {
  const rows = [
    ["BLM-0142", "LTO-9", "Full", "17.6 / 18 TB"],
    ["BLM-0141", "LTO-9", "Verified", "18.0 / 18 TB"],
    ["BLM-0140", "LTO-8", "Archiving", "9.2 / 12 TB"],
    ["BLM-0139", "LTO-9", "Duplicate", "18.0 / 18 TB"],
  ];
  return (
    <Shell>
      <Chrome title="Tape inventory" action="+ New label" />
      <div className="mt-4 space-y-2 px-5 pb-5">
        <div className="grid grid-cols-4 gap-3 px-3 text-[10px] uppercase tracking-wide text-white/40">
          <span>Barcode</span>
          <span>Gen</span>
          <span>Status</span>
          <span>Used</span>
        </div>
        {rows.map((r) => (
          <div
            key={r[0]}
            className="grid grid-cols-4 items-center gap-3 rounded-xl bg-white/[0.06] px-3 py-3 text-xs text-white/80 transition-colors duration-200 hover:bg-white/[0.11]"
          >
            <span className="font-semibold text-white">{r[0]}</span>
            <span>{r[1]}</span>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange/20 px-2 py-0.5 text-orange-soft">
              {r[2] === "Archiving" ? (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-soft" />
              ) : null}
              {r[2]}
            </span>
            <span>{r[3]}</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function SearchMockup() {
  const results = [
    "S3E04_ProResHQ_master.mov  ·  BLM-0118  ·  212 GB",
    "S3E04_camera_A_roll12.mxf  ·  BLM-0118  ·  64 GB",
    "S3E04_audio_mix_final.wav  ·  BLM-0119  ·  4 GB",
    "S3E04_vfx_plates_wk3.zip   ·  BLM-0120  ·  138 GB",
  ];
  return (
    <Shell>
      <Chrome title="Search archives" />
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full border-2 border-orange-soft" />
          <span className="text-xs text-white/60">S3E04</span>
        </div>
      </div>
      <div className="mt-4 space-y-2 px-5 pb-5">
        {results.map((r) => (
          <div
            key={r}
            className="cursor-default rounded-xl bg-white/[0.06] px-3 py-3 text-[11px] text-white/75 transition-colors duration-200 hover:bg-white/[0.11] hover:text-white"
          >
            {r}
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function SchedulesMockup() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <Shell>
      <Chrome title="Schedules" action="Run now" />
      <div className="space-y-4 px-5 py-5">
        <div className="rounded-xl bg-white/[0.06] p-4">
          <p className="text-xs font-semibold text-white">Nightly camera archive</p>
          <p className="mt-1 text-[11px] text-white/50">Sources: NEXIS-01 · Library A · 11:30 PM</p>
          <div className="mt-3 flex gap-1.5">
            {days.map((d, i) => (
              <span
                key={i}
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${
                  i < 5 ? "bg-orange text-white" : "bg-white/10 text-white/40"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white/[0.06] p-4">
          {bar("70%", "rgba(255,255,255,0.18)")}
          <div className="mt-2">{bar("40%", "rgba(255,255,255,0.18)")}</div>
        </div>
      </div>
    </Shell>
  );
}

export function ReportsMockup() {
  const heights = [30, 55, 40, 70, 48, 82, 60];
  return (
    <Shell>
      <Chrome title="Reports · 30 days" />
      <div className="px-5 py-5">
        <div className="flex h-32 items-end gap-2.5">
          {heights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md transition-all duration-200 hover:brightness-125"
              style={{
                height: `${h}%`,
                backgroundColor: i === 5 ? "#EA5A0C" : "rgba(255,255,255,0.16)",
              }}
            />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Archived", "Restored", "Verified"].map((label, i) => (
            <div key={label} className="rounded-xl bg-white/[0.06] p-3">
              <p className="text-[10px] uppercase tracking-wide text-white/40">{label}</p>
              <p className="mt-1 font-heading text-sm font-bold text-white">
                {[128, 34, 96][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

export function RecoveryMockup() {
  const rows = [
    ["projectA_masters", "/restore/projectA", "Complete"],
    ["S3E04_vfx_plates", "/restore/vfx", "Queued"],
    ["archive_2024_Q3", "/restore/finance", "In progress"],
  ];
  return (
    <Shell>
      <Chrome title="Recovery queue" />
      <div className="mt-4 space-y-2 px-5 pb-5">
        {rows.map((r) => (
          <div
            key={r[0]}
            className="flex items-center justify-between rounded-xl bg-white/[0.06] px-4 py-3 text-[11px] text-white/75 transition-colors duration-200 hover:bg-white/[0.11]"
          >
            <span className="font-semibold text-white">{r[0]}</span>
            <span className="text-white/45">{r[1]}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 px-2 py-0.5 text-orange-soft">
              {r[2] !== "Complete" ? (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-soft" />
              ) : null}
              {r[2]}
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}
