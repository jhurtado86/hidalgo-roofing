# CLAUDE.md — Hidalgo Roofing & Remodeling LLC

Filled from the Nexor AI skeleton. **FROZEN** blocks are the proven Nexor conventions —
do not rewrite per client. `[NEEDS INPUT]` = a client fact not yet provided (do NOT
invent). `[DECIDE]` = resolve at strategy lock. `[VERIFY]` = confirm before publishing.

---

## What This Is — client identity (boilerplate frozen)

This is the **Hidalgo Roofing & Remodeling LLC** website, built on the Nexor AI template.
Keep the template's structure, section rhythm, nav pattern, dark sections, footer layout,
and design system intact — only content, brand, service area, colors, logo, photos, and
copy are client-specific.

Trade: **residential roofing + remodeling contractor**. This is a home-services trade, so
most template modules apply. See "Template Sections to DELETE" for the few that don't.

Treat any remaining `[NEEDS INPUT]` field as fill-in-the-blank. Do not invent client
facts; confirm with the client / Juan before filling.

---

## Resolved token reference

| Token | Resolved value |
|---|---|
| Business name | Hidalgo Roofing & Remodeling LLC (short brand: Hidalgo Roofing) |
| Service One … Service Six | Roofing (hub) · Storm Restoration · Roof Repair · Roof Replacement · Home Remodeling · Room Additions |
| service slugs | `roofing` · `storm-restoration` · `roof-repair` · `roof-replacement` · `home-remodeling` · `room-additions` |
| Primary city | **Pharr, TX** (physical-location city; anchors NAP + homepage) |
| City 2 … City 6 | McAllen · Edinburg · Mission · Weslaco · San Juan (priority order + rationale below) |
| city slugs | `mcallen` · `edinburg` · `mission` · `weslaco` · `san-juan` |
| Region | Rio Grande Valley, TX (Hidalgo County) |
| Phone (site) | **(956) 403-6826** — CONFIRMED GHL tracking number (`tel:+19564036826`). This is the ONLY number that may appear on the site. The old published line (956) 460-3489 is retired — it must return zero grep hits. |
| Email | hidalgoroofing9@gmail.com |
| Domain | hidalgoroofingremodelingtx.com — canonical host **www** (`https://www.hidalgoroofingremodelingtx.com`, set as Vercel Primary day one) |

> ⚠️ **Email domain differs from website domain** (gmail.com vs hidalgoroofingremodelingtx.com).
> Both are correct — do NOT "fix" the email to match, and never build a URL off the email
> domain.

---

## Brand color system — FROZEN methodology, values DERIVED from logo

Palette derived from `brand_assets/logo.webp` (exact hexes extracted from the client's
gold logo mark). Define once via CSS custom properties + Tailwind `theme.extend.colors`;
reuse everywhere; never hardcode hexes per page.

**Design decision (strategy lock):** the current site uses gold as its dark-section
background (gold-on-gold, white text everywhere). We are switching to **deep warm brown
for dark sections with gold as the accent** — this grounds the design, lets the gold pop
with real contrast, and reads as a more premium roofing brand. Gold stays on all buttons,
icons, accents, and the logo, so brand recognition is intact.

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#B68A3B` | Primary brand gold — primary buttons, nav accents, brand |
| `--color-primary-mid` | `#9A7230` | Mid-tone — hover, secondary buttons, borders/dividers on dark |
| `--color-accent` | `#D4A84B` | Accent — icons, link accents, eyebrow, highlights on dark |
| `--color-accent-bright` | `#E4BC63` | Brightest gold — highlights/glints on dark ONLY; never on light |
| `--color-accent-deep` | `#8A6228` | On-light fallback for the accent (see rule below) |
| `--color-silver` | `#858382` | Muted borders, secondary text on dark, chrome (from logo subtitle gray) |
| `--color-dark` (canonical) | `#1E1108` | THE single dark-section background token (deep warm brown) |
| `--color-ink` | `#1C1208` | Near-black warm headings/body |
| `--color-bg` | `#FFFFFF` | Body/content backgrounds |
| `--color-muted` | `#525152` | Muted/secondary text (from logo subtitle gray) |

