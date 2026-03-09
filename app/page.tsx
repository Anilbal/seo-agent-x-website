"use client";

import { useState, useEffect, useCallback } from "react";

/* ══ DATA ══════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

const TOOL_LOGOS = [
  "Next.js",
  "Nuxt",
  "Astro",
  "SvelteKit",
  "Remix",
  "Gatsby",
  "Vite",
  "Netlify",
  "Vercel",
  "Cloudflare Pages",
];

const SEO_CHECKS = [
  { label: "Title tag length & uniqueness", status: "pass" },
  { label: "Meta description present & optimised", status: "pass" },
  { label: "Open Graph image (og:image)", status: "warn" },
  { label: "Canonical URL set correctly", status: "pass" },
  { label: "Structured data (JSON-LD)", status: "fail" },
  { label: "robots.txt & sitemap.xml", status: "pass" },
  { label: "Hreflang for multi-lang pages", status: "warn" },
  { label: "Page indexability", status: "pass" },
];

const A11Y_CHECKS = [
  { label: "All images have alt text", status: "fail" },
  { label: "Color contrast ratio >= 4.5:1", status: "warn" },
  { label: "Interactive elements are keyboard-reachable", status: "pass" },
  { label: "ARIA roles used correctly", status: "pass" },
  { label: "Skip navigation link present", status: "fail" },
  { label: "Form inputs have associated labels", status: "warn" },
  { label: "Focus visible indicator", status: "pass" },
  { label: "Document language attribute set", status: "pass" },
];

const CWV = [
  {
    name: "LCP",
    full: "Largest Contentful Paint",
    value: "1.8s",
    score: 94,
    color: "#10b981",
    pct: "94%",
  },
  {
    name: "CLS",
    full: "Cumulative Layout Shift",
    value: "0.04",
    score: 88,
    color: "#f59e0b",
    pct: "88%",
  },
  {
    name: "INP",
    full: "Interaction to Next Paint",
    value: "142ms",
    score: 72,
    color: "#f59e0b",
    pct: "72%",
  },
  {
    name: "FCP",
    full: "First Contentful Paint",
    value: "0.9s",
    score: 98,
    color: "#10b981",
    pct: "98%",
  },
  {
    name: "TTFB",
    full: "Time to First Byte",
    value: "210ms",
    score: 81,
    color: "#10b981",
    pct: "81%",
  },
  {
    name: "TBT",
    full: "Total Blocking Time",
    value: "38ms",
    score: 96,
    color: "#10b981",
    pct: "96%",
  },
];

const FEATURES = [
  {
    icon: "⚡",
    iconColor: "#f59e0b",
    title: "Real-time SEO Audit",
    desc: "Paste any URL and get an instant SEO health report — title tags, meta descriptions, canonical URLs, OG images, sitemap, robots.txt, and structured data.",
    tag: "Core",
    wide: true,
  },
  {
    icon: "♿",
    iconColor: "#8b5cf6",
    title: "WCAG 2.2 Compliance",
    desc: "Full Level A, AA and AAA checks. Know which violations exist, their severity, and the exact fix.",
    tag: "A11y",
  },
  {
    icon: "📊",
    iconColor: "#10b981",
    title: "Core Web Vitals Monitor",
    desc: "Track LCP, CLS, INP, FCP, TTFB and TBT over time. Get Slack alerts when a deploy tanks scores.",
  },
  {
    icon: "🎨",
    iconColor: "#f43f5e",
    title: "Color Contrast Analyser",
    desc: "Visualise every text/background pair. Get the exact ratio, AA/AAA pass status, and a suggested fix.",
    tag: "A11y",
  },
  {
    icon: "🔍",
    iconColor: "#f59e0b",
    title: "Structured Data Validator",
    desc: "Validate JSON-LD, Microdata and RDFa against Google Rich Results spec. Preview search snippets live.",
  },
  {
    icon: "🖼️",
    iconColor: "#8b5cf6",
    title: "OG & Twitter Card Preview",
    desc: "Edit and preview Open Graph and Twitter Card tags live. See exactly how links unfurl on every platform.",
  },
  {
    icon: "⌨️",
    iconColor: "#10b981",
    title: "Keyboard Navigation Tester",
    desc: "Record full keyboard traversal flows. Detect focus traps, missing tab stops, and illogical focus order.",
    tag: "A11y",
  },
  {
    icon: "🔄",
    iconColor: "#f59e0b",
    title: "CI/CD Integration",
    desc: "Drop our GitHub Action into any pipeline. Fail builds when SEO score drops or WCAG errors are introduced.",
    tag: "DevOps",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Enter your URL",
    desc: "Paste any public URL or connect via GitHub. Seo agent x crawls using a real Chromium instance — no server-side-only analysis.",
  },
  {
    step: "02",
    title: "Instant audit report",
    desc: "Get a scored, prioritised report in under 8 seconds. Issues ranked by impact so you fix what matters most first.",
  },
  {
    step: "03",
    title: "Fix with AI hints",
    desc: "Every issue ships with a plain-English explanation, a code snippet fix, and a link to the relevant spec.",
  },
  {
    step: "04",
    title: "Monitor & alert",
    desc: "Schedule recurring audits. We watch your scores over time and alert you the moment a deploy breaks something.",
  },
];

const STATS = [
  { value: "3.1", suffix: "M", label: "Pages audited this month" },
  { value: "98", suffix: "%", label: "WCAG issue detection accuracy" },
  { value: "8", suffix: "s", label: "Avg. full audit time" },
  { value: "47", suffix: "K+", label: "Frontend devs using Seo agent x" },
];

const PRICING = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    desc: "For solo devs learning accessibility.",
    features: [
      "50 URL scans/month",
      "SEO + WCAG Level A",
      "Core Web Vitals snapshot",
      "OG preview tool",
      "Community support",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    desc: "For developers shipping to production.",
    features: [
      "2,000 URL scans/month",
      "Full WCAG 2.2 (A+AA+AAA)",
      "Continuous CWV monitoring",
      "AI fix hints & code snippets",
      "CI/CD GitHub Action",
      "Slack & email alerts",
      "Structured data validator",
    ],
    cta: "Start 14-day free trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$89",
    period: "/mo",
    desc: "For teams that care about quality at scale.",
    features: [
      "Unlimited scans",
      "Up to 10 members",
      "Custom audit rules",
      "White-label PDF reports",
      "Priority support",
      "API access",
    ],
    cta: "Start 14-day free trial",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Seo agent x caught 14 WCAG AA violations in our checkout flow that Lighthouse completely missed. It paid for itself in the first week.",
    name: "Tomas Vega",
    role: "Lead Frontend Dev",
    company: "Shopbloc",
    avatar: "TV",
  },
  {
    quote:
      "The CI integration is seamless. Our PR checks now fail if accessibility score drops below 85. No more regressions sneaking into main.",
    name: "Amara Osei",
    role: "Staff Engineer",
    company: "Openframe",
    avatar: "AO",
  },
  {
    quote:
      "I fixed our structured data in 20 minutes after Seo agent x showed me the exact JSON-LD diff. We went from 0 rich snippets to full recipe cards.",
    name: "Linh Nguyen",
    role: "Frontend Architect",
    company: "Recipelab",
    avatar: "LN",
  },
];

const AI_ISSUES = [
  {
    type: "a11y",
    title: "Missing alt text on 3 images",
    severity: "fail",
    spec: "WCAG 1.1.1 (Level A)",
    before: `<img src="/hero.jpg" class="hero-img" />`,
    after: `<img\n  src="/hero.jpg"\n  alt="Team collaborating on a product roadmap"\n  class="hero-img"\n/>`,
    hint: "Screen readers announce images by their alt text. Without it, users relying on assistive technology receive no information about the image content.",
  },
  {
    type: "seo",
    title: "JSON-LD structured data invalid",
    severity: "fail",
    spec: "Google Rich Results spec",
    before: `<script type="application/ld+json">\n{\n  "@type": "Product",\n  "name": "Seo agent x Pro"\n}\n</script>`,
    after: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "name": "Seo agent x Pro",\n  "brand": { "@type": "Brand", "name": "Seo agent x" }\n}\n</script>`,
    hint: "The @context field is required for Google to parse your structured data. Without it your page is ineligible for rich snippets.",
  },
  {
    type: "a11y",
    title: "Color contrast too low (2.8:1)",
    severity: "warn",
    spec: "WCAG 1.4.3 (Level AA)",
    before: `/* contrast: 2.84:1 — fails AA (4.5:1 required) */\n.subtitle { color: #9a9a9a; }`,
    after: `/* contrast: 4.54:1 — passes AA */\n.subtitle { color: #767676; }`,
    hint: "Body text needs a minimum contrast ratio of 4.5:1 to meet WCAG AA. Darken grey from #9a9a9a to #767676 — visually subtle but compliant.",
  },
];

