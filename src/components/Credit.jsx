function GithubIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function InstagramIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Credit({ theme, align = 'center', compact = false }) {
  const t = theme || {
    border: '#3A1F2D',
    card: '#FFFFFF',
    ink: '#3A1F2D',
    accent: '#FF4370',
    muted: '#8E6577',
    highlight: '#FFE3EC',
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'flex-end' ? 'flex-end' : align === 'flex-start' ? 'flex-start' : 'center',
    gap: '6px',
    '--credit-border': t.border,
    '--credit-bg': t.card || '#FFFFFF',
    '--credit-ink': t.ink,
    '--credit-accent': t.accent,
    '--credit-highlight': t.highlight || '#FFF0F5',
  }

  return (
    <div className="credit-wrap" style={containerStyle}>
      <a
        href="https://github.com/Zierax/I-Like-U"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Made by Zierax"
        className="font-silkscreen"
        style={{
          fontSize: '11px',
          color: t.muted,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.85,
          transition: 'opacity 0.2s',
          letterSpacing: '0.08em',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
      >
        <span>[ MADE WITH ♥ BY</span>
        <span style={{ color: t.accent, fontWeight: 700 }}>ZIERAX</span>
        <span>]</span>
      </a>

      {!compact && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: align === 'flex-end' ? 'flex-end' : align === 'flex-start' ? 'flex-start' : 'center',
          }}
        >
          <a
            href="https://github.com/Zierax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub @Zierax"
            className="credit-social-btn"
            title="GitHub: @Zierax"
          >
            <GithubIcon size={12} />
            <span>GITHUB</span>
          </a>

          <a
            href="https://instagram.com/z14d.d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @z14d.d"
            className="credit-social-btn"
            title="Instagram: @z14d.d"
          >
            <InstagramIcon size={12} />
            <span>INSTAGRAM</span>
          </a>
        </div>
      )}
    </div>
  )
}
