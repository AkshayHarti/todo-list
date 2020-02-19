import React from "react";
import styled from "styled-components";
import { SortableContainer } from "react-sortable-hoc";

const StyledList = styled.ul`
  list-style: none;
`;

const SortableList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default SortableContainer(SortableList);
