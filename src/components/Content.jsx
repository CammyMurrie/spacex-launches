import React from 'react';
import styled from 'styled-components';

import { ItemRow } from './ItemRow';
import launch from '../assets/img/launch-home.png';
import { media } from '../mediaQueries';

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;

const Image = styled.img`
  display: none;
  @media ${media.tablet} {
    max-width: 40%;
    display: block;
  }
`;

const Launches = styled.div`
  width: 100%;
  padding: 0 40px;
`;

export const Content = () => (
    <ContentWrapper>
        <Image src={launch} />
        <Launches>
        {[1, 2, 3, 4, 5, 6].map((m, index) => <ItemRow missionName="mission" rocketName="rocket" count={index} launchDate="date" />)}
        </Launches>
    </ContentWrapper>
);