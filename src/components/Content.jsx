import React from "react";
import styled from "styled-components";

import { ItemRow } from "./ItemRow";
import { ButtonWithIcon } from "./Button";
import launch from "../assets/img/launch-home.png";
import sort from "../assets/icon/sort.png";
import { media } from "../mediaQueries";
import { FilterDropdown } from "./FilterDropdown";
import { useContentManager } from "./useContentManager";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;

const Image = styled.img`
  display: none;
  @media ${media.tablet} {
    max-width: 40%;
    height: auto;
    display: block;
  }
`;

const Launches = styled.div`
  width: 100%;
  padding: 0 40px;
`;

export const Content = () => {
  const {
    listOfLaunches,
    filterOptions,
    selectedFilter,
    setFilter,
    applySorting,
    setSorting
  } = useContentManager();
  return (
    <>
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
        <Image src={launch} />
        <Launches>
          {listOfLaunches.map((l, index) => (
            <ItemRow
              key={l.flightNumber}
              missionName={l.missionName}
              rocketName={l.rocketName}
              count={l.flightNumber}
              launchDate={l.launchDate.toDateString()}
            />
          ))}
        </Launches>
      </ContentWrapper>
    </>
  );
};
