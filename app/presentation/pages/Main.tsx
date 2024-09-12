import React, { useEffect, useState } from "react";
import { fetchTravels } from "@api";
import { Travel } from "@types";
import { MainContainer, ContentSection } from "@layouts";
import {
  NavTabs,
  Header,
  Headings,
  SearchBar,
  TravelCardList,
  Dialog,
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

  console.log("main");

  return (
    <>
      <MainContainer>
        <Header />
        <ContentSection>
          <Headings />
          <SearchBar />
          <NavTabs />
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TravelCardList travelList={travelList} />
          )}
        </ContentSection>
      </MainContainer>
      <Dialog />
    </>
  );
};

export default Main;
