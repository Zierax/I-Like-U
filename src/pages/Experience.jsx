import { useState, useMemo, useEffect } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getTheme, getMode, getDialogueIntro, sanitizeName } from '../lib/theme.js'
import PixelConsole from '../components/PixelConsole.jsx'
import { PixelHeart, PixelCharacter, PixelEnvelope } from '../components/PixelSprites.jsx'
import Credit from '../components/Credit.jsx'
import {
  playTypeBlip,
  playBackspaceSound,
  playHeartChirp,
  playLetterOpenChime,
  playPuffSound,
  playJump,
  toggleBgm,
  stopBgm,
} from '../lib/sound.js'
import { Volume2, VolumeX, Music } from 'lucide-react'

function useDecodedParams() {
  const { name } = useParams()
  const [search] = useSearchParams()
  const raw = name ? decodeURIComponent(name) : 'Player 1'
  const display = sanitizeName(raw)
  const from = (search.get('from') || '').trim().slice(0, 32).replace(/[<>]/g, '')
  const customNote = (search.get('note') || '').trim().slice(0, 120).replace(/[<>]/g, '')
  const customIntro = (search.get('intro_text') || '').trim().slice(0, 240).replace(/[<>]/g, '')
  const themeKey = search.get('theme') || 'blush'
  const modeKey = search.get('mode') || 'romantic'
  const stickerKey = search.get('sticker') || 'fragile'
  const avatarKey = search.get('avatar') || 'kitty'
  const introKey = search.get('intro') || 'dev'

  const theme = getTheme(themeKey)
  const mode = getMode(modeKey)
  const intro = getDialogueIntro(introKey)

  return { display, from, customNote, customIntro, theme, mode, stickerKey, avatarKey, intro }
}

export default function Experience() {
  const { display, from, customNote, customIntro, theme, mode, stickerKey, avatarKey, intro } = useDecodedParams()
  const [scene, setScene] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [bgmEnabled, setBgmEnabled] = useState(false)

  function nextScene() {
    setScene((s) => Math.min(s + 1, 4))
  }

  function prevScene() {
    setScene((s) => Math.max(s - 1, 0))
  }

  function toggleMusic() {
    const next = !bgmEnabled
    setBgmEnabled(next)
    toggleBgm(next)
  }

  useEffect(() => {
    return () => {
      stopBgm()
    }
  }, [])

  return (
    <div
      className="gameboy-page-wrap"
      style={{
        minHeight: '100dvh',
        background: theme.bg,
        color: theme.ink,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        userSelect: 'none',
        overflowX: 'hidden',
      }}
    >
      {/* Audio Controls Bar */}
      <div
        className="gameboy-top-bar"
        style={{
          width: '100%',
          maxWidth: 440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
          padding: '0 6px',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Lofi BGM Toggle */}
          <button
            type="button"
            onClick={toggleMusic}
            aria-label="Toggle Lofi Music"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: bgmEnabled ? theme.accent : theme.muted,
            }}
            className="font-pixel"
          >
            <Music size={14} color={bgmEnabled ? theme.accent : theme.muted} />
            <span style={{ fontSize: '8px' }}>{bgmEnabled ? 'BGM: ON' : 'BGM: OFF'}</span>
          </button>

          {/* SFX Toggle */}
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
              gap: 4,
              color: theme.muted,
            }}
            className="font-pixel"
          >
            {soundEnabled ? (
              <Volume2 size={15} color={theme.accent} />
            ) : (
              <VolumeX size={15} color={theme.muted} />
            )}
            <span style={{ fontSize: '8px' }}>{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>
        </div>
      </div>

      {/* The Physical Retro Handheld Console */}
      <PixelConsole
        theme={theme}
        stickerKey={stickerKey}
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
              avatar={avatarKey}
              soundEnabled={soundEnabled}
              onPressStart={nextScene}
            />
          )}

          {scene === 1 && (
            <ScreenHonestTalk
              key="s1"
              display={display}
              from={from}
              theme={theme}
              mode={mode}
              intro={intro}
              customIntro={customIntro}
              soundEnabled={soundEnabled}
              onNext={nextScene}
            />
          )}

          {scene === 2 && (
            <ScreenLittleThings
              key="s2"
              theme={theme}
              mode={mode}
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
              mode={mode}
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
              mode={mode}
              avatar={avatarKey}
              onRestart={() => setScene(0)}
            />
          )}
        </AnimatePresence>
      </PixelConsole>

      {/* Subtle Developer Credit */}
      <div className="gameboy-footer-credit" style={{ marginTop: 16 }}>
        <Credit theme={theme} />
      </div>
    </div>
  )
}

