# Bruca (Nx monorepo)

## Getting started

```bash
npm install
npx nx dev web
```

Open http://localhost:3000.

## Structure

```
├── apps/
│   └── web/                  # the Next.js app
│       ├── app/
│       │   ├── page.tsx      # landing page
│       │   ├── terms/page.tsx
│       │   ├── components/Logo.tsx  # placeholder planet logo
│       │   └── globals.css
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── postcss.config.js
│       ├── tsconfig.json
│       └── project.json
├── nx.json
├── package.json
└── tsconfig.base.json
```

To add another app or a shared library later, use `npx nx g @nx/next:app <name>` or `npx nx g @nx/js:lib <name>`.
