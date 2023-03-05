import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMmJhNjQ3NTYwNGRhZjliYmYxMzhmIn0sImlhdCI6MTY3Njk3NTYxMX0.KsdimcpsqMxHqecm6hRUEeLKNmjDLiNNlt6USGypv0U"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)

  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMmJhNjQ3NTYwNGRhZjliYmYxMzhmIn0sImlhdCI6MTY3Njk3NTYxMX0.KsdimcpsqMxHqecm6hRUEeLKNmjDLiNNlt6USGypv0U"
      },
      body: JSON.stringify({title, description, tag})
    });

    console.log("Adding a new Note");
    const note = {
      _id: "63f5e303cb4reba9e5efff447a",
      user: "63d2ba6475604daf9bbf13sd8f",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMmJhNjQ3NTYwNGRhZjliYmYxMzhmIn0sImlhdCI6MTY3Njk3NTYxMX0.KsdimcpsqMxHqecm6hRUEeLKNmjDLiNNlt6USGypv0U"
      }
    });
    const json = response.json();
    console.log(json);
    
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMmJhNjQ3NTYwNGRhZjliYmYxMzhmIn0sImlhdCI6MTY3Njk3NTYxMX0.KsdimcpsqMxHqecm6hRUEeLKNmjDLiNNlt6USGypv0U"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
