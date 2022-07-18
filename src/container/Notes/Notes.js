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

  // to execute certain commands ( in this case, setting categoryId of first category by default ) on first render
  useEffect(() => {
    if (categoryData.length) {
      setSelectedCategoryId(categoryData[0].id);
      setNotesData(categoryData[0].notes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // to execute only on change of cardData (for example if any new note is added or existing note state changes - isEdit, isNew, delete )
  useEffect(() => {
    if (selectedCategoryId === "All") {
      // on select of "All" create a notes array by combining all notes from all categories
      const allNotes = [];
      categoryData.forEach((category) => {
        category.notes.forEach((note) => {
          const modifiedNote = { ...note, categoryId: parseInt(category.id) };
          allNotes.push(modifiedNote);
        });
      });
      setNotesData(allNotes);
    } else {
      // on select of any other categories, convert the value to number as all our notes and categories id are number
      const selectedCategoryIndex = categoryData.findIndex(
        (category) => category.id === selectedCategoryId
      );
      if (selectedCategoryIndex !== -1) {
        setNotesData(categoryData[selectedCategoryIndex].notes);
      }
    }

    // only run this useEffect when new note is added to the category

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryData]);

  const onCardSaveHandler = (cardData) => {
    // In case of 'All' selected category we append categoryId to card/note (line no. 37 and 69)
    saveNote(
      cardData,
      selectedCategoryId === "All" ? cardData.categoryId : selectedCategoryId
    );
  };

  const selectedCategoryHandler = (event) => {
    if (event.target.value === "All") {
      // on select of "All" create a notes array by combining all notes from all categories
      // yet to be created
      const allNotes = [];
      categoryData.forEach((category) => {
        category.notes.forEach((note) => {
          const modifiedNote = { ...note, categoryId: parseInt(category.id) };
          allNotes.push(modifiedNote);
        });
      });
      setSelectedCategoryId(event.target.value);
      setNotesData(allNotes);
    } else {
      // on select of any other categories, convert the value to number as all our notes and categories id are number
      const selectedCategoryId = parseInt(event.target.value);
      setSelectedCategoryId(selectedCategoryId);
      const selectedCategoryIndex = categoryData.findIndex(
        (category) => category.id === selectedCategoryId
      );
      if (selectedCategoryIndex !== -1) {
        setNotesData(categoryData[selectedCategoryIndex].notes);
      }
    }
  };

  const enableNoteEditHandler = (note) => {
    // In case of 'All' selected category we append categoryId to card/note (line no. 37 and 69)
    enableNoteEdit(
      note.id,
      selectedCategoryId === "All" ? note.categoryId : selectedCategoryId
    );
  };
  const disableNoteEditHandler = (note) => {
    disableNoteEdit(
      note,
      selectedCategoryId === "All" ? note.categoryId : selectedCategoryId
    );
  };
  const deleteNoteHandler = (note) => {
    deleteNote(
      note,
      selectedCategoryId === "All" ? note.categoryId : selectedCategoryId
    );
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
            <option value="All">All</option>
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
            cardData={{ ...note }}
            key={
              selectedCategoryId.toString() +
              note.id.toString() +
              index.toString()
            }
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
