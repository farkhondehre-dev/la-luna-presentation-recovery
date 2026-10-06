/*
  LA LUNA CONTENT
  Change the values in this file, then republish the site.
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
    display: "Georgia", body: "Gotham", title: "Character with clarity.",
    georgiaLead: "Warm. Familiar. Refined.",
    georgiaDescription: "Georgia’s expressive serifs and generous proportions bring warmth to the identity. Used for headlines, it gives La Luna a confident voice with a gentle character.",
    gothamLead: "Clear. Balanced. Practical.",
    gothamDescription: "Gotham’s geometric forms provide a clean counterpoint to Georgia. Used for product information and supporting copy, it creates a clear hierarchy and keeps communication direct.",
    note: "Georgia adds character; Gotham brings structure. Together, they balance softness with fabric-care expertise."
  },
  logoSystem: {
    wordmarks: {
      title: "LOGOMARK", subtitle: "Refined. Distinctive. Confident.",
      description: "A custom wordmark designed to balance fabric-care expertise with softness, creating a sophisticated identity without entering beauty or fashion territory.",
      marks: [
        { name: "Cyrillic wordmark", file: "d01-wordmark-cyrillic.svg" },
        { name: "Latin wordmark", file: "d01-wordmark-latin.svg" }
      ]
    },
    lockups: {
      title: "LOGOMARK & ARC", subtitle: "A controlled lunar cue.",
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
    title: "LIGHT EXPRESSION", subtitle: "Quiet Protection",
    description: "The open eclipse creates a sense of gentle protection around the wordmark, while the light treatment keeps the identity clean, calm and suitable for everyday fabric care.",
    marks: [
      { name: "Light expression · Cyrillic", file: "LaLuna_D02_Light_Cyrillic.svg" },
      { name: "Light expression · Latin", file: "LaLuna_D02_Light_Latin.svg" }
    ]
  },
  lockups: {
    title: "DARK EXPRESSION", subtitle: "Protective Glow",
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
laLunaThree.tagline = "Care Beyond Clean";
laLunaThree.intro = "Specialist fabric care with a softer point of view.";
laLunaThree.conceptLabel = "CORE CONCEPT";
laLunaThree.conceptTitle = "Gentle by Nature";
laLunaThree.positioning = "Soft, flowing letterforms reflect the natural movement and softness of fabric, creating an identity centred around gentle everyday care.";
laLunaThree.concept = "The crescent completes the gesture — bringing a subtle sense of protection, comfort and La Luna’s lunar character.";
laLunaThree.designIdea = {
  label: "DESIGN IDEA",
  title: "Softness in every curve.",
  text: "Rounded forms and fluid transitions give the identity a tactile, fabric-like character. The crescent integrates naturally with the lettering, turning the lunar reference into a soft and caring gesture."
};
laLunaThree.colors = [
  { name: "Deep Plum", hex: "#403849", usage: "Anchor colour · mature & credible", group: "primary" },
  { name: "Powder Blue", hex: "#B9D1DA", usage: "Freshness & gentle care", group: "primary" },
  { name: "Soft Ivory", hex: "#F7F2E9", usage: "Warmth, cleanliness & calm", group: "primary" },
  { name: "Dusty Lilac", hex: "#C8B8CC", usage: "Lunar & sensory accent", group: "secondary" },
  { name: "Blush Clay", hex: "#D8BDB5", usage: "Warmth & tactility", group: "secondary" },
  { name: "Sage Mist", hex: "#C5CEC3", usage: "Calm SKU extension", group: "secondary" }
];
laLunaThree.colourLanguage = {
  title: "Warm, tactile care.",
  primary: "Soft neutrals and muted tones express gentleness, freshness and everyday fabric care, while a deeper anchor colour keeps the identity mature and credible.",
  secondary: "Subtle lilac, clay and sage introduce warmth and sensory variety, creating a flexible system for different fabric-care needs."
};
laLunaThree.logoSystem = {
  wordmarks: {
    title: "LOGOMARK",
    subtitle: "Soft. Flowing. Caring.",
    description: "The rounded letterforms and integrated crescent turn La Luna’s lunar reference into a gentle, tactile gesture designed around everyday fabric care.",
    marks: [
      { name: "Cyrillic logo", file: "LaLuna_D03_Cyrillic.svg" },
      { name: "Latin logo", file: "LaLuna_D03_Latin.png" }
    ]
  }
};
laLunaThree.applications = [
  { title: "Powder Blue Care", description: "A soft ivory detergent bottle with Powder Blue bringing freshness and gentle everyday care.", image: "d03-detergent-blue.png" },
  { title: "Dusty Lilac Softness", description: "A complementary softener expression using muted lilac for a warmer, more sensory fabric-care cue.", image: "d03-softener-lilac.png" },
  { title: "A Gentle System", description: "Powder Blue and Dusty Lilac work together as a flexible, recognisable family across fabric-care needs.", image: "d03-product-family.png" }
];
laLunaThree.lifestyle = [
  { title: "Care Within Reach", description: "A calm laundry-room moment where softness feels part of the everyday ritual.", image: "d03-laundry-shelf.png" },
  { title: "Freshness at Home", description: "Powder Blue brings a clean, gentle presence to the laundry space.", image: "d03-laundry-room.png" },
  { title: "The Scent of Linen", description: "A sensory expression of freshly cared-for fabric.", image: "d03-linen-scent.png" },
  { title: "A Softer Everyday", description: "Warmth, comfort and tactile care beyond the wash itself.", image: "d03-soft-everyday.png" }
];
laLunaThree.downloads = [
  { label: "Cyrillic logo", file: "LaLuna_D03_Cyrillic.pdf", note: "PDF" },
  { label: "Latin logo", file: "LaLuna_D03_Latin.pdf", note: "PDF" }
];

window.brandContent = laLunaOne;
window.brandPresentations = { "1": laLunaOne, "2": laLunaTwo, "3": laLunaThree };
