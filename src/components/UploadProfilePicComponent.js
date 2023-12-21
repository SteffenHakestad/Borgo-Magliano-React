import React, { useRef, useState } from 'react';

export default function UploadProfilePicComponent({ PathToProfilePic }) {
  //The code below is to be able to use the upload-profile-pic-btn to trigger a file upload using the
  //file-input-button, since styling the file input is annoying.
  
    const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleUploadButtonClick = () => {
    // Trigger a click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    // Handle the file input change here
    const selectedFile = e.target.files[0];

    // Update the state to store the selected file name
    setSelectedFileName(selectedFile ? selectedFile.name : null);
  };

  return (
    <>
      <div id="upload-profile-pic-container">
        <button type="button" className="upload-profile-pic-btn" onClick={handleUploadButtonClick}>
          {/* Maybe Remove "process.env.PUBLIC_URL" when retrieving from DB */}
          <img src={process.env.PUBLIC_URL + PathToProfilePic} alt="Profile-Pic" />
          <img id="edit-profilepic-hover" src={process.env.PUBLIC_URL + "/assets/icons/EditProfilePic.png"} alt="Edit-Icon" />
        </button>
        <input
          ref={fileInputRef}
          id="file-input-button"
          type="file"
          name="file"
          style={{ display: 'none' }} // Hide the file input
          onChange={handleFileInputChange}
        />
        {selectedFileName && (
          <div>
            {/* You can customize the display of the selected file name as needed */}
            Selected File: {selectedFileName}
          </div>
        )}
      </div>
    </>
  );
}
