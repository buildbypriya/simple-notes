import React from "react";
import "./Profile.scss";
import Button from "../../commonComponents/ButtonComponents/Button";

const Profile = () => {
  return (
    <div className="profileContainer">
     <div className="profileButtonContainer">
      <Button
        buttonText="My notes" variant="link"
        pathName="/notes"
      />
      </div>
      
    </div>
  );
};

export default Profile;
