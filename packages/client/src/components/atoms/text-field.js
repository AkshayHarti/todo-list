import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const _TextField = ({ value }) => {
  const [todoValue, setTodoValue] = useState(value);

  const handleTodoValueChange = ({ target: { value } }) => {
    setTodoValue(value);
  };

  return <TextField onChange={handleTodoValueChange} value={todoValue} />;
};

export default _TextField;
