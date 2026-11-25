import Link from "next/link";
import { Brand } from "@/components/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand reversed />
          <p>Plasma technology for agriculture<br />and environmental rehabilitation.</p>
        </div>
        <nav aria-label="Brands">
          <p>Our brands</p>
          <Link href="/verdaqua">Verdaqua</Link>
          <Link href="/#regreen">ReGreen</Link>
        </nav>
        <nav aria-label="Company">
          <p>Luminari Synergy</p>
          <Link href="/#technology">Our technology</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">Company</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Luminari Synergy</p>
        <p>From lab to field.</p>
      </div>
    </footer>
  );
}
