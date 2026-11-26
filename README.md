# Luminari Synergy

The Luminari Synergy website, built with Next.js App Router, TypeScript, npm and one shared stylesheet. The five routes are `/`, `/verdaqua`, `/research`, `/about` (Company) and `/contact`.

## Local preview

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production preview use `npm run build`, then `npm start`.

Stop the running server with Ctrl+C before reinstalling dependencies. On Windows, a running Next.js server can lock its native compiler file. Always use the npm scripts so the project's local Next.js version is used.

## Editing

- Palette and shared responsive styles: `src/app/globals.css`. Semantic colour variables are defined in `:root`.
- Homepage copy and composition: `src/app/page.tsx`.
- Home introduces the parent plasma technology company through a continuous illustrated scene, then Verdaqua, the technology process and ReGreen. All headline, navigation, actions and brand links are HTML. The supplied mockup is not embedded in the site.
- Shared typography is self-hosted DM Sans, including its light display weight. Purple/navy/green/ivory theme tokens, layout, states and reduced-motion rules live in `src/app/globals.css`.
- Product hero: `src/components/hero.tsx`. Navigation: `src/components/site-header.tsx`. Footer: `src/components/site-footer.tsx`. Shared full-colour logo: `src/components/brand.tsx`. Root metadata: `src/app/layout.tsx`.
- Other page copy: `src/app/{verdaqua,research,about,contact}/page.tsx`.
- Photograph attribution and license: `ASSETS.md`.

## Contact configuration — required before launch

No verified company inbox or working contact integration was supplied. Copy `.env.example` to `.env.local` and set `CONTACT_EMAIL` to a verified public company inbox. Restart the server after changing environment variables.

When no valid recipient is configured, the page explains that enquiries are not yet open and its submit button is disabled. When configured, the form validates the grower's details and opens a prefilled `mailto:` draft. The grower must send it in their email app. The website does not collect, store or deliver submissions and never displays a delivery-success message. A direct email link is also provided. Confirm the address and test the email-app handoff before launch. If browser-based delivery is wanted, connect and verify a real delivery service before changing this flow.

The enquiry focus supports Verdaqua grower trials, ReGreen research partnerships and general enquiries. Links with `?interest=verdaqua` or `?interest=regreen` select the appropriate existing Contact flow. Crop and growing setup are required for Verdaqua; the partnership flow offers optional site and organisation fields instead.

## Content and assets before launch

- Supply the verified company inbox described above.
- Home uses the supplied germinating-seed background and a supplied process illustration beside the technology explanation. Verdaqua uses the supplied microgreens lead image. The PNGs are unchanged apart from descriptive filenames; Next.js handles responsive delivery. The process illustration is not presented as actual LS equipment or trial evidence. Asset provenance and previous artwork are documented in `ASSETS.md`.
- No trial data was supplied, so Research describes work in progress. Supply verified results and trial conditions before adding any outcome claims; they are not required to preview this version.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

With a local server running, `npm run verify:browser` uses installed Google Chrome through Playwright to check all five routes at 1536×960, 1280×640, 768×1024, 390×844 and 320×640. It verifies the continuous hero, short-screen fit, brand and enquiry journeys, mobile menu (including keyboard and Escape), logo proportions, images, titles, overflow, focus, reduced motion and 404 recovery. Screenshots and a report are written to the ignored `artifacts/` directory. Set `PREVIEW_URL` to check another local port. The checker expects the unconfigured preview contact state by default.

These changes are for local review. Production hosting is managed separately; no publication is part of this update.
