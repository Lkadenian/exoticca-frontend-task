import { Travel } from "@types";

export const mockTravels: Travel[] = [
  {
    id: 1,
    title: "Portugal",
    description:
      "Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!",
    photo_url:
      "https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg",
    status: "todo",
    itinerary: [
      {
        day: 1,
        location: "Lisbon",
        description:
          "Explore the Alfama neighborhood and visit São Jorge Castle.",
      },
      {
        day: 2,
        location: "Lisbon",
        description:
          "Visit the Jerónimos Monastery and the Monument to the Discoveries.",
      },
    ],
  },
  {
    id: 2,
    title: "Hawaii",
    description:
      "Embark on a tropical escapade to Hawaii, where the lush landscapes of Oahu, the volcanic wonders of Maui, and the serene beaches of Kauai beckon. Immerse yourself in the Aloha spirit, savor the flavors of traditional Hawaiian cuisine, and witness the breathtaking beauty of the Pacific archipelago. Hawaii invites you to experience the perfect blend of paradise and adventure.",
    photo_url:
      "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg",
    status: "todo",
    itinerary: [
      {
        day: 1,
        location: "Honolulu, Oahu",
        description:
          "Explore the vibrant city of Honolulu, visit Waikiki Beach, and hike to the summit of Diamond Head for panoramic views.",
      },
      {
        day: 2,
        location: "North Shore, Oahu",
        description:
          "Discover the legendary North Shore, known for its big waves, explore Haleiwa town, and relax on the scenic beaches.",
      },
    ],
  },
  {
    id: 3,
    title: "China",
    description:
      "Explore China, from the bustling streets of Beijing to the ancient wonders of the Great Wall. Delight your senses with exquisite Chinese cuisine, explore temples in Xi'an, immerse yourself in the modernity of Shanghai, and create unforgettable memories in this destination full of history and beauty. China invites you to experience a unique journey, where rich tradition meets 21st-century innovation.",
    photo_url:
      "https://content.skyscnr.com/m/6a82667a63ac12a3/original/GettyImages-156384414.jpg",
    status: "done",
    itinerary: [],
  },
];
