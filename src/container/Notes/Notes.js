import React from "react";
import "./Notes.scss";
import Button from "../../commonComponents/ButtonComponents/Button";
import Card from "../../commonComponents/CardComponent/Card";

const Notes = () => {
  return (
    <div className="notesContainer">
     <div className="notesButtonContainer">
      <Button
        buttonText="Add new note"
        onClick={() => console.log("clicked")}
      />
      </div>
      <div className="allCardsContainer">
       <Card/>
      </div>
    </div>
  );
};

export default Notes;
