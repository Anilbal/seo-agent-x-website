"use client";

import { useState } from "react";
import { AI_ISSUES } from "@/lib/data";

export function AIFixSection() {
  const [active, setActive] = useState(0);
  const issue = AI_ISSUES[active];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[500px] h-[400px] bg-violet-700 opacity-[0.05] top-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 text-violet-400 text-xs font-jakarta mb-5 bg-violet-500/[0.04]">
            AI Fix Hints
          </div>
          <h2
            className="font-bricolage font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            {"Don't just find bugs."}
            <br />
            <span className="grad-mixed">Know how to fix them.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {AI_ISSUES.map((iss, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left glass rounded-2xl p-4 border transition-all ${active === i ? "border-amber-500/30 bg-amber-500/[0.04]" : "border-white/[0.06] hover:border-white/10"}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 text-[9px] font-bricolage font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${iss.severity === "fail" ? "pill-err" : "pill-warn"}`}
                  >
                    {iss.severity}
                  </span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bricolage font-semibold">
                      {iss.title}
                    </p>
                    <p className="text-[#64647a] text-xs font-jakarta mt-0.5">
                      {iss.spec}
                    </p>
                  </div>
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${iss.type === "a11y" ? "bg-violet-500" : "bg-amber-500"}`}
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-3 glass rounded-2xl overflow-hidden border border-white/[0.07]">
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3 bg-white/[0.015]">
              <span className="font-bricolage text-xs text-white font-semibold">
                AI Fix Hint
              </span>
              <span className="ml-auto text-[9px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20 font-bricolage font-semibold">
                {issue.type.toUpperCase()}
              </span>
            </div>
            <div className="p-5 space-y-5">
              <div className="p-4 rounded-xl bg-violet-500/[0.04] border border-violet-500/15">
                <p className="text-xs font-jakarta text-[#9898aa] leading-relaxed">
                  <span className="text-violet-400 font-semibold">
                    Why this matters:{" "}
                  </span>
                  {issue.hint}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-bricolage font-bold text-red-400 mb-2 uppercase tracking-wider">
                    Before
                  </p>
                  <pre className="text-[11px] font-mono-ibm text-[#64647a] bg-[#0d0d14] border border-white/[0.06] rounded-xl p-3 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                    {issue.before}
                  </pre>
                </div>
                <div>
                  <p className="text-[10px] font-bricolage font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                    After
                  </p>
                  <pre className="text-[11px] font-mono-ibm text-emerald-300/70 bg-emerald-500/[0.04] border border-emerald-500/20 rounded-xl p-3 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                    {issue.after}
                  </pre>
                </div>
              </div>
              <button className="w-full btn-amber text-sm py-2.5 rounded-xl">
                Copy fix to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
