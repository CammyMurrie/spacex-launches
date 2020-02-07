import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  color: #ffffff;
  font-family: ${props => props.theme.fontFamily};
  border: 0;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;
  width: inherit;
  justify-content: space-between;

  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};

  &:hover {
    box-shadow: 0 0 10px #999999;
  }
`;

const Icon = styled.img`
  padding-left: 15px;
  width: 10px;
`;

export function ButtonWithIcon({ onClick, onBlur, icon, children, borderRadius }) {
  return (
    <Button onClick={onClick} onBlur={onBlur} borderRadius={borderRadius}>
      <span>{children}</span>
      <Icon src={icon} alt="" />
    </Button>
  );
}
