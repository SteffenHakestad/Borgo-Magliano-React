import React, { useState } from "react";
import DashboardDisplayComponent from "../components/DashboardDisplayComponent";
import DashboardEditComponent from "../components/DashboardEditComponent";
import UploadProfilePicComponent from "../components/UploadProfilePicComponent";

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="header">Min Profil</div>
      <div className="dashboard-container">

        <UploadProfilePicComponent PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}/>
        
        {/* Checks if the user clicked the edit button/stop editing button. Display the correct component based on the result. */}
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
