import React, { useContext, useEffect, useState } from "react";
import "./Notes.scss";
import Button from "../../commonComponents/ButtonComponents/Button";
import Card from "../../commonComponents/CardComponent/Card";
import { NotesContext } from "../../store/notesContext";

const Notes = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("All");
  const [notesData, setNotesData] = useState([]);

  const notesContext = useContext(NotesContext);
  const {
    saveNote,
    addNewNote,
    enableNoteEdit,
    disableNoteEdit,
    deleteNote,
    categoryData,
  } = notesContext;

  useEffect(() => {
    if (categoryData.length) {
      setSelectedCategoryId(categoryData[0].id);
      setNotesData(categoryData[0].notes);
    }
  }, []);

  useEffect(()=>{
    console.log(categoryData);
  })

  const onCardSaveHandler = (cardData) => {
    saveNote(cardData, selectedCategoryId);
  };

  const selectedCategoryHandler = (event) => {
    setSelectedCategoryId(event.target.value);
    const selectedCategoryIndex = categoryData.findIndex(
      (category) => category.id === event.target.value
    );
   if(selectedCategoryIndex!==-1){
    setNotesData(categoryData[selectedCategoryIndex].notes);

   }
  };

  const enableNoteEditHandler = (noteId) => {
    enableNoteEdit(noteId, selectedCategoryId);
  };
  const disableNoteEditHandler = (noteId) => {
    disableNoteEdit(noteId, selectedCategoryId);
  };
  const deleteNoteHandler = (noteId) => {
    deleteNote(noteId, selectedCategoryId);
  };

  return (
    <div className="notesContainer">
      <div className="notesButtonContainer">
        <div>
          <label htmlFor="categories">Category</label>
          <select
            name="categories"
            id="categories"
            value={selectedCategoryId}
            onChange={selectedCategoryHandler}
          >
            <option value={"All"}>All</option>
            {categoryData.map((category) => (
              <option value={category.id} key={category.id}>
                {category.title ? category.title : category.id}
              </option>
            ))}
          </select>
        </div>
        <Button
          buttonText="Add new note"
          onClick={() => addNewNote(selectedCategoryId)}
        />
      </div>
      <div className="allCardsContainer">
        {notesData.map((note, index) => (
          <Card
            cardData={note}
            key={index}
            save={onCardSaveHandler}
            enableCard={enableNoteEditHandler}
            disableCard={disableNoteEditHandler}
            deleteCard={deleteNoteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
