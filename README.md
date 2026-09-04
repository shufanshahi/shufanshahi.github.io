# Academic Personal Website

A static academic homepage built with **Next.js**, **React** and **Tailwind CSS**,
exported to plain HTML and deployed automatically to **GitHub Pages**.

All personal information lives in a handful of data files under
[`src/content/`](src/content/) — you should never need to edit a component to
update your CV, publications or biography.

---

## 1. Install dependencies

Requires Node.js 20 or newer.

```bash
npm install
```

## 2. Run the website locally

```bash
npm run dev
```

Then open <http://localhost:3000>. Edits to content files hot-reload.

To check the exact output that gets deployed:

```bash
npm run build      # writes the static site to ./out
npx serve out      # or: python3 -m http.server -d out 8000
```

---

## 3. Where personal information is stored

Everything is in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, affiliation, hero intro, profile photo, metadata, **section on/off switches**, navigation order |
| `bio.ts` | The About section |
| `research.ts` | Research interests and the "looking ahead" note |
| `publications.ts` | All publications, grouped by category |
| `education.ts` | Education timeline |
| `news.ts` | News / milestones |
| `projects.ts` | Projects |
| `teaching.ts` | Teaching entries |
| `cv.ts` | CV file path, download name, "last updated" date |
| `social.ts` | Email, GitHub, LinkedIn, Scholar, ResearchGate, CV links |
| `blog/*.md` | Blog posts, one Markdown file per post |

Non-content files: components live in `src/components/`, pages in `src/app/`,
small helpers in `src/lib/`, and static assets (photo, CV PDF) in `public/`.

---

## 4. How to update the biography

Edit `src/content/bio.ts`. Each string in `paragraphs` renders as one
paragraph; two or three reads best in this layout.

```ts
export const bio = {
  heading: 'About',
  paragraphs: [
    'First paragraph…',
    'Second paragraph…',
  ],
};
```

The short hero blurb is separate — it is `intro` in `src/content/site.ts`.

---

## 5. How to add research interests

Append an entry to `researchInterests` in `src/content/research.ts`. Order in
the array is the order on the page; `keywords` is optional.

```ts
{
  title: 'Research Area',
  description: 'Two or three sentences about what you work on and why.',
  keywords: ['Keyword', 'Keyword'],
},
```

---

## 6. How to add publications

Append an entry to `publications` in `src/content/publications.ts`. A commented
template sits at the bottom of that file.

```ts
{
  title: 'Paper Title',
  authors: ['Shufan Shahi', 'A. Collaborator'],   // your own name is auto-bolded
  venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
  year: 2027,
  category: 'conference',            // journal | conference | workshop | preprint
  status: 'Accepted',                // optional badge
  award: 'Oral',                     // optional highlight badge
  abstract: 'One or two sentences.', // optional, shown in a collapsible panel
  links: { pdf: '', abstract: '', code: '', project: '', doi: '', bibtex: '' },
},
```

Entries are grouped by `category` and sorted newest-first automatically. Empty
categories are hidden. Every field except `title`, `authors`, `year` and
`category` may be omitted.

Which name gets bolded is controlled by `authorName` at the top of the file.

---

## 7. How to add projects

Append an entry to `projects` in `src/content/projects.ts`:

```ts
{
  title: 'Project Name',
  description: 'What it does and why it exists.',
  tags: ['PyTorch', 'Computer Vision'],
  period: '2026',                         // optional
  thumbnail: '/projects/thumb.png',       // optional, file goes in public/
  links: { repo: '', demo: '', project: '', paper: '' },
},
```

---

## 8. How to add blog posts

Create a Markdown file in `src/content/blog/`. **The file name becomes the
URL** — `my-post.md` is served at `/blog/my-post/`.

```markdown
---
title: "Post title"
date: "2026-05-01"
description: "One or two sentences shown on the blog index."
tags: ["reading notes", "multimodal"]
draft: false
---

Your post body in Markdown. Headings, lists, tables, code blocks, block quotes
and links are all styled for long-form academic reading.
```

