export const themes = {
  blush: {
    id: 'blush',
    name: 'GameBoy Blush',
    desc: 'Pastel pink retro romance',
    previewColor: '#FF4370',
    bg: 'var(--blush-bg)',
    card: 'var(--blush-card)',
    border: 'var(--blush-border)',
    shadow: 'var(--blush-shadow)',
    accent: 'var(--blush-accent)',
    accentDark: 'var(--blush-accent-dark)',
    ink: 'var(--blush-ink)',
    muted: 'var(--blush-muted)',
    highlight: 'var(--blush-highlight)',
  },
  arcade: {
    id: 'arcade',
    name: 'Arcade Amber',
    desc: 'Warm nostalgic arcade',
    previewColor: '#F97316',
    bg: 'var(--arcade-bg)',
    card: 'var(--arcade-card)',
    border: 'var(--arcade-border)',
    shadow: 'var(--arcade-shadow)',
    accent: 'var(--arcade-accent)',
    accentDark: 'var(--arcade-accent-dark)',
    ink: 'var(--arcade-ink)',
    muted: 'var(--arcade-muted)',
    highlight: 'var(--arcade-highlight)',
  },
  starlight: {
    id: 'starlight',
    name: '8-Bit Midnight',
    desc: 'Retro indigo & gold stars',
    previewColor: '#FCD34D',
    bg: 'var(--starlight-bg)',
    card: 'var(--starlight-card)',
    border: 'var(--starlight-border)',
    shadow: 'var(--starlight-shadow)',
    accent: 'var(--starlight-accent)',
    accentDark: 'var(--starlight-accent-dark)',
    ink: 'var(--starlight-ink)',
    muted: 'var(--starlight-muted)',
    highlight: 'var(--starlight-highlight)',
  },
  mint: {
    id: 'mint',
    name: 'Retro Mint',
    desc: 'Classic Game Boy green',
    previewColor: '#10B981',
    bg: 'var(--mint-bg)',
    card: 'var(--mint-card)',
    border: 'var(--mint-border)',
    shadow: 'var(--mint-shadow)',
    accent: 'var(--mint-accent)',
    accentDark: 'var(--mint-accent-dark)',
    ink: 'var(--mint-ink)',
    muted: 'var(--mint-muted)',
    highlight: 'var(--mint-highlight)',
  },
}

// Backward-compatibility aliases
const aliases = {
  warm: 'blush',
  cool: 'starlight',
  playful: 'arcade',
  vintage: 'arcade',
  champagne: 'arcade',
  midnight: 'starlight',
  lavender: 'blush',
}

export function getTheme(key) {
  const resolved = aliases[key] || key
  return themes[resolved] || themes.blush
}

export function sanitizeName(raw) {
  if (!raw || typeof raw !== 'string') return 'Player 1'
  const t = raw.trim().slice(0, 32)
  if (!t) return 'Player 1'
  return t.replace(/[<>]/g, '')
}

export function buildLink({ name, from, theme, note }) {
  const n = encodeURIComponent(sanitizeName(name) || 'Player1')
  const params = new URLSearchParams()
  if (from && from.trim()) params.set('from', from.trim().slice(0, 32))
  if (theme && theme !== 'blush') params.set('theme', theme)
  if (note && note.trim()) params.set('note', note.trim().slice(0, 120))
  const qs = params.toString()
  return `/for/${n}${qs ? `?${qs}` : ''}`
}
