# Asset provenance

## Supplied logo

- `public/brand/luminari-mark.webp` is a losslessly compressed version of the supplied “Three plants, one purple centerpiece.png”. Its colours, proportions and transparency are preserved; decoded visible pixels were verified unchanged.
- Header and footer use the same silhouette. On dark surfaces, a CSS alpha mask colours it exactly warm ivory. The original full-colour version is used on light surfaces.
- `src/app/icon.png` is a 64×64 browser icon derived from the same supplied artwork, fitted with transparent padding to preserve its proportions. It replaces the duplicated full-size logo.

## Homepage plasma background

- `public/images/plasma-water-hero.webp` is a losslessly compressed delivery copy of the clean artwork generated using the built-in image_gen tool. Decoded visible pixels were verified unchanged. It contains no text, logos or controls, and is an illustration rather than scientific evidence or an authentic LS apparatus photograph.
- The full prompt and method are saved in `design/plasma-hero-prompt.txt`.
- The supplied “Violet Plasma, From Lab to Field.png” was inspected as a composition reference only. It is not shipped as website content. HTML renders every logo, word, navigation link, action and brand destination.

## Verdaqua photograph

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
