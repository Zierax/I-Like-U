# 👾 I-Like-U · The Pocket Love System

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-pink?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/Vibe-100%25_Handcrafted-purple?style=flat-square" alt="Handcrafted" />
  <img src="https://img.shields.io/badge/Audio-0MB_Pure_Synth-darkgreen?style=flat-square" alt="Pure Web Audio" />
  <img src="https://img.shields.io/badge/Chance_of_Blushing-99.8%25-rose?style=flat-square" alt="Blush Probability" />
</p>

<p align="center">
  <a href="https://fazier.com/launches/i-like-u-kappa.vercel.app" target="_blank"><img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=neutral" width="250" alt="Fazier badge" /></a>
</p>

<p align="center">
  <a href="https://i-like-u-kappa.vercel.app"><b>🎮 Open the Game Boy</b></a> · 
  <a href="https://i-like-u-kappa.vercel.app/create"><b>💌 Make a Custom Cartridge</b></a> · 
  <a href="https://github.com/Zierax/I-Like-U/releases/tag/v1.0.0"><b>📦 v1.0.0 Release</b></a>
</p>

<p align="center">
  <i>"I can debug 3,000 lines of messy async code at 3 AM without sweating,<br/>
  but saying 'I like you' in person? Complete kernel panic."</i>
</p>

---

## 🧐 Why does this exist?

1. **Saying how you feel out loud is terrifying.**
2. A generic WhatsApp text feels lame.
3. An Instagram reel feels impersonal.
4. **Over-engineering an entire virtual 1989 handheld console** with procedural Web Audio synthesis, real-time pixel scanlines, and a tactile D-pad to tell someone you like them? *Objectively peak romance.*

Whether it's for your crush, your partner, or your best friend who deserves to know they're an absolute legend, **I-Like-U** wraps your message inside an authentic retro cartridge experience.

---

## 🕹️ Human Imperfections (The Fun Stuff)

Most digital cards feel like sterile corporate templates. We added the messy, nervous human details:

- ⌨️ **The Hesitation Engine**: It starts typing an awkward *"Hey are you free this weekend or maybe we could—"*, freezes, furiously hits backspace, and finally spits out the honest truth.
- 🩹 **Scotch Tape & Crooked Stickers**: Every good cartridge was dropped on the floor at least three times. Tap the tape on the top right to watch it wiggle.
- 💨 **Cartridge Blowing**: If your game is lagging (or you just miss 1998), tap to blow dust out of the cartridge with authentic puff SFX.
- 🍅 **The (B) Button Blush**: Spam the (B) button to make the console blush.
- 🎶 **Zero MP3 Audio Engine**: No bloated 20MB sound files. Every single chord progression (`Cmaj7 → Am9 → Fmaj7 → Gsus4`) and clicky button sound is procedurally generated in real-time by your browser's audio chips.

---

## 🐾 Choose Your Companion

| Companion | Personality |
|---|---|
| 🐱 **Chubby Kitty** | Holds your love note with tiny twitching paws. 10/10 specular anime eyes. |
| 🐶 **Shiba Puppy** | Fluffy golden fur, floppy ears, and an uncontrollable wagging tail. |
| 🧸 **Cozy Bear** | Chocolate brown teddy bear holding an envelope with a cute red seal. |
| 🧑‍💻 **The Shy Dev** | Retro headphones, oversized hoodie, blushed cheeks, and zero social battery. |

---

## 🎭 4 Confession Flavors (16 Mode Variations)

You don't have to be a coder to use this! We built **4 distinct confession personalities**, each with unique dialogues for whatever vibe you're going for:

- 👾 **The Shy Developer (Signature Default)**: *"I can write thousands of lines of code, but saying how I feel to you makes me freeze up."*
- 💭 **The Overthinker**: *"I analyzed this decision from 47 different angles, drafted this 40 times, panicked, and sent it anyway."*
- ✨ **The Daydreamer**: *"There was never going to be a 'perfect' time. Every time you smile my day gets 100x better."*
- 💌 **Direct & Sincere**: *"No games, no drama, no beating around the bush. You are extraordinary."*

*Or override it completely with your own sentence right inside the generator!*

---

## 🚀 Quick Start for Hackers

Want to run it locally, tweak the chiptunes, or host your own version?

```bash
# 1. Grab the code
git clone https://github.com/Zierax/I-Like-U.git
cd I-Like-U

# 2. Install dependencies (it's lightweight, we promise)
npm install

# 3. Fire up the dev server
npm run dev
```

Open `http://localhost:5173` and start clicking buttons.

---

## 🛠️ URL Hacker Cheat Sheet (Query Params)

Want to skip the UI and craft your link directly? You sneaky nerd:

```text
https://i-like-u-kappa.vercel.app/for/:name?from=...&theme=...&mode=...&avatar=...&intro=...&note=...
```

| Parameter | Options | Default | What it actually does |
|---|---|---|---|
| `:name` | `Maya`, `Sarah`, `Alex`, etc. | `Someone` | The lucky person receiving this cartridge. |
| `from` | Any name | `''` | Who gets credit (or blame) for this confession. |
| `theme` | `blush`, `atomic`, `classic`, `mint`, `starlight` | `blush` | Pocket Sakura, Atomic Purple, Game Boy 1989, or Mint. |
| `mode` | `romantic`, `crush`, `playful`, `appreciation` | `romantic` | Confession tone (Romantic, Secret Crush, Homie/Friend, or Wholesome). |
| `avatar` | `kitty`, `puppy`, `bear`, `dev` | `kitty` | The pixel creature delivering the letter. |
| `intro` | `dev`, `overthinker`, `daydreamer`, `direct` | `dev` | The Scene 1 hesitation personality. |
| `intro_text`| Any custom text (max 240 chars) | `''` | Overwrite the honest truth with your exact words. |
| `note` | Any text (max 120 chars) | `''` | A secret one-liner hidden inside the envelope. |

**Example URL:**
```
https://i-like-u-kappa.vercel.app/for/Camile?from=Leo&theme=atomic&mode=crush&avatar=kitty&note=You%20are%20my%20favorite%20human.
```

---

## ❓ FAQ (Frequently Asked Doubts)

**Q: Will this guarantee my crush likes me back?**  
A: We are programmers, not wizards. But if someone sends you a handcrafted 8-bit retro handheld console with procedural Web Audio chord progressions and you *don't* smile, you might actually be a robot.

**Q: Can I send this to my homies / best friend?**  
A: YES! Set mode to `playful` (Playful & Teasing) or `appreciation` (Pure Appreciation). Tell your best friend they're an absolute legend without making it weird (or make it weird, we don't judge).

**Q: Do I need to know how to code?**  
A: Not at all! Just go to [/create](https://i-like-u-kappa.vercel.app/create), type two names, pick your favorite console color, and copy the link.

**Q: Why is there masking tape on the top right?**  
A: Because authentic 90s tech was held together by pure nostalgia and scotch tape.

---

## 🚢 Deploying Your Own

One-click deploy to Vercel:

```bash
npx vercel
```

*(We already included `vercel.json` so your deep routes like `/for/Someone` never return 404s).*

---

## 🤝 Contributing

Got an idea for a pixel bunny? A nostalgic clear-cyan shell? A better lofi melody?  
Read [CONTRIBUTING.md](./CONTRIBUTING.md) and send a pull request!

---

## 📄 License

**MIT License** © 2026 [Zierax](https://github.com/Zierax).  
Free to fork, tweak, customize, and use to confess to whoever makes your heart drop frames.