**FROZEN rules:**
- **Button/text-on-gold rule (CRITICAL for this brand):** gold `--color-primary` (`#B68A3B`)
  is a MID-tone — white text on it is only 3.15:1 and FAILS WCAG. **Gold buttons and gold
  fills always use dark ink `--color-ink` (`#1E1108`) for their text/icons** (5.85:1 ✅),
  never white. This is decided once, here — never per page. White text belongs on
  `--color-dark` sections, not on gold.
- **Accent-on-dark:** `--color-accent` (`#D4A84B`) and `--color-accent-bright` (`#E4BC63`)
  are for highlights, icons, eyebrows, and glints **on the deep-brown dark sections only.**
  On white/light backgrounds they wash out — never use them as small text or dividers on
  light.
- **Accent-on-light fallback:** on white/light, a gold accent as small text or a divider
  falls back to `--color-accent-deep` (`#8A6228`, 5.50:1 on white ✅). Bright gold fill is
  fine; bright gold *text on light* is not.
- **One canonical dark token:** `--color-dark` (`#1E1108`) is the only dark-section
  background. Never let a second near-identical dark hex drift in.
- **Recolor contrast check — EVERY build, before the homepage is approved:** run the
  contrast pairs and confirm each passes 4.5:1 (normal text) / 3:1 (large text + UI):
  - `--color-ink #1E1108` on `--color-primary #B68A3B` (gold buttons) → 5.85:1 ✅ (REQUIRED — never white)
  - `--color-accent #D4A84B` on `--color-dark #1E1108` → 8.34:1 ✅
  - `--color-accent-deep #8A6228` on white → 5.50:1 ✅
  - `--color-muted #525152` on `--color-bg` white → passes ✅
  - white text on `--color-dark #1E1108` → passes ✅
  Any pair that fails is a token bug, not a page bug — fix the token, not the page.
- **brand.css must carry the derived tokens, not the template placeholders.** The template
  ships a neutral graphite palette (`#232838` etc.) — that MUST be fully replaced by the
  gold/brown tokens above before any page is screenshotted. Zero graphite hexes may remain
  in brand.css. (Grep for `#232838` and the other placeholder hexes → must return empty.)
- **Red:** `[DECIDE — does this brand's palette include red at all? Default: no.]` The
  brand is gold + brown only. Red is semantic (emergency/storm urgency) ONLY if used at
  all — and given the 24/7 storm-response positioning, a single restrained urgency accent
  is defensible, but default is no.
- **Never use default Tailwind blue/indigo/sky/cyan.** Drive every color from the brand
  tokens and derive shades from them.

---

## Integration placeholders — FROZEN insertion points

- `<!-- GHL CONTACT FORM EMBED -->` — `[NEEDS INPUT — form name + embed]`. Use the GHL
  embed; never a custom form.
- `<!-- GHL CHAT WIDGET SCRIPT -->` — `[NEEDS INPUT]` (insert before `</body>`).
- `<!-- GHL EXTERNAL TRACKING SCRIPT -->` — `[NEEDS INPUT]` (insert in `<head>`).
- `<!-- GHL REVIEW WIDGET EMBED -->` — **WIRE.** Client confirmed: 14 Google reviews,
  displayed publicly as 5 stars, review widget goes on the homepage. `[VERIFY — exact
  decimal rating (5.0 vs 4.9) before publishing aggregateRating]`.
- `<!-- GOOGLE MAPS EMBED -->` — **WIRE.** Public address confirmed (415 N Sugar Rd
  Suite 7, Pharr, TX 78577).
- `<!-- INSURANCE CARRIER LOGO ROW -->` — **DELETE.** No carrier partnerships confirmed.
  Insurance is covered in copy (claims-assistance framing), not a logo wall.
- `<!-- FINANCING SECTION -->` — **DELETE** unless financing is confirmed. `[DECIDE —
  default delete]`.
- Social share image: `brand_assets/og-image.jpg` (1200×630) — `[NEEDS INPUT — create
  before launch]`.

---

## Template Sections to DELETE for this client

- Financing block / CTA — **DELETE** (not confirmed offered) `[DECIDE]`
- Insurance carrier-logo row — **DELETE** (no confirmed partnerships)
- Review widget / star rating / review-count blocks — **KEEP** (14 reviews confirmed,
  widget on homepage)
- Inventory / gallery page — **KEEP as gallery** (blocked until real project photos land;
  current site has a Gallery page)
