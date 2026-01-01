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

// Profile data parsed from bio.txt files
const menProfilesData: { id: number; name: string; age: number; city: string; distance: string; bio: string; photoCount: number; photoExtensions?: string[] }[] = [
  { id: 1, name: "Tyler", age: 29, city: "Denver", distance: "3 miles away", bio: "Sports fanatic | Gym regular | Craft beer enthusiast", photoCount: 5 },
  { id: 2, name: "Brandon", age: 35, city: "Seattle", distance: "4 miles away", bio: "I travel to Asia once a year | Foodie at heart | Love photography", photoCount: 5 },
  { id: 3, name: "Ryan", age: 30, city: "Miami", distance: "2 miles away", bio: "Pool and gym are my second home | Fitness is my lifestyle", photoCount: 5 },
  { id: 4, name: "Marcus", age: 28, city: "Portland", distance: "3 miles away", bio: "I brew my own beer | Weekend hiker | Dog lover", photoCount: 4, photoExtensions: ["png", "png", "jpg", "jpg"] },
  { id: 5, name: "Marcus", age: 31, city: "Portland", distance: "3 miles away", bio: "I brew my own beer | Weekend hiker | Dog lover", photoCount: 3 },
  { id: 6, name: "Derek", age: 33, city: "San Diego", distance: "5 miles away", bio: "Beach lover | Surfer | Living the California dream", photoCount: 5 },
  { id: 7, name: "Ethan", age: 28, city: "Denver", distance: "2 miles away", bio: "I live for hiking trails | Nature activist at heart | Weekends are for the mountains", photoCount: 5 },
  { id: 8, name: "Stefan", age: 40, city: "Los Angeles", distance: "6 miles away", bio: "I moved from Germany | I own a car detailing shop | Precision is my thing", photoCount: 4 },
  { id: 9, name: "Blake", age: 30, city: "Miami", distance: "3 miles away", bio: "People say I look like Orlando Bloom | I love photoshoots | Searching for my Elizabeth Swann", photoCount: 4 },
  { id: 10, name: "Andre", age: 29, city: "Atlanta", distance: "4 miles away", bio: "I live and breathe hip-hop | I write my own lyrics | Battle rapper on weekends", photoCount: 4 },
  { id: 11, name: "Chris", age: 27, city: "Houston", distance: "3 miles away", bio: "Engineer by day, gamer by night | Love building things", photoCount: 4 },
  { id: 12, name: "Cole", age: 29, city: "Austin", distance: "3 miles away", bio: "I'm obsessed with road trips | My car is my freedom | Always chasing new horizons", photoCount: 3 },
  { id: 13, name: "Jake", age: 36, city: "Detroit", distance: "4 miles away", bio: "I opened my own car detailing shop | Drummer in a rock band", photoCount: 4 },
  { id: 14, name: "Oliver", age: 26, city: "New York", distance: "2 miles away", bio: "Art student at NYU | I live for museums and galleries | Painting is my escape", photoCount: 2 },
  { id: 15, name: "Luka", age: 29, city: "Phoenix", distance: "5 miles away", bio: "I moved from Serbia | Car care is my passion | I love making vehicles shine", photoCount: 4 },
  { id: 16, name: "Leo", age: 24, city: "Chicago", distance: "3 miles away", bio: "Bookworm and series addict", photoCount: 5 },
  { id: 17, name: "Mason", age: 25, city: "Dallas", distance: "4 miles away", bio: "Didn't go to college but found my passion in fitness | Gym is my life", photoCount: 5 },
  { id: 18, name: "Greg", age: 43, city: "Boston", distance: "6 miles away", bio: "I work a regular office job | Tennis is my weekend escape", photoCount: 4 },
  { id: 19, name: "Dante", age: 31, city: "Philadelphia", distance: "4 miles away", bio: "Professional basketball player | Living my dream on the court", photoCount: 3 },
  { id: 20, name: "Kevin", age: 34, city: "San Francisco", distance: "5 miles away", bio: "Tech entrepreneur | Coffee addict | Dog dad", photoCount: 3 },
  { id: 21, name: "Connor", age: 27, city: "Miami", distance: "2 miles away", bio: "Starting my career in real estate | I'm passionate about finding people their dream homes", photoCount: 4 },
  { id: 22, name: "Nathan", age: 32, city: "Seattle", distance: "4 miles away", bio: "Software developer | Music lover | Weekend chef", photoCount: 3 },
  { id: 23, name: "Jordan", age: 25, city: "New York", distance: "3 miles away", bio: "Law student | Looking for something casual and fun | No pressure, just good vibes", photoCount: 3 },
  { id: 24, name: "Alex", age: 28, city: "Chicago", distance: "3 miles away", bio: "Photographer | Travel enthusiast | Always looking for the next adventure", photoCount: 2 },
  { id: 25, name: "Will", age: 30, city: "Denver", distance: "4 miles away", bio: "Outdoor enthusiast | Ski instructor | Mountain life", photoCount: 2 },
  { id: 26, name: "Trevor", age: 29, city: "Nashville", distance: "3 miles away", bio: "I own a small recording studio | Music production is my life", photoCount: 3 },
  { id: 27, name: "Ian", age: 33, city: "Portland", distance: "5 miles away", bio: "Craft beer enthusiast | Hiking addict | Dog lover", photoCount: 3 },
  { id: 28, name: "Caleb", age: 26, city: "Austin", distance: "3 miles away", bio: "Musician | Guitar player | Looking for my duet partner", photoCount: 3 },
  { id: 29, name: "Shane", age: 31, city: "Los Angeles", distance: "4 miles away", bio: "Actor and model | Fitness enthusiast | Living the dream", photoCount: 3 },
  { id: 30, name: "Victor", age: 30, city: "Ontario", distance: "5 miles away", bio: "I work in cybersecurity | Protecting data by day, exploring life by night | Tech nerd with a sense of humor", photoCount: 3, photoExtensions: ["jpg", "jpg", "png"] },
];

// Generate photos array for each profile
function getPhotos(id: number, count: number, extensions?: string[]): string[] {
  const photos: string[] = [];
  for (let i = 1; i <= count; i++) {
    const ext = extensions ? extensions[i - 1] : "jpg";
    photos.push(`/profiles/men/${id}/${i}.${ext}`);
  }
  return photos;
}

// Generate profiles from data
export const mockProfiles: Profile[] = menProfilesData.map(data => ({
  id: data.id.toString(),
  name: data.name,
  age: data.age,
  city: data.city,
  bio: data.bio,
  photos: getPhotos(data.id, data.photoCount, data.photoExtensions),
  verified: Math.random() > 0.3, // Random verification status
  distance: data.distance,
  gender: "male" as const,
}));
