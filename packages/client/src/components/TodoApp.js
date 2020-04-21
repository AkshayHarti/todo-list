import React from "react";
import styled from "styled-components";
import { TodoComponent } from "./organisms";

const AppContainer = styled.div`
  width: 300px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 4px 5px 10px -1px rgba(0, 0, 0, 0.24);
`;

const TodoApp = () => {
  return (
    <AppContainer className="AppContainer">
      <TodoComponent />
    </AppContainer>
  );
};

export default TodoApp;
