/** The canonical public origin shared by crawler metadata. */
export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL || "https://luminarisynergy.com";

  const url = new URL(configuredUrl);

  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("SITE_URL must be an HTTP or HTTPS website URL without credentials.");
  }

  return new URL(url.origin);
}
