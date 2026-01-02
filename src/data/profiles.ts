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
  lastSeen?: string;
}

// Random last seen times
const lastSeenOptions = [
  "20 min ago",
  "1 hour ago",
  "2 hours ago",
  "5 hours ago",
  "1 day ago",
  "2 days ago",
  "3 days ago",
];

function getRandomLastSeen(): string {
  return lastSeenOptions[Math.floor(Math.random() * lastSeenOptions.length)];
}

// Random distances
const distanceOptions = [
  "2 miles away",
  "3 miles away",
  "4 miles away",
  "5 miles away",
  "6 miles away",
];

function getRandomDistance(): string {
  return distanceOptions[Math.floor(Math.random() * distanceOptions.length)];
}

// Static profile data - parsed from bio.txt files in public/profiles
// Men profiles (1-30)
const menProfilesData = [
  { id: 1, name: "Tyler", age: 29, city: "Denver", bio: "Sports fanatic | Gym regular | Craft beer enthusiast", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 2, name: "Brandon", age: 35, city: "Seattle", bio: "I travel to Asia once a year | Foodie at heart | Love photography", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 3, name: "Ryan", age: 30, city: "Miami", bio: "Pool and gym are my second home | Fitness is my lifestyle", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 4, name: "Marcus", age: 28, city: "Portland", bio: "I brew my own beer | Weekend hiker | Dog lover", photos: ["1.png", "2.png", "3.jpg", "4.jpg"] },
  { id: 5, name: "Marcus", age: 31, city: "Portland", bio: "I brew my own beer | Weekend hiker | Dog lover", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 6, name: "Derek", age: 33, city: "San Diego", bio: "Beach lover | Surfer | Living the California dream", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 7, name: "Ethan", age: 28, city: "Denver", bio: "I live for hiking trails | Nature activist at heart", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 8, name: "Stefan", age: 40, city: "Los Angeles", bio: "I moved from Germany | I own a car detailing shop", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 9, name: "Blake", age: 30, city: "Miami", bio: "People say I look like Orlando Bloom | I love photoshoots", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 10, name: "Andre", age: 29, city: "Atlanta", bio: "I live and breathe hip-hop | I write my own lyrics", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 11, name: "Chris", age: 27, city: "Houston", bio: "Engineer by day, gamer by night | Love building things", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 12, name: "Cole", age: 29, city: "Austin", bio: "I'm obsessed with road trips | My car is my freedom", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 13, name: "Jake", age: 36, city: "Detroit", bio: "I opened my own car detailing shop | Drummer in a rock band", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 14, name: "Oliver", age: 26, city: "New York", bio: "Art student at NYU | I live for museums and galleries", photos: ["1.jpg", "2.jpg"] },
  { id: 15, name: "Luka", age: 29, city: "Phoenix", bio: "I moved from Serbia | Car care is my passion", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 16, name: "Leo", age: 24, city: "Chicago", bio: "Bookworm and series addict", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 17, name: "Mason", age: 25, city: "Dallas", bio: "Didn't go to college but found my passion in fitness", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] },
  { id: 18, name: "Greg", age: 43, city: "Boston", bio: "I work a regular office job | Tennis is my weekend escape", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 19, name: "Dante", age: 31, city: "Philadelphia", bio: "Professional basketball player | Living my dream on the court", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 20, name: "Kevin", age: 34, city: "San Francisco", bio: "Tech entrepreneur | Coffee addict | Dog dad", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 21, name: "Connor", age: 27, city: "Miami", bio: "Starting my career in real estate", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { id: 22, name: "Nathan", age: 32, city: "Seattle", bio: "Software developer | Music lover | Weekend chef", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 23, name: "Jordan", age: 25, city: "New York", bio: "Law student | Looking for something casual and fun", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 24, name: "Alex", age: 28, city: "Chicago", bio: "Photographer | Travel enthusiast | Always looking for adventure", photos: ["1.jpg", "2.jpg"] },
  { id: 25, name: "Will", age: 30, city: "Denver", bio: "Outdoor enthusiast | Ski instructor | Mountain life", photos: ["1.jpg", "2.jpg"] },
  { id: 26, name: "Trevor", age: 29, city: "Nashville", bio: "I own a small recording studio | Music production is my life", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 27, name: "Ian", age: 33, city: "Portland", bio: "Craft beer enthusiast | Hiking addict | Dog lover", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 28, name: "Caleb", age: 26, city: "Austin", bio: "Musician | Guitar player | Looking for my duet partner", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 29, name: "Shane", age: 31, city: "Los Angeles", bio: "Actor and model | Fitness enthusiast | Living the dream", photos: ["1.jpg", "2.jpg", "3.jpg"] },
  { id: 30, name: "Victor", age: 30, city: "Ontario", bio: "I work in cybersecurity | Protecting data by day", photos: ["1.jpg", "2.jpg", "3.png"] },
];

