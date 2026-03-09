import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Seo agent x — SEO & Accessibility Audits for Frontend Developers",
  description:
    "Audit, fix, and monitor your website's SEO and accessibility. WCAG compliance, Core Web Vitals, meta tags, color contrast, ARIA checks — all in one platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${ibmMono.variable}`}
    >
      <body className="bg-[#09090f] text-[#e8e8f0] antialiased font-jakarta overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
