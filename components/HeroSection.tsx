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
      <div className="orb w-125 h-100 bg-violet-600 opacity-[0.05] top-0 -right-25" />
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
        <div className="fu d4 flex items-center justify-center gap-3 flex-wrap">
          <p className="text-sm text-[#64647a] font-jakarta">
            <span className="text-[#9898aa]">47,000+</span> frontend devs run
            weekly audits
          </p>
        </div>
      </div>
    </section>
  );
}
