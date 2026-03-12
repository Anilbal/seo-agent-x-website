"use client";

import { useState, useCallback } from "react";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const CMD = "npm install -g seo-agent-x";

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

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(CMD).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden">
      <div className="orb w-162.5 h-125 bg-amber-500 opacity-[0.055] -top-40 -left-40" />
      <div className="orb w-125 h-100 bg-violet-600 opacity-[0.05] top-0 -right-25" />
      <div className="orb w-100 h-75 bg-amber-400 opacity-[0.04] bottom-0 left-[35%]" />
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="fu inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-jakarta text-amber-400 mb-8 border border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse inline-block" />
          Boost website rankings with developer-first SEO.
        </div>

        {/* Headline */}
        <h1
          className="fu d1 font-bricolage font-extrabold tracking-tight text-white leading-[1.04] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,5.4rem)" }}
        >
          Scan your website.
          <br />
          <span className="grad-amber">Fix SEO & accessibility.</span>
          <br />
          in seconds, not hours.
        </h1>

        {/* CLI Copy Block */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <button
            onClick={handleCopy}
            aria-label="Copy install command"
            className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/4 hover:bg-white/[0.07] hover:border-amber-500/30 transition-all duration-200 cursor-pointer"
            style={{
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            {/* Terminal prompt */}
            <span className="text-amber-400/70 font-mono text-sm select-none">
              $
            </span>

            {/* Command text */}
            <code className="font-mono text-sm text-[#d0d0e0] tracking-wide select-all">
              {CMD}
            </code>

            {/* Divider */}
            <span className="w-px h-4 bg-white/10 mx-1" />

            {/* Copy icon / checkmark */}
            <span className="relative w-4 h-4 flex items-center justify-center text-[#64647a] group-hover:text-amber-400 transition-colors duration-200">
              {copied ? (
                /* Checkmark SVG */
                <svg
                  key="check"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 text-amber-400"
                  style={{ animation: "pop 0.18s ease" }}
                >
                  <path
                    d="M3 8.5l3.5 3.5 6.5-7"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                /* Copy SVG */
                <svg
                  key="copy"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4"
                >
                  <rect
                    x="5.5"
                    y="5.5"
                    width="7"
                    height="8"
                    rx="1.25"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M3.5 10.5V3.5a1 1 0 0 1 1-1h6"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Pop keyframe for checkmark animation */}
      <style>{`
        @keyframes pop {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.2); }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </section>
  );
}
