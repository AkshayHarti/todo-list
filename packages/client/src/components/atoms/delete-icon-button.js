import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteIconButton = () => {
  const handleClick = () => {};

  return (
    <IconButton aria-lable="delete" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteIconButton;
