import type { Access, CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/roles'

// Public form (demo.bruca.space) creates requests server-to-server with a shared secret.
// Logged-in admins/editors can also create from the admin panel.
const canCreate: Access = ({ req }) => {
  const user = req.user as { role?: string } | null
  if (user && (user.role === 'admin' || user.role === 'editor')) return true
  const secret = process.env.DEMO_REQUEST_SECRET
  return Boolean(secret) && req.headers.get('x-demo-secret') === secret
}

export const DemoRequests: CollectionConfig = {
  slug: 'demo-requests',
  labels: { singular: 'Demo request', plural: 'Demo requests' },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'source', 'createdAt'],
  },
  access: {
    read: isAdminOrEditor,
    create: canCreate,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.email) data.email = String(data.email).trim().toLowerCase()
        return data
      },
    ],
  },
  fields: [
    { name: 'email', type: 'email', required: true, index: true },
    { name: 'source', type: 'text', defaultValue: 'demo.bruca.space' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      index: true,
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Demo done', value: 'done' },
        { label: 'Not a fit', value: 'closed' },
      ],
      access: { create: ({ req }) => Boolean(req.user) },
    },
    { name: 'notes', type: 'textarea', access: { create: ({ req }) => Boolean(req.user) } },
  ],
}
