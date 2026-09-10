# Deploying web / cms / blog

One Nx repo, three independent Vercel projects, three domains. Each
Vercel project points at the **same GitHub repo** but a different
**Root Directory**, so a broken cms build or outage never touches the
other two.

## 1. web → bruca.space (already live, unchanged)

Nothing to do here — this app has zero dependency on Payload, at
build time or runtime.

## 2. cms → cms.bruca.space

New Vercel project, same repo.
- **Root Directory**: `apps/cms`
- **Framework Preset**: Next.js (auto-detected)
- **Environment variables**: copy from `apps/cms/.env.example`
  - `DATABASE_URI` — Supabase Session Pooler connection string, port 6543
  - `PAYLOAD_SECRET` — `openssl rand -base64 32`
  - `NEXT_PUBLIC_SERVER_URL` = `https://cms.bruca.space`
  - `BLOB_READ_WRITE_TOKEN` — create a Blob store in Vercel Storage first
- Domain: attach `cms.bruca.space`
- First deploy → visit `/admin` → create the first admin user

## 3. blog → blog.bruca.space

New Vercel project, same repo.
- **Root Directory**: `apps/blog`
- **Environment variables**: copy from `apps/blog/.env.example`
  - `NEXT_PUBLIC_CMS_URL` = `https://cms.bruca.space`
  - `NEXT_PUBLIC_SITE_URL` = `https://blog.bruca.space`
- Domain: attach `blog.bruca.space`

## Why this is decoupled, concretely

- **web** never imports anything from `apps/cms` and never calls its
  API at build or run time — it can build and serve with cms
  completely deleted.
- **blog** only talks to cms over plain HTTP (`fetch`, Payload's
  public REST API) — no shared npm package, no shared TypeScript
  types, no Local API import. If cms is unreachable during a
  scheduled revalidation, Next.js keeps serving the last successful
  build of each page instead of failing (`next: { revalidate: 300 }`
  in `apps/blog/app/lib/cms.ts`).
- Because each Vercel project has its own Root Directory, a failed
  build in one project doesn't block or fail the others — they're
  entirely separate deployments that happen to share a repo.

## Local dev

```
npm install
npm run dev          # web      → localhost:3000
npm run dev:cms       # cms      → localhost:3000 (run one at a time, or set PORT)
npm run dev:blog       # blog     → localhost:3000
npm run cms:generate:types   # regenerate apps/cms/src/payload-types.ts after editing a collection
```
