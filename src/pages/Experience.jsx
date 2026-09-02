import { useState, useMemo, useEffect } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getTheme, sanitizeName } from '../lib/theme.js'
import PixelConsole from '../components/PixelConsole.jsx'
import { PixelHeart, PixelCharacter, PixelEnvelope } from '../components/PixelSprites.jsx'
import Credit from '../components/Credit.jsx'
import {
  playTypeBlip,
  playBackspaceSound,
  playHeartChirp,
  playLetterOpenChime,
  playPuffSound,
} from '../lib/sound.js'
import { Volume2, VolumeX } from 'lucide-react'

function useDecodedParams() {
  const { name } = useParams()
  const [search] = useSearchParams()
  const raw = name ? decodeURIComponent(name) : 'Player 1'
  const display = sanitizeName(raw)
  const from = (search.get('from') || '').trim().slice(0, 32).replace(/[<>]/g, '')
  const customNote = (search.get('note') || '').trim().slice(0, 120).replace(/[<>]/g, '')
  const themeKey = search.get('theme') || 'blush'
  const theme = getTheme(themeKey)
  return { display, from, customNote, theme }
}

export default function Experience() {
  const { display, from, customNote, theme } = useDecodedParams()
  const [scene, setScene] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)

  function nextScene() {
    setScene((s) => Math.min(s + 1, 4))
  }

  function prevScene() {
    setScene((s) => Math.max(s - 1, 0))
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: theme.bg,
        color: theme.ink,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        userSelect: 'none',
      }}
    >
      {/* Sound Toggle Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: 440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          padding: '0 8px',
        }}
      >
        <Link
          to="/"
          className="font-pixel"
          style={{
            fontSize: '9px',
            color: theme.muted,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <PixelHeart size={14} color={theme.accent} border={theme.border} />
          <span>FOR {display.toUpperCase()}</span>
        </Link>

        <button
          type="button"
          onClick={() => setSoundEnabled(!soundEnabled)}
          aria-label="Toggle 8-bit sound"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: theme.muted,
          }}
          className="font-pixel"
        >
          {soundEnabled ? (
            <Volume2 size={16} color={theme.accent} />
          ) : (
            <VolumeX size={16} color={theme.muted} />
          )}
          <span style={{ fontSize: '8px' }}>{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
        </button>
      </div>

      {/* The Physical Retro Handheld Console */}
      <PixelConsole
        theme={theme}
        soundEnabled={soundEnabled}
        onPressA={() => {
          if (scene === 2) {
            playLetterOpenChime(soundEnabled)
          }
          nextScene()
        }}
        onPressB={prevScene}
      >
        <AnimatePresence mode="wait">
          {scene === 0 && (
            <ScreenBoot
              key="s0"
              display={display}
              from={from}
              theme={theme}
              soundEnabled={soundEnabled}
              onPressStart={nextScene}
            />
          )}

          {scene === 1 && (
            <ScreenHonestTalk
              key="s1"
              display={display}
              theme={theme}
              soundEnabled={soundEnabled}
              onNext={nextScene}
            />
          )}

          {scene === 2 && (
            <ScreenLittleThings
              key="s2"
              theme={theme}
              soundEnabled={soundEnabled}
              onNext={() => {
                playLetterOpenChime(soundEnabled)
                nextScene()
              }}
            />
          )}

          {scene === 3 && (
            <ScreenLetterReveal
              key="s3"
              display={display}
              customNote={customNote}
              theme={theme}
              soundEnabled={soundEnabled}
              onNext={nextScene}
            />
          )}

          {scene === 4 && (
            <ScreenKeepsake
              key="s4"
              display={display}
              from={from}
              theme={theme}
              onRestart={() => setScene(0)}
            />
          )}
        </AnimatePresence>
      </PixelConsole>

      {/* Subtle Developer Credit */}
      <div style={{ marginTop: 22 }}>
        <Credit theme={theme} />
      </div>
    </div>
  )
}

