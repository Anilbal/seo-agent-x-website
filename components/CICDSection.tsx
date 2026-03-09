"use client";

export function CICDSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="glass rounded-3xl overflow-hidden border border-white/[0.07] order-2 lg:order-1">
          <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="ml-2 text-[11px] font-mono-ibm text-[#64647a]">
              .github/workflows/seo-agent-x.yml
            </span>
          </div>
          <div className="p-5">
            <pre className="text-[12px] font-mono-ibm leading-relaxed overflow-x-auto text-[#c8c8d8]">{`name: Seo agent x Audit
on: [push, pull_request]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Seo agent x SEO & A11y audit
        uses: seoagentxHQ/seo-agent-x-action@v2
        with:
          url: \${{ secrets.STAGING_URL }}
          api-key: \${{ secrets.SEO_AGENT_X_API_KEY }}
          fail-on: |
            seo-score < 80
            a11y-score < 75
            wcag-level: AA
          notify: slack`}</pre>
          </div>
          <div className="border-t border-white/[0.06] px-5 py-4">
            <p className="text-[10px] text-[#64647a] font-jakarta mb-3">
              PR check preview
            </p>
            {[
              { l: "seo agent x / SEO audit", ok: true, d: "Score: 84/100" },
              {
                l: "seo agent x / Accessibility",
                ok: false,
                d: "2 new WCAG AA errors",
              },
              { l: "seo agent x / Core Web Vitals", ok: true, d: "All green" },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-2 border-b border-white/[0.04] last:border-0"
              >
                <span
                  className={`text-xs ${c.ok ? "text-emerald-400" : "text-red-400"}`}
                >
                  {c.ok ? "✓" : "✗"}
                </span>
                <span className="font-mono-ibm text-xs text-[#9898aa] flex-1">
                  {c.l}
                </span>
                <span
                  className={`text-[10px] font-jakarta ${c.ok ? "text-[#64647a]" : "text-red-400"}`}
                >
                  {c.d}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
            CI/CD Integration
          </div>
          <h2
            className="font-bricolage font-extrabold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,3.8vw,3rem)" }}
          >
            Fail builds before
            <br />
            <span className="grad-amber">bad SEO ships.</span>
          </h2>
          <p className="text-[#64647a] font-jakarta text-base leading-relaxed mb-6">
            Drop our GitHub Action into any repo. Set score thresholds and WCAG
            levels. Seo agent x blocks the merge automatically if your PR introduces
            regressions.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["🔗", "GitHub Actions", "One-line setup"],
              ["🦊", "GitLab CI", "Native support"],
              ["📦", "npm / npx", "Run anywhere"],
              ["🔔", "Slack alerts", "Score changes"],
            ].map(([icon, label, sub], i) => (
              <div
                key={i}
                className="glass rounded-xl p-3.5 flex items-center gap-3"
              >
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="font-bricolage font-semibold text-white text-sm">
                    {label}
                  </p>
                  <p className="text-[#64647a] font-jakarta text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
