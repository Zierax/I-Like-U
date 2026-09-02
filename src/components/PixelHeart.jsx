// Authentic 8-bit Pixel Art Heart component
export default function PixelHeart({ size = 32, color = '#FF4370', border = '#3A1F2D', className = '' }) {
  // 11x10 pixel grid representation of a classic retro heart
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
      {/* Outer Dark Pixel Outline */}
      {/* Top Left lobe outline */}
      <rect x="2" y="1" width="3" height="1" fill={border} />
      <rect x="1" y="2" width="1" height="3" fill={border} />
      {/* Top Right lobe outline */}
      <rect x="8" y="1" width="3" height="1" fill={border} />
      <rect x="11" y="2" width="1" height="3" fill={border} />
      {/* Center V dip */}
      <rect x="5" y="2" width="1" height="2" fill={border} />
      <rect x="6" y="3" width="1" height="1" fill={border} />
      <rect x="7" y="2" width="1" height="2" fill={border} />
      {/* Side down slopes */}
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
      {/* Bottom point */}
      <rect x="6" y="10" width="1" height="1" fill={border} />

      {/* Inside Fill */}
      {/* Left lobe */}
      <rect x="2" y="2" width="3" height="1" fill={color} />
      <rect x="2" y="3" width="4" height="2" fill={color} />
      {/* Right lobe */}
      <rect x="8" y="2" width="3" height="1" fill={color} />
      <rect x="7" y="3" width="4" height="2" fill={color} />
      {/* Center body */}
      <rect x="2" y="5" width="9" height="1" fill={color} />
      <rect x="3" y="6" width="7" height="1" fill={color} />
      <rect x="4" y="7" width="5" height="1" fill={color} />
      <rect x="5" y="8" width="3" height="1" fill={color} />
      <rect x="6" y="9" width="1" height="1" fill={color} />

      {/* Cute White Pixel Shine / Specular highlight */}
      <rect x="3" y="2" width="1" height="2" fill="#FFFFFF" opacity="0.9" />
      <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.9" />
    </svg>
  )
}
