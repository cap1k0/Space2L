import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/roles'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'institution', 'email', 'status'],
  },
  access: {
    read: isAdminOrEditor,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true, unique: true },
    { name: 'institution', type: 'text' },
    { name: 'phone', type: 'text' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'lead',
      options: [
        { label: 'Lead', value: 'lead' },
        { label: 'Active', value: 'active' },
        { label: 'Past client', value: 'past' },
      ],
      index: true,
    },
    {
      name: 'articles',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
      admin: { readOnly: true },
    },
    {
      name: 'notes',
      type: 'array',
      fields: [
        { name: 'date', type: 'date', required: true },
        { name: 'body', type: 'textarea', required: true },
        { name: 'author', type: 'relationship', relationTo: 'users' },
      ],
    },
  ],
}
