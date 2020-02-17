import React from "react";
import styled from "styled-components";
import { TextField, DeleteIconButton } from "./atoms";

const FlexTodo = styled.div`
  display: flex;
`;

const TodoContent = () => {
  return (
    <FlexTodo>
      <TextField />
      <DeleteIconButton />
    </FlexTodo>
  );
};

export default TodoContent;
