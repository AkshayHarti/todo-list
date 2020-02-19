import React from "react";
import styled from "styled-components";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { SortableHandle } from "react-sortable-hoc";

const DragIcon = styled(DragIndicatorIcon)`
  cursor: grab;
`;

const DragHandle = () => {
  return <DragIcon />;
};

export default SortableHandle(DragHandle);
