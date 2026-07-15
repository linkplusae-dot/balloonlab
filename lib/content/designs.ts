export type Design = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imagePosition: string;
  occasion: string;
  recipient: string[];
  style: string;
  colors: string[];
  customization: string[];
  availability: string;
  preparationTime: string;
  keywords: string[];
  featured: boolean;
  publishedAt: string;
};

export type OccasionCategory = {
  title: string;
  number: string;
  image: string;
  position: string;
  href: string;
};

export const occasionCategories: OccasionCategory[] = [
  { title: "Birthdays", number: "01", image: "/occasion-birthdays.png", position: "center 42%", href: "/designs?occasion=Birthdays#catalogue" },
  { title: "Love & Romance", number: "02", image: "/occasion-love.png", position: "center 43%", href: "/designs?occasion=Love+%26+Romance#catalogue" },
  { title: "Kids & Newborns", number: "03", image: "/occasion-kids.png", position: "center 42%", href: "/designs?occasion=Kids+%26+Newborns#catalogue" },
  { title: "Events", number: "04", image: "/occasion-events.png", position: "center 42%", href: "/designs?occasion=Events#catalogue" },
  { title: "Corporate Gifting", number: "05", image: "/occasion-corporate.png", position: "center 44%", href: "/designs?occasion=Corporate+Gifting#catalogue" },
  { title: "Just Because", number: "06", image: "/occasion-surprise.png", position: "center 43%", href: "/designs?occasion=Just+Because#catalogue" },
];

export const designs: Design[] = [
  {
    id: "BL-001",
    slug: "celebration-spotlight",
    title: "Celebration Spotlight",
    shortDescription: "A joyful photo-led birthday direction with a polished blue and lilac finish.",
    image: "/occasion-birthdays.png",
    imagePosition: "center 42%",
    occasion: "Birthdays",
    recipient: ["For her", "For him", "For parents"],
    style: "Photo balloon",
    colors: ["Blue", "Purple", "Pastel"],
    customization: ["Photo", "Name", "Message", "Colour"],
    availability: "Pre-order",
    preparationTime: "Timing confirmed after design review",
    keywords: ["birthday", "celebration", "family", "photo", "blue", "lilac"],
    featured: true,
    publishedAt: "2026-07-12",
  },
  {
    id: "BL-002",
    slug: "love-in-bloom",
    title: "Love in Bloom",
    shortDescription: "A romantic photo balloon concept softened with pink florals and statement ribbon.",
    image: "/occasion-love.png",
    imagePosition: "center 43%",
    occasion: "Love & Romance",
    recipient: ["For her", "For him", "For couples"],
    style: "Bubble balloon",
    colors: ["Pink", "Purple", "Pastel"],
    customization: ["Photo", "Name", "Message", "Colour"],
    availability: "Pre-order",
    preparationTime: "Timing confirmed after design review",
    keywords: ["anniversary", "proposal", "love", "romance", "couple", "pink"],
    featured: true,
    publishedAt: "2026-07-10",
  },
  {
    id: "BL-003",
    slug: "little-star-arrival",
    title: "Little Star Arrival",
    shortDescription: "A gentle newborn and baby-shower direction with airy blues and a keepsake photo.",
    image: "/occasion-kids.png",
    imagePosition: "center 42%",
    occasion: "Kids & Newborns",
    recipient: ["For kids", "For parents"],
    style: "Gift box arrangement",
    colors: ["Blue", "Neutral", "Pastel"],
    customization: ["Photo", "Name", "Theme", "Colour"],
    availability: "Pre-order",
    preparationTime: "Timing confirmed after design review",
    keywords: ["baby shower", "newborn", "kids", "boy", "pastel", "gift"],
    featured: true,
    publishedAt: "2026-07-08",
  },
  {
    id: "BL-004",
    slug: "signature-event-moment",
    title: "Signature Event Moment",
    shortDescription: "A statement arrangement designed to carry a personal image through an event setting.",
    image: "/occasion-events.png",
    imagePosition: "center 42%",
    occasion: "Events",
    recipient: ["For couples", "For clients"],
    style: "Event display",
    colors: ["Gold", "Silver", "Custom brand colours"],
    customization: ["Photo", "Message", "Theme", "Full custom design"],
    availability: "Event booking required",
    preparationTime: "Timeline confirmed with event scope",
    keywords: ["wedding", "graduation", "event", "display", "gold", "celebration"],
    featured: false,
    publishedAt: "2026-07-06",
  },
  {
    id: "BL-005",
    slug: "brand-in-the-air",
    title: "Brand in the Air",
    shortDescription: "A refined corporate balloon direction for logos, launches, appreciation and client gifting.",
    image: "/occasion-corporate.png",
    imagePosition: "center 44%",
    occasion: "Corporate Gifting",
    recipient: ["For colleagues", "For clients"],
    style: "Corporate branded balloon",
    colors: ["Blue", "Neutral", "Custom brand colours"],
    customization: ["Logo", "Message", "Colour", "Full custom design"],
    availability: "Event booking required",
    preparationTime: "Timeline confirmed with quantity and artwork",
    keywords: ["corporate", "logo", "brand", "launch", "client", "company"],
    featured: true,
    publishedAt: "2026-07-04",
  },
  {
    id: "BL-006",
    slug: "a-beautiful-because",
    title: "A Beautiful Because",
    shortDescription: "An expressive everyday surprise built around one meaningful photo and a short note.",
    image: "/occasion-surprise.png",
    imagePosition: "center 43%",
    occasion: "Just Because",
    recipient: ["For her", "For him", "For parents", "For colleagues"],
    style: "Balloon bouquet",
    colors: ["Pink", "Purple", "Gold"],
    customization: ["Photo", "Name", "Message", "Colour"],
    availability: "Pre-order",
    preparationTime: "Timing confirmed after design review",
    keywords: ["surprise", "thank you", "gift", "everyday", "photo", "message"],
    featured: false,
    publishedAt: "2026-07-02",
  },
];

export const filterOptions = {
  occasion: occasionCategories.map((occasion) => occasion.title),
  recipient: ["For her", "For him", "For kids", "For couples", "For parents", "For colleagues", "For clients"],
  style: ["Photo balloon", "Bubble balloon", "Balloon bouquet", "Gift box arrangement", "Event display", "Corporate branded balloon"],
  colors: ["Pink", "Blue", "Purple", "Gold", "Silver", "Neutral", "Pastel", "Custom brand colours"],
  customization: ["Photo", "Name", "Message", "Logo", "Theme", "Colour", "Full custom design"],
  availability: ["Pre-order", "Event booking required"],
} as const;