/* =========================================================
   SCREEN 0: CARTRIDGE BOOT
   (With Human Imperfection: Blow on cartridge prompt)
========================================================= */
function ScreenBoot({ display, from, theme, soundEnabled, onPressStart }) {
  const [blowing, setBlowing] = useState(false)

  function handleBlow() {
    playPuffSound(soundEnabled)
    setBlowing(true)
    setTimeout(() => setBlowing(false), 800)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Puff Effect Overlay */}
      <AnimatePresence>
        {blowing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1.2 }}
            exit={{ opacity: 0 }}
            className="font-pixel"
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#FFFFFF',
              border: `2px solid ${theme.border}`,
              padding: '6px 12px',
              fontSize: '10px',
              color: theme.accent,
              zIndex: 30,
              boxShadow: `3px 3px 0px ${theme.border}`,
            }}
          >
            *WHOOSH!* CARTRIDGE CLEANED ✨
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="font-pixel"
        style={{
          fontSize: '9px',
          color: theme.accent,
          letterSpacing: '0.1em',
          marginTop: 4,
        }}
      >
        ★ RETRO LOVE NOTE ★
      </div>

      <div style={{ margin: '10px 0' }} className="animate-pixel-float">
        <PixelCharacter size={68} isBlushing={blowing} />
      </div>

      <div>
        <div
          className="font-pixel"
          style={{
            fontSize: '14px',
            color: theme.ink,
            lineHeight: 1.4,
            marginBottom: 4,
          }}
        >
          HI, {display.toUpperCase()}!
        </div>

        <div
          className="font-silkscreen"
          style={{
            fontSize: '11px',
            color: theme.muted,
            lineHeight: 1.4,
            maxWidth: 240,
            margin: '0 auto 8px',
          }}
        >
          {from ? `From ${from} with care.` : 'A tiny 8-bit world built for you.'}
        </div>

        {/* Nostalgic "Blow on Cartridge" button */}
        <button
          type="button"
          onClick={handleBlow}
          className="font-silkscreen"
          style={{
            background: 'transparent',
            border: `1px dashed ${theme.border}`,
            color: theme.muted,
            fontSize: '9px',
            padding: '3px 8px',
            borderRadius: 2,
            cursor: 'pointer',
          }}
        >
          💨 IF SCREEN FREEZES: BLOW ON CARTRIDGE
        </button>
      </div>

      {/* Blinking Press Start Prompt */}
      <motion.button
        type="button"
        onClick={onPressStart}
        whileTap={{ scale: 0.95 }}
        className="font-pixel pixel-blink"
        style={{
          background: 'transparent',
          border: 'none',
          color: theme.accent,
          fontSize: '11px',
          cursor: 'pointer',
          padding: '8px 0',
        }}
      >
        ▶ PRESS (A) TO START ▼
      </motion.button>
    </motion.div>
  )
}