/* =========================================================
   SCREEN 0: CARTRIDGE BOOT
   (Interactive jumping character + blow on cartridge)
========================================================= */
function ScreenBoot({ display, from, theme, avatar = 'cat', soundEnabled, onPressStart }) {
  const [blowing, setBlowing] = useState(false)
  const [jumping, setJumping] = useState(false)

  function handleBlow() {
    playPuffSound(soundEnabled)
    setBlowing(true)
    setTimeout(() => setBlowing(false), 800)
  }

  function handleCharacterTap() {
    playJump(soundEnabled)
    setJumping(true)
    setTimeout(() => setJumping(false), 400)
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

      {/* Interactive Jumping Character / Cat */}
      <motion.div
        onClick={handleCharacterTap}
        animate={jumping ? { y: [-14, 0], rotate: [0, -8, 8, 0] } : {}}
        transition={{ duration: 0.35 }}
        whileHover={{ scale: 1.1 }}
        style={{ margin: '10px 0', cursor: 'pointer' }}
        title="Tap me to jump!"
        className="animate-pixel-float"
      >
        <PixelCharacter avatar={avatar} size={76} isBlushing={blowing || jumping} />
      </motion.div>

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
   (Using custom dialogue story & backspace hesitation effect)
========================================================= */
function ScreenHonestTalk({ display, from, theme, mode, intro, customIntro, soundEnabled, onNext }) {
  // Resolve mode-aware intro text: intro.tentativeText/honestTruth are now { romantic: '...', crush: '...', ... }
  const modeId = mode?.id || 'romantic'
  const resolvedTentative = intro?.tentativeText
    ? (typeof intro.tentativeText === 'string' ? intro.tentativeText : intro.tentativeText[modeId] || intro.tentativeText.romantic)
    : mode.tentativeText
  const resolvedHonest = customIntro || (intro?.honestTruth
    ? (typeof intro.honestTruth === 'function'
        ? intro.honestTruth(display, from)
        : (intro.honestTruth[modeId] || intro.honestTruth.romantic)(display, from))
    : mode.honestTruth(display, from))

  const tentativeText = resolvedTentative
  const honestTruth = resolvedHonest

  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing_tentative')

  useEffect(() => {
    let timer

    if (phase === 'typing_tentative') {
      let idx = 0
      timer = setInterval(() => {
        idx++
        if (idx <= tentativeText.length) {
          setText(tentativeText.slice(0, idx))
          if (idx % 2 === 0) playTypeBlip(soundEnabled)
        } else {
          clearInterval(timer)
          setTimeout(() => setPhase('backspacing'), 700)
        }
      }, 45)
    } else if (phase === 'backspacing') {
      let current = tentativeText
      timer = setInterval(() => {
        if (current.length > 0) {
          current = current.slice(0, -1)
          setText(current)
          playBackspaceSound(soundEnabled)
        } else {
          clearInterval(timer)
          setTimeout(() => setPhase('typing_truth'), 350)
        }
      }, 25)
    } else if (phase === 'typing_truth') {
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
   SCREEN 2: THE 3 LITTLE THINGS
========================================================= */
function ScreenLittleThings({ theme, mode, soundEnabled, onNext }) {
  const items = mode?.reasons || [
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
   (Using mode.badge banner)
========================================================= */
function ScreenLetterReveal({ display, customNote, theme, mode, onNext }) {
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
                fontSize: '15px',
                color: theme.accent,
                lineHeight: 1.3,
                marginBottom: 8,
              }}
            >
              {mode.badge}
            </div>

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
                {mode?.crossedOut?.strikethrough || 'nice'}
              </span>{' '}
              <span style={{ color: theme.accent, fontWeight: 700 }}>
                {mode?.crossedOut?.replacement || 'extraordinary'}
              </span>.
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
              {mode?.subtitle ? mode.subtitle(display) : `For ${display}. No pressure, no expectations. Just wanted you to know how special you are.`}
            </div>
          </motion.div>
        )}
      </div>

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
function ScreenKeepsake({ display, from, theme, mode, avatar = 'kitty', onRestart }) {
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

      <div style={{ margin: '8px 0' }} className="animate-pixel-float">
        <PixelCharacter avatar={avatar} size={70} isBlushing={true} />
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
          {mode?.victoryText || 'Building this was the easiest choice in the world. Hope it brought a smile to your face!'}
        </div>
      </div>

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
