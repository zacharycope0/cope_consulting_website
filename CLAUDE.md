# zachcope.com — Project Context

This file is the source of truth for the site's business context, design direction, and structure. Keep it updated as decisions change so future sessions don't have to re-derive context from scratch.

## Business Overview

- Cope Consulting, LLC — Zach Cope, independent technology consultant based in Chicago, IL
- Contact: zach@zachcope.com
- Core positioning: technology consulting for small businesses, built inside tools clients already use, not new platforms they have to learn
- Personal brand (Zach as the face of the business), not a faceless agency

## Services (current)

1. **Software Automations**
2. **AI Implementation and Training** — helping a business get AI set up if they don't know where to start; building standardized AI skills/workflows; giving AI access to company documents so it has files to reference. SOPs (for employees working with AI, or for using company skills) may show up as a deliverable within this category, not as its own service.
3. **Data Management and Analysis**

Detailed subpage content for all three is still TBD (see Open Questions).

Retired: the old "Workflow Audit / Custom Automation / SOPs & Training" three-tier model is no longer the top-level service structure. Those terms may still appear as sub-elements or deliverables inside the categories above.

Pricing: flat fee, paid on delivery, across all services.
Differentiator: solutions built inside the client's existing tools (Excel/VBA, AutoCAD/AutoLISP, Python, QGIS, etc.) rather than new software to license or learn.

## Design Direction

Full redesign, not an iteration. The current site (navy/copper color system, textured background, boxed service cards) is being scrapped entirely.

New direction, inspired by glorialo.design:
- Heavy whitespace / minimalism — less visual "stuff" on screen
- Big, confident typography carries the page instead of boxes/cards
- Sparse nav — a few words, no clutter

Color scheme: "Plum" — deep wine accent (`#7A3159`) on a white/off-white background, chosen from five candidate schemes on 2026-07-31. Every interactive color (nav hover, tap-reveal underlines, buttons, form focus, tooltip background) reads from five CSS variables (`--bg`, `--fg`, `--muted`, `--border`, `--accent`) in the single `:root` block at the top of `styles.css` — change those five values there to re-theme the whole site.

## Site Structure

- **Homepage** (`index.html`) — single page, minimal text, most detail lives on subpages
- **Subpages** (placeholders for now, content TBD) — flat files in the repo root, linked with the `.html` extension:
  - `software-automations.html`
  - `ai-implementation.html`
  - `data-management.html`
  - `about.html` (detailed version)
- Contact is NOT a subpage — it's a section on the homepage
- Shared `styles.css` and `script.js` (nav dropdown + tap-to-reveal behavior) are linked from every page

## Homepage Layout (top to bottom)

1. **Headline**: "Affordable, Flexible Technology Consulting for Your Small Business"
   - "Affordable" and "Flexible" are tap-to-reveal (not hover-only — hover doesn't exist on mobile)
     - Affordable → "I work off a flat fee and get paid when I deliver"
     - Flexible → "I design solutions within your existing tools"
2. **Subheadline**: "Hi I'm Zach Cope... [short intro]" — "Zach Cope" links to the About subpage
3. **About summary block**: one or two sentences + name/photo, links to the full About subpage
4. **Services section**:
   - Sub-text: "All services are flat fee and designed for your existing tools" — same two ideas as the headline, also tap-to-reveal. This duplication is intentional, so the info isn't lost if someone doesn't tap the headline.
   - Three big buttons linking to the three service subpages
5. **Contact section**: form with Name / Email / Message (Formspree — current file has a placeholder form ID that needs to be replaced with the real one)

## Nav

- About / Services / Contact
- "Services" has a dropdown: Software Automations / AI Implementation and Training / Data Management and Analysis
- Both the dropdown and the tap-to-reveal tooltips need to work on tap for mobile, not just hover on desktop

## Content & Voice Guidelines

- Homepage: as little text as possible, get to the point immediately
- No jargon up front on the homepage (no "AutoLISP," "VBA," etc.) — technical specifics belong on subpages for people who want detail
- Stay industry-agnostic for now — not niching to a specific vertical yet, that'll come from real client conversations
- Keep Zach's voice, avoid generic consultant-speak
- No em dashes in copy

## Tech Stack & Constraints

- Static HTML, no build step, no framework
- Shared `styles.css` (design system) and `script.js` (nav dropdown + tap-to-reveal interactions) so home + all subpages stay visually and behaviorally consistent — done as part of the redesign
- Hosted on Cloudflare Pages, connected to a GitHub repo, auto-deploys on push to main
- Formspree handles the contact form

## Explicitly Rejected Approach

Considered and decided against: a markdown-content + Python build-script pipeline (content lives in `.md` files, a script assembles the HTML, possibly run during a Cloudflare build step). Reasoning: the site is 5 pages. A build step trades a zero-build, low-failure-mode deploy for one with more moving parts (build command, Python runtime, risk of `.md` source and built HTML drifting out of sync) to solve a problem, editing HTML by hand, that Claude Code already solves directly in conversation. Keep content in the HTML files and edit them directly. Revisit only if the site grows substantially (a blog, many more pages).

## Open Questions

- Exact copy for each subpage (currently placeholders only)
- Whether the headline stays as final copy or gets refined further
- Real Formspree form ID (current file has `YOUR_FORM_ID` as a placeholder)
- Legacy About-page text from the old site (e.g. "fire modelor") had a likely typo — don't carry old About copy forward verbatim when writing the new About page

## Resolved Decisions

- File/URL structure for subpages: flat `.html` files in the repo root (not a `/services/` folder), linked with the `.html` extension rather than clean URLs — keeps local file:// testing and Cloudflare Pages behavior identical. Decided 2026-07-31.
- About-summary photo: hosted in-repo as `zach-photo.jpg` (640x640, cropped/compressed from the original phone photo) rather than linking the Google Photos share URL — a share link isn't a stable hotlinkable image source and depends on an external service staying up. Used by the `.about-photo` circle in `index.html`. Decided 2026-07-31.
