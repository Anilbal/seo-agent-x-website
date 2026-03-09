"use client";

import { STATS } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl py-14 px-8 relative overflow-hidden">
        <div className="orb w-[400px] h-[200px] bg-amber-500 opacity-[0.05] top-0 left-[20%]" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="stat-n">
                {s.value}
                <span style={{ color: "#f59e0b" }}>{s.suffix}</span>
              </div>
              <p className="text-[#64647a] font-jakarta text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
