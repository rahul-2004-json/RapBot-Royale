export interface Rapper {
  id: string;
  name: string;
  image: string;
  description: string;
  voiceSettings: {
    voiceIndex: number;
    pitch: number;
    rate: number;
  };
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Lyric {
  text: string;
  duration: number;
}

export const rappers: Rapper[] = [
  {
    id: "elon",
    name: "Elon Musk",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Tech entrepreneur and space enthusiast",
    voiceSettings: {
      voiceIndex: 0,
      pitch: 1,
      rate: 0.9
    }
  },
  {
    id: "trump",
    name: "Donald Trump",
    image: "https://images.pexels.com/photos/8539462/pexels-photo-8539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Former US President and businessman",
    voiceSettings: {
      voiceIndex: 1,
      pitch: 0.8,
      rate: 0.85
    }
  },
  {
    id: "modi",
    name: "Narendra Modi",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Indian Prime Minister and political leader",
    voiceSettings: {
      voiceIndex: 2,
      pitch: 1.1,
      rate: 0.9
    }
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    image: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Legendary physicist and Nobel prize winner",
    voiceSettings: {
      voiceIndex: 3,
      pitch: 1.2,
      rate: 0.8
    }
  },
  {
    id: "shakira",
    name: "Shakira",
    image: "https://images.pexels.com/photos/14923670/pexels-photo-14923670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Global music icon and performer",
    voiceSettings: {
      voiceIndex: 4,
      pitch: 1.4,
      rate: 1
    }
  },
  {
    id: "oprah",
    name: "Oprah Winfrey",
    image: "https://images.pexels.com/photos/8107198/pexels-photo-8107198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Media mogul and philanthropist",
    voiceSettings: {
      voiceIndex: 0,
      pitch: 1.3,
      rate: 0.95
    }
  }
];

export const themes: Theme[] = [
  {
    id: "space",
    name: "Space Exploration",
    description: "Battle about conquering the final frontier",
    icon: "🚀"
  },
  {
    id: "tech",
    name: "Technology",
    description: "Battle about the digital revolution",
    icon: "💻"
  },
  {
    id: "politics",
    name: "Politics",
    description: "Battle about running the world",
    icon: "🏛️"
  },
  {
    id: "environment",
    name: "Environment",
    description: "Battle about saving the planet",
    icon: "🌍"
  },
  {
    id: "sports",
    name: "Sports",
    description: "Battle about athletic competition",
    icon: "🏆"
  },
  {
    id: "food",
    name: "Food",
    description: "Battle about culinary delights",
    icon: "🍕"
  }
];

export const mockLyrics: Record<string, Record<string, Lyric[]>> = {
  "elon": {
    "space": [
      { text: "Mars is my playground, rockets my toys", duration: 3000 },
      { text: "While you're stuck on Earth with your small-time ploys", duration: 3000 },
      { text: "SpaceX is soaring, Tesla's on fire", duration: 3000 },
      { text: "My ambitions reach higher, they never tire", duration: 3000 },
      { text: "Colonizing planets, that's my mission", duration: 3000 },
      { text: "While you're just here, full of ambition", duration: 3000 }
    ],
    "tech": [
      { text: "Silicon Valley bows to my name", duration: 3000 },
      { text: "While you're still playing a beginner's game", duration: 3000 },
      { text: "Neural links, electric rides, that's my style", duration: 3000 },
      { text: "My innovations make life worthwhile", duration: 3000 },
      { text: "Tweet by tweet, I shake the market's foundation", duration: 3000 },
      { text: "Tech visionary of this generation", duration: 3000 }
    ]
  },
  "trump": {
    "politics": [
      { text: "Make America Great, that's my slogan", duration: 3000 },
      { text: "My deals are huge, while yours are so-so, man", duration: 3000 },
      { text: "I build walls high, and win bigly", duration: 3000 },
      { text: "My rallies packed, supporters love me", duration: 3000 },
      { text: "I speak my mind, no teleprompter needed", duration: 3000 },
      { text: "Presidential flow, can't be defeated", duration: 3000 }
    ],
    "business": [
      { text: "Trump Towers rise, symbol of my success", duration: 3000 },
      { text: "Art of the Deal, I'm the best, yes!", duration: 3000 },
      { text: "Billions in my name, my brand is golden", duration: 3000 },
      { text: "My business empire, centuries old and", duration: 3000 },
      { text: "Still growing strong, like my legacy", duration: 3000 },
      { text: "You're just small-time, that's my strategy", duration: 3000 }
    ]
  },
  "modi": {
    "politics": [
      { text: "Sabka Saath, Sabka Vikas, my promise to all", duration: 3000 },
      { text: "Leading a billion dreams, standing tall", duration: 3000 },
      { text: "From Gujarat to Delhi, my journey's been real", duration: 3000 },
      { text: "Working for my people with unmatched zeal", duration: 3000 },
      { text: "Digital India, Make in India, that's my vision", duration: 3000 },
      { text: "Taking my country to a powerful position", duration: 3000 }
    ],
    "environment": [
      { text: "Solar alliance, climate justice, that's my plan", duration: 3000 },
      { text: "Protecting Mother Earth, as best as I can", duration: 3000 },
      { text: "Namami Gange, clean rivers flowing", duration: 3000 },
      { text: "Green initiatives, constantly growing", duration: 3000 },
      { text: "Sustainable future for generations to come", duration: 3000 },
      { text: "My environmental policies second to none", duration: 3000 }
    ]
  }
};

export const generateMockLyrics = (rapperId: string, themeId: string): Lyric[] => {
  // First check if we have specific lyrics for this rapper and theme
  if (mockLyrics[rapperId]?.[themeId]) {
    return mockLyrics[rapperId][themeId];
  }
  
  // Fallback to generic lyrics
  return [
    { text: "I'm the greatest of all time, can't you see", duration: 3000 },
    { text: "Nobody else can compare to me", duration: 3000 },
    { text: "In this battle I'm dropping fire rhymes", duration: 3000 },
    { text: "My flow is perfect, my skills sublime", duration: 3000 },
    { text: "When I step to the mic, I command respect", duration: 3000 },
    { text: "My rap game's tight, what did you expect?", duration: 3000 }
  ];
};