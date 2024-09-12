export interface Itinerary {
  day: number;
  location: string;
  description: string;
}

export interface Travel {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: "todo" | "done";
  itinerary: Itinerary[];
}

export type TabNavs = "all" | "upcoming" | "completed";

export type DialogType = "editTravel" | "createTravel" | "showTravel" | null;
