import React from 'react';
import styled from 'styled-components';

import { ButtonWithIcon } from './Button';
import logo from '../assets/spacex-logo.png';
import reload from '../assets/icon/refresh.png';
import { media } from '../mediaQueries';

const HeaderWrapper = styled.div`
  display: flex;  
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media ${media.mobileL} {
    align-items: flex-end;
  }
`;

const BrandLogoWrapper = styled.div`
  display: block;
  @media ${media.mobileL} {
    display: flex;
    align-items: baseline;
  }
`;

const BrandLogo = styled.img`
  max-width: 200px;
`;

const BrandLogoText = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.fontColour};
  @media ${media.mobileL} {
    margin-left: -20px;
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <BrandLogoWrapper>
      <BrandLogo src={logo} alt="spacex-brand-logo" />
      <BrandLogoText>launches</BrandLogoText>
    </BrandLogoWrapper>
    <ButtonWithIcon icon={reload} borderRadius="20px 0 0 20px">reload data</ButtonWithIcon>
  </HeaderWrapper>
);
