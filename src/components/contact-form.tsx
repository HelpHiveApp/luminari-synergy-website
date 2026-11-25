"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ email }: { email: string | null }) {
  const [draftPrepared, setDraftPrepared] = useState(false);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Crop: ${data.get("crop")}`,
      `Growing setup: ${data.get("setup")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Verdaqua enquiry: ${data.get("crop")}`)}&body=${encodeURIComponent(body)}`;
    setDraftPrepared(true);
  }

  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <div className="form-pair">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div>
        <div className="field"><label htmlFor="email">Your email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={200} /></div>
      </div>
      <div className="form-pair">
        <div className="field"><label htmlFor="crop">What do you grow?</label><input id="crop" name="crop" placeholder="e.g. radish microgreens" required maxLength={150} /></div>
        <div className="field"><label htmlFor="setup">Your growing setup</label><input id="setup" name="setup" placeholder="e.g. trays in a greenhouse" required maxLength={200} /></div>
      </div>
      <div className="field"><label htmlFor="message">What would you like to explore?</label><textarea id="message" name="message" rows={5} required maxLength={2000} /></div>
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
