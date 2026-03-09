"use client";

import { TOOL_LOGOS } from "@/lib/data";

export function LogoBar() {
  const doubled = [...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <section className="py-12 overflow-hidden">
      <div className="amber-rule opacity-20 mb-10" />
      <p className="text-center text-[10px] tracking-[0.22em] uppercase text-[#3a3a52] font-jakarta mb-7">
        Works with your favourite stack
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="mx-10 text-[#383850] font-bricolage font-semibold text-base whitespace-nowrap hover:text-[#64647a] transition-colors select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="amber-rule opacity-20 mt-10" />
    </section>
  );
}
