import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

type HeroProps = {
  id: string;
  title: ReactNode;
  description: string;
  eyebrow?: string;
  action: { label: string; href: string };
  image: HeroImage;
};

/** Shared split hero for product pages. */
export function Hero({ id, title, description, eyebrow, action, image }: HeroProps) {
  return (
    <section className="split-hero" aria-labelledby={id}>
      <div className="hero-copy">
        {eyebrow && <p className="hero-eyebrow section-label">{eyebrow}</p>}
        <h1 id={id}>{title}</h1>
        <p className="hero-description">{description}</p>
        <Link className="button" href={action.href}>{action.label}</Link>
      </div>
      <figure className="hero-figure">
        <Image
          className="hero-image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 600px) 100vw, 52vw"
          preload
        />
        <figcaption>{image.caption}</figcaption>
      </figure>
    </section>
  );
}
