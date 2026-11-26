import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Luminari Synergy | Home" },
  description: "Homepage",
};

export default function Home() {
  return (
    <>
      <section className="plasma-hero" aria-labelledby="home-title">
        <Image
          className="plasma-art"
          src="/images/germinating-radish-seed-violet-reflection.png"
          alt=""
          fill
          sizes="(max-width: 900px) max(100vw, 178svh), 100vw"
          preload
        />
        <div className="container plasma-copy">
          <h1 id="home-title">For this harvest,<br /> and the next.</h1>
          <p>At Luminari Synergy, we develop technology for sustainable agriculture and environmental rehabilitation.</p>
          <Link className="button hero-button" href="#technology">How our technology works</Link>
        </div>
        <div className="container hero-brand-links" id="brands">
          <Link className="brand-link" href="/verdaqua">
            <span>Verdaqua</span>
            <span>Plasma-activated water · Commercially available</span>
          </Link>
          <Link className="brand-link" href="#regreen">
            <span>ReGreen</span>
            <span>Land rehabilitation · In development</span>
          </Link>
        </div>
      </section>
      <section className="feature-section agriculture-section" id="verdaqua" aria-labelledby="verdaqua-heading">
        <div className="container feature-grid">
          <div className="feature-copy">
            <p className="section-label">Verdaqua · Commercially available</p>
            <h2 id="verdaqua-heading">A healthy start for seeds with Verdaqua.</h2>
            <p>Our agricultural brand focuses on the start of a crop. Verdaqua is our proprietary seed-soaking formulation, made with plasma-activated water. Growers use it before sowing to support seed health and early growth.</p>
            {/* <p>Soak the seeds at the preparation stage, then drain and sow them into your usual growing medium. The crop and growing setup guide the conversation.</p> */}
            <div className="section-actions">
              <Link className="button" href="/verdaqua">Explore Verdaqua</Link>
              <Link className="text-link" href="/contact?interest=verdaqua">Discuss a grower trial</Link>
            </div>
          </div>
          <figure className="feature-photo">
            <Image
              src="/images/grower-seedlings-trays.jpg"
              alt="A grower’s hands tending leafy seedlings in black nursery trays."
              width={1600}
              height={1065}
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <figcaption>Illustrative nursery photography · Not a Verdaqua trial</figcaption>
          </figure>
        </div>
      </section>
      <section className="technology-section" id="technology" aria-labelledby="technology-title" tabIndex={-1}>
        <div className="container">
          <p className="section-label">Our technology</p>
          <div className="technology-intro">
            <h2 id="technology-title">Verdaqua. From plasma to seed preparation.</h2>
            <div className="technology-overview">
              {/* <p>A water treatment process, followed by a practical step before sowing.</p> */}
              <figure className="technology-photo">
                <Image
                  src="/images/plasma-water-radish-germination-illustration.png"
                  alt="Illustration of a water vessel under a violet plasma discharge and a dish containing germinating radish seeds."
                  width={1672}
                  height={941}
                  sizes="(max-width: 900px) 100vw, 38vw"
                  loading="lazy"
                />
                <figcaption>Illustration of plasma treatment and seed germination.</figcaption>
              </figure>
            </div>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-step" aria-hidden="true">01</span>
              <h3>Treatment</h3>
              <p>Plasma is an energised gas, which we use to treat water. The treatment changes the water’s chemistry, producing plasma-activated water.</p>
            </li>
            <li>
              <span className="process-step" aria-hidden="true">02</span>
              <h3>Enhancement</h3>
              <p>We add our crop specific chemistry to ensure optimal plant health and early stage growth.</p>
            </li>
            <li>
              <span className="process-step" aria-hidden="true">03</span>
              <h3>Verdaqua for Seed soaking</h3>
              <p>Seeds are soaked before sowing, drained and then sown into the grower’s usual growing medium.</p>
            </li>
          </ol>
          <Link className="text-link" href="/research">Explore our crop research</Link>
        </div>
      </section>
      <section className="feature-section regreen-section" id="regreen" aria-labelledby="regreen-heading" tabIndex={-1}>
        <div className="container feature-grid">
          <figure className="feature-photo">
            <Image
              src="/images/quarry-landscape.jpg"
              alt="An aerial view of exposed quarry terraces bordered by woodland and vegetation."
              width={1800}
              height={1350}
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <figcaption>Illustrative landscape · Not a ReGreen project</figcaption>
          </figure>
          <div className="feature-copy">
            <div className="section-heading-line">
              <p className="section-label">ReGreen</p>
              <span className="development-note">In development</span>
            </div>
            <h2 id="regreen-heading">Revegetation, starting with research.</h2>
            <p>ReGreen is our environmental rehabilitation brand. We’re exploring how to help vegetation return to disturbed land, including former mining sites.</p>
            <p>Our solutions are in development. We welcome conversations about the land, the challenges and the research questions involved.</p>
            <div className="section-actions">
              <Link className="button" href="/contact?interest=regreen">Discuss a research partnership</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
