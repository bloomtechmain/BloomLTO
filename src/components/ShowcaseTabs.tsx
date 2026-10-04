"use client";

import { useState } from "react";
import { BrowserFrame } from "./BrowserFrame";
import {
  InventoryMockup,
  SearchMockup,
  SchedulesMockup,
  ReportsMockup,
} from "./AppMockup";

const tabs = [
  { id: "inventory", label: "Inventory", Mockup: InventoryMockup, path: "inventory" },
  { id: "search", label: "Search", Mockup: SearchMockup, path: "search" },
  { id: "schedules", label: "Schedules", Mockup: SchedulesMockup, path: "schedules" },
  { id: "reports", label: "Reports", Mockup: ReportsMockup, path: "reports" },
] as const;

export function ShowcaseTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("inventory");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-2 rounded-full border border-line bg-white p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`relative rounded-full px-5 py-2 font-heading text-sm font-bold transition-colors duration-300 ${
              active === tab.id ? "text-white" : "text-navy/60 hover:text-navy"
            }`}
          >
            {active === tab.id ? (
              <span className="absolute inset-0 rounded-full bg-navy transition-all duration-300" />
            ) : null}
            <span className="relative">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div key={current.id} className="animate-fade-in-up">
          <BrowserFrame label={`app.bloomlto.local/${current.path}`}>
            <current.Mockup />
          </BrowserFrame>
        </div>
      </div>
    </div>
  );
}
