/* ══ DATA ══════════════════════════════════════════ */

export const NAV_LINKS = [
  { label: "Home", href: "" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export const TOOL_LOGOS = [
  "HTML",
  "REACT",
  "Javascript",
  "HTML",
  "REACT",
  "Javascript",
  "HTML",
  "REACT",
  "Javascript",
  "HTML",
  "REACT",
  "Javascript",
  "REACT",
];

export const SEO_CHECKS = [
  { label: "Title tag length & uniqueness", status: "pass" },
  { label: "Meta description present & optimised", status: "pass" },
  { label: "Open Graph image (og:image)", status: "warn" },
  { label: "Canonical URL set correctly", status: "pass" },
  { label: "Structured data (JSON-LD)", status: "fail" },
  { label: "robots.txt & sitemap.xml", status: "pass" },
  { label: "Hreflang for multi-lang pages", status: "warn" },
  { label: "Page indexability", status: "pass" },
];

export const A11Y_CHECKS = [
  { label: "All images have alt text", status: "fail" },
  { label: "Color contrast ratio >= 4.5:1", status: "warn" },
  { label: "Interactive elements are keyboard-reachable", status: "pass" },
  { label: "ARIA roles used correctly", status: "pass" },
  { label: "Skip navigation link present", status: "fail" },
  { label: "Form inputs have associated labels", status: "warn" },
  { label: "Focus visible indicator", status: "pass" },
  { label: "Document language attribute set", status: "pass" },
];

export const CWV = [
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

export const FEATURES = [
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
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Install the package",
    desc: "Add Seo Agent X to your project in seconds using npx or your preferred package manager.",
  },
  {
    step: "02",
    title: "Run the CLI",
    desc: "Run the audit directly from your project root. Seo Agent X launches a real Chromium instance to crawl your site just like a browser.",
    code: "npx seo-agent-x",
  },
  {
    step: "03",
    title: "View problems in your terminal",
    desc: "See a clear list of SEO issues directly in your CLI. Problems are prioritised so you know exactly what to fix first.",
  },
  {
    step: "04",
    title: "Fix with AI hints",
    desc: "Every issue ships with a plain-English explanation, a code snippet fix, and a link to the relevant spec.",
  },
];

export const STATS = [
  { value: "3.1", suffix: "M", label: "Pages audited this month" },
  { value: "98", suffix: "%", label: "WCAG issue detection accuracy" },
  { value: "8", suffix: "s", label: "Avg. full audit time" },
  { value: "47", suffix: "K+", label: "Frontend devs using Seo agent x" },
];

export const PRICING = [
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

export const TESTIMONIALS = [
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

export const AI_ISSUES = [
  {
    type: "a11y" as const,
    title: "Missing alt text on 3 images",
    severity: "fail",
    spec: "WCAG 1.1.1 (Level A)",
    before: `<img src="/hero.jpg" class="hero-img" />`,
    after: `<img\n  src="/hero.jpg"\n  alt="Team collaborating on a product roadmap"\n  class="hero-img"\n/>`,
    hint: "Screen readers announce images by their alt text. Without it, users relying on assistive technology receive no information about the image content.",
  },
  {
    type: "seo" as const,
    title: "JSON-LD structured data invalid",
    severity: "fail",
    spec: "Google Rich Results spec",
    before: `<script type="application/ld+json">\n{\n  "@type": "Product",\n  "name": "Seo agent x Pro"\n}\n</script>`,
    after: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "name": "Seo agent x Pro",\n  "brand": { "@type": "Brand", "name": "Seo agent x" }\n}\n</script>`,
    hint: "The @context field is required for Google to parse your structured data. Without it your page is ineligible for rich snippets.",
  },
  {
    type: "a11y" as const,
    title: "Color contrast too low (2.8:1)",
    severity: "warn",
    spec: "WCAG 1.4.3 (Level AA)",
    before: `/* contrast: 2.84:1 — fails AA (4.5:1 required) */\n.subtitle { color: #9a9a9a; }`,
    after: `/* contrast: 4.54:1 — passes AA */\n.subtitle { color: #767676; }`,
    hint: "Body text needs a minimum contrast ratio of 4.5:1 to meet WCAG AA. Darken grey from #9a9a9a to #767676 — visually subtle but compliant.",
  },
];
