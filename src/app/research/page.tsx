import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSection, PageIntro } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Research",
  description: "Our work in progress explores how seed soaking affects germination and early growth in mustard, beetroot and radish.",
};

export default function Research() {
  return (
    <article className="editorial-page">
      <PageIntro label="Research" title="What changes when seeds are soaked?">
        <p>How does seed soaking affect germination and early growth? That is the question behind our agricultural trials with Verdaqua.</p>
      </PageIntro>
      <EditorialSection title="Three crops, a shared question" id="crop-trials">
        <p>We’re studying mustard, beetroot and radish to explore how seed soaking with plasma-activated water fits into existing growing routines.</p>
        <ul className="crop-list" aria-label="Crops being studied">
          <li>Mustard</li>
          <li>Beetroot</li>
          <li>Radish</li>
        </ul>
        <p>Each crop needs to be understood in its own growing context. A response in one crop or setup would not establish the same response in another.</p>
      </EditorialSection>
      <EditorialSection title="Work in progress">
        <p>The work is exploratory. Verified trial results are not yet available on this site, so we are not publishing performance figures or claiming improvements.</p>
        <p>As findings become available, they should be read alongside the seed lot, soaking conditions, growing setup and comparison used in the trial. Those details are essential to understanding what a result can tell a grower.</p>
      </EditorialSection>
      <div className="page-closing">
        <h2>Bring your crop into the conversation.</h2>
        <p>Tell us what you grow and what you would like to understand.</p>
        <Link className="button" href="/contact">Discuss your crop</Link>
      </div>
    </article>
  );
}
