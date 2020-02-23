import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { eventName } from "./actions";

const CREATE_TODO = gql`
  mutation AddTodo($text: String) {
    addTodo(text: $text) {
      _id
      text
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID, $text: String!) {
    updateTodo(_id: $id, text: $text) {
      _id
      text
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID) {
    deleteTodo(_id: $id)
  }
`;

const useAsyncReducer = (reducer, initialState = []) => {
  const [state, setState] = useState(initialState);
  const [addTodo] = useMutation(CREATE_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const dispatch = async action => {
    backendCall(action, { addTodo, updateTodo, deleteTodo }).then(
      ({ data }) => {
        if (action.type === eventName.CREATE_TODO) {
          action.payload = { _id: data.addTodo._id };
        }

        reducer(state, action).then(newState => {
          try {
            setState(newState);
          } catch (error) {
            setState({ ...state, error });
          }
        });
      }
    );
  };

  return [state, dispatch];
};

async function backendCall({ type, payload }, graphqlCalls) {
  console.log({ graphqlcall: payload });
  switch (type) {
    case eventName.CREATE_TODO: {
      return await graphqlCalls.addTodo();
    }
    case eventName.UPDATE_TODO:
      return await graphqlCalls.updateTodo({
        variables: { id: payload.id, text: payload.newValue }
      });

    case eventName.DELETE_TODO:
      return await graphqlCalls.deleteTodo({ variables: { id: payload.id } });
  }
}

export default useAsyncReducer;
