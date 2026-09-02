// Pure SVG 8-bit Pixel Art Sprites & 4 Ultra-Charming Retro Avatars

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

// 🐱 1. Chubby Pixel Kitty Holding Love Letter
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
      {/* Floating heart on blush/jump */}
      {isBlushing && (
        <>
          <rect x="16" y="2" width="2" height="2" fill="#FF3366" />
          <rect x="17" y="3" width="2" height="2" fill="#FF3366" />
        </>
      )}

      {/* Ears Outlines */}
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

      {/* Cream Body / Head */}
      <rect x="3" y="5" width="14" height="8" fill="#FFFDF8" />
      <rect x="2" y="6" width="16" height="6" fill="#FFFDF8" />
      <rect x="1" y="6" width="1" height="7" fill="#2B1A24" />
      <rect x="18" y="6" width="1" height="7" fill="#2B1A24" />

      {/* Big Sparkling Anime Eyes */}
      {!isBlushing ? (
        <>
          <rect x="4" y="7" width="3" height="3" fill="#2B1A24" />
          <rect x="4" y="7" width="1" height="1" fill="#FFFFFF" />
          <rect x="6" y="9" width="1" height="1" fill="#FFFFFF" />

          <rect x="13" y="7" width="3" height="3" fill="#2B1A24" />
          <rect x="13" y="7" width="1" height="1" fill="#FFFFFF" />
          <rect x="15" y="9" width="1" height="1" fill="#FFFFFF" />
        </>
      ) : (
        <>
          <rect x="4" y="8" width="3" height="1" fill="#2B1A24" />
          <rect x="4" y="7" width="1" height="1" fill="#2B1A24" />
          <rect x="6" y="7" width="1" height="1" fill="#2B1A24" />

          <rect x="13" y="8" width="3" height="1" fill="#2B1A24" />
          <rect x="13" y="7" width="1" height="1" fill="#2B1A24" />
          <rect x="15" y="7" width="1" height="1" fill="#2B1A24" />
        </>
      )}

      {/* Rosy Cheeks */}
      <rect x="3" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />
      <rect x="15" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />

      {/* Cute Kitty Nose & Mouth :3 */}
      <rect x="9" y="8" width="2" height="1" fill="#FFA6C9" />
      <rect x="9" y="9" width="2" height="1" fill="#2B1A24" />

      {/* Whiskers */}
      <rect x="1" y="9" width="2" height="1" fill="#E5D6C8" />
      <rect x="17" y="9" width="2" height="1" fill="#E5D6C8" />

      {/* Paws Holding Love Letter */}
      <rect x="3" y="12" width="14" height="4" fill="#FFFDF8" />
      <rect x="5" y="11" width="10" height="6" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <path d="M 5 12 L 10 15 L 15 12" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
      <rect x="9" y="13" width="2" height="2" fill="#FF4370" />

      {/* Paws */}
      <rect x="4" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />
      <rect x="14" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />

      {/* Bottom Outline & Tail */}
      <rect x="4" y="17" width="12" height="1" fill="#2B1A24" />
      <rect x="18" y="12" width="2" height="2" fill="#FFFDF8" />
      <rect x="19" y="10" width="1" height="3" fill="#FFFDF8" />
      <rect x="19" y="10" width="1" height="1" fill="#2B1A24" />
      <rect x="18" y="14" width="2" height="1" fill="#2B1A24" />
    </svg>
  )
}

