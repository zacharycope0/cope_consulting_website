# zachcope.com: Project Context

This file is the source of truth for the site's business context, design direction, and structure. Keep it updated as decisions change so future sessions don't have to re-derive context from scratch.

## Business Overview

- Cope Consulting, LLC. Zach Cope, independent consultant based in Chicago, IL
- Contact: zach@zachcope.com
- Personal brand (Zach as the face of the business), not a faceless agency. zachcope.com stays the home domain (decided 2026-11-12; rejected moving to workflowautomation.coach or a separate skillification domain for now)
- Core positioning: help small teams turn the work they already do into reusable Claude skills, built around tools they already use

## Services (2026-11-12 redesign)

**Flagship: Skillification** (`skillification.html`)
- Process: Audit, Build, Share, Maintain (mirrors the claude_skillification repo: /workflow-audit, personal skills, consolidated team set, /sync-from-main)
- **Skillification Sprint**: one-time flat fee. Workflow audit for up to 5 people, 1 to 3 skills per person, shared team skill library, onboarding session + plain-English guide, 30 days of fixes
- **Skill Upkeep**: quarterly retainer. Quarterly merge of new skills, fixes when Claude updates break things, new skills, feedback review, email support
- Prices shown as "Starting at" with placeholders ($X,XXX and $XXX / quarter) marked with TODO comments. Must be filled in before launch.
- The repo itself is not sold; the service of running it is.

**Secondary services**
- Software Automations (`software-automations.html`): Excel/VBA, Sheets/Apps Script, AutoCAD/AutoLISP, QGIS, Python
- Data Management and Analysis (`data-management.html`)

Retired: "AI Implementation and Training" as a service name. `ai-implementation.html` is now a redirect to `skillification.html` so old links keep working.

Pricing: flat fee, paid on delivery, across all services.

## Design Direction ("field notebook", 2026-11-12)

Replaced the Plum minimal design entirely.
- Warm paper background, black ink, one ember accent (#C4471C)
- Type: Instrument Serif (headlines, italic accent words), IBM Plex Sans (body), IBM Plex Mono (uppercase labels, nav, buttons)
- Editorial grid: numbered section labels ("01 / The problem"), hairline rules, alternating paper / darker paper / ink-black bands
- Square-cornered buttons; featured pricing card gets a hard ember offset shadow
- All colors and fonts are CSS variables in the `:root` block at the top of `styles.css`

## Site Structure

- `index.html`: Hero, 01 Problem, 02 Skillification steps (dark), 03 Pricing, 04 Other services, 05 About strip with photo, 06 Contact (dark, form)
- `skillification.html`: hero, what's a skill, example skills, how it works, what you keep, proof facts, pricing, FAQ, CTA
- `software-automations.html`, `data-management.html`, `about.html`: full copy, each ends with a dark CTA band linking to `index.html#contact`
- Flat `.html` files in repo root, linked with the extension (unchanged decision from 2026-07-31)
- Nav: Skillification / Automations / Data / About / [Get in touch]. Collapses to a Menu button under 760px
- `script.js`: mobile nav toggle, current-page highlight, footer year. The old tap-to-reveal tooltips and services dropdown were removed in the redesign

## Content & Voice Guidelines

- Keep Zach's voice, plain and practical, avoid generic consultant-speak
- No em dashes in copy
- Technical tool names are fine on subpages, keep the homepage light on jargon
- Stay industry-agnostic for now

## Tech Stack & Constraints

- Static HTML, no build step, no framework
- Hosted on Cloudflare Pages, connected to GitHub, auto-deploys on push to main
- Redesign lives on branch `redesign-skillification` until approved; merge to main to go live
- Formspree handles the contact form (form now also has an "Interested in" select)

## Explicitly Rejected Approach

A markdown-content + Python build-script pipeline. The site is 6 pages; a build step adds failure modes to solve a problem Claude already solves by editing HTML directly. Revisit only if the site grows substantially.

## Open Questions / Before Launch

- Real starting prices for Sprint and Upkeep (search for `TODO: set real starting price`)
- Real Formspree form ID (`YOUR_FORM_ID`)
- Confirm with Firescape that referencing "a wildfire-risk tech company" as Skillification's origin is OK (TODO comment in `skillification.html`)
- Example skills on the Skillification page are generic illustrations; swap for real client examples once available

## Resolved Decisions

- Flat `.html` files in repo root, linked with extension. Decided 2026-07-31.
- About photo hosted in-repo as `zach-photo.jpg` (640x640). Decided 2026-07-31. Shown grayscale in the new design.
- Skillification leads the site; Automations and Data are secondary. Decided 2026-11-12.
- New visual direction replacing Plum. Decided 2026-11-12.
