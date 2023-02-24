import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63f5e303cb4ba9e5efff447a",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    },
    {
      _id: "63f5e374cb4ba9e5ehgfff447c",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Hello",
      description: "Please Work Hard",
      tag: "personal",
      date: "2023-02-22T09:42:12.717Z",
      __v: 0,
    },
    {
      _id: "63f5e303cb4ba9wge5efff447a",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    },
    {
      _id: "63f5e303cb4bwea9e5efff447a",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    },
    {
      _id: "63f5e374cb4ba9e54refff447c",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Hello",
      description: "Please Work Hard",
      tag: "personal",
      date: "2023-02-22T09:42:12.717Z",
      __v: 0,
    },
    {
      _id: "63f5e303cweb4ba9e5efff447a",
      user: "63d2ba6475604daf9bbf138f",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    },
    {
      _id: "63f5e303cb4reba9ec5efff447a",
      user: "63d2ba6475604daf9bbef13sd8f",
      title: "My Title Added",
      description: "Please wake up earlyxzcxz",
      tag: "personal",
      date: "2023-02-22T09:40:19.717Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO API call
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
  const deleteNote = (id) => {
    // TODO API call
    console.log("Deleting the note with id"+ id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = (_id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
