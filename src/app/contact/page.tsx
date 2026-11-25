import type { Metadata } from "next";
import { PageIntro } from "@/components/editorial";
import { ContactForm } from "@/components/contact-form";
import { getContactEmail } from "@/lib/contact";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Luminari Synergy about a Verdaqua grower trial or a ReGreen research partnership.",
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const initialInterest = interest === "regreen" ? "regreen" : interest === "general" ? "general" : "verdaqua";
  return (
    <article className="editorial-page contact-page">
      <PageIntro label="Contact" title="Let’s explore what comes next.">
        <p>For Verdaqua, tell us about your crop and growing setup. For ReGreen, share the land or research question you’re exploring. That’s where a useful conversation starts.</p>
      </PageIntro>
      <ContactForm key={initialInterest} email={getContactEmail()} initialInterest={initialInterest} />
    </article>
  );
}
