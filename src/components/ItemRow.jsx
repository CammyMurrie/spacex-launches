import React from "react";
import styled from "styled-components";

const ItemRowWrapper = styled.div`
  min-height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px #AAAAAA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 10px;
`;

const NumberTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Span = styled.div`
  color: ${props => props.theme.fontColour};
  font-weight: ${props => props.weight || "bold"};
  font-size: ${props => `${props.size}px` || "12px"};
  ${props => props.extraStyles && props.extraStyles};
`;

export const ItemRow = ({ number, missionName, launchDate, rocketName }) => (
  <ItemRowWrapper>
    <NumberTitle>
      <Span size={22}>{`#${number}`}</Span>
      <Span size={18} extraStyles={`padding-left: 20px;`}>
        {missionName}
      </Span>
    </NumberTitle>
    <Column>
      <Span weight="normal" size={12} extraStyles="text-align: right;">
        {launchDate}
      </Span>
      <Span size={14} extraStyles="text-align: right;">{rocketName}</Span>
    </Column>
  </ItemRowWrapper>
);
