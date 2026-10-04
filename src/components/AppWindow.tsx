import {
  TapeReelIcon,
  SearchIcon,
  ScheduleIcon,
  RestoreIcon,
  ChartIcon,
  BellIcon,
} from "./icons";

export type AppViewId = "inventory" | "search" | "schedules" | "recovery" | "reports";

const sidebar = [
  { id: "inventory", label: "Inventory", Icon: TapeReelIcon },
  { id: "search", label: "Search", Icon: SearchIcon },
  { id: "schedules", label: "Schedules", Icon: ScheduleIcon },
  { id: "recovery", label: "Recovery", Icon: RestoreIcon },
  { id: "reports", label: "Reports", Icon: ChartIcon },
  { id: "alerts", label: "Alerts", Icon: BellIcon },
];

const th = "font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-white/40";
const row = "grid items-center gap-3 border-t border-white/[0.07] px-5 py-3 text-[13px] text-white/75";

function PanelHead({ title, meta, action }: { title: string; meta: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <div>
        <p className="font-heading text-base font-bold text-white">{title}</p>
        <p className="font-mono text-[11px] text-white/45">{meta}</p>
      </div>
      {action ? (
        <span className="shrink-0 bg-orange px-3 py-1.5 font-heading text-xs font-bold text-white">
          {action}
        </span>
      ) : null}
    </div>
  );
}

const statusDot: Record<string, string> = {
  Verified: "bg-emerald-400",
  Archiving: "bg-orange animate-pulse",
  Full: "bg-white/50",
  Duplicate: "bg-sky-300",
  Formatted: "bg-white/25",
};

