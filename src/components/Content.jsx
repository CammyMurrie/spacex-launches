import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { ItemRow } from "./ItemRow";
import { ButtonWithIcon } from "./Button";
import launch from "../assets/img/launch-home.png";
import sort from "../assets/icon/sort.png";
import { media } from "../mediaQueries";
import { FilterDropdown } from "./FilterDropdown";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  @media ${media.mobileL} {
    padding: 0 40px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;

const Image = styled.div`
  display: none;
  @media ${media.tablet} {
    margin-left: 20px;
    height: 550px;
    width: 800px;
    display: block;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Launches = styled.div`
  width: 100%;
  padding: 0 20px;
  @media ${media.mobileL} {
    padding: 0 40px;
  }  
`;

export const Content = () => {
  const {
    listOfLaunches,
    filterOptions,
    selectedFilter,
    setFilter,
    applySorting,
    setSorting
  } = useContext(AppContext);
  return (
    <Wrapper>
      <ActionsWrapper>
        <FilterDropdown
          selectedFilter={selectedFilter}
          setFilter={setFilter}
          options={filterOptions}
        />
        <ButtonWithIcon icon={sort} onClick={() => setSorting(!applySorting)}>
          {applySorting ? "sort descending" : "sort ascending"}
        </ButtonWithIcon>
      </ActionsWrapper>
      <ContentWrapper>
        <Image url={launch} role="img" aria-label="rocket launch image" />
        <Launches>
          {listOfLaunches.map((l, index) => (
            <ItemRow
              key={l.flightNumber}
              missionName={l.missionName}
              rocketName={l.rocketName}
              number={l.flightNumber}
              launchDate={l.launchDate.toDateString()}
            />
          ))}
        </Launches>
      </ContentWrapper>
    </Wrapper>
  );
};
