import React from "react";

export default function DashboardEditComponent({ onExitEdit }) {
  return (
    <div className="dashboard-inner-container">
      <div className="dashboard-edit-exit-btn-container">
        <button className="dashboard-edit-btn" onClick={onExitEdit}>
          <img className="dashboard-edit-img" src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"} alt="Exit-Icon" />
        </button>
      </div>
      <form className="dashboard-edit-form" action="">
            <div className="dashboard-name-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/ProfileIcon.svg"} alt="Profile-Icon" />
                <input id="dashboard-name-input" className="dashboard-input" placeholder="Fullt Navn"></input>
            </div>
            <div className="dashboard-phone-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/PhoneIcon.svg"} alt="Phone-Icon" />
                <input id="dashboard-phone-input" className="dashboard-input" placeholder="Telefon nummer"></input>
            </div>
            <div className="dashboard-address-container"> 
                <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/HomeIcon.svg"} alt="Address-Icon" />
                <input id="dashboard-address-input" className="dashboard-input" placeholder="Adresse/Hus nummer"></input>
            </div>
            <input className="submit-button" type="submit" value="Lagre Endringer (Send to DB)"></input>
        </form>
    </div>
  );
}
