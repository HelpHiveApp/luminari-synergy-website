import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSection, PageIntro } from "@/components/editorial";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Luminari Synergy, an agriculture-first company developing Verdaqua and exploring environmental rehabilitation through ReGreen.",
};

export default function About() {
  return (
    <article className="editorial-page">
      <PageIntro label="About Luminari Synergy" title="Our work begins with growers.">
        <p>Luminari Synergy is an agriculture-first company. We work with growers to explore practical questions about the earliest stages of a crop.</p>
      </PageIntro>
      <EditorialSection title="Verdaqua, our agricultural focus">
        <p>Verdaqua is our agricultural brand and first offering. Its focus is seed soaking before sowing, and understanding how plasma-activated water may fit into the routines growers already use.</p>
        <p>Our trials with mustard, beetroot and radish explore germination and early growth. We want the work to be useful in the context of a grower’s own crop and setup.</p>
        <p><Link className="text-link" href="/verdaqua">Get to know Verdaqua</Link></p>
      </EditorialSection>
      <EditorialSection title="ReGreen, in development">
        <p>ReGreen is our environmental rehabilitation work in development. It is an emerging part of Luminari Synergy, while Verdaqua remains the focus of our agricultural work.</p>
      </EditorialSection>
      <div className="page-closing">
        <h2>Let’s talk about what you grow.</h2>
        <Link className="button" href="/contact">Get in touch</Link>
      </div>
    </article>
  );
}
