import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  color: #FFFFFF;
  font-family: ${props => props.theme.fontFamily};
  border: 0;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;

  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
`;

const Icon = styled.img`
  padding-left: 5px;
  width: 10px;
`;

export function ButtonWithIcon({ onClick, icon, children, borderRadius }) {
  return (
    <Button
      onClick={onClick}
      borderRadius={borderRadius}
    >
      <span>{children}</span>
      <Icon src={icon} alt="" />
    </Button>
  )
}
