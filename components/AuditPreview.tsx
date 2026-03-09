"use client";

import { useState } from "react";
import { SEO_CHECKS, A11Y_CHECKS, CWV } from "@/lib/data";
import { StatusIcon } from "@/components/ui/StatusIcon";

export function AuditPreview() {
  const [tab, setTab] = useState<"seo" | "a11y" | "cwv">("seo");
  const checks = tab === "seo" ? SEO_CHECKS : tab === "a11y" ? A11Y_CHECKS : [];
  const failSeo = SEO_CHECKS.filter((c) => c.status === "fail").length;
  const failA11y = A11Y_CHECKS.filter((c) => c.status === "fail").length;

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
            Audit Dashboard
          </div>
          <h2
            className="font-bricolage font-extrabold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,3.8vw,3rem)" }}
          >
            Everything broken,
            <br />
            <span className="grad-amber">ranked by impact.</span>
          </h2>
          <p className="text-[#64647a] font-jakarta text-base leading-relaxed mb-8">
            Unlike generic Lighthouse runs, Seo agent x audits your full DOM — not
            just the initial HTML response. Dynamic content, lazy-loaded images,
            and client-side routes are all caught.
          </p>
          <ul className="space-y-4">
            {[
              {
                c: "#10b981",
                l: "208 checks across SEO, WCAG 2.2 and performance",
              },
              {
                c: "#f59e0b",
                l: "Issues ranked by SEO / accessibility impact score",
              },
              {
                c: "#8b5cf6",
                l: "Plain-English fix hints + copy-paste code snippets",
              },
              { c: "#f43f5e", l: "Track score history across every deploy" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `${item.c}18`,
                    border: `1px solid ${item.c}40`,
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4L3.5 6L6.5 2"
                      stroke={item.c}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-[#9898aa] font-jakarta">
                  {item.l}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl">
          <div className="px-5 pt-5 pb-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bricolage font-bold text-white text-sm">
                  example.com
                </p>
                <p className="text-[10px] text-[#64647a] font-jakarta mt-0.5">
                  Last scan: just now · Chromium 124
                </p>
              </div>
              <span className="text-[10px] font-bricolage font-semibold px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Report ready
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { l: "SEO", s: 82, c: "#f59e0b", p: "82%" },
                { l: "A11y", s: 67, c: "#f43f5e", p: "67%" },
                { l: "Perf", s: 91, c: "#10b981", p: "91%" },
                { l: "Schema", s: 44, c: "#f43f5e", p: "44%" },
              ].map((sc, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-3 flex flex-col items-center gap-1.5"
                >
                  <div
                    className="score-ring"
                    style={
                      {
                        "--ring-color": sc.c,
                        "--ring-pct": sc.p,
                        color: sc.c,
                        width: 52,
                        height: 52,
                        fontSize: "0.95rem",
                      } as React.CSSProperties
                    }
                  >
                    {sc.s}
                  </div>
                  <span className="text-[9px] text-[#64647a] font-bricolage font-semibold text-center">
                    {sc.l}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-1 border-b border-white/[0.06]">
              {(["seo", "a11y", "cwv"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`tab-btn ${tab === t ? "active" : ""}`}
                >
                  {t === "seo"
                    ? "SEO"
                    : t === "a11y"
                      ? "Accessibility"
                      : "Core Web Vitals"}
                  {t !== "cwv" && (
                    <span
                      className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full ${(t === "seo" ? failSeo : failA11y) > 0 ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}
                    >
                      {t === "seo" ? failSeo : failA11y} issues
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div
            className="p-4 max-h-72 overflow-y-auto space-y-1.5"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#2a2a38 transparent",
            }}
          >
            {tab !== "cwv"
              ? checks.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-white/[0.025] transition-colors"
                  >
                    <StatusIcon status={c.status} />
                    <span className="text-xs font-jakarta text-[#9898aa] flex-1">
                      {c.label}
                    </span>
                    <span
                      className={`text-[9px] font-bricolage font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${c.status === "pass" ? "pill-pass" : c.status === "warn" ? "pill-warn" : "pill-err"}`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))
              : CWV.map((m, i) => (
                  <div key={i} className="py-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bricolage font-bold text-white">
                          {m.name}
                        </span>
                        <span className="text-[10px] text-[#64647a] font-jakarta">
                          {m.full}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono-ibm text-xs"
                          style={{ color: m.color }}
                        >
                          {m.value}
                        </span>
                        <span
                          className="text-[10px] font-bricolage font-bold"
                          style={{ color: m.color }}
                        >
                          {m.score}
                        </span>
                      </div>
                    </div>
                    <div className="metric-bar">
                      <div
                        className="metric-fill"
                        style={{ width: m.pct, background: m.color }}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