- Trust-badge pill row in the hero — **REPLACE with BBB A+ emphasis** (see below), not the
  default template pill row
- Vehicle/fleet or in-shop modules — DELETE (mobile home-services trade, no shop storefront)

---

## Business Identity

- Business name / short brand: **Hidalgo Roofing & Remodeling LLC** / Hidalgo Roofing
- Industry / trade: **residential roofing & remodeling contractor**
- Owner: **Richard** (first name only). **FROZEN rule + client instruction:** never
  publish a last name anywhere. Owner name is referenced only in a dedicated "About the
  Owner" section or where genuinely required — never threaded through general body copy,
  headings, meta/OG, or CTAs.
- Staff / team: `[NEEDS INPUT — names + roles]`. **Never infer staff or roles from social
  posts. Confirm directly with the client.**
- Relationship claims: current site FAQ says "family-owned." **FROZEN** — "family-owned"
  as a *claim* needs explicit written confirmation. "Family-run" as a tone signal is safe.
  `[NEEDS INPUT — confirm family-owned in writing before stating it as fact]`
- Differentiator / ownership signal: `[NEEDS INPUT — confirmed only]`
- Owner background (for About page): `[NEEDS INPUT — Richard's background beyond "20+ years
  in roofing"]`
- **FROZEN framing rule + client decision:** experience is framed as **"20+ years in the
  roofing trade"** (Richard's PERSONAL experience, per client). Never write "20+ years
  serving Pharr" (implies business age). Business age is separately BBB-verified as
  **accredited since 6/29/2016** — use business-age framing only where it is explicitly
  wanted, and always state it as the accreditation DATE ("since 2016"), never as a year
  count. A count drifts every January; the date does not.
- Supplier / franchise / dealer relationship: `[NEEDS INPUT]`
- Physical address: **415 N Sugar Rd Suite 7, Pharr, TX 78577** (public address confirmed;
  **GBP is pinned to this Pharr address** — schema, NAP, and Maps embed all use Pharr, even
  though Facebook markets "McAllen"). → schema INCLUDES PostalAddress; Google Maps embed
  wired.
- Phone (site): **(956) 403-6826** — CONFIRMED GHL tracking number. `tel:` hrefs use
  `tel:+19564036826`; display text uses `(956) 403-6826`; JSON-LD `telephone` uses the
  E.164 form `+19564036826`. Retired line: (956) 460-3489 (zero hits allowed).
- Phone (owner personal — NOT FOR PUBLICATION): `[NEEDS INPUT — record so it's never
  mistaken for the site number; must return zero grep hits before deploy]`
- Email: hidalgoroofing9@gmail.com
- Domain + canonical host: **www.hidalgoroofingremodelingtx.com** (www is canonical, set as
  Vercel Primary day one)
- Founded year: **~2015** (BBB accredited since 6/29/2016). `[VERIFY — do not state an
  exact founding year in copy until confirmed by client; "BBB Accredited since 2016" is
  the BBB-safe phrasing]`
- Licenses / certifications: **BBB Accredited Business, A+ Rating** (confirmed, accredited
  since 6/29/2016). `[NEEDS INPUT — any state contractor license number]`
- Official tagline: **"Built to Last. Ready for Any Storm."** (from current hero; no banned
  words). ⚠️ Do NOT use the flyer taglines "we've got you covered" / "stay covered" —
  both are on the banned-words list.
- Review / reputation status: **14 Google reviews, 5-star public rating, live Google review
  widget on homepage** `[VERIFY exact decimal]`. **Decision: rely on the live Google
  widget only.** Do NOT reuse the current site's first-name testimonials (Maria C.,
  Jason M., Elena R.) — they're unattributed and unverified; the widget is the single
  source of truth.
- Price range: `[NEEDS INPUT — for JSON-LD priceRange; route all pricing intent to the
  free-inspection / quote CTA]`

### Key operational facts
- Service model: **mobile / on-site residential** (no retail storefront; office at Pharr
  address)
- Service-area: **Rio Grande Valley — Hidalgo County core** (Pharr, McAllen, Edinburg,
  Mission, Weslaco, San Juan, plus Alamo, Palmview, Donna, Mercedes in areaServed)
