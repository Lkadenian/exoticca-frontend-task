import React from "react";
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
  return (
    <>
      <MainContainer>
        <Header />
        <ContentSection>
          <Headings />
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
