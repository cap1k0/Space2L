import type { CollectionConfig } from 'payload'
import { isAdmin, adminFieldOnly } from '../access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Magic-link style auth: switch disableLocalStrategy to true once
    // the passwordless flow is wired up in your Next.js route handlers.
    // verify is off for now — turning it on requires an email adapter
    // (see https://payloadcms.com/docs/email/overview), otherwise
    // verification emails just get logged to the server console and
    // no one can actually complete signup.
    tokenExpiration: 60 * 60 * 24 * 7, // 7 days
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'author',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Reviewer', value: 'reviewer' },
        { label: 'Author', value: 'author' },
      ],
      access: {
        update: adminFieldOnly, // only an admin can promote/demote roles
      },
    },
  ],
}
