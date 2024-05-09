import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Note from "./Note";
import { Box } from "@mui/material";

const CreateNote = () => {
  const [addItem, setAddItem] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addEvent = () => {
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      setAddItem([...addItem, note]);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  const onDelete = (id) => {
    setAddItem((prevData) => prevData.filter((_, index) => index !== id));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      addEvent();
    }
  };

  return (
    <>
      <div className="note_container">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="note_title"
            placeholder="Title"
            onKeyDown={handleKeyDown}
          />
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            className="note_content"
            placeholder="Take a note..."
            onKeyDown={handleKeyDown}
          ></textarea>
          <Button onClick={addEvent} sx={{ left: "230px" }}>
            <AddIcon
              sx={{
                boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
                borderRadius: "20px",
                color: "#F6C700",
                height: "30px",
                width: "30px",
              }}
            ></AddIcon>
          </Button>
        </form>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "16px", // Adjust the gap as needed
        }}
      >
        {addItem.map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        ))}
      </Box>
    </>
  );
};

export default CreateNote;
