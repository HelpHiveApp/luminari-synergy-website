/** Only a verified, public inbox should be configured. No fallback address. */
export function getContactEmail(): string | null {
  const email = process.env.CONTACT_EMAIL?.trim();
  return email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? email : null;
}
