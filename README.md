# 🎮 I-Like-U · Pocket Love System

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-pink?style=for-the-badge" alt="License: MIT" />
  <img src="https://img.shields.io/badge/Tech-React_%7C_Vite_%7C_Web_Audio-purple?style=for-the-badge" alt="Tech Stack" />
  <img src="https://img.shields.io/badge/Aesthetic-8--Bit_Handheld_Retro-darkgreen?style=for-the-badge" alt="Aesthetic" />
  <img src="https://img.shields.io/badge/Version-v1.0.0-rose?style=for-the-badge" alt="Version 1.0.0" />
  <a href="https://i-like-u-kappa.vercel.app"><img src="https://img.shields.io/badge/🌐_Live_Demo-i--like--u--kappa.vercel.app-blue?style=for-the-badge" alt="Live Demo" /></a>
</p>

<p align="center">
  <b>A heartwarming, open-source 8-bit retro handheld love note generator.</b><br/>
  Craft a bespoke, interactive Game Boy cartridge experience for someone special with custom modes, sincere dialogue, tactile controls, and relaxing procedural lofi chiptune music.
</p>

<p align="center">
  <a href="https://i-like-u-kappa.vercel.app"><b>▶ Try the Live Demo</b></a> · <a href="https://github.com/Zierax/I-Like-U/releases/tag/v1.0.0"><b>📦 v1.0.0 Release</b></a>
</p>

---

## ✨ Features

- 🕹️ **Tactile Handheld Console**: Authentic Game Boy Pocket chassis with responsive D-pad, springy (A)/(B) physical buttons, power LED, scanlines, and audio toggles.
- 🎵 **Procedural 8-Bit Lofi Synth**: Zero bulky audio files. Generates smooth, soothing triangle/sine wave lullaby chord progressions (`Cmaj7 → Am9 → Fmaj7 → Gsus4`) and musical SFX via Web Audio API.
- 🐾 **4 Pixel Companions**:
  - 🐱 **Chubby Kitty** (Holding letter with twitching ears & sparkling eyes)
  - 🐶 **Shiba Puppy** (Floppy ears & wagging curled tail)
  - 🧸 **Cozy Bear** (Fluffy teddy bear with heart envelope)
  - 🧑‍💻 **Shy Developer** (Headphones, ahoge hair & oversized hoodie)
- 💬 **Human Imperfection Touches**:
  - **Hesitation & Backspace**: Types an awkward tentative message, pauses, backspaces character-by-character, and types the brave honest truth.
  - **Crossed-out Word**: Renders ~~nice~~ **extraordinary** with a subtle pink strike.
  - **Wiggling Sticker**: Crooked masking-tape sticker that wiggles when tapped.
  - **(B) Button Blush**: Pressing (B) triggers an easter egg blush reaction.
  - **Cartridge Cleaning**: Nostalgic "Blow on Cartridge" prompt with puff sound.
- 🎨 **5 Retro Shell Palettes**: Pocket Sakura, Atomic Purple, 1989 Classic, Retro Mint, and 8-Bit Midnight.
- 💌 **Tone & Dialogue Customization**:
  - Choose between *The Shy Developer*, *The Overthinker*, *The Daydreamer*, or *Direct & Sincere*.
  - Or write your own completely custom confession override!
- 📱 **Fast Share & QR**: Instant link copying, Web Share API support, and built-in SVG QR code generator for scanning with phones.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Zierax/I-Like-U.git

# 2. Enter directory
cd I-Like-U

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🛠️ Query Parameters API

You can generate custom links directly via URL query parameters:

```
https://<your-domain>/for/:name?from=...&theme=...&mode=...&avatar=...&intro=...&note=...
```

| Parameter | Type | Default | Options | Description |
|---|---|---|---|---|
| `:name` | Path param | `Someone` | Any string | Recipient's name |
| `from` | Query param | `''` | Any string | Creator / sender name |
| `theme` | Query param | `blush` | `blush`, `atomic`, `classic`, `mint`, `starlight` | Console shell color |
| `mode` | Query param | `romantic` | `romantic`, `crush`, `playful`, `appreciation` | Tone and letter badge |
| `avatar` | Query param | `kitty` | `kitty`, `puppy`, `bear`, `dev` | Screen companion sprite |
| `intro` | Query param | `dev` | `dev`, `overthinker`, `daydreamer`, `direct` | Scene 1 confession style |
| `intro_text`| Query param | `''` | Any string (max 240 chars) | Custom confession text override |
| `note` | Query param | `''` | Any string (max 120 chars) | Secret personal note in letter |

### Example Link
```
https://localhost:5173/for/Maya?from=Leo&theme=blush&mode=romantic&avatar=kitty&intro=dev&note=You%20are%20my%20favorite%20notification.
```

---

## 📂 Project Structure

```
I-Like-U/
├── src/
│   ├── components/
│   │   ├── Credit.jsx         # Open source project footer attribution
│   │   ├── PixelConsole.jsx   # Tactile Game Boy handheld console frame & controls
│   │   ├── PixelHeart.jsx     # Animated 8-bit glowing heart
│   │   └── PixelSprites.jsx   # SVG pixel art sprites (Cat, Dog, Bear, Dev, Envelope)
│   ├── lib/
│   │   ├── messages.js        # Dynamic mode stories, dialogue styles & note catalog
│   │   ├── sound.js           # Procedural Web Audio API synth (BGM + SFX)
│   │   └── theme.js           # Themes, stickers, helpers & URL builder
│   ├── pages/
│   │   ├── Experience.jsx     # 5-stage interactive Game Boy experience
│   │   └── Generator.jsx      # Clean link creator, live preview & QR code
│   ├── App.jsx                # React router configuration
│   ├── index.css              # Pixel fonts, scanlines, and retro animations
│   └── main.jsx               # App entry point
├── package.json
└── vite.config.js
```

---

## 🚢 Deployment & Live URL

The official project is deployed live on Vercel:

- 🌐 **Live Website**: [https://i-like-u-kappa.vercel.app](https://i-like-u-kappa.vercel.app)
- 💌 **Cartridge Generator**: [https://i-like-u-kappa.vercel.app/create](https://i-like-u-kappa.vercel.app/create)

You can also deploy your own fork in seconds:

### Deploy with Vercel
```bash
npx vercel
```

### Deploy with Netlify
```bash
npx netlify deploy --prod
```

### Build for Production
```bash
npm run build
```
The output will be created in the `dist/` directory ready for static hosting.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Please check out [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for more information.

<p align="center">
  Crafted with ♥ by <a href="https://github.com/Zierax"><b>Zierax</b></a>
</p>
