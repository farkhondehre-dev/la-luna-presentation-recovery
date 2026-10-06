/*
  LA LUNA CONTENT
  Change the values in this file, then republish the site.
  Replace the placeholder image paths with your own files when they are ready.
*/
const laLunaOne = {
  presentationLabel: "Logo presentation · 01",
  name: "La Luna",
  nativeName: "ЛА ЛУНА",
  tagline: "Care Beyond Clean",
  intro: "Specialist fabric care with a softer point of view.",
  conceptLabel: "CORE CONCEPT",
  positioning: "The logo balances precision with softness, reflecting effective yet gentle fabric care.",
  conceptTitle: "Refined Expertise",
  concept: "Its flowing curves echo the natural movement and folds of fabric, bringing softness and tactility to a confident, expert identity.",
  colors: [
    { name: "Midnight Navy", hex: "#18213D", usage: "Primary", group: "primary" },
    { name: "Moonlight Blue", hex: "#AFC9DB", usage: "Primary", group: "primary" },
    { name: "Warm White", hex: "#F6F4EF", usage: "Primary", group: "primary" },
    { name: "Soft Lavender", hex: "#CBC6D8", usage: "Secondary", group: "secondary" },
    { name: "Soft Cream", hex: "#EAE4D8", usage: "Secondary", group: "secondary" },
    { name: "Silver Grey", hex: "#C5C7C9", usage: "Secondary", group: "secondary" }
  ],
  colourLanguage: {
    title: "Softness with authority.",
    primary: "Balances confidence, care and calm, creating a foundation that feels both expert and gentle.",
    secondary: "Adds warmth, softness and flexibility, allowing the identity to expand across products while staying consistent."
  },
  typography: {
    display: "Georgia",
    body: "Gotham",
    title: "Character with clarity.",
    georgiaLead: "Warm. Familiar. Refined.",
    georgiaDescription: "Georgia’s expressive serifs and generous proportions bring warmth to the identity. Used for headlines, it gives La Luna a confident voice with a gentle character.",
    gothamLead: "Clear. Balanced. Practical.",
    gothamDescription: "Gotham’s geometric forms provide a clean counterpoint to Georgia. Used for product information and supporting copy, it creates a clear hierarchy and keeps communication direct.",
    note: "Georgia adds character; Gotham brings structure. Together, they balance softness with fabric-care expertise."
  },
  logoSystem: {
    wordmarks: {
      title: "LOGOMARK",
      subtitle: "Refined. Distinctive. Confident.",
      description: "A custom wordmark designed to balance fabric-care expertise with softness, creating a sophisticated identity without entering beauty or fashion territory.",
      marks: [
        { name: "Cyrillic wordmark", file: "d01-wordmark-cyrillic.svg" },
        { name: "Latin wordmark", file: "d01-wordmark-latin.svg" }
      ]
    },
    lockups: {
      title: "LOGOMARK & ARC",
      subtitle: "A controlled lunar cue.",
      description: "The Arc connects La Luna to its lunar meaning without using a literal moon symbol, adding recognition while keeping the identity refined and credible.",
      marks: [
        { name: "Cyrillic lockup", file: "d01-cyrillic-lockup.svg" },
        { name: "Latin lockup", file: "d01-latin-lockup.svg" }
      ]
    }
  },
  applications: [
    { title: "Moonlit Clean", description: "Liquid laundry detergent. A soft white bottle with a crescent-led form language.", image: "la-luna-detergent.png" },
    { title: "Softness in Bloom", description: "Fabric softener. Lavender, silver and delicate florals make care feel elevated.", image: "la-luna-softener.png" },
    { title: "Care at Home", description: "A calm, sensory product world for packaging, retail and campaign application.", image: "la-luna-laundry-scene.png" }
  ],
  lifestyle: [
    { title: "The Linen Moment", description: "Fresh fabric, gently held close.", image: "la-luna-linen-moment.png" },
    { title: "Softness That Stays", description: "Comfort that follows you into the evening.", image: "la-luna-sleeping.png" },
    { title: "Made for the Laundry Room", description: "Care, within reach when it matters.", image: "la-luna-laundry-placement.png" },
    { title: "Placed with Purpose", description: "A considered product moment in the laundry space.", image: "la-luna-bedroom-placement.png" }
  ],
  downloads: [
    { label: "Cyrillic logo", file: "LaLuna_D01_Cyrillic.pdf", note: "PDF" },
    { label: "Latin logo", file: "LaLuna_D01_Latin.pdf", note: "PDF" }
  ]
};