- Intake method / primary CTA framing: **"Get a Free Inspection"** / "Book an Appointment"
  → routes to GHL form. Secondary urgent CTA: **same-day emergency roof tarping** (call).
- Confirmed differentiators: **BBB A+ Accredited · 24/7 availability · same-day emergency
  roof tarping · insurance claims assistance · residential-only · free roof inspections ·
  20+ years experience**

### Hours (for `openingHoursSpecification`)
**24/7** — open every day, all hours (storm/emergency response is a core positioning).

---

## Services — FROZEN methodology

Six pages, roofing-first architecture. All six are documented on the existing site or in
the formal business descriptions — no flyer guesswork. Fencing + Outdoor Patios are
intentionally EXCLUDED (flyer-only, not confirmed offered, weaker SEO than a roofing-pure
lineup).

- **Flagship / hub: Roofing** — the category hub page: overview of all roofing work +
  internal links DOWN to Roof Repair and Roof Replacement. Targets broad "roofing
  contractor / roofer Pharr" intent. Does NOT compete with the two specific pages below;
  it routes to them.
- **Secondary push (differentiator / highest ticket): Storm Restoration** — leak repair,
  hail/wind damage, **same-day emergency tarping**, siding + gutter repair, insurance
  claims support.
- **Roof Repair** — high-intent "roof repair near me / roof leak repair" search. Repair,
  leak detection, missing/curling shingles, patch work, emergency fixes.
- **Roof Replacement** — high-intent "roof replacement / new roof cost" search. Full
  tear-off + replacement, new installs on additions, material selection (asphalt / metal /
  impact-resistant).
- **Home Remodeling** (renames the current "General Contractors" page → better residential
  search intent) — kitchen & bath remodels, whole-home updates, interior + exterior,
  flooring/drywall/windows/doors, permits & project planning.
- **Room Additions** — framing, wiring, plumbing, finishing new living space.

- **Folded-in sub-services (sections/FAQ, not pages):** roof inspections, gutter repair,
  siding repair, fascia repair, storm-damage documentation, material selection detail.

> ⚠️ **FROZEN anti-cannibalization — CRITICAL for this build:**
> - **Roofing (hub)** must stay a category/overview page. It links to Roof Repair and Roof
>   Replacement; it does NOT try to rank for "roof repair" or "roof replacement" itself —
>   those belong to the dedicated pages. Its title/H1 lead on the broad "roofing
>   contractor / roofer" phrasing, distinct from both.
> - **Roof Repair vs Roof Replacement** are deliberately separate high-intent pages — keep
>   their copy, FAQs, titles, and H1s clearly on their own intent. Never let one bleed into
>   the other's keyword.
> - **Roofing vs Storm Restoration** stay distinct (general roofing intent vs
>   insurance/emergency intent).
> - **Home Remodeling vs Room Additions** stay distinct — no generic "General Contractors"
>   umbrella page that swallows either.
> - Internal-link discipline: Roof Repair and Roof Replacement each link back up to the
>   Roofing hub and across to Storm Restoration where relevant.

> **Offer-catalog count == live service-page count = 6.**

---

## Site Architecture — FROZEN structure

> ⚠️ **FROZEN — VERIFY BEFORE WRITING PATHS.** After cloning the template, run
> `find . -name "*.html"` and confirm the real tree matches before finalizing any path.
> **Disk is the source of truth.**

- Homepage `index.html`
- About `about.html`
- Contact / Thank-You `thank-you.html` (noindex, nofollow)
- 6 service pages under `/services/`: `roofing` (hub) · `storm-restoration` ·
  `roof-repair` · `roof-replacement` · `home-remodeling` · `room-additions`
- 5 city pages under `/areas/`: `mcallen` · `edinburg` · `mission` · `weslaco` · `san-juan`
- Gallery page `gallery.html` — **KEEP** (blocked until real project photos exist; do not
  ship against placeholders)

### City priority — FROZEN methodology
Home city (Pharr) anchors the homepage + NAP. Deepest city page = highest-volume target
and becomes the CITY-PAGE TEMPLATE. Order drives GSC indexing sequence.

1. **McAllen** — largest RGV market (~145k), leads every external marketing piece
   (Facebook bio, flyer, "serving McAllen and surrounding areas"). **Deepest city page →
   CITY-PAGE TEMPLATE.**
