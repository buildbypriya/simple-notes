import React from "react";
import "./Card.scss";
import Button from "../ButtonComponents/Button";
import CrossIcon from "../../assets/cross.svg";
import DeleteIcon from "../../assets/delete.svg";

const Card = (props) => {
  const { isNew, isEdit, titleValue, titleChangeHandler } = props;
  return (
    <div className="cardContainer">
      <div className="cardTitle">
        <input type="text" value={titleValue} onChange={titleChangeHandler} placeholder="Title..." />
        {isNew ? (
          <Button
            iconSrc={DeleteIcon}
            iconAltText="delete"
            variant="icon"
            onCLick={() => console.log("delete")}
          />
        ) : (
          <Button
            iconSrc={CrossIcon}
            iconAltText="close"
            variant="icon"
            onCLick={() => console.log("close")}
          />
        )}
      </div>
      <div className="cardDescription">
        <textarea value="" placeholder="Short description..." />
      </div>
      <div className="cardActionButton">
        <Button variant="secondary" buttonText="Save" onClick={()=>console.log("save")}/>
      </div>
    </div>
  );
};

export default Card;
