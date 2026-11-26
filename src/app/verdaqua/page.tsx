import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Verdaqua | Seed soaking before sowing",
  description: "Verdaqua is Luminari Synergy’s agricultural brand. Explore plasma-activated water for seed soaking, our crop trials, and discuss Verdaqua for your crop.",
};

export default function Verdaqua() {
  return (
    <article className="product-page">
      <Hero
        id="verdaqua-title"
        eyebrow="Verdaqua · Commercially available"
        title={<>Better starts<br /> for growers.</>}
        description="Verdaqua is Luminari Synergy’s unique seed health brand. We work with growers to study how soaking seeds before sowing affects germination and early growth. We provide optimal nutritional solutions to improve seed health and early growth."
        action={{ label: "Discuss Verdaqua for your crop", href: "/contact" }}
        image={{
          src: "/images/radish-microgreens-violet-droplet.png",
          alt: "Radish microgreens with dew on the foreground leaves and a droplet hanging beneath a leaf in violet light.",
          width: 1672,
          height: 941,
          caption: "Illustrative radish microgreens · Not a Verdaqua trial",
        }}
      />
      <section className="work-section" aria-labelledby="seed-soaking-title">
        <p className="section-label">Before sowing</p>
        <div>
          <h2 id="seed-soaking-title">Seed soaking with Verdaqua</h2>
          <div className="product-prose">
            <p>In trials with mustard, beetroot and radish, we explored how plasma-activated water fits into a grower’s existing routine.</p>
            <p>Verdaqua is water treated using plasma, an energised gas, mixed with crop specific chemistry to improve seed health & early-stage growth. Verdaqua is used in the seed preparation stage: seeds are soaked for an agreed period, then drained and sown into the grower’s usual growing medium.</p>
            <Link className="text-link" href="/research#crop-trials">Explore the crop trials</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
