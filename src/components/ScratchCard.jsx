import { useEffect, useRef, useState } from 'react'
import { playScratchSound } from '../lib/sound.js'

export default function ScratchCard({
  width = 240,
  height = 140,
  revealText = "I like you.",
  customNote = "",
  theme,
  soundEnabled = true,
  onRevealed
}) {
  const canvasRef = useRef(null)
  const [isScratched, setIsScratched] = useState(false)
  const isDrawing = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Draw gold foil layer
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#D4A373')
    grad.addColorStop(0.5, '#F5C842')
    grad.addColorStop(1, '#C07A4A')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // Add subtle texture dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
    for (let i = 0; i < 60; i++) {
      const rx = Math.random() * width
      const ry = Math.random() * height
      ctx.beginPath()
      ctx.arc(rx, ry, Math.random() * 2 + 1, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add text label on foil: "SCRATCH HERE"
    ctx.font = '11px "Fragment Mono", monospace'
    ctx.fillStyle = 'rgba(45, 42, 38, 0.75)'
    ctx.textAlign = 'center'
    ctx.fillText('✨ SCRATCH WITH FINGER / MOUSE ✨', width / 2, height / 2 + 4)
  }, [width, height])

  function scratch(x, y) {
    const canvas = canvasRef.current
    if (!canvas || isScratched) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const cx = x - rect.left
    const cy = y - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(cx, cy, 22, 0, Math.PI * 2)
    ctx.fill()

    playScratchSound(soundEnabled)

    // Check scratched ratio
    checkScratchedRatio(ctx)
  }

  function checkScratchedRatio(ctx) {
    if (isScratched) return
    try {
      const imageData = ctx.getImageData(0, 0, width, height)
      const pixels = imageData.data
      let clearPixels = 0
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++
      }
      const ratio = clearPixels / (pixels.length / 4)
      if (ratio > 0.45 && !isScratched) {
        setIsScratched(true)
        onRevealed && onRevealed()
      }
    } catch {}
  }

  function handleMouseDown(e) {
    isDrawing.current = true
    scratch(e.clientX, e.clientY)
  }

  function handleMouseMove(e) {
    if (!isDrawing.current) return
    scratch(e.clientX, e.clientY)
  }

  function handleMouseUp() {
    isDrawing.current = false
  }

  function handleTouchStart(e) {
    isDrawing.current = true
    if (e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY)
  }

  function handleTouchMove(e) {
    if (!isDrawing.current || !e.touches[0]) return
    scratch(e.touches[0].clientX, e.touches[0].clientY)
  }

  function handleTouchEnd() {
    isDrawing.current = false
  }

  return (
    <div style={{ position: 'relative', width, height, margin: '0 auto', userSelect: 'none' }}>
      {/* Underlying Hidden Text Content */}
      <div
        className="notebook-lines"
        style={{
          position: 'absolute',
          inset: 0,
          background: '#FFFFFF',
          borderRadius: 12,
          border: `1px solid ${theme.line}`,
          padding: '14px 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.04)',
        }}
      >
        <div className="handwritten" style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: theme.accent, lineHeight: 1.05, fontWeight: 700 }}>
          {revealText}
        </div>
        {customNote && (
          <div className="serif" style={{ fontSize: 13, color: theme.ink, marginTop: 6, fontStyle: 'italic', maxWidth: '90%' }}>
            "{customNote}"
          </div>
        )}
      </div>

      {/* Scratch Canvas Overlay */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 12,
          cursor: isScratched ? 'default' : 'pointer',
          touchAction: 'none',
          opacity: isScratched ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: isScratched ? 'none' : 'auto',
        }}
      />
    </div>
  )
}