2. **Edinburg** — county seat (~100k), strong search volume, adjacent to Pharr.
3. **Mission** — ~85k, solid residential remodeling market west of McAllen.
4. **Weslaco** — ~40k, extends coverage into the eastern RGV.
5. **San Juan** — directly adjacent to Pharr, fills the southern cluster.

**areaServed (schema + homepage service-area copy, no dedicated page):** Alamo, Palmview,
Donna, Mercedes.

**Not served (do NOT list) — OMITTED:** Harlingen, Brownsville — appeared on one flyer but
are outside the confirmed 10-city RGV list. Decision: omit for now. Revisit only if the
client later confirms active service there.

---

## Always Do First — FROZEN
Invoke the frontend-design skill before writing frontend code **if available** in the
environment (may not be installed in Claude Code — proceed without it if not).

## Content Writing Methodology — FROZEN
For all page copy, read and follow `SEO-CONTENT-PROMPT.md` in full as the PRIMARY writing
methodology before writing any content. If wording conflicts with the technical rules
below, `SEO-CONTENT-PROMPT.md` wins on wording; the rules below govern technical
implementation.

> **Banned-words reminder (from SEO-CONTENT-PROMPT.md), client-specific hits:** the
> client's own flyer language "we've got you covered" and "stay covered" are BANNED — do
> not reuse them. Also avoid "top-notch," "crucial," "comprehensive," "ensure," etc. per
> the full list.

---

## Local SEO Requirements — FROZEN

**Per-page metadata (every page):** unique `<title>` <60 chars; unique `<meta description>`
<160 with service + city + CTA; local `keywords`; `robots` index/follow with
max-image/snippet/video-preview; self-referential `canonical`; `<html lang="en">` +
viewport.

**Open Graph + Twitter (every page):** og:title/description/url/type/image/locale/site_name;
twitter summary_large_image + title/description/image; images → 1200×630 (flag if not
created).

> ⚠️ **Fix inherited from current site:** the live site's OG tags carry
> `og:site_name = "My Blog"` and article author/read-time meta (WordPress/Elementor
> leftovers). The new build must set `og:site_name = "Hidalgo Roofing & Remodeling"` and
> `og:type = website` on the homepage — do NOT carry over the blog artifacts.

**Structured Data (JSON-LD) — FROZEN patterns:**
- Homepage: `@type` = **`RoofingContractor`** (correct specific subtype for the trade —
  never bare `LocalBusiness`; the business is roofing-primary). Include name, telephone
  (GHL), email, priceRange (pending), `openingHoursSpecification` (24/7), `areaServed`
  (full city list incl. Alamo/Palmview/Donna/Mercedes), `hasOfferCatalog` (the live
  services).
- **PostalAddress:** **INCLUDE** — public address confirmed (415 N Sugar Rd Suite 7,
  Pharr, TX 78577).
- **`aggregateRating`:** **INCLUDE** — 14 reviews, rating `[VERIFY exact decimal]`, and it
  must be displayed on-page (homepage widget). Do not ship the rating value in schema until
  the decimal is verified.
- **BBB A+ / accreditation → `additionalProperty`** (e.g. `{ "name": "BBB Rating",
  "value": "A+" }`, `{ "name": "BBB Accredited", "value": "Since 2016" }`). Any state
  license number also → `additionalProperty` once provided.
- **Service pages:** 3 blocks — `Service` + `FAQPage` (min 6 Q&As) + `BreadcrumbList`.
- **City pages:** 3 blocks — `LocalBusiness` ref (same `@id` as homepage, not a
  re-declaration) + `FAQPage` (min 4 city-scoped Q&As) + `BreadcrumbList`. `areaServed` =
  that city only, never the full list.
- **Gallery page (if shipped):** `ImageGallery` or `CollectionPage` only — never `Service`.
- **Thank-you trio (one atomic unit):** noindex/nofollow meta + excluded from `sitemap.xml`
  + Disallow in `robots.txt`.
- **Per-page title collision:** the flagship Roofing service title must lead with a
  different phrase than the homepage title even though both use "roofing."
- **Offer-catalog count == live service-page count = 6** (Roofing, Storm Restoration, Roof
  Repair, Roof Replacement, Home Remodeling, Room Additions).
- Validate at `search.google.com/test/rich-results` before launch.

