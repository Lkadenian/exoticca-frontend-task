import { Itinerary, Travel } from "@types";

export const emptyItinerary: Itinerary = {
  day: 1,
  location: "",
  description: "",
};

export const emptyTravel: Travel = {
  id: 1,
  title: "",
  description: "",
  photo_url: "",
  status: "todo",
  itinerary: [emptyItinerary],
  introduction: "",
};
