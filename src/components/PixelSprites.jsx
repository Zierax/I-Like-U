// Pure SVG 8-bit Pixel Art Sprites & Cute Retro Avatars

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

      <rect x="2" y="2" width="3" height="1" fill={color} />
      <rect x="2" y="3" width="4" height="2" fill={color} />
      <rect x="8" y="2" width="3" height="1" fill={color} />
      <rect x="7" y="3" width="4" height="2" fill={color} />
      <rect x="2" y="5" width="9" height="1" fill={color} />
      <rect x="3" y="6" width="7" height="1" fill={color} />
      <rect x="4" y="7" width="5" height="1" fill={color} />
      <rect x="5" y="8" width="3" height="1" fill={color} />
      <rect x="6" y="9" width="1" height="1" fill={color} />

      <rect x="3" y="2" width="1" height="2" fill="#FFFFFF" opacity="0.85" />
      <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.85" />
    </svg>
  )
}

// 🐱 Super Adorable Chubby Pixel Kitty Holding Love Letter
export function PixelCat({ size = 76, isBlushing = false, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Exclamation or hearts if blushing */}
      {isBlushing && (
        <>
          <rect x="16" y="2" width="2" height="2" fill="#FF3366" />
          <rect x="17" y="3" width="2" height="2" fill="#FF3366" />
        </>
      )}

      {/* Cat Ears Outlines */}
      <rect x="3" y="2" width="4" height="1" fill="#2B1A24" />
      <rect x="2" y="3" width="1" height="3" fill="#2B1A24" />
      <rect x="7" y="3" width="1" height="2" fill="#2B1A24" />

      <rect x="13" y="2" width="4" height="1" fill="#2B1A24" />
      <rect x="17" y="3" width="1" height="3" fill="#2B1A24" />
      <rect x="12" y="3" width="1" height="2" fill="#2B1A24" />

      {/* Pink Inner Ears */}
      <rect x="3" y="3" width="3" height="2" fill="#FFA6C9" />
      <rect x="4" y="5" width="2" height="1" fill="#FFA6C9" />

      <rect x="14" y="3" width="3" height="2" fill="#FFA6C9" />
      <rect x="14" y="5" width="2" height="1" fill="#FFA6C9" />

      {/* Head Top Outline */}
      <rect x="8" y="4" width="4" height="1" fill="#2B1A24" />

      {/* Head & Body Fill (Cozy Warm Cream / White) */}
      <rect x="3" y="5" width="14" height="8" fill="#FFFDF8" />
      <rect x="2" y="6" width="16" height="6" fill="#FFFDF8" />

      {/* Head Outer Borders */}
      <rect x="1" y="6" width="1" height="7" fill="#2B1A24" />
      <rect x="18" y="6" width="1" height="7" fill="#2B1A24" />

      {/* Big Sparkling Anime Eyes */}
      {!isBlushing ? (
        <>
          {/* Left Eye */}
          <rect x="4" y="7" width="3" height="3" fill="#2B1A24" />
          <rect x="4" y="7" width="1" height="1" fill="#FFFFFF" />
          <rect x="6" y="9" width="1" height="1" fill="#FFFFFF" />

          {/* Right Eye */}
          <rect x="13" y="7" width="3" height="3" fill="#2B1A24" />
          <rect x="13" y="7" width="1" height="1" fill="#FFFFFF" />
          <rect x="15" y="9" width="1" height="1" fill="#FFFFFF" />
        </>
      ) : (
        <>
          {/* Happy squint eyes ^^ */}
          <rect x="4" y="8" width="3" height="1" fill="#2B1A24" />
          <rect x="4" y="7" width="1" height="1" fill="#2B1A24" />
          <rect x="6" y="7" width="1" height="1" fill="#2B1A24" />

          <rect x="13" y="8" width="3" height="1" fill="#2B1A24" />
          <rect x="13" y="7" width="1" height="1" fill="#2B1A24" />
          <rect x="15" y="7" width="1" height="1" fill="#2B1A24" />
        </>
      )}

      {/* Rosy Blushing Cheeks */}
      <rect x="3" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />
      <rect x="15" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />

      {/* Cute Kitty Nose & Mouth :3 */}
      <rect x="9" y="8" width="2" height="1" fill="#FFA6C9" />
      <rect x="9" y="9" width="2" height="1" fill="#2B1A24" />

      {/* Whiskers */}
      <rect x="1" y="9" width="2" height="1" fill="#E5D6C8" />
      <rect x="17" y="9" width="2" height="1" fill="#E5D6C8" />

      {/* Body & Paws Holding Love Letter */}
      <rect x="3" y="12" width="14" height="4" fill="#FFFDF8" />

      {/* Cute Red/White Love Letter in Paws */}
      <rect x="5" y="11" width="10" height="6" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <path d="M 5 12 L 10 15 L 15 12" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
      {/* Heart Seal on Letter */}
      <rect x="9" y="13" width="2" height="2" fill="#FF4370" />

      {/* Cute White Paws Over Envelope */}
      <rect x="4" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />
      <rect x="14" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />

      {/* Bottom Outline */}
      <rect x="4" y="17" width="12" height="1" fill="#2B1A24" />

      {/* Cute Wagging Tail on the Right */}
      <rect x="18" y="12" width="2" height="2" fill="#FFFDF8" />
      <rect x="19" y="10" width="1" height="3" fill="#FFFDF8" />
      <rect x="19" y="10" width="1" height="1" fill="#2B1A24" />
      <rect x="18" y="14" width="2" height="1" fill="#2B1A24" />
    </svg>
  )
}

