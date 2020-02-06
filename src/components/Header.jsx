import React from 'react';
import styled from 'styled-components';

import { ButtonWithIcon } from './Button';
import logo from '../assets/spacex-logo.png';
import reload from '../assets/icon/refresh.png';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BrandLogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const BrandLogo = styled.img`
  max-width: 200px;
`;

const BrandLogoText = styled.span`
  text-transform: uppercase;
  color: ${props => props.theme.fontColour};
  margin-left: -20px;
`;

export const Header = () => (
  <HeaderWrapper>
    <BrandLogoWrapper>
      <BrandLogo src={logo} alt="spacex-brand-logo" />
      <BrandLogoText>launches</BrandLogoText>
    </BrandLogoWrapper>
    <ButtonWithIcon icon={reload}>reload data</ButtonWithIcon>
  </HeaderWrapper>
);
