"use client";

import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2
          className="font-bricolage font-extrabold text-white"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          Shipped by developers,{" "}
          <span className="grad-amber">loved by teams.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-amber-400 text-base">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="text-[#9898aa] font-jakarta text-sm leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-3 border-t border-white/6">
              <div className="w-9 h-9 rounded-full border border-amber-500/25 bg-amber-500/10 flex items-center justify-center text-amber-400 font-bricolage font-bold text-xs shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="font-bricolage font-semibold text-white text-sm">
                  {t.name}
                </p>
                <p className="text-[#64647a] font-jakarta text-xs">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
