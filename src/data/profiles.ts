export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  photos: string[];
  verified: boolean;
  distance?: string;
  gender: "male" | "female";
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Sarah",
    age: 28,
    city: "Los Angeles",
    bio: "Coffee lover ☕ | Hiking enthusiast 🏔️ | Looking for someone to share adventures with",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "2 miles away",
    gender: "female",
  },
  {
    id: "2",
    name: "Michael",
    age: 32,
    city: "New York",
    bio: "Software engineer by day, chef by night 🍳 | Dog dad to Max 🐕",
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "5 miles away",
    gender: "male",
  },
  {
    id: "3",
    name: "Emma",
    age: 26,
    city: "Miami",
    bio: "Beach vibes only 🌊 | Yoga instructor | Let's grab tacos 🌮",
    photos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502323777036-f29e3972f7e4?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "1 mile away",
    gender: "female",
  },
  {
    id: "4",
    name: "James",
    age: 29,
    city: "Chicago",
    bio: "Music producer 🎵 | Vinyl collector | Your next concert buddy",
    photos: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    ],
    verified: false,
    distance: "3 miles away",
    gender: "male",
  },
  {
    id: "5",
    name: "Olivia",
    age: 31,
    city: "San Francisco",
    bio: "Startup founder 🚀 | Wine enthusiast 🍷 | Always planning the next trip",
    photos: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "4 miles away",
    gender: "female",
  },
  {
    id: "6",
    name: "David",
    age: 27,
    city: "Austin",
    bio: "Live music capital 🎸 | BBQ connoisseur | Looking for my partner in crime",
    photos: [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "6 miles away",
    gender: "male",
  },
  {
    id: "7",
    name: "Jessica",
    age: 25,
    city: "Seattle",
    bio: "Tech enthusiast 💻 | Coffee addict ☕ | Weekend hiker",
    photos: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "3 miles away",
    gender: "female",
  },
  {
    id: "8",
    name: "Ryan",
    age: 30,
    city: "Denver",
    bio: "Snowboard instructor ❄️ | Craft beer lover 🍺 | Adventure seeker",
    photos: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "8 miles away",
    gender: "male",
  },
  {
    id: "9",
    name: "Madison",
    age: 27,
    city: "Boston",
    bio: "Nurse by profession 💉 | Foodie at heart 🍕 | Looking for genuine connections",
    photos: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "2 miles away",
    gender: "female",
  },
  {
    id: "10",
    name: "Tyler",
    age: 28,
    city: "Phoenix",
    bio: "Fitness trainer 💪 | Nature photographer 📸 | Let's explore together",
    photos: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501196354995-cbb51c65adc7?w=600&h=800&fit=crop",
    ],
    verified: false,
    distance: "5 miles away",
    gender: "male",
  },
];
