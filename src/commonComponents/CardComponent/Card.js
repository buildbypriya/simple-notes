import React, { useState } from "react";
import "./Card.scss";
import Button from "../ButtonComponents/Button";
import CrossIcon from "../../assets/cross.svg";
import DeleteIcon from "../../assets/delete.svg";

const Card = (props) => {
  const { isNew, isEdit,title: prevTitle, shortDescription: prevShortDescription } = props.note;
  const { id } = props;
  const { saveNote, enableNoteEdit, disableNoteEdit, deleteNote } = props.notesContext;
  const [title, setTitle] = useState(prevTitle);
  const [shortDescription, setShortDescription] = useState(prevShortDescription);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const saveHandler = () => {
    const tempNote = { ...props.note };
    tempNote.title = title;
    tempNote.shortDescription = shortDescription;
    tempNote.isNew = false;
    tempNote.isEdit = false;
    saveNote(tempNote, id);
  };

  const onCloseHandler = () => {
    setTitle(prevTitle);
    setShortDescription(prevShortDescription);
    disableNoteEdit(id);
  }
  
  const shortDescriptionChangeHandler = (event) => {
    setShortDescription(event.target.value);
  };

  return (
    <div className="cardContainer">
      <div className="cardTitle">
        {isEdit ? (
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            placeholder="Title..."
          />
        ) : (
          <p className="titleBox">{title}</p>
        )}
        {isEdit && !isNew ? (
          <Button
            iconSrc={CrossIcon}
            iconAltText="close"
            variant="icon"
            onClick={onCloseHandler}
          />
        ) : (
          <Button
            iconSrc={DeleteIcon}
            iconAltText="delete"
            variant="icon"
            onClick={() => deleteNote(id)}
          />
        )}
      </div>
      <div className="cardDescription">
        {isEdit ? (
          <textarea
            value={shortDescription}
            onChange={shortDescriptionChangeHandler}
            placeholder="Short description..."
          />
        ) : (
          <p className="shortDescriptionBox">{shortDescription}</p>
        )}
      </div>
      <div className="cardActionButton">
        <Button
          variant="secondary"
          buttonText={isEdit ? "Save" : "Edit"}
          onClick={isEdit ? saveHandler : ()=>enableNoteEdit(id)}
        />
      </div>
    </div>
  );
};

export default Card;
