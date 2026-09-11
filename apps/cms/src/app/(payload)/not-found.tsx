export default function NotFound() {
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
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Access denied</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        You don&apos;t have access to this page, or it doesn&apos;t exist.
      </p>
      <a href="/admin" style={{ color: '#2563eb', textDecoration: 'underline' }}>
        Go to admin
      </a>
    </div>
  )
}
