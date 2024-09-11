import React, { useEffect, useState } from "react";
import { fetchTravels } from "@api";
import { Travel } from "@types";
import { MainContainer, ContentSection } from "@layouts";
import { ButtonGroup, Header, Headings, SearchBar } from "@components";

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
    <MainContainer>
      <Header />
      <ContentSection>
        <Headings />
        <SearchBar />
        <ButtonGroup />
        <ul>
          {travels.map((travel) => (
            <li key={travel.id}>
              <strong>{travel.title}</strong> - {travel.description}
            </li>
          ))}
        </ul>
      </ContentSection>
    </MainContainer>
  );
};

export default Main;
