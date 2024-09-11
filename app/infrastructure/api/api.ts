import axios from "axios";
import { Travel } from "@types";

const API_URL =
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels";

export const fetchTravels = async (): Promise<Travel[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching travels:", error);
    throw new Error("Failed to fetch travels");
  }
};
