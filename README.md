# Luminari Synergy

A local first version built with Next.js App Router, TypeScript, npm and one shared stylesheet. The five pages are `/`, `/verdaqua`, `/research`, `/about` and `/contact`.

## Local preview

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For a production preview use `npm run build`, then `npm start`.

## Editing

- Palette and shared responsive styles: `src/app/globals.css`. Semantic colour variables are defined in `:root`.
- Homepage copy and composition: `src/app/page.tsx`.
- Navigation: `src/components/site-header.tsx`; shared footer and title template: `src/app/layout.tsx`.
- Other page copy: `src/app/{verdaqua,research,about,contact}/page.tsx`.
- Photograph attribution and license: `ASSETS.md`.

## Contact configuration — required before launch

No verified company inbox or working contact integration was supplied. Copy `.env.example` to `.env.local` and set `CONTACT_EMAIL` to a verified public company inbox. Restart the server after changing environment variables.

When no valid recipient is configured, the page explains that enquiries are not yet open and its submit button is disabled. When configured, the form validates the grower's details and opens a prefilled `mailto:` draft. The grower must send it in their email app. The website does not collect, store or deliver submissions and never displays a delivery-success message. A direct email link is also provided. Confirm the address and test the email-app handoff before launch. If browser-based delivery is wanted, connect and verify a real delivery service before changing this flow.

## Content and assets before launch

- Supply the verified company inbox described above.
- Licensed illustrative photography is already included. An owned photograph of a grower inspecting microgreens would make the hero closer to the approved reference; supply the original image and usage permission if replacing the stock asset. Keep illustrative photography separate from actual trial evidence.
- No trial data was supplied, so Research describes work in progress. Supply verified results and trial conditions before adding any outcome claims; they are not required to preview this version.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

With a local server running, `npm run verify:browser` uses installed Google Chrome through Playwright to check all five routes at 1536, 768, 390 and 320 pixels. It verifies navigation, CTA destinations, page titles, headings, loaded photography, horizontal overflow, touch target height, skip-link focus, unconfigured contact state and 404 recovery. Desktop and mobile screenshots and a report are written to the ignored `artifacts/` directory. Set `PREVIEW_URL` to check another local port. The checker expects the unconfigured preview contact state by default.

No hosting account, deployment or external contact service is configured. Keep this version local for review.
