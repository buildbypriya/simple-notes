import { useState } from "react";
import { NotesContext } from "../notesContext";

/* Category with notes array
{
  id: string
  name: string
  shortDescription: string
  isNew: boolean
  isEdit: boolean
  notes: [
    {
    id: string
    title: string 
    shortDescription: string
    isNew: boolean
    isEdit: boolean
    },
    {
    id: string
    title: string 
    shortDescription: string
    isNew: boolean
    isEdit: boolean
    }
  ] 
}
*/

const ContextOnlyProvider = (props) => {
  const { children } = props;

  const [name, setName] = useState("Priya Singh");
  const [categoryData, setCategoryData] = useState([]);
  // Category Notes
  const addNewCategory = () => {
    const categoryNewNote = {
      id: categoryData.length
        ? categoryData[categoryData.length - 1].id + 1
        : 0,
      title: "",
      shortDescription: "",
      isNew: true,
      isEdit: true,
      notes: [],
    };
    const tempCategoryNotesdata = [...categoryData];
    tempCategoryNotesdata.push(categoryNewNote);
    setCategoryData(tempCategoryNotesdata);
  };

  const saveCategory = (selectedCategory) => {
    const tempCategoryNotesdata = [...categoryData];
    const selectedCategoryIndex = tempCategoryNotesdata.findIndex(
      (category) => category.id === selectedCategory.id
    );
    if (selectedCategoryIndex !== -1) {
      tempCategoryNotesdata[selectedCategoryIndex] = selectedCategory;
      setCategoryData(tempCategoryNotesdata);
    }
  };

  const enableCategoryNoteEdit = (categoryId) => {
    const tempCategoryNotesdata = [...categoryData];
    const selectedCategoryIndex = tempCategoryNotesdata.findIndex(
      (category) => category.id === categoryId
    );
    if (selectedCategoryIndex !== -1) {
      tempCategoryNotesdata[selectedCategoryIndex].isEdit = true;
      setCategoryData(tempCategoryNotesdata);
    }
  };

  const disableCategoryNoteEdit = (categoryId) => {
    const tempCategoryNotesdata = [...categoryData];
    const selectedCategoryIndex = tempCategoryNotesdata.findIndex(
      (category) => category.id === categoryId
    );
    if (selectedCategoryIndex !== -1) {
      tempCategoryNotesdata[selectedCategoryIndex].isEdit = false;
      setCategoryData(tempCategoryNotesdata);
    }
  };

  const deleteCategoryNote = (selectedCategory) => {
    const tempCategoryNotesdata = [...categoryData];
    const selectedCategoryIndex = tempCategoryNotesdata.findIndex(
      (category) => category.id === selectedCategory.id
    );
    if (selectedCategoryIndex !== -1) {
      tempCategoryNotesdata.splice(selectedCategoryIndex, 1);
      setCategoryData(tempCategoryNotesdata);
    }
  };

  // Note
  const addNewNote = (categoryId) => {
    const tempCategoryData = [...categoryData];
    const selectedCategoryIndex = tempCategoryData.findIndex(
      (category) => category.id === categoryId
    );
    if (selectedCategoryIndex !== -1) {
      const notesData = tempCategoryData[selectedCategoryIndex].notes;

      const newNote = {
        id: notesData.length ? notesData[notesData.length-1].id+1:0,
        title: "",
        shortDescription: "",
        isNew: true,
        isEdit: true,
      };

      notesData.push(newNote);
      setCategoryData(tempCategoryData);
    }
  };

  const saveNote = (selectedNote, categoryId) => {
    const tempCategoryData = [...categoryData];
    const selectedCategoryIndex = tempCategoryData.findIndex(
      (category) => category.id === categoryId
    );
    if (selectedCategoryIndex !== -1) {
      const selectedNoteIndex = tempCategoryData[
        selectedCategoryIndex
      ].notes.findIndex((note) => note.id === selectedNote.id);
     if(selectedNoteIndex!==-1){
      tempCategoryData[selectedCategoryIndex].notes[selectedNoteIndex]=selectedNote;
      setCategoryData(tempCategoryData);
     }
    }
  };

  const enableNoteEdit = (noteId, categoryId) => {
    const tempCategoryData = [...categoryData];
    const selectedCategoryIndex = tempCategoryData.findIndex(
      (category) => category.id === categoryId
    );
    if (selectedCategoryIndex !== -1) {
      const notesData=tempCategoryData[selectedCategoryIndex].notes;
      const selectedNoteIndex = notesData.findIndex((note) => note.id === noteId);
     if(selectedNoteIndex!==-1){
      tempCategoryData[selectedCategoryIndex].notes[selectedNoteIndex].isEdit=true;
      setCategoryData(tempCategoryData);
     }
    }
  };

  const disableNoteEdit = (noteId, categoryId) => {
    const tempCategoryData = [...categoryData];
    const selectedCategoryIndex = tempCategoryData.findIndex(
      (category=>category.id===categoryId)
    );
    if(selectedCategoryIndex!==-1){
      const notesData=tempCategoryData[selectedCategoryIndex].notes;
      const selectedNoteIndex = notesData.findIndex((note)=>note.id===noteId);
      if(selectedNoteIndex!==-1){
        tempCategoryData[selectedCategoryIndex].notes[selectedNoteIndex].isEdit=false;
        setCategoryData(tempCategoryData);
      }
    }

  };

  const deleteNote = (selectedNote, categoryId) => {
    const tempCategoryData = [...categoryData];
   const selectedCategoryIndex = tempCategoryData.findIndex(
    (category => category.id===categoryId)
   );
   if(selectedCategoryIndex!==-1){
    const notesData = tempCategoryData[selectedCategoryIndex].notes;
    const selectedNoteIndex = notesData.findIndex((note)=>note.id===selectedNote.id);
    if(selectedNoteIndex!==-1){
      notesData.splice(selectedNoteIndex,1);
      setCategoryData(tempCategoryData);
    }
   }

  };

  const providerValue = {
    categoryData: categoryData,
    addNewCategory: addNewCategory,
    saveCategory,
    enableCategoryNoteEdit,
    disableCategoryNoteEdit,
    deleteCategoryNote,
    name: name,
    addNewNote: addNewNote,
    saveNote: saveNote,
    enableNoteEdit: enableNoteEdit,
    disableNoteEdit: disableNoteEdit,
    deleteNote: deleteNote,
  };

  return (
    <NotesContext.Provider value={providerValue}>
      {children}
    </NotesContext.Provider>
  );
};

export default ContextOnlyProvider;
