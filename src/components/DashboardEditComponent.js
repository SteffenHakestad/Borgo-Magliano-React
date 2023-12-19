import React, { useRef, useState } from 'react';

export default function DashboardEditComponent({ onExitEdit, PathToProfilePic }) {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Gather all the form data and send it to the backend.
    const dashboardEditFormData = new FormData();
    dashboardEditFormData.append('profile-pic-file', fileInputRef.current.files[0]);
    dashboardEditFormData.append('fullName', fullName);
    dashboardEditFormData.append('phoneNumber', phoneNumber);
    dashboardEditFormData.append('address', address);

    // For now, log the form data to the console, replace this with API call to backend.
    console.log('Form Data:', dashboardEditFormData);

  };

  return (
    <div className="dashboard-inner-container">
      <div className="dashboard-edit-exit-btn-container">
        <button className="dashboard-edit-btn" onClick={onExitEdit}>
          <img className="dashboard-edit-img" src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"} alt="Exit-Icon" />
        </button>
      </div>
      <form className="dashboard-edit-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="profile-pic-container">
          <button type="button" className="upload-profile-pic-btn" onClick={handleUploadButtonClick}>
            <img src={process.env.PUBLIC_URL + PathToProfilePic} alt="Profile-Pic" />
            <img id="edit-profilepic-hover" src={process.env.PUBLIC_URL + "/assets/icons/EditProfilePic.png"} alt="Edit-Icon" />
          </button>
          <input
            ref={fileInputRef}
            id="file-input-button"
            type="file"
            name="file"
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
          {selectedFileName && <div>Selected File: {selectedFileName}</div>}
        </div>

        <div className="dashboard-name-container">
          <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/ProfileIcon.svg"} alt="Profile-Icon" />
          <input
            id="dashboard-name-input"
            className="dashboard-input"
            placeholder="Fullt Navn"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="dashboard-phone-container">
          <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/PhoneIcon.svg"} alt="Phone-Icon" />
          <input
            id="dashboard-phone-input"
            className="dashboard-input"
            placeholder="Telefon nummer"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="dashboard-address-container">
          <img className="dashboard-user-info-img" src={process.env.PUBLIC_URL + "/assets/icons/HomeIcon.svg"} alt="Address-Icon" />
          <input
            id="dashboard-address-input"
            className="dashboard-input"
            placeholder="Adresse/Hus nummer"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <input className="submit-button" type="submit" value="Lagre Endringer (Send to DB)" />
      </form>
    </div>
  );
}
