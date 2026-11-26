import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSection, PageIntro } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Company",
  description: "Luminari Synergy is a plasma technology company based in India. Verdaqua is our agricultural brand; ReGreen is our environmental rehabilitation brand, in development.",
};

export default function About() {
  return (
    <article className="editorial-page">
      <PageIntro label="Company" title="Plasma technology. Practical applications.">
        <p>Luminari Synergy is a high-tech agriculture company that uses plasma technology. We develop solutions for more sustainable agriculture and environmental rehabilitation.</p>
      </PageIntro>
      <EditorialSection title="Verdaqua, our agricultural focus">
        <p>Verdaqua is our seed health brand, with commercially available formulas for seed soaking before sowing. We work with growers to understand how it fits into the routines they already use.</p>
        <p><Link className="text-link" href="/verdaqua">Get to know Verdaqua</Link></p>
      </EditorialSection>
      <EditorialSection title="ReGreen, in development">
        <p>ReGreen is our environmental rehabilitation brand. We’re exploring how to help vegetation return to disturbed land, including former mining sites. Its solutions are in development.</p>
        <p><Link className="text-link" href="/contact?interest=regreen">Discuss a research partnership</Link></p>
      </EditorialSection>
      <div className="page-closing">
        <h2>Let’s explore what comes next.</h2>
        <Link className="button" href="/contact">Get in touch</Link>
      </div>
    </article>
  );
}
