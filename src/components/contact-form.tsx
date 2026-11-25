"use client";

import { useState, type FormEvent } from "react";

type Interest = "verdaqua" | "regreen" | "general";

type ContactFormProps = {
  email: string | null;
  initialInterest?: Interest;
};

export function ContactForm({ email, initialInterest = "verdaqua" }: ContactFormProps) {
  const [draftPrepared, setDraftPrepared] = useState(false);
  const [interest, setInterest] = useState<Interest>(initialInterest);
  const isGrower = interest === "verdaqua";
  const isReGreen = interest === "regreen";

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Enquiry: ${isGrower ? "Verdaqua grower trial" : isReGreen ? "ReGreen research partnership" : "General enquiry"}`,
      `${isGrower ? "Crop" : "Site or location"}: ${data.get("crop")}`,
      `${isGrower ? "Growing setup" : "Organisation or research setup"}: ${data.get("setup")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    const subject = isGrower
      ? `Verdaqua enquiry: ${data.get("crop")}`
      : isReGreen
        ? "ReGreen research partnership"
        : "Luminari Synergy enquiry";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftPrepared(true);
  }

  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <div className="field">
        <label htmlFor="interest">I’d like to discuss</label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={event => {
            setInterest(event.target.value as Interest);
            setDraftPrepared(false);
          }}
        >
          <option value="verdaqua">Verdaqua — a grower trial</option>
          <option value="regreen">ReGreen — a research partnership</option>
          <option value="general">A general enquiry</option>
        </select>
      </div>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} />
        </div>
      </div>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="crop">{isGrower ? "What do you grow?" : "Site or location (optional)"}</label>
          <input
            id="crop"
            name="crop"
            placeholder={isGrower ? "e.g. radish microgreens" : "Where is the work based?"}
            required={isGrower}
            maxLength={150}
          />
        </div>
        <div className="field">
          <label htmlFor="setup">{isGrower ? "Your growing setup" : "Organisation or research setup (optional)"}</label>
          <input
            id="setup"
            name="setup"
            placeholder={isGrower ? "e.g. trays in a greenhouse" : "Tell us about your team or project"}
            required={isGrower}
            maxLength={200}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What would you like to explore?</label>
        <textarea id="message" name="message" rows={5} required maxLength={2000} />
      </div>
      {email ? (
        <>
          <p className="form-note" id="delivery-note">This opens a draft in your email app. Review it and send it there. You can also email <a className="text-link" href={`mailto:${email}`}>{email}</a>.</p>
          <button className="button" type="submit" aria-describedby="delivery-note">Prepare enquiry email</button>
          <p role="status">{draftPrepared ? "Your email app was requested. Your enquiry has not been sent by this website. If no draft opened, use the email link above." : ""}</p>
        </>
      ) : (
        <div className="contact-notice">
          <p>Enquiries will open here soon.</p>
          <p>Our contact email is being confirmed. This form is a preview and cannot send messages yet.</p>
          <button className="button" type="submit" disabled>Enquiries opening soon</button>
        </div>
      )}
    </form>
  );
}