function InventoryView() {
  const cols = "grid-cols-[1.2fr_1fr_1.4fr] sm:grid-cols-[1.1fr_0.5fr_0.7fr_1fr_1.1fr_1.5fr]";
  const tapes = [
    ["BLM-0142", "01", "LTO-9", "Full", "Archive", 17.6, 18],
    ["BLM-0141", "02", "LTO-9", "Verified", "Archive", 18.0, 18],
    ["BLM-0140", "03", "LTO-8", "Archiving", "Archive", 9.2, 12],
    ["BLM-0139", "04", "LTO-9", "Duplicate", "Cold spare", 18.0, 18],
    ["BLM-0138", "05", "LTO-9", "Verified", "Archive", 16.9, 18],
    ["BLM-0137", "06", "LTO-9", "Formatted", "Catalog backup", 0.4, 18],
  ] as const;
  return (
    <>
      <PanelHead title="Tape inventory" meta="Library A · 6 of 24 slots shown" action="+ New label" />
      <div className={`grid gap-3 px-5 pb-2 ${cols}`}>
        <span className={th}>Barcode</span>
        <span className={`${th} hidden sm:block`}>Slot</span>
        <span className={`${th} hidden sm:block`}>Gen</span>
        <span className={th}>Status</span>
        <span className={`${th} hidden sm:block`}>Purpose</span>
        <span className={th}>Used</span>
      </div>
      {tapes.map(([code, slot, gen, status, purpose, used, cap]) => (
        <div key={code} className={`${row} ${cols} transition-colors hover:bg-white/[0.04]`}>
          <span className="font-mono font-semibold text-white">{code}</span>
          <span className="hidden font-mono text-white/50 sm:block">{slot}</span>
          <span className="hidden sm:block">{gen}</span>
          <span className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[status]}`} />
            {status}
          </span>
          <span className="hidden text-white/55 sm:block">{purpose}</span>
          <span className="flex items-center gap-3">
            <span className="h-1 flex-1 bg-white/10">
              <span
                className="block h-full bg-orange"
                style={{ width: `${Math.round((used / cap) * 100)}%` }}
              />
            </span>
            <span className="hidden w-[86px] text-right font-mono text-[11px] text-white/55 md:block">
              {used.toFixed(1)} / {cap} TB
            </span>
          </span>
        </div>
      ))}
    </>
  );
}

function SearchView() {
  const cols = "grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1.6fr_1.4fr_0.7fr_0.5fr]";
  const files = [
    ["S3E04_ProResHQ_master.mov", "/projects/S3/E04/masters", "BLM-0118", "212 GB", true],
    ["S3E04_camera_A_roll12.mxf", "/projects/S3/E04/camera_A", "BLM-0118", "64 GB", true],
    ["S3E04_audio_mix_final.wav", "/projects/S3/E04/audio", "BLM-0119", "4 GB", false],
    ["S3E04_vfx_plates_wk3.zip", "/projects/S3/E04/vfx", "BLM-0120", "138 GB", false],
  ] as const;
  return (
    <>
      <PanelHead title="Search archives" meta="4 files on 3 tapes" />
      <div className="mx-5 mb-4 flex items-center gap-3 border border-white/15 bg-black/30 px-4 py-2.5">
        <SearchIcon className="h-4 w-4 text-white/45" />
        <span className="font-mono text-sm text-white">S3E04</span>
        <span className="h-4 w-px animate-pulse bg-orange" />
      </div>
      <div className={`grid gap-3 px-5 pb-2 ${cols}`}>
        <span className="w-3.5" />
        <span className={th}>Filename</span>
        <span className={`${th} hidden sm:block`}>Path</span>
        <span className={`${th} hidden sm:block`}>Tape</span>
        <span className={th}>Size</span>
      </div>
      {files.map(([name, path, tape, size, picked]) => (
        <div
          key={name}
          className={`${row} ${cols} ${picked ? "bg-orange/[0.08]" : "hover:bg-white/[0.04]"}`}
        >
          <span
            className={`flex h-3.5 w-3.5 items-center justify-center border ${
              picked ? "border-orange bg-orange" : "border-white/30"
            }`}
          >
            {picked ? (
              <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="2">
                <path d="M2 5.2 L4.2 7.4 L8 3" />
              </svg>
            ) : null}
          </span>
          <span className="truncate font-mono text-[12px] text-white">{name}</span>
          <span className="hidden truncate font-mono text-[11px] text-white/45 sm:block">{path}</span>
          <span className="hidden font-mono text-[12px] sm:block">{tape}</span>
          <span className="text-right font-mono text-[12px] text-white/60">{size}</span>
        </div>
      ))}
      <div className="flex items-center justify-between gap-4 border-t border-white/[0.07] bg-black/25 px-5 py-3">
        <span className="font-mono text-[11px] text-white/55">2 selected · 276 GB</span>
        <span className="bg-orange px-3 py-1.5 font-heading text-xs font-bold text-white">
          Recover selected
        </span>
      </div>
    </>
  );
}

function SchedulesView() {
  const cols = "grid-cols-[1.4fr_auto] sm:grid-cols-[1.4fr_auto_0.7fr_0.9fr_0.8fr]";
  const letters = ["M", "T", "W", "T", "F", "S", "S"];
  const schedules = [
    ["Nightly camera archive", [0, 1, 2, 3, 4], "11:30 PM", "NEXIS-01", "Tonight"],
    ["Weekend finishing sweep", [5, 6], "02:00 AM", "/mnt/finishing", "Saturday"],
    ["Audio stems", [0, 2, 4], "09:00 PM", "/mnt/audio", "Wednesday"],
  ] as const;
  return (
    <>
      <PanelHead title="Schedules" meta="Library A · 3 active" action="Run now" />
      <div className={`grid gap-3 px-5 pb-2 ${cols}`}>
        <span className={th}>Name</span>
        <span className={th}>Days</span>
        <span className={`${th} hidden sm:block`}>Time</span>
        <span className={`${th} hidden sm:block`}>Source</span>
        <span className={`${th} hidden sm:block`}>Next run</span>
      </div>
      {schedules.map(([name, days, time, source, next]) => (
        <div key={name} className={`${row} ${cols} py-4 hover:bg-white/[0.04]`}>
          <span className="font-semibold text-white">{name}</span>
          <span className="flex gap-1">
            {letters.map((d, i) => (
              <span
                key={i}
                className={`flex h-5 w-5 items-center justify-center font-mono text-[10px] ${
                  (days as readonly number[]).includes(i)
                    ? "bg-orange text-white"
                    : "bg-white/[0.07] text-white/35"
                }`}
              >
                {d}
              </span>
            ))}
          </span>
          <span className="hidden font-mono text-[12px] sm:block">{time}</span>
          <span className="hidden truncate font-mono text-[11px] text-white/55 sm:block">{source}</span>
          <span className="hidden text-white/55 sm:block">{next}</span>
        </div>
      ))}
      <div className="border-t border-white/[0.07] px-5 py-4">
        <p className={th}>Next job preview</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/75">
          <span>
            Target tape <span className="font-mono text-white">BLM-0140</span>
          </span>
          <span className="flex min-w-[180px] flex-1 items-center gap-3">
            <span className="h-1 flex-1 bg-white/10">
              <span className="block h-full w-[77%] bg-white/40" />
              <span className="-mt-1 ml-[77%] block h-1 w-[9%] bg-orange" />
            </span>
            <span className="font-mono text-[11px] text-white/55">77% → 86% full</span>
          </span>
        </div>
      </div>
    </>
  );
}

function ReportsView() {
  // 30 days of archive throughput, in TB/day.
  const days = [
    3.1, 4.2, 2.8, 0.4, 0.2, 3.9, 4.6, 5.1, 3.3, 4.0, 0.6, 0.3, 4.4, 5.8, 4.9,
    3.6, 4.1, 0.5, 0.2, 5.2, 6.1, 4.7, 5.5, 3.8, 0.7, 0.4, 4.9, 6.4, 5.6, 4.3,
  ];
  const peak = Math.max(...days);
  const kpis = [
    ["Archive runs", "128"],
    ["Restores", "34"],
    ["Verifications", "96"],
  ];
  return (
    <>
      <PanelHead title="Reports" meta="Last 30 days · all libraries" />
      <div className="grid grid-cols-3 border-y border-white/[0.07]">
        {kpis.map(([label, value], i) => (
          <div key={label} className={`px-5 py-4 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}>
            <p className={th}>{label}</p>
            <p className="mt-1 font-heading text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="px-5 py-5">
        <div className="flex items-baseline justify-between">
          <p className={th}>Archive throughput · TB per day</p>
          <p className="font-mono text-[11px] text-white/45">peak {peak} TB</p>
        </div>
        <div className="mt-4 flex h-28 items-end gap-[3px] border-b border-white/15">
          {days.map((v, i) => (
            <span
              key={i}
              className={`flex-1 ${v === peak ? "bg-orange" : "bg-white/25"}`}
              style={{ height: `${(v / peak) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4">
          <p className={`${th} shrink-0`}>Fleet utilization</p>
          <span className="h-1.5 flex-1 bg-white/10">
            <span className="block h-full w-[74%] bg-orange" />
          </span>
          <span className="font-mono text-[11px] text-white/55">74%</span>
        </div>
      </div>
    </>
  );
}

function RecoveryView() {
  const cols = "grid-cols-[1.3fr_auto] sm:grid-cols-[1.3fr_1.1fr_0.8fr_0.6fr_0.6fr_0.9fr]";
  const jobs = [
    ["projectA_masters", "/restore/projectA", "j.rivera", "1,204", "1.2 TB", "Complete"],
    ["S3E04_vfx_plates", "/restore/vfx", "m.chen", "86", "138 GB", "Queued"],
    ["archive_2024_Q3", "/restore/finance", "a.okafor", "3,410", "640 GB", "In progress"],
  ] as const;
  const dot: Record<string, string> = {
    Complete: "bg-emerald-400",
    Queued: "bg-white/40",
    "In progress": "bg-orange animate-pulse",
  };
  return (
    <>
      <PanelHead title="Recovery queue" meta="3 requests · 1 running" action="+ New recovery" />
      <div className={`grid gap-3 px-5 pb-2 ${cols}`}>
        <span className={th}>Request</span>
        <span className={`${th} hidden sm:block`}>Destination</span>
        <span className={`${th} hidden sm:block`}>Requested by</span>
        <span className={`${th} hidden sm:block`}>Files</span>
        <span className={`${th} hidden sm:block`}>Size</span>
        <span className={th}>Status</span>
      </div>
      {jobs.map(([name, dest, who, files, size, status]) => (
        <div key={name} className={`${row} ${cols} py-4 hover:bg-white/[0.04]`}>
          <span className="truncate font-mono text-[12px] font-semibold text-white">{name}</span>
          <span className="hidden truncate font-mono text-[11px] text-white/50 sm:block">{dest}</span>
          <span className="hidden font-mono text-[12px] sm:block">{who}</span>
          <span className="hidden font-mono text-[12px] text-white/60 sm:block">{files}</span>
          <span className="hidden font-mono text-[12px] text-white/60 sm:block">{size}</span>
          <span className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot[status]}`} />
            {status}
          </span>
        </div>
      ))}
      <div className="border-t border-white/[0.07] px-5 py-4">
        <p className={th}>archive_2024_Q3 · restoring</p>
        <div className="mt-2 flex items-center gap-3">
          <span className="h-1 flex-1 bg-white/10">
            <span className="block h-full w-[58%] bg-orange" />
          </span>
          <span className="font-mono text-[11px] text-white/55">58%</span>
        </div>
      </div>
    </>
  );
}

const panels: Record<AppViewId, () => React.ReactNode> = {
  inventory: InventoryView,
  search: SearchView,
  schedules: SchedulesView,
  recovery: RecoveryView,
  reports: ReportsView,
};

// Drawn stand-in for the BloomLTO web app, filled with sample data.
export function AppWindow({
  view,
  className,
  bodyClassName = "min-h-[400px]",
}: {
  view: AppViewId;
  className?: string;
  bodyClassName?: string;
}) {
  const Panel = panels[view];
  return (
    <div
      className={`relative border border-white/15 bg-[#1b1b1b] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ${className ?? ""}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#111] px-4 py-2.5">
        <span className="truncate font-mono text-[11px] text-white/45">
          app.bloomlto.local/{view}
        </span>
        <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Library A online
        </span>
      </div>
      <div className="flex">
        <div className="hidden w-44 shrink-0 border-r border-white/10 bg-[#141414] py-3 md:block">
          {sidebar.map(({ id, label, Icon }) => (
            <div
              key={id}
              className={`flex items-center gap-3 border-l-2 px-4 py-2.5 text-[13px] ${
                id === view
                  ? "border-orange bg-white/[0.06] font-semibold text-white"
                  : "border-transparent text-white/50"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {label}
            </div>
          ))}
        </div>
        <div key={view} className={`animate-fade-in-up min-w-0 flex-1 ${bodyClassName}`}>
          <Panel />
        </div>
      </div>
    </div>
  );
}
