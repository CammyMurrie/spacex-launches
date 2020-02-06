import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  color: #FFFFFF;
  font-family: ${props => props.theme.fontFamily};
  border: 0;
  border-radius: 20px 0 0 20px;
  height: 30px;
`;

const Icon = styled.img`
  padding: 0 5px;
  width: 10px;
`;

export function ButtonWithIcon({ icon, children }) {
  return (
    <Button>
      <span>{children}</span>
      <Icon src={icon} alt="" />
    </Button>
  )
}
