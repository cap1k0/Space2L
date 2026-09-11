import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/roles'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: 'title', type: 'text', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'parent', type: 'relationship', relationTo: 'categories', hasMany: false },
  ],
}
