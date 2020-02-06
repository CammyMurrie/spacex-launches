import React from 'react';
import styled from 'styled-components';

import { ButtonWithIcon } from './Button';
import logo from '../assets/spacex-logo.png';
import reload from '../assets/icon/refresh.png';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BrandLogo = styled.img`
  max-width: 200px;
  height: auto;
`;

export const Header = () => (
  <HeaderWrapper>
    <BrandLogo src={logo} alt="spacex-brand-logo" />
    <ButtonWithIcon icon={reload}>click me</ButtonWithIcon>
  </HeaderWrapper>
);
