import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { ButtonWithIcon } from "./Button";
import logo from "../assets/spacex-logo.png";
import reload from "../assets/icon/refresh.png";
import { media } from "../utilities/mediaQueries";

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 0;
  @media ${media.mobileL} {
    align-items: flex-end;
  }
`;

const BrandLogoWrapper = styled.div`
  display: block;
  padding-left: 20px;
  @media ${media.mobileL} {
    display: flex;
    align-items: baseline;
  }
`;

const BrandLogo = styled.img`
  max-width: 170px;
`;

const BrandLogoText = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  color: ${props => props.theme.fontColour};
  @media ${media.mobileL} {
    margin-left: -20px;
  }
`;

export const Header = () => {
  const { loadData } = useContext(AppContext);
  return (
    <HeaderWrapper>
      <BrandLogoWrapper>
        <BrandLogo src={logo} alt="spacex-brand-logo" />
        <BrandLogoText>launches</BrandLogoText>
      </BrandLogoWrapper>
      <div>
        <ButtonWithIcon
          onClick={() => loadData()}
          icon={reload}
          borderRadius="20px 0 0 20px"
        >
          reload data
        </ButtonWithIcon>
      </div>
    </HeaderWrapper>
  );
};
