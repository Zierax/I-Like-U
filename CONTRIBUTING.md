# Contributing to I-Like-U 🎮♥

First off: thank you for even considering helping out!  
Whether you want to draw a 20x20 pixel bunny, write a wholesome message that doesn't sound like it came out of a corporate HR department, or optimize an oscillator frequency in our synth engine, you are very welcome here.

---

## 🛑 The Golden Rules (Read these first!)

1. **The Anti-Cringe Policy**:
   - Keep messages genuine, slightly vulnerable, or playfully funny.
   - Strictly NO generic Hallmark quotes, NO ChatGPT cliché aphorisms (*"You are the CSS to my HTML"* was funny in 2012, let it rest in peace), and NO cynical jokes.
2. **Pure Code, Zero Asset Bloat**:
   - Please do NOT commit 40MB `.mp3` or `.wav` files.
   - All audio is synthesized procedurally on the fly via the Web Audio API in `src/lib/sound.js`. If you want a new sound, sculpt it with oscillators, gain nodes, and frequencies like an old-school chiptune artist!
3. **Pure SVG Pixel Art**:
   - All companions and props are drawn with crisp SVG rectangles using `shape-rendering="crispEdges"`. No random blurry PNGs.
4. **Be Kind**:
   - This project exists to help nervous humans express affection. Negative vibes will be met with an animated blushing cat.

---

## 🌟 Fun Things You Can Add

- 🎨 **New Shell Palettes**: Got a favorite Game Boy Color edition? (Ice Blue, Extreme Green, Dandelion Yellow?) Add a theme object to `src/lib/theme.js`.
- 🐾 **Pixel Companions**: We have a cat, a puppy, a teddy bear, and a shy dev. A duck with a little hat? A pixel penguin? A hamster? Draw it in `src/components/PixelSprites.jsx`!
- 💬 **Heartfelt Notes & Localizations**: Add new sincere one-liners or help translate dialogue into French, Spanish, Arabic, Japanese, or whatever language you speak in `src/lib/messages.js`.
- 🎵 **Chiptune Melodies**: Know some music theory? Help compose new procedural lofi chord progressions in `src/lib/sound.js`.

---

## 🛠️ Step-by-Step Contribution Workflow

```bash
# 1. Fork and clone
git clone https://github.com/<your-username>/I-Like-U.git
cd I-Like-U

# 2. Install dependencies
npm install

# 3. Create your feature branch
git checkout -b feature/pixel-duck-companion

# 4. Start the dev server
npm run dev

# 5. Build to make sure nothing is broken
npm run build
```

---

## 📬 Submitting Your Pull Request

1. Commit your changes with a clear commit message:
   ```bash
   git commit -m "feat(sprites): add pixel duck with tiny beret"
   ```
2. Push to your fork:
   ```bash
   git push origin feature/pixel-duck-companion
   ```
3. Open a Pull Request against `main` on [Zierax/I-Like-U](https://github.com/Zierax/I-Like-U).
4. Include a screenshot or quick GIF of your change if it touches the UI!

Thank you for helping us make confessions a little less terrifying and a lot more fun! ♥
