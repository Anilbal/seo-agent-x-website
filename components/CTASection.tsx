"use client";

export function CTASection() {
  return (
    <section className="py-28 max-w-5xl mx-auto px-6">
      <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden cta-bg">
        <div className="orb w-[400px] h-[300px] bg-amber-500 opacity-[0.08] -bottom-20 left-[10%]" />
        <div className="orb w-[300px] h-[200px] bg-violet-600 opacity-[0.06] -top-10 right-[5%]" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-jakarta text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse" />
            Free for your first audit
          </div>
          <h2
            className="font-bricolage font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem,5vw,3.8rem)" }}
          >
            Your site has SEO &amp; accessibility
            <br />
            <span className="grad-amber">issues right now.</span>
          </h2>
          <p className="text-[#64647a] font-jakarta text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Paste your URL. Get a full report in 8 seconds. Fix your first issue
            before lunch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              className="scan-input flex-1"
              placeholder="https://your-site.com"
            />
            <button className="btn-amber text-base px-7 py-3.5 rounded-xl w-full sm:w-auto whitespace-nowrap">
              Run free audit →
            </button>
          </div>
          <p className="mt-5 text-xs text-[#3a3a52] font-jakarta">
            50 free scans/month · No sign-up required · WCAG 2.2 + Core Web
            Vitals included
          </p>
        </div>
      </div>
    </section>
  );
}
