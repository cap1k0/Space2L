import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user && user.role === 'admin')
}

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return Boolean(user && (user.role === 'admin' || user.role === 'editor'))
}

export const isAdminEditorOrOwnAuthor: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === 'admin' || user.role === 'editor') return true
  if (user.role === 'author') {
    return {
      author: {
        equals: user.id,
      },
    }
  }
  return false
}

export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user)

export const publishedOnlyOrLoggedIn: Access = ({ req: { user } }) => {
  if (user) return true
  return {
    status: {
      equals: 'published',
    },
  }
}

export const adminFieldOnly: FieldAccess = ({ req: { user } }) => {
  return Boolean(user && user.role === 'admin')
}