// 🧑‍🎨 Detailed Chibi Pixel Character
export function PixelChibi({ size = 76, isBlushing = false, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Hair Top / Bangs */}
      <rect x="6" y="2" width="8" height="2" fill="#3D261A" />
      <rect x="4" y="3" width="12" height="3" fill="#3D261A" />
      <rect x="3" y="5" width="3" height="4" fill="#3D261A" />
      <rect x="14" y="5" width="3" height="4" fill="#3D261A" />

      {/* Face */}
      <rect x="5" y="6" width="10" height="6" fill="#FFE3CC" />

      {/* Big Cute Eyes */}
      {!isBlushing ? (
        <>
          <rect x="6" y="7" width="2" height="3" fill="#2B1A24" />
          <rect x="6" y="7" width="1" height="1" fill="#FFFFFF" />

          <rect x="12" y="7" width="2" height="3" fill="#2B1A24" />
          <rect x="12" y="7" width="1" height="1" fill="#FFFFFF" />
        </>
      ) : (
        <>
          <rect x="6" y="8" width="3" height="1" fill="#2B1A24" />
          <rect x="11" y="8" width="3" height="1" fill="#2B1A24" />
        </>
      )}

      {/* Blush */}
      <rect x="5" y="9" width="2" height="1" fill="#FF758F" />
      <rect x="13" y="9" width="2" height="1" fill="#FF758F" />

      {/* Cute Smile */}
      <rect x="9" y="10" width="2" height="1" fill="#2B1A24" />

      {/* Oversized Cozy Hoodie */}
      <rect x="4" y="12" width="12" height="5" fill="#FF5D8F" />
      <rect x="5" y="12" width="10" height="1" fill="#FFFFFF" />

      {/* Holding Envelope */}
      <rect x="6" y="13" width="8" height="5" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <rect x="9" y="14" width="2" height="2" fill="#FF4370" />

      {/* Mittens */}
      <rect x="4" y="14" width="2" height="2" fill="#FFE3CC" />
      <rect x="14" y="14" width="2" height="2" fill="#FFE3CC" />

      {/* Feet */}
      <rect x="6" y="17" width="3" height="2" fill="#2B1A24" />
      <rect x="11" y="17" width="3" height="2" fill="#2B1A24" />
    </svg>
  )
}

// Universal PixelCharacter router component (Default is the ultra-cute Cat!)
export function PixelCharacter({ avatar = 'cat', size = 76, isBlushing = false, className = '' }) {
  if (avatar === 'chibi') {
    return <PixelChibi size={size} isBlushing={isBlushing} className={className} />
  }
  return <PixelCat size={size} isBlushing={isBlushing} className={className} />
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
      <rect x="1" y="2" width="18" height="10" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <rect x="2" y="3" width="16" height="8" fill="#FFF5F7" />

      {!isOpen ? (
        <>
          <path d="M 2 3 L 10 8 L 18 3" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
          <rect x="9" y="6" width="2" height="2" fill="#FF4370" />
          <rect x="8" y="7" width="4" height="1" fill="#FF4370" />
        </>
      ) : (
        <>
          <path d="M 2 3 L 10 0 L 18 3" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
        </>
      )}

      <line x1="2" y1="11" x2="8" y2="7" stroke="#E5B2C0" strokeWidth="1" />
      <line x1="18" y1="11" x2="12" y2="7" stroke="#E5B2C0" strokeWidth="1" />
    </svg>
  )
}
