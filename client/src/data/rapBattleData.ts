export interface Rapper {
  id: string;
  name: string;
  image: string;
  description: string;
  voiceSettings: {
    voiceId:string;
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
    image: "https://www.rollingstone.com/wp-content/uploads/2023/04/elon-musk-RS-1800.jpg?w=1581&h=1054&crop=1",
    description: "Tech entrepreneur and space enthusiast",
    voiceSettings: {
      voiceId:"N2lVS1w4EtoT3dr4eOWO",
      pitch: 1,
      rate: 1.0
    }
  },
  {
    id: "trump",
    name: "Donald Trump",
    image: "https://d.newsweek.com/en/full/607719/djt.jpg?w=1200&f=e057528880369f5f4ff737cb4bdf2e0d",
    description: "Former US President and businessman",
    voiceSettings: {
      voiceId:"pqHfZKP75CvOlQylNhV4",
      pitch: 0.85,
      rate: 0.9
    }
  },
  {
    id: "modi",
    name: "Narendra Modi",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/pm-modi-smiling-064650291-16x9_0.jpeg?VersionId=jB9Lbi.Ok_FF1q5NWLNuMtK9MVa7EfRp",
    description: "Indian Prime Minister and political leader",
    voiceSettings: {
      voiceId:"zgqefOY5FPQ3bB7OZTVR",
      pitch: 1.1,
      rate: 0.95
    }
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    image: "https://m.media-amazon.com/images/I/81WsjLnanYL._AC_UF894,1000_QL80_.jpg",
    description: "Legendary physicist and Nobel prize winner",
    voiceSettings: {
      voiceId:"nPczCjzI2devNBz1zQrb",
      pitch: 1.0,
      rate: 0.85
    }
  },
  {
    id: "shakira",
    name: "Shakira",
    image: "https://i.pinimg.com/736x/13/3b/1f/133b1f19cd6a9975143d3a8ad6dbcc9c.jpg",
    description: "Global music icon and performer",
    voiceSettings: {
      voiceId:"1qEiC6qsybMkmnNdVMbK",
      pitch: 1.5,
      rate: 1.15
    }
  },
  {
    id: "oprah",
    name: "Oprah Winfrey",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMEo-Q7i5lNK24-HTD0y6Pe-4WGMJ5_3rCw&s",
    description: "Media mogul and philanthropist",
    voiceSettings: {
      voiceId:"9BWtsMINqrJLrRacOk9x",
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