Set `draft: true` to keep a post out of the build. Posts are sorted
newest-first, and the three most recent also appear in the "Writing" section of
the home page.

---

## 9. How to replace the CV PDF

Replace **one file**: `public/cv.pdf`.

The download button, the "View in browser" link and the CV row in the contact
list all point at that path, so nothing else needs to change. Optionally update
the `updated` date in `src/content/cv.ts`.

The LaTeX source for the CV is kept at `shufan_shahi_resume.tex` in the
repository root. It uses the `resume` document class, so building it requires
`resume.cls` to be present alongside it; copy the resulting PDF to
`public/cv.pdf` when you rebuild it.

---

## 10. How to enable or disable optional sections

Open `src/content/site.ts` and flip a switch:

```ts
export const sections: Record<SectionKey, boolean> = {
  about: true,
  research: true,
  publications: true,
  education: true,
  news: true,
  projects: true,
  teaching: false,   // hidden
  blog: true,
  cv: true,
  contact: true,
};
```

A disabled section disappears from the page **and** from the navigation bar —
no other edits required.

One nuance for the blog: turning `blog` off removes the navigation entry and the
"Writing" block on the home page, but `/blog/…` pages are still generated (a
statically exported route cannot be conditionally removed at build time). To
drop them entirely, delete the `src/app/blog/` directory.

Navigation order comes from the `navigation` array directly below the switches;
reorder it to reorder the menu.

---

## 11. How to configure the repository for GitHub Pages

The site supports both hosting styles, and the workflow picks the right one
automatically from your repository name.

**A. User or organization site — `https://<username>.github.io`**

Name the repository exactly `<username>.github.io`. The base path stays empty.
This repository (`shufanshahi.github.io`) is already set up this way.

**B. Project site — `https://<username>.github.io/<repo>`**

Use any repository name. The workflow detects that the name does not end in
`.github.io` and builds with `NEXT_PUBLIC_BASE_PATH=/<repo>`, so all assets and
links get the right prefix.

To build a project-site version locally:

```bash
NEXT_PUBLIC_BASE_PATH=/my-repo npm run build
```

**One-time setup in GitHub:**

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

Also update `url` in `src/content/site.ts` to your final address so that
metadata and Open Graph tags are correct.

### Custom domain

Add a file named `CNAME` to `public/` containing your domain (e.g.
`example.com`), then configure the domain under **Settings → Pages**.

---

## 12. How automatic deployment works

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every
push to `main` or `master`, and can also be triggered manually from the
**Actions** tab. It:

1. checks out the repository and installs dependencies with `npm ci`;
2. derives the correct base path from the repository name;
3. runs `npm run build`, which static-exports the site to `./out`;
4. uploads `./out` as a Pages artifact and deploys it.

There is no server component — the deployed site is plain HTML, CSS and a small
amount of JavaScript for the mobile menu, the active-section highlight in the
navigation and the "show all news" toggle.

`public/.nojekyll` is included so that GitHub Pages serves the `_next/`
directory instead of having Jekyll strip it.

---

## Design notes

- **Palette and typography** are defined once, as tokens, at the top of
  [`src/app/globals.css`](src/app/globals.css). Change the `@theme` block and
  the whole site follows: deep navy for headings, a professional blue for
  links and accents, near-black navy body text, soft cool-grey borders, and an
  off-white page background.
- **Fonts** are Source Serif 4 for headings and Inter for body text, loaded
  from Google Fonts with local fallback stacks so a build never depends on
  network access.
- **Long-form reading** uses the `.prose-academic` class, also in `globals.css`.
- **Accessibility**: semantic landmarks, a skip link, a visible focus ring,
  ordered heading levels, labelled links, and colour contrast that meets WCAG AA.

## Licence

Content is yours. The site scaffolding is free to reuse.
