import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "63f5e303cb4ba9e5efff447a",
          "user": "63d2ba6475604daf9bbf138f",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-22T09:40:19.717Z",
          "__v": 0
        },
        {
          "_id": "63f5e374cb4ba9e5efff447c",
          "user": "63d2ba6475604daf9bbf138f",
          "title": "My Hello",
          "description": "Please Work Hard",
          "tag": "personal",
          "date": "2023-02-22T09:42:12.717Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;