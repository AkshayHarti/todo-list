import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";

const _TextField = ({ value, handleTextChange }) => {
  const [todoValue, setTodoValue] = useState(value);

  const handleOnChange = useCallback(
    ({ target: { value } }) => {
      handleTextChange(value);
      setTodoValue(value);
    },
    [setTodoValue]
  );

  return <TextField onChange={handleOnChange} value={todoValue} />;
};

export default _TextField;
