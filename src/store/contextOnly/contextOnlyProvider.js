import { useState } from "react";
import { NotesContext } from "../notesContext";

/* notes 
{
    id: number
    title: string 
    shortDescription: string
    isNew: boolean
    isEdit: boolean
}
*/

/* Category with notes array
{
  name: string
  shortDescription: string
  isNew: boolean
  isEdit: boolean
  notes: [notes] 
}
*/ 

const ContextOnlyProvider = (props) => {
  const { children } = props;

  const [notesData, setNotesData] = useState([]);
   const [name, setName]=useState('Priya Singh');

  const addNewNote = () => {
    const newNote = {
      title: "",
      shortDescription: "",
      isNew: true,
      isEdit: true,
    };
    const tempNotesData = [...notesData];
    tempNotesData.push(newNote);
    setNotesData(tempNotesData);
  };

  const saveNote = (note, noteIndex) => {
    const tempNotesData = [...notesData];
    tempNotesData[noteIndex] = note;
    setNotesData(tempNotesData);
  };

  const enableNoteEdit = (noteIndex) => {
    const tempNotesData = [...notesData];
    tempNotesData[noteIndex].isEdit = true;
    setNotesData(tempNotesData);
  };

  const disableNoteEdit = (noteIndex) => {
    console.log(noteIndex);
    const tempNotesData = [...notesData];
    tempNotesData[noteIndex].isEdit = false;
    setNotesData(tempNotesData);
  };
   
  const deleteNote = (noteIndex) => {
    const tempNotesData = [...notesData];
      tempNotesData.splice(noteIndex, 1);
      setNotesData(tempNotesData);
    console.log('d');
  }
   
  const providerValue = {
    notesData: notesData,
    name: name,
    addNewNote: addNewNote,
    saveNote: saveNote,
    enableNoteEdit:enableNoteEdit,
    disableNoteEdit:disableNoteEdit,
    deleteNote: deleteNote,
    
  };

  return (
    <NotesContext.Provider value={providerValue}>
      {children}
    </NotesContext.Provider>
  );
};

export default ContextOnlyProvider;
