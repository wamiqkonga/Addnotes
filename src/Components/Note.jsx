import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Typography } from "@mui/material";

const Note = (props) => {
  const DeleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="notes_container">
      <Typography>{props.title}</Typography>
      <br />
      <Typography variant="body1">{props.content}</Typography>
      <Button onClick={DeleteNote} sx={{ left: "140px" }}>
        <DeleteOutlinedIcon
          sx={{
            boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
            borderRadius: "20px",
            color: "#F6C700",
            height: "25px",
            width: "25px",
          }}
        />
      </Button>
    </div>
  );
};

export default Note;
