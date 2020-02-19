import React from "react";
import styled from "styled-components";
import { SortableElement } from "react-sortable-hoc";

const StyledItem = styled.li`
  list-style: none;
`;

const SortableItem = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

export default SortableElement(SortableItem);