// 🐶 2. Pixel Shiba Inu / Puppy Holding Love Letter
export function PixelPuppy({ size = 76, isBlushing = false, className = '' }) {
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
      {/* Floppy Shiba Ears */}
      <rect x="3" y="2" width="4" height="2" fill="#C27D38" />
      <rect x="2" y="3" width="2" height="3" fill="#2B1A24" />
      <rect x="13" y="2" width="4" height="2" fill="#C27D38" />
      <rect x="16" y="3" width="2" height="3" fill="#2B1A24" />

      {/* Golden Tan Head */}
      <rect x="4" y="4" width="12" height="8" fill="#E5984A" />
      <rect x="3" y="5" width="14" height="6" fill="#E5984A" />
      <rect x="2" y="5" width="1" height="7" fill="#2B1A24" />
      <rect x="17" y="5" width="1" height="7" fill="#2B1A24" />

      {/* White Muzzle & Cheeks (Shiba Urajiro) */}
      <rect x="4" y="8" width="3" height="4" fill="#FFFDF8" />
      <rect x="13" y="8" width="3" height="4" fill="#FFFDF8" />
      <rect x="7" y="9" width="6" height="4" fill="#FFFDF8" />

      {/* Adorable Sparkling Eyes */}
      {!isBlushing ? (
        <>
          <rect x="5" y="6" width="3" height="3" fill="#2B1A24" />
          <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
          <rect x="12" y="6" width="3" height="3" fill="#2B1A24" />
          <rect x="12" y="6" width="1" height="1" fill="#FFFFFF" />
        </>
      ) : (
        <>
          <rect x="5" y="7" width="3" height="1" fill="#2B1A24" />
          <rect x="12" y="7" width="3" height="1" fill="#2B1A24" />
        </>
      )}

      {/* Black Nose */}
      <rect x="9" y="8" width="2" height="2" fill="#2B1A24" />

      {/* Tongue out / cute mouth */}
      <rect x="9" y="10" width="2" height="1" fill="#FF5D8F" />

      {/* Cheeks Blush */}
      <rect x="4" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />
      <rect x="14" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />

      {/* Love Letter in Paws */}
      <rect x="5" y="11" width="10" height="6" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <path d="M 5 12 L 10 15 L 15 12" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
      <rect x="9" y="13" width="2" height="2" fill="#FF4370" />

      {/* Paws */}
      <rect x="4" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />
      <rect x="14" y="13" width="2" height="3" fill="#FFFDF8" stroke="#2B1A24" strokeWidth="1" />

      {/* Bottom & Curled Tail */}
      <rect x="4" y="17" width="12" height="1" fill="#2B1A24" />
      <rect x="18" y="10" width="2" height="3" fill="#E5984A" stroke="#2B1A24" strokeWidth="1" />
    </svg>
  )
}

// 🧸 3. Pixel Teddy Bear Holding Love Letter
export function PixelBear({ size = 76, isBlushing = false, className = '' }) {
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
      {/* Round Bear Ears */}
      <rect x="2" y="2" width="4" height="4" fill="#8B5A2B" stroke="#2B1A24" strokeWidth="1" />
      <rect x="3" y="3" width="2" height="2" fill="#D29A62" />
      <rect x="14" y="2" width="4" height="4" fill="#8B5A2B" stroke="#2B1A24" strokeWidth="1" />
      <rect x="15" y="3" width="2" height="2" fill="#D29A62" />

      {/* Bear Head */}
      <rect x="4" y="4" width="12" height="9" fill="#8B5A2B" />
      <rect x="3" y="5" width="14" height="7" fill="#8B5A2B" />
      <rect x="2" y="5" width="1" height="7" fill="#2B1A24" />
      <rect x="17" y="5" width="1" height="7" fill="#2B1A24" />

      {/* Snout Area */}
      <rect x="7" y="7" width="6" height="5" fill="#D29A62" />
      <rect x="9" y="8" width="2" height="2" fill="#2B1A24" />
      <rect x="9" y="10" width="2" height="1" fill="#2B1A24" />

      {/* Eyes */}
      {!isBlushing ? (
        <>
          <rect x="5" y="6" width="2" height="3" fill="#2B1A24" />
          <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
          <rect x="13" y="6" width="2" height="3" fill="#2B1A24" />
          <rect x="13" y="6" width="1" height="1" fill="#FFFFFF" />
        </>
      ) : (
        <>
          <rect x="5" y="7" width="2" height="1" fill="#2B1A24" />
          <rect x="13" y="7" width="2" height="1" fill="#2B1A24" />
        </>
      )}

      {/* Pink Rosy Cheeks */}
      <rect x="4" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />
      <rect x="14" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />

      {/* Love Letter in Paws */}
      <rect x="5" y="11" width="10" height="6" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <path d="M 5 12 L 10 15 L 15 12" stroke="#2B1A24" strokeWidth="1" fill="#FFE3EC" />
      <rect x="9" y="13" width="2" height="2" fill="#FF4370" />

      {/* Paws */}
      <rect x="4" y="13" width="2" height="3" fill="#8B5A2B" stroke="#2B1A24" strokeWidth="1" />
      <rect x="14" y="13" width="2" height="3" fill="#8B5A2B" stroke="#2B1A24" strokeWidth="1" />

      <rect x="4" y="17" width="12" height="1" fill="#2B1A24" />
    </svg>
  )
}

