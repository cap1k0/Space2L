import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, isLoggedIn } from '../access/roles'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['article', 'reviewer', 'verdict', 'createdAt'],
  },
  access: {
    read: isLoggedIn,
    create: isLoggedIn,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: 'article', type: 'relationship', relationTo: 'articles', required: true, index: true },
    { name: 'reviewer', type: 'relationship', relationTo: 'users', required: true },
    {
      name: 'verdict',
      type: 'select',
      required: true,
      options: [
        { label: 'Approve', value: 'approve' },
        { label: 'Request changes', value: 'changes' },
        { label: 'Reject', value: 'reject' },
      ],
    },
    { name: 'comments', type: 'richText' },
  ],
}
