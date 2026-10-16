# abhi-node.github.io

Personal site built with [Astro](https://astro.build).

## Writing a post

1. Add a file to `src/content/posts/`, e.g. `my-post.md`:

   ```md
   ---
   title: My post
   date: 2026-10-16
   description: Optional one-liner.
   tags: [optional, tags]
   thumbnail: ./images/preview.png   # optional, shown in post lists
   draft: false
   ---

   Write here.
   ```

2. Images go in `src/content/posts/images/`; embed with `![alt](./images/file.png)`.
3. Preview with `npm run dev` (http://localhost:4321).
4. Commit and push to `main`. GitHub Actions deploys it.

## Adding a project

Each project card on the home page is a file in `src/content/projects/`:

```md
---
title: minidb
description: One-line summary shown on the card.
tags: [c, databases]
image: ./images/minidb.png   # optional preview, stored in src/content/projects/images/
repo: https://github.com/abhi-node/minidb
demo: https://example.com    # optional
post: minidb-internals       # optional: filename (no .md) of a write-up in src/content/posts/
order: 2                     # lower comes first
---
```

A card opens its write-up if `post` is set, otherwise the demo, otherwise the repo.
