import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";

const _TextField = ({ value, handleTextChange, onBlur }) => {
  const [todoValue, setTodoValue] = useState(value);

  const handleOnChange = useCallback(
    ({ target: { value } }) => {
      handleTextChange(value);
      setTodoValue(value);
    },
    [setTodoValue, handleTextChange]
  );

  return (
    <TextField onChange={handleOnChange} value={todoValue} onBlur={onBlur} />
  );
};

export default _TextField;
