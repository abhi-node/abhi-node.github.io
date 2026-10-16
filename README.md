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
   draft: false
   ---

   Write here.
   ```

2. Images go in `src/content/posts/images/`; embed with `![alt](./images/file.png)`.
3. Preview with `npm run dev` (http://localhost:4321).
4. Commit and push to `main`. GitHub Actions deploys it.
