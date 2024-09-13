import React from "react";
import Button from "../Button/Button";
import FormItinerarySection from "../FormItinerarySection/FormItinerarySection";
import { getTravelById } from "@hooks/useTravels";

interface TravelEditFormProps {
  travelId: string;
}

const TravelEditForm: React.FC<TravelEditFormProps> = ({ travelId }) => {
  const travel = getTravelById(travelId);

  if (!travel) {
    return <>Trip not found</>;
  }
  return <>Trip not found</>;
  /*
  return (
      <h2>Create a trip</h2>

      <div>
        <label>Travel Name</label>
        <input type="text" defaultValue={travel.title} />
      </div>

      <div>
        <label>Introduction (max. 240 characters)</label>
        <textarea maxLength={240} rows={2} defaultValue={travel.introduction} />
      </div>

      <div>
        <label>Description</label>
        <textarea rows={6} defaultValue={travel.description} />
      </div>

      <div>
        <label>Image</label>
        <input type="text" defaultValue={travel.photo_url} />
      </div>

      <div>
        <FormItinerarySection itinerary={travel.itinerary} setItinerary={} />
      </div>

      <div>
        <Button>Save</Button>
      </div>
  );*/
};

export default TravelEditForm;
