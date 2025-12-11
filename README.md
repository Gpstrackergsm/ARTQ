# leafanoo-one-product

A conversion-focused, single-product Shopify theme for Leafanoo. The home page is a landing page tailored for the psychology bestseller “The Highly Sensitive Person.”

## Features
- Hero-first layout with sticky mobile CTA and direct-to-checkout forms
- Launch pricing block with compare-at pricing ($39 → $29) and urgency cues
- Conversion assets: countdown timer, trust badges, reviews, stock limiter text
- Sections: hero, benefits, features, lifestyle, pricing, trust, shipping & returns, FAQ, reviews, final CTA, footer
- SEO-ready: meta tags, OpenGraph, JSON-LD product schema
- Minimal, luxury-inspired styling with warm neutrals and mobile-first layout
- Direct-to-checkout flow with /cart auto-redirecting to checkout

## Theme structure
```
.
├── assets/
│   ├── theme.css        # Main styling
│   └── theme.js         # Sticky CTA + countdown timer
├── config/
│   ├── settings_data.json
│   └── settings_schema.json
├── layout/
│   └── theme.liquid     # Layout with meta tags and schema
├── locales/
│   └── en.default.json
├── sections/
│   └── landing.liquid   # Single landing page section
└── templates/
    └── index.json       # Home template referencing the landing section
```

## Product wiring
- Default product handle: `diagnostic-and-statistical-manual-of-mental-disorders-text-revision-dsm-5-tr-5th-edition`
- Price: **$29 USD** with compare-at **$39 USD**
- Buy Now forms submit directly to checkout and include dynamic checkout buttons.

## Installing locally
1. Install the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) (v3+).
2. Authenticate once: `shopify login --store leafanoo.com`.
3. From this repository root, run: `shopify theme dev` and open the provided preview URL.

## Deploying via Shopify + GitHub
1. Push this repository to GitHub (e.g., `leafanoo-one-product`).
2. In the Shopify admin, go to **Online Store → Themes → Connect from GitHub** and select the repo/branch.
3. Shopify will watch the branch and keep the theme in sync. Publish the **leafanoo-one-product** theme when ready.

## Deploying via Shopify CLI (manual push)
- One-off upload: `shopify theme push --unpublished` (adds the theme without publishing).
- Publish after review: `shopify theme publish --theme <ID>` (IDs shown after push or via `shopify theme list`).

## Using Theme Kit (optional)
1. Install Theme Kit and create a `config.yml` (see `config.yml` example below).
2. Run `theme get` to pull an existing theme or `theme deploy` to upload changes.

Example `config.yml` template:
```
development:
  password: <private_app_password>
  theme_id: ""
  store: leafanoo.myshopify.com
```

## GitHub workflow tips
- Use feature branches and pull requests for changes.
- CI/CD: pair `shopify theme push` in your pipeline to deploy after merges, or rely on Shopify’s GitHub integration to sync automatically.

## Versioning
- Current version: **1.0.0**
- Update the footer text and README when versioning changes.

## Notes
- The home page is the landing page; no collection grid or catalog browsing is included.
- Buttons are styled for hover/active states and smooth scrolling is enabled globally.
- Sticky CTA is mobile-only to reduce friction on smaller screens.
- Visiting `/cart` will auto-add the featured product and send customers to checkout. If the product is missing, the page links back
  home.