/* ══ HELPERS ══════════════════════════════════════════ */

function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

function StatusIcon({ status }: { status: string }) {
  if (status === "pass")
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.12)",
          border: "1px solid rgba(16,185,129,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M1.5 4.5L3.5 6.5L7.5 2.5"
            stroke="#10b981"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  if (status === "warn")
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(234,179,8,0.12)",
          border: "1px solid rgba(234,179,8,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M4.5 2v2.5M4.5 7v.2"
            stroke="#eab308"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  return (
    <span
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "rgba(244,63,94,0.12)",
        border: "1px solid rgba(244,63,94,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path
          d="M2 2l5 5M7 2L2 7"
          stroke="#f43f5e"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* ══ NAVBAR ════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      const el = document.documentElement;
      setProgress((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          background: "linear-gradient(90deg,#f59e0b,#8b5cf6)",
          zIndex: 999,
          width: `${progress}%`,
          transition: "width 0.1s linear",
        }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1L2 5.5V13h10V5.5L7 1z"
                  stroke="#09090f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13V8h4v5"
                  stroke="#09090f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bricolage font-bold text-white text-base tracking-tight">
              seo agent x
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-jakarta text-[#64647a] hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="btn-outline text-sm px-4 py-2">
              Sign in
            </a>
            <a href="#" className="btn-amber text-sm px-4 py-2">
              Audit your site free
            </a>
          </div>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden nav-glass border-t border-white/5 px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#9898aa] text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              <a
                href="#"
                className="btn-outline text-sm px-4 py-2.5 text-center"
              >
                Sign in
              </a>
              <a href="#" className="btn-amber text-sm px-4 py-2.5 text-center">
                Audit your site free
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

/* ══ HERO ══════════════════════════════════════════ */

function HeroSection() {
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

/* ══ LOGO BAR ═══════════════════════════════════════ */

function LogoBar() {
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

/* ══ AUDIT PREVIEW ══════════════════════════════════ */

function AuditPreview() {
  const [tab, setTab] = useState<"seo" | "a11y" | "cwv">("seo");
  const checks = tab === "seo" ? SEO_CHECKS : tab === "a11y" ? A11Y_CHECKS : [];
  const failSeo = SEO_CHECKS.filter((c) => c.status === "fail").length;
  const failA11y = A11Y_CHECKS.filter((c) => c.status === "fail").length;

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 text-xs font-jakarta mb-5 bg-amber-500/[0.04]">
            Audit Dashboard
          </div>
          <h2
            className="font-bricolage font-extrabold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,3.8vw,3rem)" }}
          >
            Everything broken,
            <br />
            <span className="grad-amber">ranked by impact.</span>
          </h2>
          <p className="text-[#64647a] font-jakarta text-base leading-relaxed mb-8">
            Unlike generic Lighthouse runs, Seo agent x audits your full DOM — not
            just the initial HTML response. Dynamic content, lazy-loaded images,
            and client-side routes are all caught.
          </p>
          <ul className="space-y-4">
            {[
              {
                c: "#10b981",
                l: "208 checks across SEO, WCAG 2.2 and performance",
              },
              {
                c: "#f59e0b",
                l: "Issues ranked by SEO / accessibility impact score",
              },
              {
                c: "#8b5cf6",
                l: "Plain-English fix hints + copy-paste code snippets",
              },
              { c: "#f43f5e", l: "Track score history across every deploy" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `${item.c}18`,
                    border: `1px solid ${item.c}40`,
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4L3.5 6L6.5 2"
                      stroke={item.c}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-[#9898aa] font-jakarta">
                  {item.l}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl">
          <div className="px-5 pt-5 pb-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bricolage font-bold text-white text-sm">
                  example.com
                </p>
                <p className="text-[10px] text-[#64647a] font-jakarta mt-0.5">
                  Last scan: just now · Chromium 124
                </p>
              </div>
              <span className="text-[10px] font-bricolage font-semibold px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Report ready
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { l: "SEO", s: 82, c: "#f59e0b", p: "82%" },
                { l: "A11y", s: 67, c: "#f43f5e", p: "67%" },
                { l: "Perf", s: 91, c: "#10b981", p: "91%" },
                { l: "Schema", s: 44, c: "#f43f5e", p: "44%" },
              ].map((sc, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-3 flex flex-col items-center gap-1.5"
                >
                  <div
                    className="score-ring"
                    style={
                      {
                        "--ring-color": sc.c,
                        "--ring-pct": sc.p,
                        color: sc.c,
                        width: 52,
                        height: 52,
                        fontSize: "0.95rem",
                      } as React.CSSProperties
                    }
                  >
                    {sc.s}
                  </div>
                  <span className="text-[9px] text-[#64647a] font-bricolage font-semibold text-center">
                    {sc.l}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-1 border-b border-white/[0.06]">
              {(["seo", "a11y", "cwv"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`tab-btn ${tab === t ? "active" : ""}`}
                >
                  {t === "seo"
                    ? "SEO"
                    : t === "a11y"
                      ? "Accessibility"
                      : "Core Web Vitals"}
                  {t !== "cwv" && (
                    <span
                      className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full ${(t === "seo" ? failSeo : failA11y) > 0 ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}
                    >
                      {t === "seo" ? failSeo : failA11y} issues
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div
            className="p-4 max-h-72 overflow-y-auto space-y-1.5"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#2a2a38 transparent",
            }}
          >
            {tab !== "cwv"
              ? checks.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-white/[0.025] transition-colors"
                  >
                    <StatusIcon status={c.status} />
                    <span className="text-xs font-jakarta text-[#9898aa] flex-1">
                      {c.label}
                    </span>
                    <span
                      className={`text-[9px] font-bricolage font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${c.status === "pass" ? "pill-pass" : c.status === "warn" ? "pill-warn" : "pill-err"}`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))
              : CWV.map((m, i) => (
                  <div key={i} className="py-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bricolage font-bold text-white">
                          {m.name}
                        </span>
                        <span className="text-[10px] text-[#64647a] font-jakarta">
                          {m.full}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono-ibm text-xs"
                          style={{ color: m.color }}
                        >
                          {m.value}
                        </span>
                        <span
                          className="text-[10px] font-bricolage font-bold"
                          style={{ color: m.color }}
                        >
                          {m.score}
                        </span>
                      </div>
                    </div>
                    <div className="metric-bar">
                      <div
                        className="metric-fill"
                        style={{ width: m.pct, background: m.color }}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ FEATURES ══════════════════════════════════════ */

function FeaturesSection() {
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

/* ══ AI FIX HINTS ═══════════════════════════════════ */

function AIFixSection() {
  const [active, setActive] = useState(0);
  const issue = AI_ISSUES[active];
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[500px] h-[400px] bg-violet-700 opacity-[0.05] top-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 text-violet-400 text-xs font-jakarta mb-5 bg-violet-500/[0.04]">
            AI Fix Hints
          </div>
          <h2
            className="font-bricolage font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            {"Don't just find bugs."}
            <br />
            <span className="grad-mixed">Know how to fix them.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {AI_ISSUES.map((iss, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left glass rounded-2xl p-4 border transition-all ${active === i ? "border-amber-500/30 bg-amber-500/[0.04]" : "border-white/[0.06] hover:border-white/10"}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 text-[9px] font-bricolage font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${iss.severity === "fail" ? "pill-err" : "pill-warn"}`}
                  >
                    {iss.severity}
                  </span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bricolage font-semibold">
                      {iss.title}
                    </p>
                    <p className="text-[#64647a] text-xs font-jakarta mt-0.5">
                      {iss.spec}
                    </p>
                  </div>
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${iss.type === "a11y" ? "bg-violet-500" : "bg-amber-500"}`}
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-3 glass rounded-2xl overflow-hidden border border-white/[0.07]">
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3 bg-white/[0.015]">
              <span className="font-bricolage text-xs text-white font-semibold">
                AI Fix Hint
              </span>
              <span className="ml-auto text-[9px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20 font-bricolage font-semibold">
                {issue.type.toUpperCase()}
              </span>
            </div>
            <div className="p-5 space-y-5">
              <div className="p-4 rounded-xl bg-violet-500/[0.04] border border-violet-500/15">
                <p className="text-xs font-jakarta text-[#9898aa] leading-relaxed">
                  <span className="text-violet-400 font-semibold">
                    Why this matters:{" "}
                  </span>
                  {issue.hint}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-bricolage font-bold text-red-400 mb-2 uppercase tracking-wider">
                    Before
                  </p>
                  <pre className="text-[11px] font-mono-ibm text-[#64647a] bg-[#0d0d14] border border-white/[0.06] rounded-xl p-3 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                    {issue.before}
                  </pre>
                </div>
                <div>
                  <p className="text-[10px] font-bricolage font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                    After
                  </p>
                  <pre className="text-[11px] font-mono-ibm text-emerald-300/70 bg-emerald-500/[0.04] border border-emerald-500/20 rounded-xl p-3 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                    {issue.after}
                  </pre>
                </div>
              </div>
              <button className="w-full btn-amber text-sm py-2.5 rounded-xl">
                Copy fix to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ HOW IT WORKS ═══════════════════════════════════ */

function HowItWorks() {
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

/* ══ STATS ══════════════════════════════════════════ */

function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl py-14 px-8 relative overflow-hidden">
        <div className="orb w-[400px] h-[200px] bg-amber-500 opacity-[0.05] top-0 left-[20%]" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="stat-n">
                {s.value}
                <span style={{ color: "#f59e0b" }}>{s.suffix}</span>
              </div>
              <p className="text-[#64647a] font-jakarta text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ CI/CD SECTION ═══════════════════════════════════ */

function CICDSection() {
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

/* ══ PRICING ════════════════════════════════════════ */

function PricingSection() {
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

/* ══ TESTIMONIALS ═══════════════════════════════════ */

function Testimonials() {
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
            <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-full border border-amber-500/25 bg-amber-500/10 flex items-center justify-center text-amber-400 font-bricolage font-bold text-xs flex-shrink-0">
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

/* ══ CTA ════════════════════════════════════════════ */

function CTASection() {
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

/* ══ FOOTER ═════════════════════════════════════════ */

function Footer() {
  const cols: Record<string, string[]> = {
    Product: [
      "SEO Audit",
      "Accessibility Checker",
      "Core Web Vitals",
      "Color Contrast",
      "Structured Data",
      "CI/CD Action",
    ],
    Resources: [
      "Docs",
      "API Reference",
      "Changelog",
      "Blog",
      "WCAG Guide",
      "SEO Checklist",
    ],
    Company: ["About", "Careers", "Press", "Security", "Privacy", "Terms"],
    Connect: ["Twitter / X", "GitHub", "Discord", "LinkedIn"],
  };
  return (
    <footer className="border-t border-white/[0.05] py-16 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1L2 5.5V13h10V5.5L7 1z"
                  stroke="#09090f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13V8h4v5"
                  stroke="#09090f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bricolage font-bold text-white text-base">
              seo agent x
            </span>
          </div>
          <p className="text-[#64647a] font-jakarta text-xs leading-relaxed mb-5">
            SEO &amp; accessibility audits
            <br />
            for frontend developers.
          </p>
          <p className="text-[#3a3a52] font-jakarta text-xs">
            © 2025 Seo agent x, Inc.
          </p>
        </div>
        {Object.entries(cols).map(([heading, links]) => (
          <div key={heading}>
            <p className="font-bricolage font-bold text-white text-sm mb-4">
              {heading}
            </p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[#64647a] hover:text-[#9898aa] font-jakarta text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="amber-rule opacity-10 mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#3a3a52] font-jakarta text-xs">
          Built for the 1% of developers who care about every user.
        </p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse" />
          <span className="text-emerald-400 font-jakarta text-xs">
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ══ PAGE ═══════════════════════════════════════════ */

export default function SeoAgentXLanding() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoBar />
        <AuditPreview />
        <FeaturesSection />
        <AIFixSection />
        <HowItWorks />
        <StatsSection />
        <CICDSection />
        <PricingSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