**Visible on-page SEO — FROZEN:** exactly one `<h1>`/page; H2/H3 hierarchy, no skipped
levels; city names in human-readable body text; service+city combos appear naturally;
descriptive alt text with service/location context.

**City pages — anti-duplicate — FROZEN:** each city page ≥30–40% unique content; never just
swap the city name (doorway-page penalty); reference real, VERIFIED local anchors —
`[VERIFY]` each before publishing, do not invent:
- McAllen: `[VERIFY — e.g. US-83/I-2 corridor, La Plaza Mall area, North McAllen
  neighborhoods]`
- Edinburg: `[VERIFY — e.g. UTRGV campus area, US-281, Downtown Edinburg]`
- Mission: `[VERIFY — e.g. Sharyland, Bentsen Palm, US-83]`
- Weslaco: `[VERIFY — e.g. Mid-Valley, Expressway 83, Airport Dr]`
- San Juan: `[VERIFY — e.g. Basilica of San Juan del Valle, I-2/US-83]`
Unique intro + unique "why [City] chooses us" per page.

**Technical SEO files — FROZEN:** `sitemap.xml` (all indexable pages; exclude thank-you);
`robots.txt` (allow crawl, disallow thank-you, point to sitemap).

**Title/description patterns — FILL:**
- Homepage: `Roofing & Remodeling in Pharr, TX | Hidalgo Roofing` /
  "BBB A+ roofing, storm restoration & remodeling in Pharr, TX. 24/7 service, free
  inspections. Call for a free quote." `[trim to <160]`
- Service page: `[Service] in Pharr, TX | Hidalgo Roofing & Remodeling` /
  "[Service] in Pharr & the RGV. BBB A+, 24/7, free inspection. Call today." (flagship
  Roofing title must lead differently than the homepage)
- City page: `Roofing & Remodeling in [City], TX | Hidalgo Roofing` /
  "Trusted [City], TX roofing, storm restoration & remodeling. BBB A+, 24/7 service.
  Free inspection."

---

## Hero & Asset Patterns — FROZEN

### Hero + Final-CTA backgrounds — dedicated named slots ONLY
- Filled ONLY by purpose-made `hero-background.*` and `cta-background.*` in
  `brand_assets/`. NEVER a client content/job photo.
- Until those files exist, both stay on `https://placehold.co/1920x1080` at exact final
  dimensions. Flag as pending — never substitute another image.
- Off-limits on every content-photo and layout pass unless the pass is explicitly about
  them.
- Static full-bleed hero is the default on every page incl. homepage (`min-h-screen`,
  left-anchored text block, image + dark overlay ~0.7 + edge vignette + text-shadows).
- **Hero trust signals (client emphasis):** surface **BBB A+ Accredited** prominently in
  the homepage hero (badge/eyebrow) alongside the Google review widget — Richard
  specifically wants BBB A+ emphasized. Keep it tasteful; do not fabricate a BBB logo, use
  the real accreditation mark.

### Hero video — enhancement, homepage only
Only if the client provides a usable clip. `[NEEDS INPUT — none provided yet]`. Follow the
FROZEN sequence: trim → preview → client approves in/out → compress (H.264, strip audio,
~2–3MB) → wire last. `.gitignore` raw + preview; commit only the final clip.

### Uniform photo sizing — every section, every page
Every content photo uses the same aspect-ratio container (`aspect-ratio` +
`object-fit: cover`), never a fixed `h-[Npx]`. One ratio site-wide.

### Gallery / inventory section — uniform grid, no dead space
If the gallery ships: uniform grid, equal cells, consistent gutters, no ragged last row.
**Blocked until real project photos exist** — do not ship against placeholders. Excluded
photo types apply.

### Photo Tier Allocation — FROZEN default
| Page type | Body photos | Hero |
|---|---|---|
| Flagship / hub (Roofing) | 5 | ✓ |
| Secondary push (Storm Restoration) | 3 | ✓ |
| Standard service (Roof Repair, Roof Replacement, Home Remodeling, Room Additions) | 2 | ✓ |
| City page | 1 | ✓ |
| About | 2 | ✓ |
| Gallery | No limit (reuse accepted) | ✓ |

