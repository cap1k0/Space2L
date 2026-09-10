import type { Access, FieldAccess } from 'payload'

// Roles: 'admin' | 'editor' | 'reviewer' | 'author'
// Kept as a flat string union (not a separate collection) so access
// checks stay cheap — no extra relationship lookup on every request.

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user && user.role === 'admin')
}

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return Boolean(user && (user.role === 'admin' || user.role === 'editor'))
}

// Authors can read/update only documents linked to them — scales fine
// since it becomes a `where` clause, not an in-memory filter.
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
