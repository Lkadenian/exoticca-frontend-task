import React, { useEffect, useState } from "react";
import { fetchTravels } from "@api";
import { Travel } from "@types";

const Main: React.FC = () => {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTravels().then((travels) => {
      setTravels(travels);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dream Travels</h1>
      <ul>
        {travels.map((travel) => (
          <li key={travel.id}>
            <strong>{travel.title}</strong> - {travel.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