// Women profiles (1-110)
const womenProfilesData = [
  { id: 1, name: "Kim", age: 27, city: "Irvine", bio: "Minimalist wardrobe | Long swims | Calm atmosphere", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 2, name: "Victoria", age: 26, city: "Greenwich", bio: "Tennis mornings | Neutral tones | Quiet luxury", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"] },
  { id: 3, name: "Sophia", age: 25, city: "Los Angeles", bio: "Art curator | Yoga enthusiast | Wine lover", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 4, name: "Olivia", age: 24, city: "New York", bio: "Fashion designer | Coffee addict | City explorer", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 5, name: "Ava", age: 26, city: "Miami", bio: "Beach lover | Sunset chaser | Free spirit", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 6, name: "Isabella", age: 27, city: "San Francisco", bio: "Tech professional | Hiking weekends | Foodie", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 7, name: "Mia", age: 23, city: "Austin", bio: "Music lover | Live concerts | Spontaneous adventures", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 8, name: "Charlotte", age: 28, city: "Boston", bio: "Medical student | Book lover | Cozy evenings", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 9, name: "Amelia", age: 25, city: "Seattle", bio: "Coffee enthusiast | Rainy day walks | Creative soul", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 10, name: "Brianna", age: 26, city: "Tampa", bio: "Beach mornings | Strength training | Smoothie bowls", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 11, name: "Brooklyn", age: 25, city: "Brooklyn", bio: "People watching | Thrift store jackets | Urban rhythm", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 12, name: "Camila", age: 24, city: "Miami", bio: "Spanish playlists | Sunset swims | Relaxed rhythm", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 13, name: "Claire", age: 27, city: "Pasadena", bio: "Morning journaling | Farmers markets | French films", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 14, name: "Delilah", age: 26, city: "Nashville", bio: "Live music nights | Vintage jeans | Journaling", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 15, name: "Emily", age: 25, city: "Madison", bio: "Lake runs | Simple cooking | Audiobooks | Gentle humor", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 16, name: "Emma", age: 27, city: "Palo Alto", bio: "Long walks after work | Clean aesthetics | A curious mind", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 17, name: "Everly", age: 24, city: "San Diego", bio: "Sunrise swims | Oat milk lattes | Beach walks", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 18, name: "Ivy", age: 27, city: "Boston", bio: "Bookstores and rainy days | Morning Pilates | Learning Italian", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 19, name: "Kennedy", age: 28, city: "Chicago", bio: "Long walks by the lake | Wine tastings | Interior Design", photos: ["1.png", "2.png", "3.png"] },
  { id: 20, name: "Luna", age: 23, city: "Santa Cruz", bio: "Moon phases | Night swims | Analog photography | Free spirit", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 21, name: "Madison", age: 26, city: "Denver", bio: "Mountain hikes | Craft cocktails | Weekend adventures", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 22, name: "Natalie", age: 25, city: "Portland", bio: "Plant mom | Indie music | Vintage finds", photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"] },
  { id: 23, name: "Grace", age: 27, city: "San Diego", bio: "Ocean lover | Morning yoga | Good vibes only", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 24, name: "Harper", age: 24, city: "Atlanta", bio: "Brunch enthusiast | Art galleries | City nights", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 25, name: "Lily", age: 26, city: "Phoenix", bio: "Desert sunsets | Road trips | Dog mom", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 26, name: "Zoe", age: 23, city: "Dallas", bio: "Fitness lover | Smoothie queen | Positive energy", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 27, name: "Chloe", age: 25, city: "Houston", bio: "BBQ connoisseur | Country music | Southern charm", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 28, name: "Ella", age: 27, city: "Philadelphia", bio: "History buff | Coffee shops | Autumn walks", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 29, name: "Scarlett", age: 24, city: "Las Vegas", bio: "Night owl | Pool days | Adventure seeker", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 30, name: "Aria", age: 26, city: "Minneapolis", bio: "Lake life | Winter sports | Cozy cabin vibes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 31, name: "Riley", age: 26, city: "Tempe", bio: "Hot Yoga | Spicy Food | Clean Sneakers | Direct Energy", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 32, name: "Layla", age: 27, city: "San Jose", bio: "Tech enthusiast | Hiking trails | Wine country weekends", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 33, name: "Riley", age: 23, city: "Orlando", bio: "Theme park lover | Sunshine state | Making memories", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 34, name: "Nora", age: 26, city: "Charlotte", bio: "Southern belle | Sweet tea | Front porch evenings", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 35, name: "Hazel", age: 24, city: "Salt Lake City", bio: "Ski season | Mountain views | Active lifestyle", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 36, name: "Aurora", age: 27, city: "Portland", bio: "Coffee culture | Bookworm | Rainy day romance", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 37, name: "Savannah", age: 25, city: "Savannah", bio: "Historic walks | Sweet treats | Southern hospitality", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 38, name: "Audrey", age: 26, city: "Chicago", bio: "Architecture lover | Jazz nights | Lakefront runs", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"] },
  { id: 39, name: "Stella", age: 24, city: "Miami", bio: "Beach babe | Salsa dancing | Cuban coffee", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 40, name: "Willow", age: 25, city: "Boulder", bio: "Sunrise Trail Runs | Herbal Teas | Conscious Living", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 41, name: "Lena", age: 26, city: "Brooklyn", bio: "I moved from Serbia | Late museum visits | Black outfits only", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 42, name: "Claire", age: 27, city: "San Diego", bio: "Sunrise swims | Simple routines | Beach over bars", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 43, name: "Eva", age: 25, city: "Los Angeles", bio: "Pilates mornings | Art galleries | Good energy only", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 44, name: "Eva", age: 26, city: "San Jose", bio: "I moved from Germany | Design podcasts | Matcha breaks", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 45, name: "Maya", age: 24, city: "Austin", bio: "Hot yoga | Tacos | Vintage finds | Easy going", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 46, name: "Zara", age: 27, city: "Miami", bio: "Beach runs | Cuban coffee | Dance floors | Good vibes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 47, name: "Sophie", age: 25, city: "San Francisco", bio: "Tech meets art | Morning hikes | Wine lover", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 48, name: "Hannah", age: 26, city: "Austin", bio: "Pilates mornings | Spicy food fan | Sunset drives", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 49, name: "Olivia", age: 25, city: "Denver", bio: "Trail walks | Cooks by feeling | Quiet sense of humor", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 50, name: "Nina", age: 28, city: "San Francisco", bio: "I moved from Germany | Film photos only | Gets lost on purpose", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 51, name: "Gia", age: 24, city: "Phoenix", bio: "Desert hikes | Early mornings | Smoothie obsessed", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 52, name: "Anna", age: 26, city: "Seattle", bio: "Coffee culture | Rainy days | Book stores", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 53, name: "Lily", age: 27, city: "Portland", bio: "Plant mom | Weekend markets | Craft beer fan", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 54, name: "Jade", age: 25, city: "LA", bio: "Sunset chaser | Beach volleyball | Free spirit", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 55, name: "Mila", age: 24, city: "Chicago", bio: "Jazz nights | Architecture tours | Coffee addict", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 56, name: "Elena", age: 28, city: "New York", bio: "Gallery hopping | Rooftop bars | City explorer", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 57, name: "Ruby", age: 25, city: "Nashville", bio: "Live music | Bourbon tasting | Southern charm", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 58, name: "Ivy", age: 26, city: "Boston", bio: "History walks | Cozy cafes | Fall vibes", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 59, name: "Sage", age: 23, city: "Boulder", bio: "Mountain trails | Yoga mornings | Mindful living", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 60, name: "Katarina", age: 25, city: "Chicago", bio: "I moved from Croatia | Morning swims | Calm and focused", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 61, name: "Ruby", age: 27, city: "San Diego", bio: "Beach runs | Fish tacos | Lives in flip-flops", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 62, name: "Violet", age: 24, city: "Seattle", bio: "Rainy reads | Coffee shops | Indie films", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 63, name: "Luna", age: 26, city: "Austin", bio: "Night owl | Stargazing | Deep conversations", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 64, name: "Iris", age: 25, city: "Portland", bio: "Garden days | Farmers markets | Slow living", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 65, name: "Julia", age: 26, city: "San Jose", bio: "Clean routines | Long evening walks | Clear head", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 66, name: "Clara", age: 27, city: "Denver", bio: "Mountain mornings | Ski season | Hot chocolate", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 67, name: "Nadia", age: 24, city: "Miami", bio: "Salsa nights | Beach sunrise | Cuban coffee", photos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
  { id: 68, name: "Cora", age: 26, city: "San Francisco", bio: "Golden Gate runs | Tech talks | Wine country weekends", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 69, name: "Thea", age: 25, city: "Los Angeles", bio: "Sunrise yoga | Smoothie bowls | Positive energy", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 70, name: "Brielle", age: 25, city: "Tampa", bio: "Morning swims | Strength training | Feels best near water", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 71, name: "Isla", age: 24, city: "Chicago", bio: "Lake runs | Art museums | Deep dish pizza", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 72, name: "Vera", age: 27, city: "New York", bio: "Broadway shows | Rooftop views | City that never sleeps", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 73, name: "Elise", age: 26, city: "Boston", bio: "Harbor walks | Seafood lover | Autumn leaves", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 74, name: "Reese", age: 25, city: "Atlanta", bio: "Southern comfort | Brunch dates | Live music", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 75, name: "Hannah", age: 28, city: "Madison, WI", bio: "Farmers markets | journaling | early mornings", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 76, name: "Sienna", age: 24, city: "Phoenix", bio: "Desert blooms | Sunrise hikes | Pool days", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 77, name: "Brooke", age: 26, city: "Seattle", bio: "Coffee connoisseur | Bookworm | Mountain views", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 78, name: "Olivia", age: 25, city: "Savannah, GA", bio: "Slow mornings | watercolor | old houses", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 79, name: "Ben", age: 32, city: "Asheville, NC", bio: "Woodworking | local beer | fixing things badly", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 80, name: "Daniel", age: 26, city: "Tampa, FL", bio: "I moved from Brazil | Beach sunsets | drone shots", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 81, name: "Mia", age: 31, city: "St. Pete, FL", bio: "Pilates | smoothie bowls | ocean air", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 82, name: "Chris", age: 29, city: "Sarasota, FL", bio: "Kayak mornings | minimal news | simple dinners", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 83, name: "Ashley", age: 27, city: "Orlando, FL", bio: "Theme parks | sunny days | weekend road trips", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 84, name: "Sophie", age: 25, city: "Evanston, IL", bio: "Ceramics | calm playlists | handwritten notes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 85, name: "Emma", age: 28, city: "Naperville, IL", bio: "Trail runs | meal prep | good sleep", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 86, name: "Lily", age: 35, city: "Bellingham, WA", bio: "Sketchbooks everywhere | ferry rides | sea air", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 87, name: "Aaron", age: 36, city: "Tacoma, WA", bio: "Morning stretches | vinyl records | fixing bikes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 88, name: "Mia", age: 30, city: "Spokane, WA", bio: "River walks | quiet reads | early sunsets", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 89, name: "Grace", age: 26, city: "Eugene, OR", bio: "Farmers markets | indie films | good light", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 90, name: "Natalie", age: 28, city: "Pasadena, CA", bio: "Yoga breaks | fresh notebooks | quiet cafés", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 91, name: "Josh", age: 30, city: "Glendale, CA", bio: "Evening swims | balanced playlists | meal prepping", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 92, name: "Sarah", age: 27, city: "Irvine, CA", bio: "Beach mornings | clean eating | long drives", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 93, name: "Leah", age: 29, city: "Scottsdale, AZ", bio: "Spa days | desert hikes | minimal drama", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 94, name: "Chloe", age: 26, city: "Tempe, AZ", bio: "Morning runs | coffee shops | simple style", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 95, name: "Ella", age: 28, city: "Mesa, AZ", bio: "Sunset views | quiet nights | good company", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 96, name: "Ava", age: 25, city: "Chandler, AZ", bio: "Pool days | iced coffee | weekend exploring", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 97, name: "Zoe", age: 27, city: "Gilbert, AZ", bio: "Morning yoga | farmers markets | home cooking", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 98, name: "Isabella", age: 30, city: "Tucson, AZ", bio: "Desert blooms | stargazing | slow mornings", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 99, name: "Lily", age: 35, city: "Tacoma, WA", bio: "Film photos | quiet neighborhoods | long playlists", photos: ["1.png", "2.png", "3.png", "4.png"] },
  { id: 100, name: "Rachel", age: 32, city: "Olympia, WA", bio: "Aimless walks | simple meals | early evenings", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 101, name: "Megan", age: 29, city: "Salem, OR", bio: "Weekend reads | tea over coffee | garden vibes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 102, name: "Kate", age: 27, city: "Bend, OR", bio: "Mountain trails | craft beer | cabin weekends", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 103, name: "Brooke", age: 27, city: "Round Rock, TX", bio: "Pilates | farmers markets | no rush", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 104, name: "Lauren", age: 28, city: "Plano, TX", bio: "Brunch spots | clean spaces | good energy", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 105, name: "Jessica", age: 26, city: "Frisco, TX", bio: "Coffee dates | shopping trips | positive vibes", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 106, name: "Carla", age: 36, city: "Coral Gables, FL", bio: "Yoga | self-care routines | warm light", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 107, name: "Nina", age: 25, city: "Boca Raton, FL", bio: "Beach walks | healthy eating | sunshine state", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 108, name: "Diana", age: 29, city: "Fort Lauderdale, FL", bio: "Boat days | waterfront dining | laid back life", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 109, name: "Megan", age: 34, city: "Beaverton, OR", bio: "Sketchbooks | bike rides | calm music", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
  { id: 110, name: "Megan", age: 34, city: "Beaverton, OR", bio: "Sketchbooks | bike rides | calm music", photos: ["1.png", "2.png", "3.png", "4.png", "5.png"] },
];

// Generate full profile objects
const maleProfiles: Profile[] = menProfilesData.map(data => ({
  id: `m${data.id}`,
  name: data.name,
  age: data.age,
  city: data.city,
  bio: data.bio,
  photos: data.photos.map(photo => `/profiles/men/${data.id}/${photo}`),
  verified: Math.random() > 0.3,
  distance: getRandomDistance(),
  gender: "male" as const,
  lastSeen: getRandomLastSeen(),
}));

const femaleProfiles: Profile[] = womenProfilesData.map(data => ({
  id: `f${data.id}`,
  name: data.name,
  age: data.age,
  city: data.city,
  bio: data.bio,
  photos: data.photos.map(photo => `/profiles/women/${data.id}/${photo}`),
  verified: Math.random() > 0.3,
  distance: getRandomDistance(),
  gender: "female" as const,
  lastSeen: getRandomLastSeen(),
}));

export const mockProfiles: Profile[] = [...maleProfiles, ...femaleProfiles];
