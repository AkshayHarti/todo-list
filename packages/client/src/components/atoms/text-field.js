import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const _TextField = () => {
  const [todoValue, setTodoValue] = useState("");

  const handleTodoValueChange = ({ target: { value } }) => {
    setTodoValue(value);
  };

  return <TextField onChange={handleTodoValueChange} value={todoValue} />;
};

export default _TextField;
