import React, { useState } from "react";
import Note from "./Note";
import { Box } from "@mui/material";

const Notes = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      {" "}
      
    </>
  );
};

export default Notes;
