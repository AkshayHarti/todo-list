import React from "react";
import { SortableContainer } from "react-sortable-hoc";

const SortableList = ({ children }) => {
  return <ul>{children}</ul>;
};

export default SortableContainer(SortableList);
