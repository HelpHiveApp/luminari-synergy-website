import type { Metadata } from "next";
import { PageIntro } from "@/components/editorial";
import { ContactForm } from "@/components/contact-form";
import { getContactEmail } from "@/lib/contact";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss Verdaqua for your crop. Tell Luminari Synergy about your crop, growing setup and what you would like to explore.",
};

export default function Contact() {
  return (
    <article className="editorial-page contact-page">
      <PageIntro label="Contact" title="Tell us what you grow.">
        <p>Interested in Verdaqua? Tell us about your crop, your growing setup and what you would like to explore. That’s where a useful conversation starts.</p>
      </PageIntro>
      <ContactForm email={getContactEmail()} />
    </article>
  );
}
