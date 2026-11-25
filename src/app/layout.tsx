import type { Metadata } from "next";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Luminari Synergy | Better starts for growers", template: "%s | Luminari Synergy" },
  description: "We work with growers to study how seed soaking affects germination and early growth. Explore Verdaqua and our agricultural research.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="site-shell">
          <SiteHeader />
          <main id="main" tabIndex={-1}>{children}</main>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Luminari Synergy</p>
            <a href="/contact">Get in touch</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
