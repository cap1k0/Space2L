import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Authors } from './collections/Authors'
import { Articles } from './collections/Articles'
import { Categories } from './collections/Categories'
import { Reviews } from './collections/Reviews'
import { Clients } from './collections/Clients'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel settings
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Bruca CRM',
    },
  },

  // All collections live here. Add new ones to this array only —
  // everything else (access, hooks, fields) stays inside its own file
  // so the config itself never becomes the bottleneck as you scale.
  collections: [Users, Authors, Articles, Categories, Reviews, Clients, Media],

  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Postgres via Supabase. Use the Session Pooler connection string
  // (port 6543) — required for serverless/edge environments like Vercel
  // where connections are short-lived and can spike in count.
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    // Keep migrations explicit once you have real data — avoid
    // `push: true` in any environment beyond local dev.
    push: process.env.NODE_ENV !== 'production',
  }),

  // CORS / CSRF — tighten this to your real domains before going live
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),

  graphQL: {
    disable: false,
  },

  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
