import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playConsoleButton, playHeartChirp, playSparkle } from '../lib/sound.js'
import { getSticker } from '../lib/theme.js'

export default function PixelConsole({
  children,
  theme,
  stickerKey = 'fragile',
  soundEnabled = true,
  onPressA,
  onPressB,
  onPressDpad,
}) {
  const [bToast, setBToast] = useState('')
  const [stickerWiggle, setStickerWiggle] = useState(false)
  const [floatingParticles, setFloatingParticles] = useState([])

  const sticker = getSticker(stickerKey)

  function handleButton(action, callback) {
    playConsoleButton(soundEnabled)

    if (action === 'B') {
      setBToast("Wait, don't press B! I spent 3 weeks building up the courage to show you this! 🙈")
      setTimeout(() => setBToast(''), 3500)
    }

    if (callback) callback()
  }

  function handleStickerTap() {
    playHeartChirp(soundEnabled)
    setStickerWiggle(true)
    setTimeout(() => setStickerWiggle(false), 600)
  }

  function handleScreenClick(e) {
    // Only spawn particle if clicked directly on screen background
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now() + Math.random()

    playSparkle(soundEnabled)
    setFloatingParticles((prev) => [...prev.slice(-8), { id, x, y }])
    setTimeout(() => {
      setFloatingParticles((prev) => prev.filter((p) => p.id !== id))
    }, 1000)
  }

  // Keyboard controls listener
  useEffect(() => {
    function handleKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleButton('A', onPressA)
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault()
        handleButton('B', onPressB)
      } else if (e.key.startsWith('Arrow')) {
        e.preventDefault()
        const dir = e.key.replace('Arrow', '').toLowerCase()
        handleButton(dir, () => onPressDpad && onPressDpad(dir))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onPressA, onPressB, onPressDpad, soundEnabled])

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 440,
        margin: '0 auto',
        userSelect: 'none',
        position: 'relative',
      }}
    >
      {/* Easter Egg: (B) Button Blush Speech Bubble */}
      <AnimatePresence>
        {bToast && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.9 }}
            className="font-silkscreen"
            style={{
              position: 'absolute',
              top: -46,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#FFE3EC',
              color: '#C9184A',
              border: `2px solid ${theme.border}`,
              padding: '8px 14px',
              borderRadius: 4,
              fontSize: '11px',
              lineHeight: 1.4,
              zIndex: 100,
              boxShadow: `3px 3px 0px ${theme.border}`,
              maxWidth: 320,
              textAlign: 'center',
            }}
          >
            {bToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Handheld Console Outer Body */}
      <div
        style={{
          background: theme.card || '#FFFFFF',
          border: `4px solid ${theme.border}`,
          borderRadius: 24,
          padding: '24px 20px 28px',
          boxShadow: `10px 10px 0px ${theme.shadow}`,
          position: 'relative',
        }}
      >
        {/* Customizable Crooked Masking Tape Sticker */}
        <motion.div
          onClick={handleStickerTap}
          animate={stickerWiggle ? { rotate: [3.5, -4, 5, -2, 3.5] } : { rotate: 3.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-silkscreen"
          style={{
            position: 'absolute',
            top: -14,
            right: 18,
            background: sticker.bg || '#FFF9D2',
            color: sticker.color || '#5C4314',
            border: `1.5px dashed ${theme.border}`,
            padding: '4px 10px',
            fontSize: '9px',
            fontWeight: 700,
            boxShadow: '1px 2px 0 rgba(0,0,0,0.15)',
            cursor: 'pointer',
            zIndex: 30,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
          title="Tap to wiggle sticker!"
        >
          <span>{sticker.label}</span>
        </motion.div>

        {/* Top Edge Notch Detail */}
        <div
          style={{
            position: 'absolute',
            top: -4,
            left: 30,
            right: 30,
            height: 4,
            background: theme.border,
            borderRadius: '4px 4px 0 0',
          }}
        />

        {/* Screen Bezel Frame */}
        <div
          style={{
            background: theme.border,
            borderRadius: 16,
            padding: '16px 14px 18px',
            boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3)',
            marginBottom: 24,
            position: 'relative',
          }}
        >
          {/* Bezel Top Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
              padding: '0 4px',
            }}
          >
            {/* Battery Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: '#FF3344',
                  boxShadow: '0 0 6px #FF3344',
                  display: 'inline-block',
                }}
              />
              <span className="font-pixel" style={{ fontSize: '7px', color: '#BBAACC' }}>
                BATTERY
              </span>
            </div>

            {/* Model Tag */}
            <span
              className="font-pixel"
              style={{
                fontSize: '7px',
                color: '#BBAACC',
                letterSpacing: '0.08em',
              }}
            >
              POCKET LOVE SYSTEM
            </span>
          </div>

          {/* Actual LCD Pixel Screen */}
          <div
            onClick={handleScreenClick}
            style={{
              background: theme.bg,
              border: '2px solid rgba(0,0,0,0.4)',
              borderRadius: 8,
              minHeight: 330,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.2)',
              cursor: 'crosshair',
            }}
          >
            {/* Interactive Screen Particle Spawner */}
            {floatingParticles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, scale: 0.6, y: 0 }}
                animate={{ opacity: 0, scale: 1.4, y: -30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: p.x,
                  top: p.y,
                  pointerEvents: 'none',
                  zIndex: 25,
                  fontSize: 16,
                }}
              >
                ♥
              </motion.div>
            ))}

            {/* Subtle Screen Scanline Texture */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.04) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 20,
              }}
            />

            {/* Screen Content */}
            <div style={{ position: 'relative', zIndex: 10, flex: 1, padding: '16px 14px', display: 'flex', flexDirection: 'column' }}>
              {children}
            </div>
          </div>
        </div>

        {/* Handheld Controls Deck */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 6px',
          }}
        >
          {/* 4-Way D-Pad */}
          <div
            style={{
              position: 'relative',
              width: 96,
              height: 96,
            }}
          >
            {/* D-Pad Center Base */}
            <div
              style={{
                position: 'absolute',
                left: 32,
                top: 32,
                width: 32,
                height: 32,
                background: theme.border,
                borderRadius: 2,
              }}
            />

            {/* Up Button */}
            <button
              type="button"
              onClick={() => handleButton('up', () => onPressDpad && onPressDpad('up'))}
              aria-label="D-Pad Up"
              style={{
                position: 'absolute',
                left: 32,
                top: 0,
                width: 32,
                height: 34,
                background: theme.border,
                border: 'none',
                borderRadius: '4px 4px 0 0',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: 10,
                boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.3)',
              }}
            >
              ▲
            </button>

            {/* Down Button */}
            <button
              type="button"
              onClick={() => handleButton('down', () => onPressDpad && onPressDpad('down'))}
              aria-label="D-Pad Down"
              style={{
                position: 'absolute',
                left: 32,
                bottom: 0,
                width: 32,
                height: 34,
                background: theme.border,
                border: 'none',
                borderRadius: '0 0 4px 4px',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: 10,
                boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.4)',
              }}
            >
              ▼
            </button>

            {/* Left Button */}
            <button
              type="button"
              onClick={() => handleButton('left', () => onPressDpad && onPressDpad('left'))}
              aria-label="D-Pad Left"
              style={{
                position: 'absolute',
                left: 0,
                top: 32,
                width: 34,
                height: 32,
                background: theme.border,
                border: 'none',
                borderRadius: '4px 0 0 4px',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: 10,
                boxShadow: 'inset 2px 0 0 rgba(255,255,255,0.3)',
              }}
            >
              ◀
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => handleButton('right', () => onPressDpad && onPressDpad('right'))}
              aria-label="D-Pad Right"
              style={{
                position: 'absolute',
                right: 0,
                top: 32,
                width: 34,
                height: 32,
                background: theme.border,
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: 10,
                boxShadow: 'inset -2px 0 0 rgba(0,0,0,0.4)',
              }}
            >
              ▶
            </button>
          </div>

          {/* (A) and (B) Action Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              transform: 'rotate(-20deg)',
              marginRight: 6,
            }}
          >
            {/* (B) Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button
                type="button"
                onClick={() => handleButton('B', onPressB)}
                aria-label="Action B"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: theme.accentDark || '#C9184A',
                  border: `3px solid ${theme.border}`,
                  boxShadow: `2px 3px 0px ${theme.border}`,
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: 'Press Start 2P, monospace',
                  display: 'grid',
                  placeItems: 'center',
                  transition: 'transform 0.08s, box-shadow 0.08s',
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = `2px 3px 0px ${theme.border}`
                }}
              >
                B
              </button>
              <span className="font-pixel" style={{ fontSize: '8px', color: theme.muted }}>
                BACK
              </span>
            </div>

            {/* (A) Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button
                type="button"
                onClick={() => handleButton('A', onPressA)}
                aria-label="Action A"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: theme.accent,
                  border: `3px solid ${theme.border}`,
                  boxShadow: `2px 3px 0px ${theme.border}`,
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: 'Press Start 2P, monospace',
                  display: 'grid',
                  placeItems: 'center',
                  transition: 'transform 0.08s, box-shadow 0.08s',
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = `2px 3px 0px ${theme.border}`
                }}
              >
                A
              </button>
              <span className="font-pixel" style={{ fontSize: '8px', color: theme.muted }}>
                SELECT
              </span>
            </div>
          </div>
        </div>

        {/* Lower Speaker Grille & Brand */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 26,
            padding: '0 8px',
          }}
        >
          {/* Select & Start Pills */}
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  width: 32,
                  height: 9,
                  background: theme.border,
                  borderRadius: 999,
                  transform: 'rotate(-25deg)',
                }}
              />
              <span className="font-pixel" style={{ fontSize: '6px', color: theme.muted }}>
                SELECT
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  width: 32,
                  height: 9,
                  background: theme.border,
                  borderRadius: 999,
                  transform: 'rotate(-25deg)',
                }}
              />
              <span className="font-pixel" style={{ fontSize: '6px', color: theme.muted }}>
                START
              </span>
            </div>
          </div>

          {/* Speaker Slits */}
          <div style={{ display: 'flex', gap: 5, transform: 'rotate(-25deg)' }}>
            <div style={{ width: 5, height: 26, background: theme.border, borderRadius: 999 }} />
            <div style={{ width: 5, height: 26, background: theme.border, borderRadius: 999 }} />
            <div style={{ width: 5, height: 26, background: theme.border, borderRadius: 999 }} />
            <div style={{ width: 5, height: 26, background: theme.border, borderRadius: 999 }} />
          </div>
        </div>
      </div>

      {/* Helpful controls hint below console */}
      <div
        className="font-silkscreen"
        style={{
          textAlign: 'center',
          marginTop: 14,
          fontSize: '11px',
          color: theme.muted,
          opacity: 0.8,
        }}
      >
        TIP: Tap screen for sparkles · (A) to continue · (B) to go back
      </div>
    </div>
  )
}
