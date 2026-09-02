export default function Credit({ theme }) {
  return (
    <a
      href="https://github.com/Zierax/I-Like-U"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Made by Zierax"
      className="font-silkscreen"
      style={{
        fontSize: '11px',
        color: theme.muted,
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        opacity: 0.75,
        transition: 'opacity 0.2s',
        letterSpacing: '0.08em',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
    >
      <span>[ MADE WITH ♥ BY</span>
      <span style={{ color: theme.accent, fontWeight: 700 }}>ZIERAX</span>
      <span>]</span>
    </a>
  )
}
