import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Copy, Share2, QrCode, ExternalLink, Check } from 'lucide-react'
import { themes, buildLink, sanitizeName, getTheme } from '../lib/theme.js'
import Credit from '../components/Credit.jsx'
import PixelHeart from '../components/PixelHeart.jsx'
import { play8BitSelect, play8BitVictory } from '../lib/sound.js'

export default function Generator() {
  const [theirName, setTheirName] = useState('')
  const [yourName, setYourName] = useState('')
  const [customNote, setCustomNote] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('blush')
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const t = getTheme(selectedTheme)

  const previewPath = useMemo(() => {
    return buildLink({
      name: theirName || 'Maya',
      from: yourName,
      theme: selectedTheme,
      note: customNote,
    })
  }, [theirName, yourName, selectedTheme, customNote])

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const fullUrl = origin ? `${origin}${previewPath}` : previewPath

  async function copyLink() {
    play8BitSelect(true)
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
    play8BitSelect(true)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `8-Bit Love Quest for ${sanitizeName(theirName) || 'someone'}`,
          text: 'Someone built an 8-bit love quest for you! ♥',
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
        <Credit theme={t} />
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
            <span style={{ color: t.accent }}>LOVE QUEST</span>
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
            Generate a personalized retro quest with hearts, 8-bit sound effects, and your secret confession letter.
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
            <div style={{ display: 'grid', gap: 22 }}>
              
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

              {/* Field 3: Secret Quest Note */}
              <label style={{ display: 'grid', gap: 8 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  3. SECRET NOTE INSIDE CHEST (OPTIONAL)
                </span>
                <input
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Your smile is completely unfair."
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
              </label>

              {/* Palette Choice */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span className="font-pixel" style={{ fontSize: '10px', color: t.ink }}>
                  4. CARTRIDGE COLOR PALETTE
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                  {Object.values(themes).map((themeOpt) => {
                    const isSelected = selectedTheme === themeOpt.id
                    return (
                      <button
                        key={themeOpt.id}
                        type="button"
                        onClick={() => {
                          play8BitSelect(true)
                          setSelectedTheme(themeOpt.id)
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '12px',
                          border: `3px solid ${themeOpt.border}`,
                          background: isSelected ? themeOpt.accent : themeOpt.card,
                          color: isSelected ? '#FFFFFF' : themeOpt.ink,
                          boxShadow: isSelected ? `2px 2px 0px ${themeOpt.border}` : `4px 4px 0px ${themeOpt.border}`,
                          transform: isSelected ? 'translate(2px, 2px)' : 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 6,
                          borderRadius: 2,
                        }}
                        className="font-silkscreen"
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span
                            style={{
                              width: 12,
                              height: 12,
                              background: themeOpt.previewColor,
                              border: `1px solid ${themeOpt.border}`,
                              display: 'inline-block',
                            }}
                          />
                          <span style={{ fontSize: '11px', fontWeight: 700 }}>
                            {themeOpt.name}
                          </span>
                        </div>
                        <span style={{ fontSize: '10px', opacity: 0.8 }}>
                          {themeOpt.desc}
                        </span>
                      </button>
                    )
                  })}
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
                    [ GENERATED QUEST URL ]
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
                    <span>TEST QUEST</span>
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
                  <span>{copied ? 'LINK COPIED! ★' : 'COPY QUEST LINK'}</span>
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
                    play8BitSelect(true)
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
                        Scan with camera to launch 8-bit quest!
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
          padding: '16px 0 24px',
          display: 'flex',
          justifyContent: 'center',
          borderTop: `3px dashed ${t.border}`,
        }}
      >
        <Credit theme={t} />
      </footer>
    </div>
  )
}
