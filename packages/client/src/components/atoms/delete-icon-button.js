import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteIconButton = ({ handleOnClick }) => {
  return (
    <IconButton aria-label="delete" onClick={handleOnClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteIconButton;
