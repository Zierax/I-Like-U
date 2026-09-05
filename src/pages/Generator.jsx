import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Copy, Share2, QrCode, ExternalLink, Check } from 'lucide-react'
import { themes, modes, stickers, dialogueIntros, buildLink, sanitizeName, getTheme } from '../lib/theme.js'
import { NOTE_CATALOG, getRandomNote } from '../lib/messages.js'
import Credit from '../components/Credit.jsx'
import { PixelHeart } from '../components/PixelSprites.jsx'
import { playConsoleButton, playHeartChirp, playSparkle } from '../lib/sound.js'

export default function Generator() {
  useEffect(() => {
    document.title = 'Cartridge Builder · I Like U · 8-Bit Retro Love Note Generator'
  }, [])

  const [theirName, setTheirName] = useState('')
  const [yourName, setYourName] = useState('')
  const [customNote, setCustomNote] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('blush')
  const [selectedMode, setSelectedMode] = useState('romantic')
  const [selectedSticker, setSelectedSticker] = useState('fragile')
  const [selectedAvatar, setSelectedAvatar] = useState('kitty')
  const [selectedIntro, setSelectedIntro] = useState('dev')
  const [customIntroText, setCustomIntroText] = useState('')
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [showDirectory, setShowDirectory] = useState(false)

  const t = getTheme(selectedTheme)

  const previewPath = useMemo(() => {
    return buildLink({
      name: theirName || 'Maya',
      from: yourName,
      theme: selectedTheme,
      mode: selectedMode,
      sticker: selectedSticker,
      avatar: selectedAvatar,
      intro: selectedIntro,
      introText: customIntroText,
      note: customNote,
    })
  }, [theirName, yourName, selectedTheme, selectedMode, selectedSticker, selectedAvatar, selectedIntro, customIntroText, customNote])

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const fullUrl = origin ? `${origin}${previewPath}` : previewPath

  async function copyLink() {
    playConsoleButton(true)
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      const el = document.createElement('textarea')
      el.value = fullUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  async function shareLink() {
    playConsoleButton(true)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `8-Bit Love Quest for ${sanitizeName(theirName) || 'someone'}`,
          text: 'Someone built a retro 8-bit love quest for you! ♥',
          url: fullUrl,
        })
      } catch {}
    } else {
      copyLink()
    }
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: t.bg,
        color: t.ink,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px',
        userSelect: 'none',
      }}
    >
      {/* Retro Header */}
      <header
        style={{
          maxWidth: 640,
          width: '100%',
          margin: '0 auto',
          padding: '24px 0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          borderBottom: `3px dashed ${t.border}`,
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <PixelHeart size={20} color={t.accent} border={t.border} />
          <span className="font-pixel" style={{ fontSize: '12px', color: t.accent }}>
            CARTRIDGE BUILDER
          </span>
        </div>
        <Credit theme={t} align="flex-end" />
      </header>

      {/* Main Form */}
      <main style={{ maxWidth: 640, width: '100%', margin: '0 auto', flex: 1, paddingBottom: 48 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="font-pixel" style={{ fontSize: '10px', color: t.accent, marginBottom: 12 }}>
            ★ RETRO LOVE NOTE GENERATOR ★
          </div>

          <h1
            className="font-pixel"
            style={{
              fontSize: 'clamp(20px, 4.8vw, 26px)',
              lineHeight: 1.4,
              marginBottom: 16,
              color: t.ink,
            }}
          >
            CREATE AN 8-BIT <br />
            <span style={{ color: t.accent }}>LOVE CARTRIDGE</span>
          </h1>

          <p
            className="font-silkscreen"
            style={{
              color: t.muted,
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Customize the message tone, console shell color, and secret sticker for someone special.
          </p>

          {/* Form Card */}
          <div
            className="pixel-card"
            style={{
              padding: '28px 22px',
              background: t.card,
              borderColor: t.border,
              boxShadow: `8px 8px 0px ${t.shadow}`,
              marginBottom: 28,
            }}
          >
            <div style={{ display: 'grid', gap: 24 }}>
              {/* Field 1: Recipient Name */}
              <label style={{ display: 'grid', gap: 8 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  1. PLAYER 1 NAME [ RECIPIENT ] *
                </span>
                <input
                  value={theirName}
                  onChange={(e) => setTheirName(e.target.value)}
                  placeholder="e.g. Maya"
                  maxLength={32}
                  className="font-silkscreen"
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: `3px solid ${t.border}`,
                    background: t.highlight || '#FFF0F5',
                    color: t.ink,
                    fontSize: '14px',
                    outline: 'none',
                    borderRadius: 2,
                  }}
                />
              </label>

              {/* Field 2: Sender Name */}
              <label style={{ display: 'grid', gap: 8 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  2. CREATOR NAME [ YOUR NAME ] (OPTIONAL)
                </span>
                <input
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  placeholder="e.g. Leo (or secret)"
                  maxLength={32}
                  className="font-silkscreen"
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: `3px solid ${t.border}`,
                    background: t.highlight || '#FFF0F5',
                    color: t.ink,
                    fontSize: '14px',
                    outline: 'none',
                    borderRadius: 2,
                  }}
                />
              </label>

              {/* Field 3: Experience Mode */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  3. CHOOSE EXPERIENCE TONE / MODE
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
                  {Object.values(modes).map((m) => {
                    const isSelected = selectedMode === m.id
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          playConsoleButton(true)
                          setSelectedMode(m.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '12px 10px',
                          border: `3px solid ${t.border}`,
                          background: isSelected ? t.accent : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : t.ink,
                          boxShadow: isSelected ? `2px 2px 0px ${t.border}` : `4px 4px 0px ${t.border}`,
                          transform: isSelected ? 'translate(2px, 2px)' : 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          borderRadius: 2,
                        }}
                        className="font-silkscreen"
                      >
                        <span style={{ fontSize: '11px', fontWeight: 700 }}>{m.name}</span>
                        <span style={{ fontSize: '9px', opacity: 0.85, lineHeight: 1.3 }}>
                          "{m.badge}"
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Field 4: Console Shell Color Palette */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  4. CONSOLE SHELL COLOR
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 8 }}>
                  {Object.values(themes).map((themeOpt) => {
                    const isSelected = selectedTheme === themeOpt.id
                    return (
                      <button
                        key={themeOpt.id}
                        type="button"
                        onClick={() => {
                          playConsoleButton(true)
                          setSelectedTheme(themeOpt.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '10px 8px',
                          border: `3px solid ${themeOpt.border}`,
                          background: isSelected ? themeOpt.accent : themeOpt.card,
                          color: isSelected ? '#FFFFFF' : themeOpt.ink,
                          boxShadow: isSelected ? `2px 2px 0px ${themeOpt.border}` : `4px 4px 0px ${themeOpt.border}`,
                          transform: isSelected ? 'translate(2px, 2px)' : 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          borderRadius: 2,
                        }}
                        className="font-silkscreen"
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span
                            style={{
                              width: 10,
                              height: 10,
                              background: themeOpt.previewColor,
                              border: `1px solid ${themeOpt.border}`,
                              display: 'inline-block',
                            }}
                          />
                          <span style={{ fontSize: '10px', fontWeight: 700 }}>
                            {themeOpt.name}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Field 5: Crooked Sticker on Console */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  5. RETRO CONSOLE STICKER
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
                  {Object.values(stickers).map((stk) => {
                    const isSelected = selectedSticker === stk.id
                    return (
                      <button
                        key={stk.id}
                        type="button"
                        onClick={() => {
                          playConsoleButton(true)
                          setSelectedSticker(stk.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '10px 8px',
                          border: `2px dashed ${t.border}`,
                          background: isSelected ? t.highlight : stk.bg,
                          color: stk.color,
                          boxShadow: isSelected ? `2px 2px 0px ${t.border}` : 'none',
                          cursor: 'pointer',
                          borderRadius: 2,
                          fontSize: '10px',
                          fontWeight: 700,
                        }}
                        className="font-silkscreen"
                      >
                        {stk.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Field 6: 4 Companion Avatars */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  6. COMPANION AVATAR IN LETTER
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
                  {[
                    { id: 'kitty', icon: '🐱', name: 'Chubby Kitty', desc: 'Paws holding letter' },
                    { id: 'puppy', icon: '🐶', name: 'Shiba Puppy', desc: 'Floppy ears & tail' },
                    { id: 'bear', icon: '🧸', name: 'Cozy Bear', desc: 'Fluffy cuddly teddy' },
                    { id: 'dev', icon: '🧑‍💻', name: 'Shy Dev', desc: 'Headphones & hoodie' },
                  ].map((av) => {
                    const isSel = selectedAvatar === av.id
                    return (
                      <button
                        key={av.id}
                        type="button"
                        onClick={() => {
                          playConsoleButton(true)
                          setSelectedAvatar(av.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '10px 12px',
                          border: `3px solid ${t.border}`,
                          background: isSel ? t.accent : '#FFFFFF',
                          color: isSel ? '#FFFFFF' : t.ink,
                          boxShadow: isSel ? `2px 2px 0px ${t.border}` : `4px 4px 0px ${t.border}`,
                          transform: isSel ? 'translate(2px, 2px)' : 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          borderRadius: 2,
                        }}
                        className="font-silkscreen"
                      >
                        <span style={{ fontSize: '20px' }}>{av.icon}</span>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 700 }}>{av.name}</div>
                          <div style={{ fontSize: '9px', opacity: 0.85 }}>{av.desc}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Field 7: Dialogue Story Style (First Scene) */}
              <div style={{ display: 'grid', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                    7. STORY INTRO STYLE (SCENE 1)
                  </span>
                  <span className="font-silkscreen" style={{ fontSize: '9px', color: t.muted }}>
                    [ THE SHY DEVELOPER IS DEFAULT ]
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
                  {Object.values(dialogueIntros).map((st) => {
                    const isSel = selectedIntro === st.id
                    return (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => {
                          playConsoleButton(true)
                          setSelectedIntro(st.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '10px',
                          border: `3px solid ${t.border}`,
                          background: isSel ? t.accent : '#FFFFFF',
                          color: isSel ? '#FFFFFF' : t.ink,
                          boxShadow: isSel ? `2px 2px 0px ${t.border}` : `4px 4px 0px ${t.border}`,
                          transform: isSel ? 'translate(2px, 2px)' : 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          borderRadius: 2,
                        }}
                        className="font-silkscreen"
                      >
                        <div style={{ fontSize: '11px', fontWeight: 700 }}>{st.name}</div>
                        <div style={{ fontSize: '9px', opacity: 0.85, lineHeight: 1.3 }}>{st.badge}</div>
                      </button>
                    )
                  })}
                </div>

                {/* Optional Custom Confession Override */}
                <label style={{ display: 'grid', gap: 6, marginTop: 4 }}>
                  <span className="font-silkscreen" style={{ fontSize: '10px', color: t.muted }}>
                    OR WRITE YOUR OWN CONFESSION LINE (OPTIONAL):
                  </span>
                  <input
                    value={customIntroText}
                    onChange={(e) => setCustomIntroText(e.target.value)}
                    placeholder="Leave empty to use default, or write your own words..."
                    maxLength={180}
                    className="font-silkscreen"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `2px solid ${t.border}`,
                      background: '#FFFFFF',
                      color: t.ink,
                      fontSize: '12px',
                      outline: 'none',
                      borderRadius: 2,
                    }}
                  />
                </label>
              </div>

              {/* Field 8: Secret Note with Randomizer & Catalog */}
              <div style={{ display: 'grid', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                  <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                    8. PERSONAL NOTE INSIDE LETTER
                  </span>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      onClick={() => {
                        playHeartChirp(true)
                        setCustomNote(getRandomNote())
                      }}
                      className="font-silkscreen"
                      style={{
                        background: t.accent,
                        color: '#FFFFFF',
                        border: `1.5px solid ${t.border}`,
                        padding: '4px 10px',
                        borderRadius: 2,
                        fontSize: '10px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      🎲 RANDOM NOTE
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        playConsoleButton(true)
                        setShowDirectory(!showDirectory)
                      }}
                      className="font-silkscreen"
                      style={{
                        background: showDirectory ? t.border : '#FFFFFF',
                        color: showDirectory ? '#FFFFFF' : t.ink,
                        border: `1.5px solid ${t.border}`,
                        padding: '4px 10px',
                        borderRadius: 2,
                        fontSize: '10px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      📖 {showDirectory ? 'HIDE CATALOG' : 'BROWSE CATALOG'}
                    </button>
                  </div>
                </div>

                <input
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Your smile is completely unfair to my heart."
                  maxLength={120}
                  className="font-silkscreen"
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: `3px solid ${t.border}`,
                    background: t.highlight || '#FFF0F5',
                    color: t.ink,
                    fontSize: '14px',
                    outline: 'none',
                    borderRadius: 2,
                  }}
                />

                {/* Interactive Message Directory Catalog */}
                <AnimatePresence>
                  {showDirectory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          background: '#FFFFFF',
                          border: `2px dashed ${t.border}`,
                          padding: '16px',
                          borderRadius: 4,
                          display: 'grid',
                          gap: 14,
                        }}
                      >
                        <div className="font-pixel" style={{ fontSize: '9px', color: t.accent }}>
                          ★ CLICK ANY NOTE TO USE IT INSTANTLY:
                        </div>

                        {NOTE_CATALOG.map((cat) => (
                          <div key={cat.category} style={{ display: 'grid', gap: 6 }}>
                            <div className="font-silkscreen" style={{ fontSize: '11px', fontWeight: 700, color: t.muted }}>
                              [{cat.category}]
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                              {cat.notes.map((note) => (
                                <button
                                  key={note}
                                  type="button"
                                  onClick={() => {
                                    playSparkle(true)
                                    setCustomNote(note)
                                  }}
                                  className="font-silkscreen"
                                  style={{
                                    textAlign: 'left',
                                    padding: '8px 10px',
                                    border: `1px solid ${t.border}`,
                                    background: customNote === note ? t.highlight : '#FFFDF8',
                                    color: t.ink,
                                    fontSize: '12px',
                                    cursor: 'pointer',
                                    borderRadius: 2,
                                    transition: 'background 0.1s',
                                  }}
                                >
                                  "{note}"
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Live Cartridge Content Preview */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: `3px solid ${t.border}`,
                  padding: '16px',
                  borderRadius: 4,
                  boxShadow: `4px 4px 0px ${t.shadow}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-pixel" style={{ fontSize: '9px', color: t.accent }}>
                    ★ LIVE CARTRIDGE PREVIEW
                  </span>
                  <span className="font-silkscreen" style={{ fontSize: '10px', color: t.muted }}>
                    SHELL: {t.name.toUpperCase()}
                  </span>
                </div>

                <div
                  style={{
                    background: t.highlight || '#FFF0F5',
                    border: `2px solid ${t.border}`,
                    padding: '12px',
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '26px', marginBottom: 6 }}>
                    {selectedAvatar === 'kitty' ? '🐱' : selectedAvatar === 'puppy' ? '🐶' : selectedAvatar === 'bear' ? '🧸' : '🧑‍💻'}
                  </div>
                  <div className="font-pixel" style={{ fontSize: '9px', color: t.muted, marginBottom: 4 }}>
                    {dialogueIntros[selectedIntro]?.badge || '👾 CODE & HESITATION'}
                  </div>
                  <div className="font-pixel" style={{ fontSize: '13px', color: t.accent, marginBottom: 6 }}>
                    {modes[selectedMode]?.badge || 'I REALLY LIKE YOU.'}
                  </div>
                  <div className="font-silkscreen" style={{ fontSize: '11px', color: t.ink, marginBottom: 4 }}>
                    To: <span style={{ fontWeight: 700 }}>{theirName || 'Maya'}</span> · From: <span style={{ fontWeight: 700 }}>{yourName || 'Someone'}</span>
                  </div>
                  {customNote && (
                    <div className="font-silkscreen" style={{ fontSize: '11px', fontStyle: 'italic', color: t.muted, marginTop: 4 }}>
                      "{customNote}"
                    </div>
                  )}
                </div>
              </div>

              {/* Live Preview Box */}
              <div
                style={{
                  background: t.highlight || '#FFF0F5',
                  border: `3px solid ${t.border}`,
                  padding: '16px',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
                className="font-silkscreen"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: t.accent }}>
                    [ GENERATED CARTRIDGE URL ]
                  </span>
                  <Link
                    to={previewPath}
                    target="_blank"
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: t.accent,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <span>TEST CARTRIDGE</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>
                <div style={{ fontSize: '12px', wordBreak: 'break-all', color: t.ink }}>
                  {fullUrl}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={copyLink}
                  className="pixel-btn"
                  style={{
                    '--theme-accent': t.accent,
                    '--theme-border': t.border,
                    flex: '2 1 180px',
                    fontSize: '13px',
                  }}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'LINK COPIED! ★' : 'COPY CARTRIDGE LINK'}</span>
                </button>

                <button
                  type="button"
                  onClick={shareLink}
                  className="pixel-btn pixel-btn-secondary"
                  style={{
                    '--theme-border': t.border,
                    '--theme-highlight': t.highlight,
                    flex: '1 1 110px',
                    fontSize: '13px',
                  }}
                >
                  <Share2 size={16} />
                  <span>SHARE</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playConsoleButton(true)
                    setShowQR(!showQR)
                  }}
                  className="pixel-btn pixel-btn-secondary"
                  style={{
                    '--theme-border': t.border,
                    '--theme-highlight': t.highlight,
                    fontSize: '13px',
                  }}
                >
                  <QrCode size={16} />
                  <span>QR CODE</span>
                </button>
              </div>

              {/* QR Code Container */}
              <AnimatePresence>
                {showQR && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        padding: '20px 0 8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          background: '#FFFFFF',
                          padding: 16,
                          border: `4px solid ${t.border}`,
                          boxShadow: `6px 6px 0px ${t.shadow}`,
                        }}
                      >
                        <QRCodeSVG value={fullUrl} size={160} fgColor={t.border} bgColor="#FFFFFF" />
                      </div>
                      <span className="font-silkscreen" style={{ fontSize: '11px', color: t.muted }}>
                        Scan with camera to launch 8-bit cartridge!
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Test Sample Link */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/for/Maya?from=Leo&theme=blush"
              className="font-silkscreen"
              style={{
                fontSize: '13px',
                color: t.accent,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>▶ PLAY SAMPLE: FOR MAYA</span>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 640,
          width: '100%',
          margin: '0 auto',
          padding: '24px 0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          borderTop: `3px dashed ${t.border}`,
        }}
      >
        {/* Featured on Fazier Badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <a
            href="https://fazier.com/launches/i-like-u-kappa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            title="Featured on Fazier"
            style={{
              display: 'inline-block',
              transition: 'transform 0.15s ease, filter 0.15s ease',
              lineHeight: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.filter = 'none'
            }}
          >
            <img
              src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=neutral"
              width={250}
              height={54}
              alt="Fazier badge"
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
          </a>
        </div>

        <Credit theme={t} />
      </footer>
    </div>
  )
}