/*
  Each object below is a complete, independent presentation.
  Edit the text, colours, image paths and downloads inside La Luna 2 or 3
  when your other logo directions are ready. The current images are only
  shared placeholders, so every direction begins as a complete presentation.
*/
const clonePresentation = (content) => JSON.parse(JSON.stringify(content));
const laLunaTwo = clonePresentation(laLunaOne);
laLunaTwo.presentationLabel = "Logo presentation · 02";
laLunaTwo.tagline = "Care Beyond Clean";
laLunaTwo.intro = "Specialist fabric care with a softer point of view.";
laLunaTwo.positioning = "Inspired by an eclipse, the circular form surrounds the wordmark like a protective layer around fabric.";
laLunaTwo.conceptTitle = "Protective Care";
laLunaTwo.concept = "The concept transforms the lunar reference into a symbol of protection, complete care and softness, creating a more immersive and emotional expression of La Luna.";
laLunaTwo.colors = [
  { name: "Eclipse Navy", hex: "#1D2055", usage: "Depth, trust & the eclipse", group: "primary" },
  { name: "Moon White", hex: "#F7F5F0", usage: "Light expression & clean contrast", group: "primary" },
  { name: "Halo Gold", hex: "#E7B968", usage: "Eclipse light · accent only", group: "primary" },
  { name: "Moon Grey", hex: "#D5D6D8", usage: "Minimal, neutral eclipse", group: "primary" },
  { name: "Dusk Lavender", hex: "#B8B3D0", usage: "Softness & fabric care", group: "secondary" },
  { name: "Mist Blue", hex: "#AABFD2", usage: "Freshness & clean care", group: "secondary" },
  { name: "Soft Stone", hex: "#DDD6CB", usage: "Warmth & tactile quality", group: "secondary" }
];
laLunaTwo.colourLanguage = {
  title: "Protection, expressed through colour.",
  primary: "Eclipse Navy brings depth and trust. Moon White keeps the light expression clean, Moon Grey adds a minimal, neutral eclipse treatment, and Halo Gold introduces eclipse light as a restrained accent.",
  secondary: "Dusk Lavender, Mist Blue and Soft Stone add softness, freshness and warmth to the fabric-care identity."
};
laLunaTwo.logoSystem = {
  wordmarks: {
    title: "LIGHT EXPRESSION",
    subtitle: "Quiet Protection",
    description: "The open eclipse creates a sense of gentle protection around the wordmark, while the light treatment keeps the identity clean, calm and suitable for everyday fabric care.",
    marks: [
      { name: "Light expression · Cyrillic", file: "LaLuna_D02_Light_Cyrillic.svg" },
      { name: "Light expression · Latin", file: "LaLuna_D02_Light_Latin.svg" }
    ]
  },
  lockups: {
    title: "DARK EXPRESSION",
    subtitle: "Protective Glow",
    description: "The dark expression brings the eclipse concept to life through light and contrast. The glow surrounding the form suggests a protective aura — giving fabric care a more emotional, sensory expression.",
    marks: [
      { name: "Dark expression · Cyrillic", file: "LaLuna_D02_Dark_Cyrillic.png" },
      { name: "Dark expression · Latin", file: "LaLuna_D02_Dark_Latin.png" }
    ]
  }
};
laLunaTwo.applications = [
  { title: "Quiet Protection", description: "White laundry detergent with the light eclipse expression: clean, calm and confident.", image: "d02-detergent.png" },
  { title: "Protective Glow", description: "Eclipse Navy fabric softener with a luminous halo: an immersive expression of softness and care.", image: "d02-softener.png" },
  { title: "Complete Care", description: "Two complementary expressions, united by protective fabric care.", image: "d02-care-at-home.png" }
];
laLunaTwo.lifestyle = [
  { title: "A Fresh Embrace", description: "The quiet pleasure of freshly cared-for fabric.", image: "d02-linen-moment.png" },
  { title: "Wrapped in Softness", description: "Gentle comfort that surrounds you.", image: "d02-sleeping.png" },
  { title: "Everyday Protection", description: "Confident care, at the heart of the laundry routine.", image: "d02-laundry-placement.png" },
  { title: "Care Within Reach", description: "Softness, ready for the next wash.", image: "d02-shelf-placement.png" }
];
laLunaTwo.downloads = [
  { label: "Light expression · Cyrillic", file: "LaLuna_D02_Light_Cyrillic.pdf", note: "PDF" },
  { label: "Light expression · Latin", file: "LaLuna_D02_Light_Latin.pdf", note: "PDF" },
  { label: "Dark expression · Cyrillic", file: "LaLuna_D02_Dark_Cyrillic.pdf", note: "PDF" },
  { label: "Dark expression · Latin", file: "LaLuna_D02_Dark_Latin.pdf", note: "PDF" }
];

const laLunaThree = clonePresentation(laLunaOne);
laLunaThree.presentationLabel = "Logo presentation · 03";
laLunaThree.tagline = "Performance, wrapped in comfort.";
laLunaThree.intro = "A clearer, more confident direction for modern fabric care.";
laLunaThree.positioning = "This direction gives La Luna a crisper, more contemporary voice while preserving the softness and reassurance at the heart of the brand.";
laLunaThree.conceptTitle = "A brighter expression of thoughtful care.";
laLunaThree.concept = "Use this area to describe the third logo direction: its point of view, visual language and the feeling it is designed to create.";
laLunaThree.colors = [
  { name: "Lunar Blue", hex: "#6F92BD", usage: "Primary brand colour" },
  { name: "Cloud Lavender", hex: "#D3CEE4", usage: "Gentle accent" },
  { name: "Moon Milk", hex: "#FAF8F3", usage: "Base surface" },
  { name: "Silver Glow", hex: "#C9D0DA", usage: "Secondary neutral" },
  { name: "Night Blue", hex: "#1E3049", usage: "Typography & contrast" }
];
laLunaThree.logoSystem = null;
laLunaThree.downloads = [];

window.brandContent = laLunaOne;
window.brandPresentations = { "1": laLunaOne, "2": laLunaTwo, "3": laLunaThree };
