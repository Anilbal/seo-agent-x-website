"use client";

import { useState, useCallback } from "react";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [step, setStep] = useState(0);

  const STEPS = [
    "Launching headless Chromium…",
    "Crawling DOM & parsing <head>…",
    "Running 140 SEO checks…",
    "Running 68 WCAG 2.2 checks…",
    "Measuring Core Web Vitals…",
    "Generating AI fix hints…",
    "Report ready ✓",
  ];

  const run = useCallback(() => {
    if (scanning) return;
    if (!url) setUrl("https://your-site.com");
    setScanning(true);
    setScanned(false);
    setStep(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      setStep(i);
      if (i >= STEPS.length - 1) {
        clearInterval(t);
        setTimeout(() => {
          setScanning(false);
          setScanned(true);
        }, 400);
      }
    }, 420);
  }, [url, scanning]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden">
      <div className="orb w-162.5 h-125 bg-amber-500 opacity-[0.055] -top-40 -left-40" />
      <div className="orb w-125 h-100 bg-violet-600 opacity-[0.05] top-0 right-[-100px]" />
      <div className="orb w-100 h-75 bg-amber-400 opacity-[0.04] bottom-0 left-[35%]" />
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fu inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-jakarta text-amber-400 mb-8 border border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse inline-block" />
          WCAG 2.2 now supported — Level A, AA &amp; AAA
        </div>
        <h1
          className="fu d1 font-bricolage font-extrabold tracking-tight text-white leading-[1.04] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,5.4rem)" }}
        >
          Audit your site&apos;s
          <br />
          <span className="grad-amber">SEO &amp; accessibility</span>
          <br />
          in 8 seconds.
        </h1>
        <p
          className="fu d2 font-jakarta text-[#64647a] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem,2vw,1.175rem)" }}
        >
          Seo agent x gives frontend developers a single platform for SEO health, WCAG
          2.2 compliance, Core Web Vitals, color contrast, structured data, and
          keyboard accessibility — with AI-generated fix hints.
        </p>
        <div className="fu d3 max-w-2xl mx-auto mb-6">
          <div className="glass rounded-2xl p-4 border border-white/[0.08]">
            <div className="flex gap-3">
              <input
                className="scan-input flex-1"
                placeholder="https://your-site.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && run()}
              />
              <button
                onClick={run}
                disabled={scanning}
                className="btn-amber px-5 py-3 rounded-xl text-sm whitespace-nowrap flex items-center gap-2 disabled:opacity-70"
              >
                {scanning ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                      />
                    </svg>
                    Scanning…
                  </>
                ) : (
                  "Run free audit →"
                )}
              </button>
            </div>
            {scanning && (
              <div className="mt-4 space-y-1.5">
                {STEPS.slice(0, step + 1).map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono-ibm text-[#64647a]"
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path
                        d="M1.5 4.5L3.5 6.5L7.5 2.5"
                        stroke="#10b981"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    {s}
                  </div>
                ))}
              </div>
            )}
            {scanned && (
              <div className="mt-4 border-t border-white/[0.06] pt-4 grid grid-cols-4 gap-3">
                {[
                  { l: "SEO", s: 82, c: "#f59e0b", p: "82%" },
                  { l: "A11y", s: 67, c: "#f43f5e", p: "67%" },
                  { l: "CWV", s: 91, c: "#10b981", p: "91%" },
                  { l: "Schema", s: 44, c: "#f43f5e", p: "44%" },
                ].map((sc, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className="score-ring"
                      style={
                        {
                          "--ring-color": sc.c,
                          "--ring-pct": sc.p,
                          color: sc.c,
                        } as React.CSSProperties
                      }
                    >
                      {sc.s}
                    </div>
                    <span className="text-[10px] text-[#64647a] font-bricolage font-semibold">
                      {sc.l}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-[11px] text-[#3a3a52] font-jakarta mt-2">
            No sign-up needed for your first audit · Powered by real Chromium
          </p>
        </div>
        <div className="fu d4 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex -space-x-2">
            {["TV", "AO", "LN", "SK", "MR"].map((av, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#09090f] bg-gradient-to-br from-amber-500/30 to-violet-600/30 flex items-center justify-center text-[10px] font-bricolage font-bold text-white"
              >
                {av}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#64647a] font-jakarta">
            <span className="text-[#9898aa]">47,000+</span> frontend devs run
            weekly audits
          </p>
        </div>
      </div>
    </section>
  );
}
