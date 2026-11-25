# Asset provenance

## Supplied logo

- `public/brand/luminari-mark.webp` is a losslessly compressed version of the supplied “Three plants, one purple centerpiece.png”. Its colours, proportions and transparency are preserved; decoded visible pixels were verified unchanged.
- Header and footer use the same silhouette. On dark surfaces, a CSS alpha mask colours it exactly warm ivory. The original full-colour version is used on light surfaces.
- `src/app/icon.png` is a 64×64 browser icon derived from the same supplied artwork, fitted with transparent padding to preserve its proportions. It replaces the duplicated full-size logo.

## Supplied homepage seed background

- `public/images/germinating-radish-seed-violet-reflection.png` is the supplied “Germinating Radish Seed in Violet Reflection.png”, renamed without re-encoding or altering the file contents.
- Decorative, full-bleed homepage artwork, with empty alt text. Desktop and phone crops are controlled independently in `src/app/globals.css`.
- The source PNG is used directly through Next.js Image for responsive delivery, with preloading enabled. All overlaid text and controls remain HTML.

## Supplied technology illustration

- `public/images/plasma-water-radish-germination-illustration.png` is the supplied “Germinating Radishes Under Violet Lab Glow.png”, renamed without changing the file contents.
- Used with the existing homepage technology explanation. Its native 1672×941 aspect ratio preserves the vessel and germination dish; it is lazy-loaded below the fold.
- This is a process illustration, not a photograph of LS equipment or evidence of trial outcomes. Descriptive alt text and the caption identify its illustrative role.

## Supplied Verdaqua lead image

- `public/images/radish-microgreens-violet-droplet.png` is the supplied “Dew-kissed radish microgreens in violet shadow.png”, renamed without changing the file contents.
- Used as the lead image on `/verdaqua`. Its crop preserves the foreground leaves and hanging droplet. The caption identifies it as illustrative, not a Verdaqua trial.

## Previous plasma background (retained)

- `public/images/plasma-water-hero.webp` is a losslessly compressed delivery copy of the clean artwork generated using the built-in image_gen tool. Decoded visible pixels were verified unchanged. It contains no text, logos or controls, and is an illustration rather than scientific evidence or an authentic LS apparatus photograph.
- Retained for provenance; it is no longer rendered by the site.
- The full prompt and method are saved in `design/plasma-hero-prompt.txt`.
- The supplied “Violet Plasma, From Lab to Field.png” was inspected as a composition reference only. It is not shipped as website content. HTML renders every logo, word, navigation link, action and brand destination.

## Homepage Verdaqua section photograph

- Local file: `public/images/grower-seedlings-trays.jpg`
- Photographer: Alfo Medeiros
- Source: https://www.pexels.com/photo/a-person-doing-horticulture-11573794/
- Download: https://images.pexels.com/photos/11573794/pexels-photo-11573794.jpeg?auto=compress&cs=tinysrgb&w=1600
- License: Pexels License, https://www.pexels.com/license/ (checked 25 November 2026). Free website and commercial use; do not imply endorsement.
- The photograph shows a grower’s hands tending leafy seedlings in black nursery trays. It is illustrative stock photography, not a Luminari Synergy grower, customer, trial or evidence of a Verdaqua result. The visible caption makes that distinction.
- The image is locally served, with a responsive CSS crop and Next.js image optimisation. The design reference has not been used as website content or sliced into an image.

## ReGreen landscape

- Local file: `public/images/quarry-landscape.jpg`
- Photographer: Volker Braun
- Source: https://www.pexels.com/photo/aerial-view-of-expansive-quarry-surrounded-by-forests-34042226/
- License: Pexels License, https://www.pexels.com/license/ (checked 25 November 2026).
- Aerial view of a quarry surrounded by woodland. Illustrative stock, not a ReGreen site, rehabilitation outcome, partnership or trial. The on-page caption makes that distinction.

## Typography

DM Sans is self-hosted through `@fontsource/dm-sans` under the SIL Open Font License 1.1. The package includes its license at `node_modules/@fontsource/dm-sans/LICENSE`. The site uses its 300, 400, 500 and 600 weights; no external font service is used.

## Reference

`design/homepage-reference.png` is the supplied approved design reference only.

The original ivory homepage reference is retained for history. The supplied violet plasma mockup is the current homepage composition reference. No authentic LS apparatus or rehabilitation photography was supplied; stock photographs can be replaced with approved LS images later.
