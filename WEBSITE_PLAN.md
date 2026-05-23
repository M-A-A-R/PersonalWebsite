# Website plan — edit this file, then sync to `src/data.ts`

**Status:** DRAFT — change any section below. When ready, tell your agent to rebuild from this file (or update `src/data.ts` to match).

---

## 1. Principles

**What belongs on the homepage**

- Only your highest-signal work: current role, 1–2 credibility lines, 3–5 links worth clicking in 10 seconds.
- Tone: direct, no fluff. “Cracked / high leverage” = measurable outcomes (YC, papers, shipped products, prizes).

**What does NOT belong on the homepage** (link out instead)

- Full job history, every publication, photo galleries, long awards lists.
- Default: **LinkedIn** for experience, publications, and awards.

**Limits (recommended)**

| Section        | Max |
|----------------|-----|
| Body paragraphs | 3 |
| Highlights links | 5 |
| Connect links   | 6 |

**Stretch goal:** entire page fits on one laptop screen with little or no scroll.

---

## 2. Design choices

Check the boxes you want before implementation. Current build uses the **checked** defaults below.

- [x] Serif font (Georgia / Times style)
- [x] White background (`#ffffff`)
- [ ] Beige background (old style)
- [x] No top navigation (no Experience / Publications / Photography tabs)
- [x] Text-only **Connect** links (no icon row)
- [x] Blue underlined links (Helena-style)
- [ ] Green accent links (old style)
- [x] Single column, left-aligned, narrow width (~max 36rem)

---

## 3. Page structure (fixed outline)

```
Hi, I'm [Name].

[Paragraph 1]
[Paragraph 2]
[Paragraph 3 — optional; delete if unused]

**[Highlights section title]:**
- Link label → URL
- ...

**Connect:**
- Label → URL or mailto:
- ...
```

No other sections on this page.

---

## 4. Greeting

<!-- Edit the line below exactly as it should appear on site -->

**Hi, I'm Mahesh.**

---

## 5. Body copy

<!-- Write 2–3 short paragraphs. Delete paragraph 3 if you don't want it. -->

**Paragraph 1** *(who you are + what you're doing now)*

I'm a Data Science student at UC Berkeley with a minor in Mechanical Engineering, building at the intersection of machine learning and biotech. I lead scientific development at Convexia (YC S25) and spend most of my time shipping useful products.

**Paragraph 2** *(credibility in one breath — optional; move to LinkedIn-only if too long)*

Before Cal I spent 5+ years in computational biology, published four papers, and presented at AACR. I now lead the bootcamp at comp bio @ Berkeley.

**Paragraph 3** *(interests — optional)*

Other interests: spikeball, cooking, hiking, photography.

---

## 6. Curated highlights

<!-- Pick ONE section title, then 3–5 links. Delete rows you don't want. -->

**Section title:** `Work:`

| Label (shown on site) | URL |
|------------------------|-----|
| Convexia — SOTA ADMET model, contributed to $3M seed | https://www.convexia.bio/ |
| Brighterway — ML for medical case filtering (YC S24) | https://www.brighterway.ai/ |
| AACR 2024 — Glioblastoma drug development pipeline | https://aacrjournals.org/cancerres/article/84/6_Supplement/3503/741144/Abstract-3503-New-generation-drug-development-from |
| Courseium — AI degree path mapper | https://devpost.com/software/courseium |
| AWS MCP Agents Hackathon Winner ($2,750) | *(add URL if you have a write-up; else remove this row)* |

**Other title options** (rename section in `data.ts` if you switch):

- `Projects:` — mostly Devpost / GitHub
- `Writing:` — mostly papers
- `Articles:` — essays or blog posts

---

## 7. Connect

<!-- LinkedIn is required for “everything else.” Add/remove rows. -->

| Label | URL |
|-------|-----|
| LinkedIn | https://www.linkedin.com/in/mahesh-arunachalam-a437ab225/ |
| GitHub | https://github.com/M-A-A-R |
| Email | mailto:arunachalam_mahesh@berkeley.edu |
| Devpost | https://devpost.com/arunachalam_mahesh |

---

## 8. Off-site only (not on homepage)

| Content | Where visitors find it |
|---------|-------------------------|
| Full experience / roles | LinkedIn |
| All publications | LinkedIn + Google Scholar (if you add link later) |
| Photography | Instagram or portfolio URL *(add to Connect if desired)* |
| Awards list | LinkedIn or resume PDF |
| Photo gallery | Remove from site |

---

## 9. Implementation checklist

After you finish editing sections 4–7:

- [ ] Update [`src/data.ts`](src/data.ts) to match this file (or ask agent to sync)
- [ ] Run `npm run dev` → http://localhost:3000
- [ ] Read page on phone width
- [ ] Deploy via Vercel (`npm run build`)

---

## Notes / scratch space

<!-- Use this area for alternate copy, ideas, or links you're not sure about yet -->
