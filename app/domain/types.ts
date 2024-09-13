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
  status: TravelStatus;
  itinerary: Itinerary[];
  introduction?: string;
}

export type TravelStatus = "todo" | "done";

export type TabNavs = "all" | "upcoming" | "completed";

export type DialogType = "editTravel" | "createTravel" | "showTravel" | null;
