import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/roles'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'affiliation', 'user'],
  },
  access: {
    read: () => true, // author bylines are public-facing
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'affiliation', type: 'text' },
    { name: 'bio', type: 'textarea' },
    { name: 'orcid', type: 'text', admin: { description: 'ORCID iD, if academic' } },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      // Optional link back to an internal Users account, for authors
      // who also log in to submit/edit their own articles.
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
  ],
}
