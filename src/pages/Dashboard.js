import React, { useState } from "react";
import DashboardDisplayComponent from "../components/DashboardDisplayComponent";
import DashboardEditComponent from "../components/DashboardEditComponent";

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="header">Min Profil</div>
      <div className="dashboard-container">
        <button className="upload-profile-pic-btn">
          <img src={process.env.PUBLIC_URL + "/assets/icons/AnonProfilePicture.png"} alt="Profile-Picture" />
          <img id="edit-profilepic-hover" src={process.env.PUBLIC_URL + "/assets/icons/EditProfilePic.png"} alt="Edit-Icon" />
        </button>

        {isEditing ? (
          <DashboardEditComponent 
          onExitEdit={handleEditClick} />
        ) : (
          <DashboardDisplayComponent 
          FullName={"Get from DB"}
          Email={"Get from DB"}
          PhoneNumber={"Get from DB"}
          Address={"Get from DB"}
          onEditClick={handleEditClick} />
        )}
      </div>
    </>
  );
}
