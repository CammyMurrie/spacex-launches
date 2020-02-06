import React from "react";
import styled from "styled-components";

const ItemRowWrapper = styled.div`
  height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 2px #999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Span = styled.span`
  color: ${props => props.theme.fontColour};
  font-weight: ${props => props.weight || "bold"};
  font-size: ${props => `${props.size}px` || "12px"};
  ${props => props.extraStyles && props.extraStyles};
`;

export const ItemRow = ({ count, missionName, launchDate, rocketName }) => (
  <ItemRowWrapper>
    <div>
      <Span size={22}>{`#${count}`}</Span>
      <Span size={18} extraStyles={`padding-left: 20px;`}>
        {missionName}
      </Span>
    </div>
    <Column>
      <Span weight="normal" size={12}>
        {launchDate}
      </Span>
      <Span size={14}>{rocketName}</Span>
    </Column>
  </ItemRowWrapper>
);
