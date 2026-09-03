// Rich Message Directory, Curated Note Catalog & Mode Definitions

export const modes = {
  romantic: {
    id: 'romantic',
    name: 'Romantic Confession',
    tagline: 'Because saying it in person makes me freeze up.',
    badge: 'I REALLY, REALLY LIKE YOU.',
    tentativeText: 'I was just wondering if maybe we could hang out some—',
    honestTruth: (display, from) =>
      `Actually...\nI don't just want to 'hang out'.\nI can write thousands of lines of code, but saying how I feel to you? I completely freeze up.\nSo I spent hours building this little 8-bit note for you instead.`,
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

// 4 Dialogue Story Styles × 4 Modes = 16 Unique Confessions
// Each intro style adapts its voice to the active mode context.
// The Shy Developer is the signature default.

export const dialogueIntros = {
  dev: {
    id: 'dev',
    name: 'The Shy Developer (Default)',
    badge: '👾 CODE & HESITATION',
    tentativeText: {
      romantic: 'I was just wondering if maybe we could hang out some—',
      crush: 'I wanted to send you something small, like a—',
      playful: 'I was going to build you a meme generator, but—',
      appreciation: 'I usually keep things to myself, but—',
    },
    honestTruth: {
      romantic: (display, from) =>
        `Actually...\nI don't just want to 'hang out'.\nI can write thousands of lines of code, but saying how I feel to you? I completely freeze up.\nSo I spent hours building this little 8-bit note for you instead.`,
      crush: (display, from) =>
        `Actually...\nI can write thousands of lines of code without thinking twice.\nBut every time I see you, ${display}, my brain just... stops working.\nI have had a crush on you for a while now. And I couldn't keep it to myself anymore.`,
      playful: (display, from) =>
        `Actually...\nA meme isn't enough for someone like you, ${display}.\nI can debug the messiest code at 3 AM, but trying to explain why you are my favorite person? Impossible.\nSo I built you this instead. You are welcome.`,
      appreciation: (display, from) =>
        `Actually...\nI can write thousands of lines of code, but writing how much you mean to me? That is genuinely the hardest thing.\n${display}, you make my world so much better just by being in it.\nThank you for everything.`,
    },
  },
  overthinker: {
    id: 'overthinker',
    name: 'The Overthinker',
    badge: '💭 WROTE & DELETED 40 TIMES',
    tentativeText: {
      romantic: 'I wrote and deleted this message like 40 times...',
      crush: 'I typed this out, panicked, closed the app, opened it again—',
      playful: 'I overthought whether to send this for three whole days—',
      appreciation: 'I kept wondering if this was too much, but—',
    },
    honestTruth: {
      romantic: (display, from) =>
        `Actually...\nI overthink literally everything in my life.\nEvery word, every step, every scenario.\nExcept how much I like you, ${display}. That was the only thing that felt completely simple.`,
      crush: (display, from) =>
        `Actually...\nI have replayed this moment in my head a thousand times.\nWhat to say, how to say it, whether you would think it is weird.\nBut ${display}, I have a crush on you. And no amount of overthinking changes that.`,
      playful: (display, from) =>
        `Actually...\nI analyzed this decision from 47 different angles.\nPros, cons, risk assessment, the whole thing.\nConclusion: ${display}, you are genuinely my favorite person and I needed you to know.`,
      appreciation: (display, from) =>
        `Actually...\nI kept going back and forth on whether to send this.\nBut ${display}, you deserve to hear it clearly:\nYou are one of the most important people in my life, and I do not say that lightly.`,
    },
  },
  daydreamer: {
    id: 'daydreamer',
    name: 'The Daydreamer',
    badge: '✨ WAITING FOR COURAGE',
    tentativeText: {
      romantic: 'Hey... I have been trying to find the right time to say this—',
      crush: 'I have been daydreaming about telling you something—',
      playful: 'I had this whole imaginary conversation with you in my head—',
      appreciation: 'I have been meaning to tell you something for a while—',
    },
    honestTruth: {
      romantic: (display, from) =>
        `Actually...\nThere is never a 'perfect' time.\nEvery time you smile or talk to me, my entire day gets 100x better.\nI just could not keep this to myself anymore, ${display}.`,
      crush: (display, from) =>
        `Actually...\nI have spent more time thinking about you than I would ever admit out loud.\n${display}, I have a crush on you.\nAnd finally saying it feels like the biggest relief in the world.`,
      playful: (display, from) =>
        `Actually...\nIn my head, this conversation went way smoother.\nBut the truth is simple, ${display}: you are my favorite human.\nNo one else even comes close. Thought you should know.`,
      appreciation: (display, from) =>
        `Actually...\nI have been carrying these words around for a while.\n${display}, you are one of the warmest, most genuine souls I know.\nThe world is honestly lucky to have you. And so am I.`,
    },
  },
  direct: {
    id: 'direct',
    name: 'Direct & Sincere',
    badge: '💌 NO GAMES OR DRAMA',
    tentativeText: {
      romantic: 'I was thinking of keeping this to myself, but—',
      crush: 'I could pretend I do not feel this way, but—',
      playful: 'No big intro needed, just—',
      appreciation: 'This is going to be straightforward—',
    },
    honestTruth: {
      romantic: (display, from) =>
        `Actually...\nNo games, no hesitations, no drama.\n${display}, you are simply one of the most incredible people I have ever met.\nAnd I just really, really wanted you to know that I like you.`,
      crush: (display, from) =>
        `Actually...\nI am not going to dance around it.\n${display}, I have a crush on you. A real one.\nAnd pretending otherwise was starting to feel dishonest.`,
      playful: (display, from) =>
        `Actually...\nStraight to the point:\n${display}, you are an absolute legend and my number one favorite person.\nThat is it. That is the whole message. Deal with it.`,
      appreciation: (display, from) =>
        `Actually...\nNo fancy words needed.\n${display}, you are genuinely wonderful. Your presence makes everything better.\nI just wanted to make sure you actually know that.`,
    },
  },
}

export function getDialogueIntro(introKey) {
  return dialogueIntros[introKey] || dialogueIntros.dev
}

