'use client'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        padding: '1.5rem',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Something went wrong</h1>
      <p style={{ color: '#666', marginBottom: '0.5rem', maxWidth: '32rem' }}>
        The CMS hit a server error. Check the Vercel Runtime Logs for the full stack trace.
      </p>
      {error.digest && <p style={{ color: '#999', fontSize: '0.85rem' }}>Digest: {error.digest}</p>}
    </div>
  )
}