/* =========================================================
   SCREEN 1: SINCERE HONEST TALK
   (With Human Imperfection: Hesitation, Backspace & Real Truth)
========================================================= */
function ScreenHonestTalk({ display, theme, soundEnabled, onNext }) {
  const tentativeText = `I was just wondering if maybe we could hang out some—`
  const honestTruth = `Actually...\nI don't just want to 'hang out'.\nI can write hundreds of lines of code, but saying how I feel in person? I freeze up.\nSo I spent hours building this little 8-bit note for you instead.`

  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing_tentative') // typing_tentative -> pausing -> backspacing -> typing_truth -> done

  useEffect(() => {
    let timer

    // Phase 1: Type tentative thought
    if (phase === 'typing_tentative') {
      let idx = 0
      timer = setInterval(() => {
        idx++
        if (idx <= tentativeText.length) {
          setText(tentativeText.slice(0, idx))
          if (idx % 2 === 0) playTypeBlip(soundEnabled)
        } else {
          clearInterval(timer)
          // Pause before hesitating & backspacing
          setTimeout(() => setPhase('backspacing'), 700)
        }
      }, 45)
    }

    // Phase 2: Backspace tentatively
    else if (phase === 'backspacing') {
      let current = tentativeText
      timer = setInterval(() => {
        if (current.length > 0) {
          current = current.slice(0, -1)
          setText(current)
          playBackspaceSound(soundEnabled)
        } else {
          clearInterval(timer)
          // Pause a beat after clearing, then type the honest truth
          setTimeout(() => setPhase('typing_truth'), 350)
        }
      }, 25)
    }

    // Phase 3: Type the honest truth
    else if (phase === 'typing_truth') {
      let idx = 0
      timer = setInterval(() => {
        idx++
        if (idx <= honestTruth.length) {
          setText(honestTruth.slice(0, idx))
          if (idx % 3 === 0) playTypeBlip(soundEnabled)
        } else {
          clearInterval(timer)
          setPhase('done')
        }
      }, 38)
    }

    return () => clearInterval(timer)
  }, [phase, soundEnabled, tentativeText, honestTruth])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Screen Header */}
      <div
        className="font-pixel"
        style={{
          fontSize: '8px',
          color: theme.muted,
          borderBottom: `1px dashed ${theme.border}`,
          paddingBottom: 6,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>[ DIALOGUE ]</span>
        <span>1/3</span>
      </div>

      {/* Sincere RPG Dialogue Box with Backspace Effect */}
      <div
        className="font-silkscreen"
        style={{
          background: '#FFFFFF',
          border: `2px solid ${theme.border}`,
          borderRadius: 4,
          padding: '14px 12px',
          fontSize: '12px',
          lineHeight: 1.6,
          color: theme.ink,
          minHeight: 190,
          whiteSpace: 'pre-line',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        {text}
        {phase !== 'done' && (
          <span className="pixel-blink" style={{ color: theme.accent, marginLeft: 2 }}>
            ▍
          </span>
        )}
      </div>

      {/* Next Prompt */}
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <button
          type="button"
          onClick={onNext}
          className="font-pixel pixel-blink"
          style={{
            background: 'transparent',
            border: 'none',
            color: theme.accent,
            fontSize: '10px',
            cursor: 'pointer',
          }}
        >
          PRESS (A) TO CONTINUE ▼
        </button>
      </div>
    </motion.div>
  )
}

/* =========================================================
   SCREEN 2: THE 3 LITTLE THINGS (SWEET REASONS)
========================================================= */
function ScreenLittleThings({ theme, soundEnabled, onNext }) {
  const items = [
    {
      id: 0,
      title: 'YOUR SMILE',
      icon: '★',
      text: 'It completely brightens any room. Impossible not to notice.',
    },
    {
      id: 1,
      title: 'OUR TALKS',
      icon: '💬',
      text: 'Even the simplest conversation with you is the highlight of my day.',
    },
    {
      id: 2,
      title: 'YOUR LAUGH',
      icon: '♥',
      text: '10/10 pure joy. It instantly makes everything feel lighter.',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  function selectItem(idx) {
    playHeartChirp(soundEnabled)
    setActiveIdx(idx)
  }

  const activeItem = items[activeIdx]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        className="font-pixel"
        style={{
          fontSize: '8px',
          color: theme.muted,
          borderBottom: `1px dashed ${theme.border}`,
          paddingBottom: 6,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>[ REASONS ]</span>
        <span>2/3</span>
      </div>

      {/* 3 Selector Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, margin: '8px 0' }}>
        {items.map((it, idx) => {
          const isSel = idx === activeIdx
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => selectItem(idx)}
              className="font-silkscreen"
              style={{
                background: isSel ? theme.accent : '#FFFFFF',
                color: isSel ? '#FFFFFF' : theme.ink,
                border: `2px solid ${theme.border}`,
                padding: '8px 4px',
                borderRadius: 2,
                cursor: 'pointer',
                fontSize: '10px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              <div>{it.icon}</div>
              <div style={{ marginTop: 2 }}>{it.title}</div>
            </button>
          )
        })}
      </div>

      {/* Detail Card */}
      <div
        className="font-silkscreen"
        style={{
          background: '#FFFFFF',
          border: `2px solid ${theme.border}`,
          borderRadius: 4,
          padding: '14px 12px',
          fontSize: '13px',
          lineHeight: 1.5,
          color: theme.ink,
          minHeight: 120,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ color: theme.accent, fontWeight: 700, marginBottom: 6 }}>
          {activeItem.title}
        </div>
        <div>"{activeItem.text}"</div>
      </div>

      {/* Continue Prompt */}
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <button
          type="button"
          onClick={onNext}
          className="font-pixel pixel-blink"
          style={{
            background: 'transparent',
            border: 'none',
            color: theme.accent,
            fontSize: '10px',
            cursor: 'pointer',
          }}
        >
          PRESS (A) TO UNLOCK LETTER ▼
        </button>
      </div>
    </motion.div>
  )
}

/* =========================================================
   SCREEN 3: THE SECRET LETTER REVEAL
   (With Human Imperfection: Crossed-out handwritten word)
========================================================= */
function ScreenLetterReveal({ display, customNote, theme, onNext }) {
  const [opened, setOpened] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      <div
        className="font-pixel"
        style={{
          fontSize: '8px',
          color: theme.muted,
          width: '100%',
          borderBottom: `1px dashed ${theme.border}`,
          paddingBottom: 6,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>[ THE CONFESSION ]</span>
        <span>3/3</span>
      </div>

      {/* Centerpiece: Pixel Letter Envelope */}
      <div style={{ margin: '14px 0' }}>
        {!opened ? (
          <div
            onClick={() => setOpened(true)}
            style={{ cursor: 'pointer' }}
            className="animate-pixel-float"
          >
            <PixelEnvelope size={90} isOpen={false} />
            <div
              className="font-pixel"
              style={{
                fontSize: '9px',
                color: theme.accent,
                marginTop: 10,
              }}
            >
              [ TAP TO OPEN ]
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              background: '#FFFFFF',
              border: `2px solid ${theme.border}`,
              padding: '16px 12px',
              borderRadius: 4,
              maxWidth: 260,
              boxShadow: `4px 4px 0px ${theme.border}`,
            }}
          >
            <div style={{ marginBottom: 6 }}>
              <PixelHeart size={32} color={theme.accent} border={theme.border} />
            </div>

            <div
              className="font-pixel"
              style={{
                fontSize: '17px',
                color: theme.accent,
                lineHeight: 1.3,
                marginBottom: 8,
              }}
            >
              I LIKE YOU.
            </div>

            {/* Human Imperfection: Crossed-out handwritten word */}
            <div
              className="font-silkscreen"
              style={{
                fontSize: '11px',
                color: theme.ink,
                margin: '6px 0',
              }}
            >
              You are really{' '}
              <span
                style={{
                  textDecoration: 'line-through',
                  textDecorationColor: '#FF4370',
                  textDecorationThickness: '2px',
                  opacity: 0.5,
                }}
              >
                nice
              </span>{' '}
              <span style={{ color: theme.accent, fontWeight: 700 }}>extraordinary</span>.
            </div>

            {customNote && (
              <div
                className="font-silkscreen"
                style={{
                  fontSize: '11px',
                  color: theme.ink,
                  background: '#FFF5F7',
                  border: `1px dashed ${theme.border}`,
                  padding: '6px 8px',
                  margin: '8px 0',
                }}
              >
                "{customNote}"
              </div>
            )}

            <div
              className="font-silkscreen"
              style={{
                fontSize: '10px',
                color: theme.muted,
                lineHeight: 1.4,
              }}
            >
              For {display}. No pressure, no expectations. Just wanted you to know how special you are.
            </div>
          </motion.div>
        )}
      </div>

      {/* Button Action */}
      <div style={{ width: '100%' }}>
        {!opened ? (
          <button
            type="button"
            onClick={() => setOpened(true)}
            className="font-pixel pixel-blink"
            style={{
              background: 'transparent',
              border: 'none',
              color: theme.accent,
              fontSize: '10px',
              cursor: 'pointer',
            }}
          >
            PRESS (A) TO OPEN LETTER ▼
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="font-pixel pixel-blink"
            style={{
              background: 'transparent',
              border: 'none',
              color: theme.accent,
              fontSize: '10px',
              cursor: 'pointer',
            }}
          >
            PRESS (A) FOR ENDING ▼
          </button>
        )}
      </div>
    </motion.div>
  )
}

/* =========================================================
   SCREEN 4: QUEST COMPLETE / FINAL KEEPSAKE
========================================================= */
function ScreenKeepsake({ display, from, theme, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      <div
        className="font-pixel"
        style={{
          fontSize: '9px',
          color: '#10B981',
          letterSpacing: '0.08em',
        }}
      >
        ★ QUEST COMPLETE ★
      </div>

      <div style={{ margin: '10px 0' }} className="animate-pixel-heart">
        <PixelHeart size={48} color={theme.accent} border={theme.border} />
      </div>

      <div>
        <div
          className="font-pixel"
          style={{
            fontSize: '12px',
            color: theme.ink,
            marginBottom: 6,
            lineHeight: 1.4,
          }}
        >
          {display.toUpperCase()}, YOU ARE SPECIAL.
        </div>

        <div
          className="font-silkscreen"
          style={{
            fontSize: '11px',
            color: theme.accent,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {from ? `[ WITH CARE, FROM ${from.toUpperCase()} ]` : '[ WITH GENUINE CARE ]'}
        </div>

        <div
          className="font-silkscreen"
          style={{
            fontSize: '10px',
            color: theme.muted,
            lineHeight: 1.4,
            maxWidth: 240,
            margin: '0 auto',
          }}
        >
          Building this was the easiest choice in the world. Hope it brought a smile to your face!
        </div>
      </div>

      {/* Buttons inside screen */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 220 }}>
        <Link
          to="/"
          className="font-pixel"
          style={{
            background: theme.accent,
            color: '#FFFFFF',
            border: `2px solid ${theme.border}`,
            padding: '8px 12px',
            fontSize: '9px',
            textDecoration: 'none',
            borderRadius: 2,
            boxShadow: `2px 2px 0px ${theme.border}`,
            display: 'inline-block',
          }}
        >
          MAKE YOUR OWN NOTE
        </Link>

        <button
          type="button"
          onClick={onRestart}
          className="font-pixel"
          style={{
            background: '#FFFFFF',
            color: theme.ink,
            border: `2px solid ${theme.border}`,
            padding: '8px 12px',
            fontSize: '9px',
            cursor: 'pointer',
            borderRadius: 2,
            boxShadow: `2px 2px 0px ${theme.border}`,
          }}
        >
          ↺ REPLAY QUEST
        </button>
      </div>
    </motion.div>
  )
}
