// Rich Message Directory, Curated Note Catalog & Mode Definitions

export const modes = {
  romantic: {
    id: 'romantic',
    name: 'Romantic Confession',
    tagline: 'Because saying it in person makes me freeze up.',
    badge: 'I REALLY, REALLY LIKE YOU.',
    tentativeText: 'I was just wondering if maybe we could hang out some—',
    honestTruth: (display, from) =>
      `Actually...\nI don't just want to 'hang out'.\nI can write hundreds of lines of code, but saying how I feel to you? I completely freeze up.\nSo I spent hours building this little 8-bit note for you instead.`,
    crossedOut: { strikethrough: 'nice', replacement: 'extraordinary' },
    subtitle: (display) => `For ${display}. No pressure, no expectations at all. I just wanted you to know how special you are to me.`,
    reasons: [
      {
        id: 0,
        title: 'YOUR SMILE',
        icon: '★',
        text: 'It completely brightens any room. Impossible not to notice.',
      },
      {
        id: 1,
        title: 'OUR TALKS',
        icon: '💬',
        text: 'Even the simplest conversation with you is the highlight of my day.',
      },
      {
        id: 2,
        title: 'YOUR LAUGH',
        icon: '♥',
        text: '10/10 pure joy. It instantly makes everything feel lighter.',
      },
    ],
    victoryText: 'Building this was the easiest choice in the world. Hope it brought a smile to your face!',
  },

  crush: {
    id: 'crush',
    name: 'Secret Crush',
    tagline: 'The secret I have been keeping for a while.',
    badge: 'I HAVE A CRUSH ON YOU.',
    tentativeText: 'Hey... I have been trying to find the right time to say this—',
    honestTruth: (display, from) =>
      `Actually...\nThere is never a 'perfect' time.\nEvery time you smile or say my name, my entire day gets 100x better.\nI have had a secret crush on you for a while now, ${display}.`,
    crossedOut: { strikethrough: 'cool', replacement: 'mesmerizing' },
    subtitle: (display) => `For ${display}. I was too shy to say it out loud, but keeping it to myself was getting impossible.`,
    reasons: [
      {
        id: 0,
        title: 'WHEN YOU TEXT',
        icon: '📱',
        text: 'Seeing your name on my screen instantly gives me butterflies.',
      },
      {
        id: 1,
        title: 'YOUR VIBE',
        icon: '✨',
        text: 'You have this effortless charm that makes everyone around you happy.',
      },
      {
        id: 2,
        title: 'THE SECRET',
        icon: '🤫',
        text: 'I have wanted to tell you this for a very long time.',
      },
    ],
    victoryText: 'Now that the secret is out... I hope you are smiling right now!',
  },

  playful: {
    id: 'playful',
    name: 'Playful & Teasing',
    tagline: 'You are officially my favorite human.',
    badge: 'YOU ARE MY FAVORITE PERSON.',
    tentativeText: 'I was thinking of sending you a silly meme, but—',
    honestTruth: (display, from) =>
      `Actually...\nA simple meme isn't enough for you, ${display}.\nYou are easily the funniest, coolest, and sweetest person around.\nJust wanted to make you smile today!`,
    crossedOut: { strikethrough: 'annoying', replacement: 'my favorite' },
    subtitle: (display) => `Certified 100% top-tier human. Don't let it get to your head, ${display}!`,
    reasons: [
      {
        id: 0,
        title: 'YOUR CHAOS',
        icon: '⚡',
        text: 'Never a dull moment when you are around. 10/10 pure entertainment.',
      },
      {
        id: 1,
        title: 'OUR HUMOR',
        icon: '🍕',
        text: 'We share the exact same weird brainwaves, and I love it.',
      },
      {
        id: 2,
        title: 'MAIN CHARACTER',
        icon: '👑',
        text: 'You radiate undeniable main-character energy everywhere you go.',
      },
    ],
    victoryText: 'Official certificate awarded: You are simply irreplaceable!',
  },

  appreciation: {
    id: 'appreciation',
    name: 'Pure Appreciation',
    tagline: 'A little reminder of how wonderful you are.',
    badge: 'YOU ARE TRULY INCREDIBLE.',
    tentativeText: "I usually don't say cheesy emotional stuff, but—",
    honestTruth: (display, from) =>
      `Actually...\nYou truly deserve to hear this, ${display}.\nYour kindness and warmth make the world a much better place.\nThank you for simply being you.`,
    crossedOut: { strikethrough: 'good', replacement: 'irreplaceable' },
    subtitle: (display) => `For ${display}. Just a gentle reminder of how deeply valued and appreciated you are.`,
    reasons: [
      {
        id: 0,
        title: 'YOUR KINDNESS',
        icon: '🌱',
        text: 'You notice the little things that most people miss, and it matters.',
      },
      {
        id: 1,
        title: 'YOUR PRESENCE',
        icon: '🛡️',
        text: 'Having you in my life makes every challenge feel so much easier.',
      },
      {
        id: 2,
        title: 'YOUR LIGHT',
        icon: '🌟',
        text: 'You make people feel seen, supported, and genuinely happy.',
      },
    ],
    victoryText: 'The world is so much better with you in it. Never forget that!',
  },
}

// Curated Note Catalog for the Personal Secret Letter
export const NOTE_CATALOG = [
  {
    category: 'Romantic & Sweet',
    notes: [
      'Your smile is completely unfair to my heart.',
      'I can write 1000 lines of code, but you still leave me speechless.',
      'You are my favorite notification.',
      'Every love song suddenly makes sense when I think of you.',
    ],
  },
  {
    category: 'Secret Crush',
    notes: [
      'I tried to play it cool, but honestly I am totally smitten.',
      'I overthink literally everything, except how much I like you.',
      'I was going to keep this a secret, but you are too special not to know.',
      'Seeing you smile resets my entire day.',
    ],
  },
  {
    category: 'Playful & Cute',
    notes: [
      '10/10 would choose talking with you over sleep any day.',
      'You have the best laugh in the entire universe.',
      'Life got about 100x more interesting since the day I met you.',
      'Warning: This cartridge was made by someone who is very fond of you.',
    ],
  },
  {
    category: 'Warm & Wholesome',
    notes: [
      'You make ordinary days feel like something worth remembering.',
      'You are like a warm cup of coffee on a rainy Sunday morning.',
      'My favorite part of any day is whenever you are in it.',
      'Thank you for bringing so much light into my life.',
    ],
  },
]

// Flat list of all notes for randomizer
export const ALL_NOTES = NOTE_CATALOG.flatMap((cat) => cat.notes)

export function getRandomNote() {
  const idx = Math.floor(Math.random() * ALL_NOTES.length)
  return ALL_NOTES[idx]
}

export function getModeData(modeKey) {
  return modes[modeKey] || modes.romantic
}
