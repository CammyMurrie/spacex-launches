import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  color: #FFFFFF;
  font-family: ${props => props.theme.fontFamily};
  border: 0;
  border-radius: 20px 0 0 20px;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;
`;

const Icon = styled.img`
  padding-left: 5px;
  width: 10px;
`;

export function ButtonWithIcon({ onClick, icon, children }) {
  return (
    <Button onClick={onClick}>
      <span>{children}</span>
      <Icon src={icon} alt="" />
    </Button>
  )
}
