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
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Bruca CRM',
    },
  },

  collections: [Users, Authors, Articles, Categories, Reviews, Clients, Media],

  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: { rejectUnauthorized: false },
    },
    push: false,
  }),

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
