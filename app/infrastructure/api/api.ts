import axios from "axios";
import { setTravels } from "@hooks/useTravels";

const API_URL =
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels";

export const fetchTravels = async () => {
  try {
    const response = await axios.get(API_URL);
    setTravels(response.data);
  } catch (error) {
    console.error("Error fetching travels:", error);
    throw new Error("Failed to fetch travels");
  }
};
