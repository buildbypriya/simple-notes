import React, { useContext } from "react";
import "./Notes.scss";
import Button from "../../commonComponents/ButtonComponents/Button";
import Card from "../../commonComponents/CardComponent/Card";
import { NotesContext } from "../../store/notesContext";

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const { notesData, addNewNote } = notesContext;

  // const onCardSaveHandler = () => {

  // };

  return (
    <div className="notesContainer">
      <div className="notesButtonContainer">
        <Button buttonText="Add new note" onClick={() => addNewNote()} />
      </div>
      <div className="allCardsContainer">
        {notesData.map((note, index) => (
          <Card note={note} id={index} key={index} notesContext={notesContext} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
