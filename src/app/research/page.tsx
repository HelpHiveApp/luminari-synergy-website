import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSection, PageIntro } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Research",
  description: "Our work in progress explores how seed soaking affects germination and early growth in mustard, beetroot and radish.",
};

export default function Research() {
  return (
    <article className="editorial-page research-page">
      <PageIntro label="Research" title="What changes when seeds are soaked?">
        <p>How does seed soaking positively affect germination and early growth? That is the question behind our agricultural trials with Verdaqua.</p>
      </PageIntro>
      <EditorialSection title="Three crops, a shared question" id="crop-trials">
        <p>We started by studying mustard, beetroot and radish to explore how seed soaking with plasma-activated water fits into existing growing routines.</p>
        <ul className="crop-list" aria-label="Crops being studied">
          <li>Mustard</li>
          <li>Beetroot</li>
          <li>Radish</li>
        </ul>
        <p>Each crop needed to be understood in its own growing context. A response in one crop or setup would not establish the same response in another.</p>
      </EditorialSection>
      <EditorialSection title="Validation">
        <p>Positive verified trial results are available with our customers.</p>
        <p>Seed lot, soaking conditions, growing setup are some of the key parameters that affect results. These details, combined with our expertise at Luminari Synergy, are essential to creating the optimal Verdaqua solution for a grower.</p>
      </EditorialSection>
      <div className="page-closing">
        <h2>Bring your crop into the conversation.</h2>
        <p>Tell us what you grow and let us help prepare you for this harvest, and the next.</p>
        <Link className="button" href="/contact">Discuss your crop</Link>
      </div>
    </article>
  );
}
