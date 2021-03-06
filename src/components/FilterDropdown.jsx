import React, { useState } from "react";
import styled from "styled-components";

import { ButtonWithIcon } from "./Button";
import select from "../assets/icon/select.png";

const FilterDropdownWrapper = styled.div`
  margin: 0 10px;
  position: relative;
`;

const Options = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  border: 1px solid ${props => props.theme.primaryBlue};
  box-sizing: border-box;
`;

const Option = styled.div`
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: ${props => props.theme.primaryBlue};
  }
`;
// this component is not optimised for screen readers
// options in custom dropdown are currently not focusable
export const FilterDropdown = ({ selectedFilter, options, setFilter }) => {
  const [open, setOpen] = useState(false);
  return (
    <FilterDropdownWrapper>
      <ButtonWithIcon
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        icon={select}
        testId="filter"
      >
        {selectedFilter || "Select a year"}
      </ButtonWithIcon>
      {open && (
        <Options data-testid="options">
          <Option
            key="option_1_none_selected"
            role="button"
            onMouseDown={() => setFilter(null)}
          >
            View All
          </Option>
          {options.map(o => (
            <Option key={o} role="button" onMouseDown={() => setFilter(o)}>
              {o}
            </Option>
          ))}
        </Options>
      )}
    </FilterDropdownWrapper>
  );
};
