import type { ReactNode } from "react";

export function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="page-intro">
      <p className="section-label">{label}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </div>
  );
}

export function EditorialSection({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section className="editorial-section" id={id}>
      <h2>{title}</h2>
      <div className="prose">{children}</div>
    </section>
  );
}
