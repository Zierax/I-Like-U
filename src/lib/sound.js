// Warm, Gentle 8-Bit Chiptune Synthesizer
let audioCtx = null

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

// Gentle text typing blip (warm filtered square wave)
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

// Tactile button click sound
export function playConsoleButton(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(440, now)
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.06)

    gain.gain.setValueAtTime(0.05, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.06)
  } catch {}
}

// Warm heart chirp (ascending 2-note arpeggio)
export function playHeartChirp(enabled = true) {
  if (!enabled) return
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = 'square'
    osc.frequency.setValueAtTime(523.25, now) // C5
    osc.frequency.setValueAtTime(659.25, now + 0.07) // E5

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(1600, now)

    gain.gain.setValueAtTime(0.035, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16)

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.16)
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
      { f: 1046.50, t: 0.25, d: 0.35 }, // C6
    ]

    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(f, now + t)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(2000, now + t)

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

    // White noise buffer for blowing sound
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
