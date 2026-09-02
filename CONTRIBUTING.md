# Contributing to I-Like-U 🎮♥

Thank you for your interest in contributing to **I-Like-U**!
This is an open-source project designed to spread genuine warmth, tender confessions, and nostalgic 8-bit love. Everyone is welcome to contribute improvements, new themes, cute pixel sprites, or localized translations.

---

## 🌟 How Can You Contribute?

You can contribute in many ways:
1. **🎨 Adding New Retro Palettes & Stickers**: Propose nostalgic shells or crooked stickers in `src/lib/theme.js`.
2. **🐾 Creating New Pixel Companions**: Design cute 20x20 pixel companions in `src/components/PixelSprites.jsx`.
3. **💬 Suggesting Message Presets & Languages**: Expand `src/lib/messages.js` with heartfelt notes or internationalization.
4. **🎵 Audio Synths**: Refine Web Audio frequencies, arpeggios, or chiptune melodies in `src/lib/sound.js`.
5. **🐛 Bug Reports & Fixes**: File an issue or PR for layout or cross-browser quirks.

---

## 🛠️ Development Workflow

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/Zierax/I-Like-U.git
   cd I-Like-U
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/my-new-pixel-companion
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```
6. **Test production build** to ensure no compilation errors:
   ```bash
   npm run build
   ```

---

## 📐 Design & Code Standards

- **Zero Cringe Policy**: Maintain sincere, tender, and heartwarming vibes. Avoid cynical jokes, generic memes, or robotic AI-sounding corporate language.
- **Pure Web Audio**: Do not import large `.mp3` or `.wav` files. All sound effects and background music should be procedurally generated via Web Audio API oscillators for speed and zero-asset footprint.
- **Pure SVG Pixel Art**: Pixel sprites should use crisp SVG rectangles (`image-rendering: pixelated`) on consistent grids (e.g. 20x20) with high contrast borders.
- **Semantic Commits**: Use descriptive commit messages (`feat: ...`, `fix: ...`, `docs: ...`).

---

## 📬 Submitting a Pull Request

1. Commit your changes:
   ```bash
   git add .
   git commit -m "feat(sprites): add pixel bunny companion"
   ```
2. Push to your fork:
   ```bash
   git push origin feature/my-new-pixel-companion
   ```
3. Open a Pull Request on the main [Zierax/I-Like-U](https://github.com/Zierax/I-Like-U) repository.
4. Describe your change clearly and attach screenshots or screen recordings if applicable.

Thank you for helping make the digital world a little warmer and sweeter! ♥
