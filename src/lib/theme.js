export const themes = {
  blush: {
    id: 'blush',
    name: 'Pocket Sakura',
    desc: 'Soft pastel rose & cream',
    previewColor: '#FF4370',
    bg: '#FFF0F5',
    card: '#FFFFFF',
    border: '#3A1F2D',
    shadow: '#FFA6C9',
    accent: '#FF4370',
    accentDark: '#C9184A',
    ink: '#3A1F2D',
    muted: '#8E6577',
    highlight: '#FFE3EC',
  },
  atomic: {
    id: 'atomic',
    name: 'Atomic Purple',
    desc: 'Clear 90s retro violet',
    previewColor: '#9333EA',
    bg: '#F5F0FF',
    card: '#FAF5FF',
    border: '#2E1065',
    shadow: '#C084FC',
    accent: '#9333EA',
    accentDark: '#6B21A8',
    ink: '#2E1065',
    muted: '#7E22CE',
    highlight: '#E9D5FF',
  },
  classic: {
    id: 'classic',
    name: '1989 Classic',
    desc: 'Original Game Boy gray',
    previewColor: '#9CA3AF',
    bg: '#F3F4F6',
    card: '#FFFFFF',
    border: '#1F2937',
    shadow: '#9CA3AF',
    accent: '#881337',
    accentDark: '#4C0519',
    ink: '#1F2937',
    muted: '#4B5563',
    highlight: '#E5E7EB',
  },
  mint: {
    id: 'mint',
    name: 'Retro Mint',
    desc: 'Classic Game Boy green',
    previewColor: '#10B981',
    bg: '#EEF8F1',
    card: '#FFFFFF',
    border: '#163824',
    shadow: '#A7F3D0',
    accent: '#10B981',
    accentDark: '#047857',
    ink: '#163824',
    muted: '#567F68',
    highlight: '#D1FAE5',
  },
  starlight: {
    id: 'starlight',
    name: '8-Bit Midnight',
    desc: 'Deep indigo & gold stars',
    previewColor: '#FCD34D',
    bg: '#141026',
    card: '#231B3D',
    border: '#FCD34D',
    shadow: '#4A3B69',
    accent: '#FCD34D',
    accentDark: '#D97706',
    ink: '#FAF7F2',
    muted: '#B4A9CE',
    highlight: '#332752',
  },
}

// Experience Modes
export const modes = {
  romantic: {
    id: 'romantic',
    name: 'Romantic Confession',
    tagline: 'Because saying it in person makes me freeze up.',
    badge: 'I REALLY LIKE YOU.',
    tentativeText: 'I was just wondering if maybe we could hang out some—',
    honestTruth: (display) =>
      `Actually...\nI don't just want to 'hang out'.\nI can write hundreds of lines of code, but saying how I feel to you? I completely freeze up.\nSo I spent hours building this little 8-bit note for you instead.`,
  },
  crush: {
    id: 'crush',
    name: 'Secret Crush',
    tagline: 'The secret I have been hiding for a while.',
    badge: 'I HAVE A CRUSH ON YOU.',
    tentativeText: 'Hey... I have been trying to find the right time to say this—',
    honestTruth: (display) =>
      `Actually...\nThere is never a 'perfect' time.\nEvery time you smile or say my name, my entire day gets 100x better.\nI have had a crush on you for a while now, ${display}.`,
  },
  playful: {
    id: 'playful',
    name: 'Playful & Teasing',
    tagline: 'You are officially my favorite human.',
    badge: 'YOU ARE MY FAVORITE.',
    tentativeText: 'I was thinking of sending you a meme, but—',
    honestTruth: (display) =>
      `Actually...\nA simple meme isn't enough for you, ${display}.\nYou are easily the funniest, coolest, and sweetest person around.\nJust wanted to make you smile today!`,
  },
  appreciation: {
    id: 'appreciation',
    name: 'Pure Appreciation',
    tagline: 'A little reminder of how wonderful you are.',
    badge: 'YOU ARE INCREDIBLE.',
    tentativeText: "I usually don't say cheesy stuff, but—",
    honestTruth: (display) =>
      `Actually...\nYou deserve to hear this, ${display}.\nYour kindness and energy make the world a much brighter place.\nThank you for simply being you.`,
  },
}

// Console Stickers
export const stickers = {
  fragile: {
    id: 'fragile',
    label: '⚠ FRAGILE HEART · HANDLE WITH CARE',
    bg: '#FFF9D2',
    color: '#5C4314',
  },
  player2: {
    id: 'player2',
    label: '★ PLAYER 2 NEEDED · INQUIRE WITHIN',
    bg: '#FFE3EC',
    color: '#C9184A',
  },
  shy: {
    id: 'shy',
    label: '♥ PROPERTY OF A VERY SHY PERSON',
    bg: '#E0F2FE',
    color: '#0369A1',
  },
  secret: {
    id: 'secret',
    label: '🔒 TOP SECRET CARTRIDGE · FOR YOUR EYES ONLY',
    bg: '#F3E8FF',
    color: '#6B21A8',
  },
}

export function getTheme(key) {
  return themes[key] || themes.blush
}

export function getMode(key) {
  return modes[key] || modes.romantic
}

export function getSticker(key) {
  return stickers[key] || stickers.fragile
}

export function sanitizeName(raw) {
  if (!raw || typeof raw !== 'string') return 'Player 1'
  const t = raw.trim().slice(0, 32)
  if (!t) return 'Player 1'
  return t.replace(/[<>]/g, '')
}

export function buildLink({ name, from, theme, mode, sticker, note }) {
  const n = encodeURIComponent(sanitizeName(name) || 'Maya')
  const params = new URLSearchParams()
  if (from && from.trim()) params.set('from', from.trim().slice(0, 32))
  if (theme && theme !== 'blush') params.set('theme', theme)
  if (mode && mode !== 'romantic') params.set('mode', mode)
  if (sticker && sticker !== 'fragile') params.set('sticker', sticker)
  if (note && note.trim()) params.set('note', note.trim().slice(0, 120))
  const qs = params.toString()
  return `/for/${n}${qs ? `?${qs}` : ''}`
}
