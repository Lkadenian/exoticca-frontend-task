import React, { useEffect, useState } from "react";
import { fetchTravels } from "@api";
import { Travel } from "@types";
import { MainContainer, ContentSection } from "@layouts";
import {
  ButtonGroup,
  Header,
  Headings,
  SearchBar,
  TravelCardList,
} from "@components";

const Main: React.FC = () => {
  const [travelList, setTravelList] = useState<Travel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTravels().then((travels) => {
      setTravelList(travels);
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
        <TravelCardList travelList={travelList} />
      </ContentSection>
    </MainContainer>
  );
};

export default Main;
