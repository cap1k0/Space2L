import type { CollectionConfig } from 'payload'
import { isAdminEditorOrOwnAuthor, publishedOnlyOrLoggedIn } from '../access/roles'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'author', 'client', 'updatedAt'],
  },
  // Draft/publish workflow + full revision history. This is the piece
  // that keeps this scalable: editors can work a doc through review
  // without it going live, and every AI-assisted edit pass is a
  // recoverable version instead of an overwrite.
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
    maxPerDoc: 50,
  },
  access: {
    read: publishedOnlyOrLoggedIn,
    create: isAdminEditorOrOwnAuthor,
    update: isAdminEditorOrOwnAuthor,
    delete: isAdminEditorOrOwnAuthor,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'submitted',
      index: true,
      admin: { position: 'sidebar' },
      options: [
        { label: 'Submitted', value: 'submitted' },
        { label: 'In AI editing', value: 'ai_editing' },
        { label: 'In human review', value: 'in_review' },
        { label: 'Changes requested', value: 'changes_requested' },
        { label: 'Approved', value: 'approved' },
        { label: 'Published', value: 'published' },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true,
      required: true,
      index: true,
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      hasMany: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'abstract',
      type: 'textarea',
    },
    {
      name: 'originalText',
      type: 'richText',
      admin: { description: 'The text as originally submitted, before any AI-assisted edits' },
    },
    {
      name: 'editedText',
      type: 'richText',
      admin: { description: 'Latest AI-agent-edited version' },
    },
    {
      // Stores a pointer + metadata from the Hugging Face editing agent
      // rather than the raw model I/O, so this collection doesn't bloat
      // as usage grows — the heavy payloads live on the HF side.
      name: 'aiEditLog',
      type: 'array',
      admin: { description: 'History of AI editing-agent passes on this article' },
      fields: [
        { name: 'timestamp', type: 'date', required: true },
        { name: 'modelEndpoint', type: 'text', required: true },
        { name: 'summary', type: 'textarea' },
        { name: 'huggingFaceRunId', type: 'text' },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: { position: 'sidebar', condition: (data) => data.status === 'published' },
    },
  ],
}