// 🧑‍💻 4. Shy Developer / Programmer (Headphones, Cozy Hoodie, Blushing Anime Eyes)
export function PixelDev({ size = 76, isBlushing = false, className = '' }) {
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
      {/* Retro Headphones Headband */}
      <rect x="5" y="1" width="10" height="2" fill="#3B82F6" stroke="#2B1A24" strokeWidth="1" />
      {/* Left & Right Headphone Cups */}
      <rect x="2" y="5" width="2" height="4" fill="#3B82F6" stroke="#2B1A24" strokeWidth="1" />
      <rect x="16" y="5" width="2" height="4" fill="#3B82F6" stroke="#2B1A24" strokeWidth="1" />

      {/* Messy Anime Developer Hair */}
      <rect x="5" y="2" width="10" height="3" fill="#382218" />
      <rect x="4" y="4" width="12" height="3" fill="#382218" />
      <rect x="3" y="6" width="2" height="3" fill="#382218" />
      <rect x="15" y="6" width="2" height="3" fill="#382218" />
      {/* Cute ahoge hair tuft */}
      <rect x="9" y="0" width="2" height="2" fill="#382218" />

      {/* Face (Warm Peach) */}
      <rect x="5" y="6" width="10" height="6" fill="#FFE0BD" />

      {/* Expressive Anime Eyes */}
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

      {/* Cute Shy Blush */}
      <rect x="5" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />
      <rect x="13" y="9" width="2" height="1" fill={isBlushing ? '#FF3366' : '#FF8DA1'} />

      {/* Shy Smile */}
      <rect x="9" y="10" width="2" height="1" fill="#2B1A24" />

      {/* Cozy Dark Indigo / Pink Hoodie */}
      <rect x="4" y="12" width="12" height="5" fill="#4F46E5" />
      <rect x="6" y="12" width="8" height="1" fill="#FFFFFF" />

      {/* Holding Envelope with Heart */}
      <rect x="6" y="13" width="8" height="5" fill="#FFFFFF" stroke="#2B1A24" strokeWidth="1" />
      <rect x="9" y="14" width="2" height="2" fill="#FF4370" />

      {/* Hands */}
      <rect x="4" y="14" width="2" height="2" fill="#FFE0BD" />
      <rect x="14" y="14" width="2" height="2" fill="#FFE0BD" />

      {/* Sneakers */}
      <rect x="6" y="17" width="3" height="2" fill="#2B1A24" />
      <rect x="11" y="17" width="3" height="2" fill="#2B1A24" />
    </svg>
  )
}

// Router component supporting all 4 avatars
export function PixelCharacter({ avatar = 'kitty', size = 76, isBlushing = false, className = '' }) {
  if (avatar === 'puppy' || avatar === 'dog') {
    return <PixelPuppy size={size} isBlushing={isBlushing} className={className} />
  }
  if (avatar === 'bear') {
    return <PixelBear size={size} isBlushing={isBlushing} className={className} />
  }
  if (avatar === 'dev' || avatar === 'chibi') {
    return <PixelDev size={size} isBlushing={isBlushing} className={className} />
  }
  // Default is the beloved Chubby Kitty!
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
