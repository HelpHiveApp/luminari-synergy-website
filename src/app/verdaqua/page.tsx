import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSection, PageIntro } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Verdaqua",
  description: "Explore Verdaqua, our agricultural offering studying plasma-activated water for seed soaking before sowing.",
};

export default function Verdaqua() {
  return (
    <article className="editorial-page">
      <PageIntro label="Verdaqua" title="A closer look at the start of a crop.">
        <p>Verdaqua is Luminari Synergy’s first agricultural offering. We’re studying how soaking seeds before sowing could fit into a grower’s routine, with germination and early growth as our focus.</p>
      </PageIntro>
      <EditorialSection title="Before the seed is sown">
        <p>Seed soaking means placing seeds in water for an agreed period before sowing. The seeds are then drained and sown into the grower’s usual growing medium.</p>
        <p>It is a preparation step, before the crop enters its normal watering and growing routine. The crop, seed lot, growing setup and soaking conditions all matter when planning a trial.</p>
      </EditorialSection>
      <EditorialSection title="The water behind Verdaqua">
        <p>Verdaqua uses plasma-activated water: water treated using plasma, an energised gas. This treatment changes the chemistry of the water. We’re exploring what those changes mean when the water is used to soak seeds.</p>
        <p>Our work is about understanding the response of each crop. We are not making a general promise of faster germination, stronger growth or higher yield.</p>
      </EditorialSection>
      <EditorialSection title="Is it relevant to your crop?">
        <p>Mustard, beetroot and radish are the crops currently being studied. If you grow one of these, or want to explore another crop, the starting point is a conversation about your seeds and setup.</p>
        <p><Link className="text-link" href="/research#crop-trials">Explore the crop trials</Link></p>
      </EditorialSection>
      <div className="page-closing">
        <h2>Start with your growing routine.</h2>
        <Link className="button" href="/contact">Discuss Verdaqua for your crop</Link>
      </div>
    </article>
  );
}