**FROZEN rules:** one-photo-one-slot on all non-gallery pages; cross-page reuse minimized
except on gallery; excluded types everywhere — readable license plates, strong
tilt/rotation, stained/damaged subjects, privacy-sensitive; owner/people slots use
`aspect-[3/4]` + `object-position: center top`; document EXACT asset filenames confirmed by
`ls brand_assets/` — never assume naming.

> **Assets on hand (verified on disk):**
> - `brand_assets/logo.webp` — gold/color version, 384×120
> - `brand_assets/logowhite.png` — white version for dark nav/footer, 384×120
>
> Rendered logo heights: **nav 64px · footer 72px.** Palette above is derived from the gold
> logo; nav sizing is derived from the logo dimensions. `[NEEDS INPUT — real project
> photos, headshot of Richard, hero-background, cta-background, og-image]`. Build against
> placeholders and swap in one pass.
> ⚠️ **Disk wins.** These are the real filenames — no `logo-white.png`, no `.png` color
> variant. Re-confirm with `ls brand_assets/` before referencing any new asset.

### City-page clone zones — FROZEN
Four unique zones per city, everything else shared:
`<!-- CITY-SWAP: intro -->` · `<!-- CITY-SWAP: local-anchors -->` ·
`<!-- CITY-SWAP: why-city -->` · `<!-- CITY-SWAP: faq -->`
Areas We Serve dropdown (desktop + mobile) is a protected shared zone:
`<!-- SHARED ZONE: Areas We Serve dropdown — do NOT modify during city clone pass -->`

---

## Screenshot discipline — FROZEN (tiered)
Code MUST save real PNGs to `./temporary screenshots/` and report the exact path.
- **Gated template pages — homepage, Roofing (flagship), McAllen (deepest city): 2
  comparison rounds.**
- **Clones + structural pages — remaining services/cities, about, thank-you: 1 round +
  click-through.**
- More rounds only if the 1-round check surfaces a real problem.
(Serve on localhost first — never screenshot a `file:///` path.)

## Reference Images — FROZEN
Default: build ORIGINAL pages with high craft — do NOT match a reference. Match-exactly
rules apply ONLY when a reference image is explicitly provided.

