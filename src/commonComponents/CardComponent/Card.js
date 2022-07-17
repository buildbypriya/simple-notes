import React, { useState } from "react";
import "./Card.scss";
import Button from "../ButtonComponents/Button";
import CrossIcon from "../../assets/cross.svg";
import DeleteIcon from "../../assets/delete.svg";

const Card = (props) => {
  // const { isNew, isEdit,categoryName: prevTitle, shortDescription: prevShortDescription } = props.note;

  const { normalButtonText, editButtonText, enableCard, disableCard, deleteCard, save, cardData } = props;
  const {
    isNew,
    isEdit,
    title: prevTitle,
    shortDescription: prevShortDescription,
  } = cardData;
 
  const [title, setTitle] = useState(prevTitle);
  const [shortDescription, setShortDescription] =
    useState(prevShortDescription);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // This will save the card data of the note
  const saveHandler = () => {
    const tempNote = { ...cardData };
    tempNote.title = title;
    tempNote.shortDescription = shortDescription;
    tempNote.isNew = false;
    tempNote.isEdit = false;
    save(tempNote);
  };

// the edit mode of note wil be disabled
  const onCloseHandler = () => {
    // here the previously existing title will appear
    setTitle(prevTitle);
    // here the previously existing short description will appear
    setShortDescription(prevShortDescription);
    disableCard(cardData);
  };

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
            onClick={() => deleteCard(cardData)}
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
      {/* normalButtonText if passed will be the text on normal card state*/}
      {/* editButtonText if passed will be the text on edit card state*/}

      <div className="cardActionButton">
        <Button
          variant="secondary"
          buttonText={
            isEdit ? editButtonText ?? "Save" : normalButtonText ?? "Edit"
          }
          onClick={isEdit ? saveHandler : () => enableCard(cardData)}
        />
      </div>
    </div>
  );
};

export default Card;
