// Rich, Warm 8-Bit Chiptune & Procedural Lofi Ambient Engine
let audioCtx = null
let bgmInterval = null
let isBgmPlaying = false

function getAudioContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (AudioContext) {
      audioCtx = new AudioContext()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

// Procedural 8-bit Lofi Lullaby Music Loop
// Plays a warm, soothing chord arpeggio progression (Cmaj7 -> Am9 -> Fmaj7 -> Gsus4)
const BGM_ARPEGGIOS = [
  // Cmaj7
  [261.63, 329.63, 392.00, 493.88, 523.25, 493.88, 392.00, 329.63],
  // Am9
  [220.00, 261.63, 329.63, 392.00, 493.88, 392.00, 329.63, 261.63],
  // Fmaj7
  [174.61, 220.00, 261.63, 329.63, 392.00, 329.63, 261.63, 220.00],
  // Gsus4 / G
  [196.00, 246.94, 293.66, 392.00, 440.00, 392.00, 293.66, 246.94],
]

let bgmMeasure = 0
let bgmStep = 0

export function startBgm() {
  const ctx = getAudioContext()
  if (!ctx || bgmInterval) return
  isBgmPlaying = true

  bgmInterval = setInterval(() => {
    if (!isBgmPlaying) return
    try {
      const now = ctx.currentTime
      const chord = BGM_ARPEGGIOS[bgmMeasure]
      const freq = chord[bgmStep]

      // Soft music box oscillator
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, now)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1200, now)

      // Very soft, relaxing volume
      gain.gain.setValueAtTime(0.018, now)
      gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.32)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.32)

      // Step sequencer
      bgmStep++
      if (bgmStep >= chord.length) {
        bgmStep = 0
        bgmMeasure = (bgmMeasure + 1) % BGM_ARPEGGIOS.length
      }
    } catch {}
  }, 220)
}

export function stopBgm() {
  isBgmPlaying = false
  if (bgmInterval) {
    clearInterval(bgmInterval)
    bgmInterval = null
  }
}

export function toggleBgm(enabled) {
  if (enabled) {
    startBgm()
  } else {
    stopBgm()
  }
}

// Gentle text typing blip
export function playTypeBlip(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = 'square'
    osc.frequency.setValueAtTime(360 + Math.random() * 60, now)

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(1400, now)

    gain.gain.setValueAtTime(0.025, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.04)
  } catch {}
}

// Gentle backspace key sound
export function playBackspaceSound(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(240, now)
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.03)

    gain.gain.setValueAtTime(0.03, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.03)
  } catch {}
}

// Tactile Game Boy button click
export function playConsoleButton(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(480, now)
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.05)

    gain.gain.setValueAtTime(0.045, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.05)
  } catch {}
}

// Warm heart chirp / level up sound
export function playHeartChirp(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(440, now)
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12)

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(1800, now)

    gain.gain.setValueAtTime(0.04, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16)

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.16)
  } catch {}
}

// Character jump chirp
export function playJump(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(300, now)
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.1)

    gain.gain.setValueAtTime(0.03, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.1)
  } catch {}
}

// Sparkle sound effect (crystalline 3-note sparkle)
export function playSparkle(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const notes = [1046.50, 1318.51, 1567.98] // C6, E6, G6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + i * 0.04)

      gain.gain.setValueAtTime(0.03, now + i * 0.04)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.1)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + i * 0.04)
      osc.stop(now + i * 0.04 + 0.1)
    })
  } catch {}
}

// Retro letter opening chime / fan-fare (sweet music box arpeggio)
export function playLetterOpenChime(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const notes = [
      { f: 523.25, t: 0.00, d: 0.09 }, // C5
      { f: 659.25, t: 0.08, d: 0.09 }, // E5
      { f: 783.99, t: 0.16, d: 0.10 }, // G5
      { f: 1046.50, t: 0.25, d: 0.40 }, // C6
    ]

    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(f, now + t)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(2200, now + t)

      gain.gain.setValueAtTime(0.05, now + t)
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + d)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + t)
      osc.stop(now + t + d)
    })
  } catch {}
}

// Blow on cartridge puff noise
export function playPuffSound(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const bufferSize = ctx.sampleRate * 0.2
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4))
    }

    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(800, now)
    filter.Q.setValueAtTime(1.5, now)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.08, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    noise.start(now)
  } catch {}
}

// Backward-compatible alias exports
export const play8BitSelect = playConsoleButton
export const play8BitVictory = playLetterOpenChime
export const play8BitHeart = playHeartChirp
export const play8BitBlip = playTypeBlip
export const play8BitItem = playHeartChirp
