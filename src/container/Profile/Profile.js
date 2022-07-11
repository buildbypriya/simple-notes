import React, {useContext} from "react";
import "./Profile.scss";
import Button from "../../commonComponents/ButtonComponents/Button";
import { NotesContext } from "../../store/notesContext";

const Profile = () => {
  const notesContext = useContext(NotesContext);
  const { notesData, name } = notesContext;

  return (
    <div className="profileContainer">
     <div className="profileButtonContainer">
      <Button
        buttonText="My notes" variant="link"
        pathName="/notes"
      />
      </div>
      <div className="profileDetail">
      <div className="profileDetailRow">
      <label className="keyName">Name</label>
      <label className="valueName">{name}</label>
      </div>
      <div className="profileDetailRow">
      <label className="keyName">Number of Notes</label>
      <label className="valueName">{notesData.length}</label>
    </div>
      </div>
    </div>
  );
};

export default Profile;

