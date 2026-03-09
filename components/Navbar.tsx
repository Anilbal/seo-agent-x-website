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
