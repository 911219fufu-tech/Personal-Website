# my-personal-website

Personal website built with Next.js (App Router). This repository contains the source for a lightweight personal site using React + Next.js + TypeScript.

## Overview

This README explains how to run the project locally, which files should be tracked in Git, which should be ignored, and how to push to GitHub.

### Project layout (important folders/files)

- `app/` : Next.js app routes and components (track)
- `public/` : Static assets like images (track)
- `package.json`, `tsconfig.json`, `next.config.ts` : Project config and deps (track)
- `README.md`, `LICENSE` : Docs and license (track)

## What to commit and what to ignore

**Commit**
- All source files under `app/` and `public/`.
- Config and manifest files (`package.json`, `tsconfig.json`, `next.config.ts`).
- One lockfile for your package manager (`package-lock.json` or `yarn.lock` or `pnpm-lock.yaml`).

**Do NOT commit (already in `.gitignore`)**
- `node_modules/` — dependencies
- `.next/` — Next.js build output
- `.vercel/`, `/out/`, `/build/` — deployment/build artifacts
- Local env files: `.env*` (secrets)
- Editor and OS files: `.vscode/`, `.DS_Store`
- Debug logs: `npm-debug.log*`, `yarn-error.log*`, `.pnpm-debug.log*`

I removed an accidental Markdown code fence from the original `.gitignore` so it works correctly.

## Run locally

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser.

## Push to GitHub

If git is not initialized yet:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a repository on GitHub via the web UI or the `gh` CLI. Example using `gh`:

```bash
gh repo create USERNAME/REPO --public --source=. --remote=origin --push
```

Or add remote manually and push:

```bash
git remote add origin git@github.com:USERNAME/REPO.git   # SSH
# or
git remote add origin https://github.com/USERNAME/REPO.git  # HTTPS
git branch -M main
git push -u origin main
```

If you plan to use SSH, ensure your SSH key is added to GitHub. For HTTPS, use a Personal Access Token when prompted.

## Contributing

Personal repo flow: fork/branch → commit → push → open PR. Use clear commit messages and keep changes scoped.

## Contact / Owner

Owner: `fufu911219`

---

If you'd like, I can also run the git commands to commit and push this repo to GitHub for you — tell me whether you prefer SSH or HTTPS and whether you want me to use the `gh` CLI.
