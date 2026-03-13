"use client";

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "SEO Audit", href: "#" },
        { name: "Accessibility Checker", href: "#" },
        { name: "Core Web Vitals", href: "#" },
        { name: "Color Contrast", href: "#" },
        { name: "Structured Data", href: "#" },
        { name: "CI/CD Action", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Docs", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Blog", href: "#" },
        { name: "WCAG Guide", href: "#" },
        { name: "SEO Checklist", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/Anilbal" },
        { name: "Discord", href: "https://discord.gg/seoagentx" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/anil-bal/" },
      ],
    },
  ];
  return (
    <footer className="border-t border-white/5 py-16 max-w-7xl mx-auto px-6">
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
            SEO &amp; accessibility check with CLI
            <br />
            for frontend developers.
          </p>
          <p className="text-[#3a3a52] font-jakarta text-xs">
            © 2025 Seo agent x, Inc.
          </p>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <p className="font-bricolage font-bold text-white text-sm mb-4">
              {section.title}
            </p>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#64647a] hover:text-[#9898aa] font-jakarta text-sm transition-colors"
                  >
                    {link.name}
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
