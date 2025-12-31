export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  photos: string[];
  verified: boolean;
  distance?: string;
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
  },
  {
    id: "6",
    name: "David",
    age: 27,
    city: "Austin",
    bio: "Live music capital 🎸 | BBQ connoisseur | Looking for my partner in crime",
    photos: [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=800&fit=crop",
    ],
    verified: true,
    distance: "6 miles away",
  },
];
