"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
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
            <a
              href="https://github.com/Anilbal/seo-agent-x-website"
              className="btn-outline text-sm px-4 py-2 flex items-center gap-2"
              target="_blank"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
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
                href="https://github.com/Anilbal/seo-agent-x-website"
                className="btn-outline text-sm px-4 py-2.5 text-center flex items-center justify-center gap-2"
                target="_blank"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
