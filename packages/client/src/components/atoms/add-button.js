import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddButton = ({ handleOnClick }) => {
  const handleClick = () => {
    handleOnClick();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddIcon />}
      onClick={handleClick}
    >
      Add
    </Button>
  );
};

export default AddButton;
