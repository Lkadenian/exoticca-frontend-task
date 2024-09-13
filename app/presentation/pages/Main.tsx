import React from "react";
import { MainContainer, ContentSection } from "@layouts";
import {
  NavTabs,
  Header,
  SearchBar,
  TravelCardList,
  Dialog,
} from "@components";

const Main: React.FC = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <ContentSection>
          <h1>The places you dream of </h1>
          <h2>Let's live new adventures</h2>
          <SearchBar />
          <NavTabs />
          <TravelCardList />
        </ContentSection>
      </MainContainer>
      <Dialog />
    </>
  );
};

export default Main;
