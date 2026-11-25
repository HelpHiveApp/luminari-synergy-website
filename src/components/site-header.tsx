"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/verdaqua", label: "Verdaqua" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Luminari Synergy home">Luminari Synergy</Link>
      <nav aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
