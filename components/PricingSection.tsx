"use client";

import { useState } from "react";
import { PRICING } from "@/lib/data";

export function PricingSection() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="py-28 max-w-7xl mx-auto px-6 relative">
      <div className="orb w-[500px] h-[400px] bg-amber-500 opacity-[0.04] top-0 left-0" />
      <div className="text-center max-w-xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
          Pricing
        </div>
        <h2
          className="font-bricolage font-extrabold text-white mb-4 leading-tight"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          Transparent pricing for devs.
        </h2>
        <p className="text-[#64647a] font-jakarta mb-8">
          No per-seat fees. No surprise API charges.
        </p>
        <div className="inline-flex items-center gap-2 glass rounded-full px-2 py-1.5">
          {["Monthly", "Annual"].map((label, i) => (
            <button
              key={label}
              onClick={() => setAnnual(i === 1)}
              className={`px-4 py-1.5 rounded-full text-sm font-bricolage font-semibold transition-all flex items-center gap-2 ${(i === 1) === annual ? "bg-amber-500 text-[#09090f]" : "text-[#64647a] hover:text-white"}`}
            >
              {label}
              {i === 1 && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${annual ? "bg-[#09090f]/20 text-[#09090f]" : "bg-amber-500/15 text-amber-400"}`}
                >
                  −25%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        {PRICING.map((plan, i) => {
          const price =
            plan.price === "$0"
              ? "$0"
              : plan.price === "$29"
                ? annual
                  ? "$22"
                  : "$29"
                : annual
                  ? "$67"
                  : "$89";
          return (
            <div
              key={i}
              className={`glass rounded-2xl p-7 flex flex-col gap-6 border ${plan.highlight ? "plan-highlight" : "border-white/[0.06] glass-hover"}`}
            >
              {plan.highlight && (
                <div className="text-center -mt-2">
                  <span className="text-[10px] font-bricolage font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-amber-500 text-[#09090f]">
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <p className="font-bricolage font-bold text-white text-lg mb-1">
                  {plan.name}
                </p>
                <p className="text-[#64647a] font-jakarta text-sm">
                  {plan.desc}
                </p>
              </div>
              <div className="flex items-end gap-1">
                <span
                  className="font-bricolage font-extrabold text-white"
                  style={{ fontSize: "2.6rem", lineHeight: 1 }}
                >
                  {price}
                </span>
                {plan.period && (
                  <span className="text-[#64647a] font-jakarta text-sm mb-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-[#9898aa] font-jakarta"
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ color: "#f59e0b" }}
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-center text-sm font-bricolage font-bold py-3 rounded-xl transition-all ${plan.highlight ? "btn-amber" : "btn-outline"}`}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>
      <p className="text-center mt-8 text-sm text-[#64647a] font-jakarta">
        Need a custom plan for agencies?{" "}
        <a
          href="#"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
        >
          Talk to us
        </a>
      </p>
    </section>
  );
}
