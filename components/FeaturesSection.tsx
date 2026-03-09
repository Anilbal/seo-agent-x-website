"use client";

import { FEATURES } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
          Full feature set
        </div>
        <h2
          className="font-bricolage font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          Every check frontend
          <br />
          <span className="grad-mixed">developers actually need.</span>
        </h2>
        <p className="text-[#64647a] font-jakarta text-lg">
          208 automated checks. One report. Zero tab-switching.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className={`glass glass-hover rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden ${f.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            {f.tag && (
              <span
                className="absolute top-4 right-4 text-[9px] font-bricolage font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: `${f.iconColor}15`,
                  border: `1px solid ${f.iconColor}30`,
                  color: f.iconColor,
                }}
              >
                {f.tag}
              </span>
            )}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
              style={{
                background: `${f.iconColor}10`,
                border: `1px solid ${f.iconColor}25`,
              }}
            >
              {f.icon}
            </div>
            <div>
              <h3 className="font-bricolage font-bold text-white text-base mb-1.5">
                {f.title}
              </h3>
              <p className="font-jakarta text-[#64647a] text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
