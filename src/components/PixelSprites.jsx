// Pure SVG 8-bit Pixel Art Sprites

// Crisp 8-bit Pixel Heart
export function PixelHeart({ size = 24, color = '#FF4370', border = '#2B1A24', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Outer Outline */}
      <rect x="2" y="1" width="3" height="1" fill={border} />
      <rect x="1" y="2" width="1" height="3" fill={border} />
      <rect x="8" y="1" width="3" height="1" fill={border} />
      <rect x="11" y="2" width="1" height="3" fill={border} />
      <rect x="5" y="2" width="1" height="2" fill={border} />
      <rect x="6" y="3" width="1" height="1" fill={border} />
      <rect x="7" y="2" width="1" height="2" fill={border} />
      <rect x="1" y="5" width="1" height="1" fill={border} />
      <rect x="2" y="6" width="1" height="1" fill={border} />
      <rect x="3" y="7" width="1" height="1" fill={border} />
      <rect x="4" y="8" width="1" height="1" fill={border} />
      <rect x="5" y="9" width="1" height="1" fill={border} />
      <rect x="11" y="5" width="1" height="1" fill={border} />
      <rect x="10" y="6" width="1" height="1" fill={border} />
      <rect x="9" y="7" width="1" height="1" fill={border} />
      <rect x="8" y="8" width="1" height="1" fill={border} />
      <rect x="7" y="9" width="1" height="1" fill={border} />
      <rect x="6" y="10" width="1" height="1" fill={border} />

      {/* Inside Fill */}
      <rect x="2" y="2" width="3" height="1" fill={color} />
      <rect x="2" y="3" width="4" height="2" fill={color} />
      <rect x="8" y="2" width="3" height="1" fill={color} />
      <rect x="7" y="3" width="4" height="2" fill={color} />
      <rect x="2" y="5" width="9" height="1" fill={color} />
      <rect x="3" y="6" width="7" height="1" fill={color} />
      <rect x="4" y="7" width="5" height="1" fill={color} />
      <rect x="5" y="8" width="3" height="1" fill={color} />
      <rect x="6" y="9" width="1" height="1" fill={color} />

      {/* White Pixel Glint */}
      <rect x="3" y="2" width="1" height="2" fill="#FFFFFF" opacity="0.85" />
      <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.85" />
    </svg>
  )
}

// Cute 8-bit Pixel Character Holding Love Letter
export function PixelCharacter({ size = 64, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Hair (Dark Cocoa) */}
      <rect x="5" y="1" width="6" height="1" fill="#2B1A24" />
      <rect x="4" y="2" width="8" height="2" fill="#2B1A24" />
      <rect x="3" y="4" width="2" height="3" fill="#2B1A24" />
      <rect x="11" y="4" width="2" height="3" fill="#2B1A24" />

      {/* Face (Warm Peach) */}
      <rect x="5" y="4" width="6" height="4" fill="#FFDFC4" />
      {/* Eyes (Dark pixel dots) */}
      <rect x="6" y="5" width="1" height="1" fill="#2B1A24" />
      <rect x="9" y="5" width="1" height="1" fill="#2B1A24" />
      {/* Cute Blush (Soft Rose) */}
      <rect x="5" y="6" width="1" height="1" fill="#FF8DA1" />
      <rect x="10" y="6" width="1" height="1" fill="#FF8DA1" />
      {/* Shy Smile */}
      <rect x="7" y="7" width="2" height="1" fill="#2B1A24" />

      {/* Cozy Sweater (Soft Pink/Red) */}
      <rect x="4" y="8" width="8" height="4" fill="#E15B7C" />
      <rect x="5" y="8" width="6" height="1" fill="#FFFFFF" />

      {/* Left Hand Holding Letter */}
      <rect x="2" y="9" width="2" height="2" fill="#FFDFC4" />
      {/* Letter (White envelope with tiny heart) */}
      <rect x="1" y="10" width="4" height="3" fill="#FFFFFF" />
      <rect x="1" y="10" width="4" height="1" fill="#2B1A24" />
      <rect x="1" y="12" width="4" height="1" fill="#2B1A24" />
      <rect x="1" y="10" width="1" height="3" fill="#2B1A24" />
      <rect x="4" y="10" width="1" height="3" fill="#2B1A24" />
      <rect x="2" y="11" width="2" height="1" fill="#FF4370" />

      {/* Right Hand (Waving) */}
      <rect x="12" y="7" width="2" height="2" fill="#FFDFC4" />

      {/* Pants (Dark Indigo) */}
      <rect x="5" y="12" width="6" height="2" fill="#3D3252" />
      <rect x="7" y="13" width="2" height="1" fill="none" />

      {/* Shoes */}
      <rect x="5" y="14" width="2" height="1" fill="#2B1A24" />
      <rect x="9" y="14" width="2" height="1" fill="#2B1A24" />
    </svg>
  )
}

// 8-bit Pixel Letter Envelope
export function PixelEnvelope({ size = 80, isOpen = false }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Envelope Body Outline */}
      <rect x="1" y="2" width="18" height="10" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      
      {/* Envelope Back Shading */}
      <rect x="2" y="3" width="16" height="8" fill="#FFF5F7" />

      {/* Flap Lines */}
      {!isOpen ? (
        <>
          <path d="M 2 3 L 10 8 L 18 3" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
          {/* Heart Seal */}
          <rect x="9" y="6" width="2" height="2" fill="#FF4370" />
          <rect x="8" y="7" width="4" height="1" fill="#FF4370" />
        </>
      ) : (
        <>
          {/* Open Flap Pointing Up */}
          <path d="M 2 3 L 10 0 L 18 3" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
        </>
      )}

      {/* Bottom Fold Creases */}
      <line x1="2" y1="11" x2="8" y2="7" stroke="#E5B2C0" strokeWidth="1" />
      <line x1="18" y1="11" x2="12" y2="7" stroke="#E5B2C0" strokeWidth="1" />
    </svg>
  )
}
