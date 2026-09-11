import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/roles'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { useAsTitle: 'filename' },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [{ name: 'alt', type: 'text' }],
}
