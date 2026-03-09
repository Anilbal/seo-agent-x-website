"use client";

import { HOW_IT_WORKS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
          How it works
        </div>
        <h2
          className="font-bricolage font-extrabold text-white"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          From URL to report in under 8 seconds.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        {HOW_IT_WORKS.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl glass border border-white/[0.08] flex items-center justify-center relative z-10">
              <span className="font-bricolage font-extrabold text-amber-500 text-lg">
                {s.step}
              </span>
            </div>
            <h3 className="font-bricolage font-bold text-white text-base">
              {s.title}
            </h3>
            <p className="text-[#64647a] font-jakarta text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
