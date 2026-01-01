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
type ProfileData = { id: number; name: string; age: number; city: string; distance: string; bio: string; photoCount: number; photoExtensions?: string[] };

const menProfilesData: ProfileData[] = [
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

const womenProfilesData: ProfileData[] = [
  { id: 1, name: "Kim", age: 27, city: "Irvine", distance: "3 miles away", bio: "Minimalist wardrobe | Long swims | Days of deep concentration | Calm atmosphere", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 2, name: "Victoria", age: 26, city: "Greenwich", distance: "4 miles away", bio: "Tennis mornings | Neutral tones | Thoughtful rituals | Quiet luxury", photoCount: 8, photoExtensions: ["png", "png", "png", "png", "png", "png", "png", "png"] },
  { id: 3, name: "Sophia", age: 25, city: "Los Angeles", distance: "2 miles away", bio: "Art curator | Yoga enthusiast | Wine lover", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 4, name: "Olivia", age: 24, city: "New York", distance: "3 miles away", bio: "Fashion designer | Coffee addict | City explorer", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 5, name: "Ava", age: 26, city: "Miami", distance: "4 miles away", bio: "Beach lover | Sunset chaser | Free spirit", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 6, name: "Isabella", age: 27, city: "San Francisco", distance: "3 miles away", bio: "Tech professional | Hiking weekends | Foodie", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 7, name: "Mia", age: 23, city: "Austin", distance: "2 miles away", bio: "Music lover | Live concerts | Spontaneous adventures", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 8, name: "Charlotte", age: 28, city: "Boston", distance: "5 miles away", bio: "Medical student | Book lover | Cozy evenings", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 9, name: "Amelia", age: 25, city: "Seattle", distance: "3 miles away", bio: "Coffee enthusiast | Rainy day walks | Creative soul", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 10, name: "Brianna", age: 26, city: "Tampa", distance: "4 miles away", bio: "Beach mornings | Strength training | Smoothie bowls | Calm and warmth", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 11, name: "Brooklyn", age: 25, city: "Brooklyn", distance: "2 miles away", bio: "People watching | Thrift store jackets | Voice memos instead of text messages | Urban rhythm", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 12, name: "Camila", age: 24, city: "Miami", distance: "3 miles away", bio: "Spanish playlists | Sunset swims | Game breaks | Relaxed rhythm", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 13, name: "Claire", age: 27, city: "Pasadena", distance: "4 miles away", bio: "Morning journaling | Farmers' markets | French films | Mindful living", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 14, name: "Delilah", age: 26, city: "Nashville", distance: "3 miles away", bio: "Live music nights | Vintage jeans | Journaling before bed | Finding joy in the little things", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 15, name: "Emily", age: 25, city: "Madison", distance: "5 miles away", bio: "Lake runs | Simple cooking | Audiobooks | Gentle humor", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 16, name: "Emma", age: 27, city: "Palo Alto", distance: "3 miles away", bio: "Long walks after work | Clean aesthetics | A curious mind | Relaxed ride", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 17, name: "Everly", age: 24, city: "San Diego", distance: "2 miles away", bio: "Sunrise swims | Oat milk lattes | Beach walks listening to podcasts | Quiet but curious", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 18, name: "Ivy", age: 27, city: "Boston", distance: "4 miles away", bio: "Bookstores and rainy days | Morning Pilates classes | Learning Italian | Quiet confidence", photoCount: 4, photoExtensions: ["png", "png", "png", "png"] },
  { id: 19, name: "Kennedy", age: 28, city: "Chicago", distance: "3 miles away", bio: "Long walks by the lake | Wine tastings | Interior Design | Thoughtful Conversations", photoCount: 3, photoExtensions: ["png", "png", "png"] },
  { id: 20, name: "Luna", age: 23, city: "Santa Cruz", distance: "5 miles away", bio: "Moon phases | Night swims | Analog photography | Free spirit", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 21, name: "Madison", age: 26, city: "Denver", distance: "3 miles away", bio: "Mountain hikes | Craft cocktails | Weekend adventures", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 22, name: "Natalie", age: 25, city: "Portland", distance: "4 miles away", bio: "Plant mom | Indie music | Vintage finds", photoCount: 7, photoExtensions: ["jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg"] },
  { id: 23, name: "Grace", age: 27, city: "San Diego", distance: "2 miles away", bio: "Ocean lover | Morning yoga | Good vibes only", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 24, name: "Harper", age: 24, city: "Atlanta", distance: "3 miles away", bio: "Brunch enthusiast | Art galleries | City nights", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 25, name: "Lily", age: 26, city: "Phoenix", distance: "5 miles away", bio: "Desert sunsets | Road trips | Dog mom", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 26, name: "Zoe", age: 23, city: "Dallas", distance: "3 miles away", bio: "Fitness lover | Smoothie queen | Positive energy", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 27, name: "Chloe", age: 25, city: "Houston", distance: "4 miles away", bio: "BBQ connoisseur | Country music | Southern charm", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 28, name: "Ella", age: 27, city: "Philadelphia", distance: "3 miles away", bio: "History buff | Coffee shops | Autumn walks", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 29, name: "Scarlett", age: 24, city: "Las Vegas", distance: "2 miles away", bio: "Night owl | Pool days | Adventure seeker", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 30, name: "Aria", age: 26, city: "Minneapolis", distance: "4 miles away", bio: "Lake life | Winter sports | Cozy cabin vibes", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 31, name: "Penelope", age: 25, city: "Nashville", distance: "3 miles away", bio: "Songwriter | Guitar nights | Dreamer", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 32, name: "Layla", age: 27, city: "San Jose", distance: "5 miles away", bio: "Tech enthusiast | Hiking trails | Wine country weekends", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 33, name: "Riley", age: 23, city: "Orlando", distance: "3 miles away", bio: "Theme park lover | Sunshine state | Making memories", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 34, name: "Nora", age: 26, city: "Charlotte", distance: "4 miles away", bio: "Southern belle | Sweet tea | Front porch evenings", photoCount: 4, photoExtensions: ["png", "png", "png", "png"] },
  { id: 35, name: "Hazel", age: 24, city: "Salt Lake City", distance: "3 miles away", bio: "Ski season | Mountain views | Active lifestyle", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
  { id: 36, name: "Aurora", age: 27, city: "Portland", distance: "2 miles away", bio: "Coffee culture | Bookworm | Rainy day romance", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 37, name: "Savannah", age: 25, city: "Savannah", distance: "4 miles away", bio: "Historic walks | Sweet treats | Southern hospitality", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 38, name: "Audrey", age: 26, city: "Chicago", distance: "3 miles away", bio: "Architecture lover | Jazz nights | Lakefront runs", photoCount: 7, photoExtensions: ["png", "png", "png", "png", "png", "png", "png"] },
  { id: 39, name: "Stella", age: 24, city: "Miami", distance: "2 miles away", bio: "Beach babe | Salsa dancing | Cuban coffee", photoCount: 6, photoExtensions: ["png", "png", "png", "png", "png", "png"] },
  { id: 40, name: "Willow", age: 25, city: "Boulder", distance: "4 miles away", bio: "Sunrise Trail Runs | Herbal Teas | Conscious Living | Mountain Soul", photoCount: 5, photoExtensions: ["png", "png", "png", "png", "png"] },
];

// Generate photos array for each profile
function getPhotos(id: number, count: number, gender: "male" | "female", extensions?: string[]): string[] {
  const photos: string[] = [];
  const folder = gender === "male" ? "men" : "women";
  for (let i = 1; i <= count; i++) {
    const ext = extensions ? extensions[i - 1] : "jpg";
    photos.push(`/profiles/${folder}/${id}/${i}.${ext}`);
  }
  return photos;
}

// Generate profiles from data
const maleProfiles: Profile[] = menProfilesData.map(data => ({
  id: `m${data.id}`,
  name: data.name,
  age: data.age,
  city: data.city,
  bio: data.bio,
  photos: getPhotos(data.id, data.photoCount, "male", data.photoExtensions),
  verified: Math.random() > 0.3,
  distance: data.distance,
  gender: "male" as const,
}));

const femaleProfiles: Profile[] = womenProfilesData.map(data => ({
  id: `f${data.id}`,
  name: data.name,
  age: data.age,
  city: data.city,
  bio: data.bio,
  photos: getPhotos(data.id, data.photoCount, "female", data.photoExtensions),
  verified: Math.random() > 0.3,
  distance: data.distance,
  gender: "female" as const,
}));

export const mockProfiles: Profile[] = [...maleProfiles, ...femaleProfiles];
