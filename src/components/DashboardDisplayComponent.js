import React from "react";

export default function DashboardDisplayComponent({ onEditClick, FullName, Email, PhoneNumber, Address }) {
  return (
    <div className="dashboard-inner-container">
      <div className="dashboard-edit-exit-btn-container">
        <button className="dashboard-edit-btn" onClick={onEditClick}>
          <img className="dashboard-edit-img" src={process.env.PUBLIC_URL + "/assets/icons/EditIcon.svg"} alt="Edit-Icon" />
        </button>
      </div>
      <div className="dashboard-name-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/ProfileIcon.svg"} alt="Profile-Icon" />
                <p className="dashboard-user-info-text">{FullName}</p>
            </div>
            <div className="dashboard-email-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/EmailIcon.svg"} alt="Email-Icon" />
                <p className="dashboard-user-info-text">{Email}</p>
            </div>
            <div className="dashboard-phone-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/PhoneIcon.svg"} alt="Phone-Icon" />
                <p className="dashboard-user-info-text">{PhoneNumber}</p>
            </div>
            <div className="dashboard-address-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/HomeIcon.svg"} alt="Address-Icon" />
                <p className="dashboard-user-info-text">{Address}</p>
            </div>
      
    </div>
  );
}
