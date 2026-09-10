import type { CollectionConfig } from 'payload'
import { isAdmin, adminFieldOnly } from '../access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Magic-link style auth: switch disableLocalStrategy to true once
    // the passwordless flow is wired up in your Next.js route handlers.
    tokenExpiration: 60 * 60 * 24 * 7, // 7 days
    verify: true,
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
