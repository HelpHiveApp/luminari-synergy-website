import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 id="home-title">Better starts<br className="desktop-break" /> for growers.</h1>
          <p>We work with growers to study how seed soaking affects germination and early growth.</p>
          <Link className="button" href="/verdaqua">Explore Verdaqua</Link>
        </div>
        <figure className="hero-figure">
          <Image
            className="hero-image"
            src="/images/grower-seedlings-trays.jpg"
            alt="A grower’s hands tending young leafy seedlings in black nursery trays."
            width={1600}
            height={1065}
            sizes="(max-width: 760px) 100vw, 56vw"
            preload
          />
          <figcaption>Illustrative nursery photography · Not a Verdaqua trial</figcaption>
        </figure>
      </section>
      <section className="work-section" aria-labelledby="work-title">
        <p className="section-label">Our work</p>
        <div>
          <h2 id="work-title">Seed soaking with Verdaqua</h2>
          <p>In trials with mustard, beetroot and radish, we’re exploring how <span className="keep-together">plasma-activated</span> water fits into a grower’s existing routine.</p>
        </div>
      </section>
    </>
  );
}