## Local Server / Screenshot Workflow — FROZEN
`node serve.mjs` (root at `http://localhost:3000`, background, don't double-start).
`node screenshot.mjs http://localhost:3000 [label]` →
`./temporary screenshots/screenshot-N[-label].png`. Read the PNG back and analyze
specifics (px sizes, exact hexes, spacing, alignment, radii, shadows).

## Output Defaults — FROZEN
Self-contained HTML; Tailwind via CDN; `https://placehold.co/WIDTHxHEIGHT` placeholders;
mobile-first responsive.

## Anti-Generic Guardrails — FROZEN
Brand tokens only (never default Tailwind palette). Layered color-tinted shadows (never
flat `shadow-md`). Distinct display + body fonts; tight tracking on large headings,
generous body line-height. Layered radial gradients + SVG-noise grain for depth. Animate
only `transform`/`opacity` (never `transition-all`), spring easing. Every clickable
element has hover + focus-visible + active states. Image overlays + a color-treatment
layer. Intentional spacing tokens. A base→elevated→floating depth system.

---

## Locked Language — FROZEN framework, filled per client
- **Insurance framing:** "we help homeowners through the insurance claims process" /
  "we'll help you file the claim." NEVER name a carrier, NEVER promise coverage outcomes or
  $0 deductible. Route to claims-assistance, not guarantees.
- **Warranty:** `[NEEDS INPUT — publish no warranty scope until confirmed in writing]`
- **Certification/quality claims:** **BBB Accredited Business, A+ Rating** (confirmed, may
  state and emphasize). No other cert claim until confirmed.
- **Ownership signal:** "family-owned" `[NEEDS INPUT — confirm in writing before stating
  as fact]`. "Locally owned / family-run" as tone is safe.
- **Experience framing:** **"20+ years in the roofing trade"** (Richard's personal
  experience). Business age "BBB Accredited since 2016" only where business-age framing is
  explicitly wanted — always the date, never a year count. Never "20+ years serving [City]."
- **Testimonials/reviews:** live Google widget (14 reviews) is the ONLY source of truth.
  Do not reuse the current site's first-name testimonials. No fabricated testimonials.
- **Tagline:** "Built to Last. Ready for Any Storm." Banned: "we've got you covered,"
  "stay covered."

## Hard Rules — FROZEN
- No invented facts; confirm before filling any `[NEEDS INPUT]`.
- No price / range / "starting at" unless explicitly confirmed — route pricing intent to
  the free-inspection / quote CTA (copy, FAQ, AND JSON-LD Offer blocks).
- No insurance coverage-outcome claims.
- No relationship ("family-owned") claim without written confirmation.
- Review widget/aggregateRating only with the confirmed 14-review data AND on-page display;
  verify the exact decimal first.
- Never infer ownership/roles/relationships from social posts.
- **Never publish a last name for Richard** (client instruction).
- Never publish the owner's personal number — GHL tracking number only; grep returns zero
  hits for the personal number before deploy. ✅ RESOLVED — the site number is the GHL
  tracking number **(956) 403-6826**. The previously published (956) 460-3489 is retired
  and must never reappear.
- Never promote a client photo into `hero-background` / `cta-background`.
- No readable license plates or privacy-sensitive photos.
- Strip the template's red; gold `#B68A3B` primary, deep brown `#1E1108` dark sections; no
  default Tailwind blue/indigo.
- Do not carry over WordPress/Elementor OG artifacts (`og:site_name = "My Blog"`, article
  author/read-time meta).
- No `transition-all`.
- Follow the tiered screenshot rule.

## Git Discipline — FROZEN
- Commit/push only when asked; branch first if on the default branch.
- Rename a service/city → update filename, all hrefs, nav/footer labels, schema,
  title/meta, breadcrumb together. (Note: "General Contractors" → "Home Remodeling" is such
  a rename — do it atomically.)
- Three-command pre-commit check: `git status`, `git branch`, `git remote -v` (the client
  repo, NOT nexor-template).
- Logical commit separation: CLAUDE.md → own commit; brand_assets → own commit; page builds
  grouped by phase.
- Commit assets immediately on placement (own commit).
- Set canonical host as Vercel **Primary on day one**.
- Submit sitemap to GSC as full canonical URL. Indexing order: services → Pharr → remaining
  cities → about. ~10–12 URL inspections/day, spread across days. Re-check homepage
  canonical in GSC 3–5 days post-launch.

---

## Active Blockers — summary

**Launch-blocking:**
- ~~GHL tracking number~~ ✅ RESOLVED — (956) 403-6826 is wired site-wide
- GHL contact-form embed
- GHL chat widget + external tracking scripts
- og-image (1200×630)
- Exact Google rating decimal (for aggregateRating)
- hero-background + cta-background images

**Backfillable (build against placeholders, swap in one pass):**
- Real project photos + gallery images
- Headshot of Richard for the About page
- priceRange
- State contractor license number (if any)
- Warranty terms
- Family-owned written confirmation
- Owner background copy for About

**Open decisions — ALL RESOLVED at strategy lock:**
- ✅ Palette dark-section color — deep brown `#1E1108` + gold `#B68A3B` accent
- ✅ Experience framing — "20+ years" personal; BBB A+ emphasized throughout
- ✅ City priority — McAllen → Edinburg → Mission → Weslaco → San Juan (Pharr anchors)
- ✅ Service pages — 6, roofing-first: Roofing (hub) · Storm Restoration · Roof Repair ·
  Roof Replacement · Home Remodeling · Room Additions (Fencing + Patios excluded)
- ✅ Gallery page — KEEP (blocked until real project photos land)
- ✅ Testimonials — rely on the live Google widget only; drop the on-site first-name quotes
- ✅ Canonical host — www
- ✅ Harlingen / Brownsville — omit for now
- ✅ GBP — pinned to the Pharr address; schema/NAP/Maps all use Pharr

**Remaining `[NEEDS INPUT]` / `[VERIFY]` (not decisions — data to collect before/at build):**
- ~~GHL tracking number~~ ✅ RESOLVED — (956) 403-6826
- GHL form embed + chat + tracking scripts
- og-image, hero-background, cta-background images
- Exact Google rating decimal (for aggregateRating)
- Real project photos + Richard's headshot
- priceRange, state license number, warranty terms, family-owned written confirmation
- Legal name form for schema — "and" vs "&" — match his GBP listing exactly `[VERIFY]`
- Red urgency accent — default NO; kept off unless a later call brings it in
