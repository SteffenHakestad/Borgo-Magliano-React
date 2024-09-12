import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';


export default function UploadComponent({ UploadDescription }) {
  const { t } = useTranslation();

  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new FormData object and append the form values
    const galleryFormData = new FormData();
      galleryFormData.append("selectedImage", selectedImage);

    // For now, console log the form data values
    console.log("Gallery Form Data: ", galleryFormData);



    // Reset form values and close the popup
    setSelectedImage(null);
    togglePopup();
  };

  return (
    <>
      <div className="upload-button-container">
        <button className="upload-button" onClick={togglePopup}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
        </button>
        <p>{t(UploadDescription)}</p>
      </div>

      {isPopupVisible && (
        <div className="event-popup">
          <form onSubmit={handleSubmit}>
            <div className="event-popup-content">
              <label htmlFor="event-image">{t("choose-image")}</label>
              {/*Hidden file upload button*/}
              <input
                type="file"
                accept="image/*"
                name="event-image"
                id="event-image"
                onChange={handleImageChange}
                style={{ display: "none" }}
                ref={fileInputRef}

              />
              {/*Styled upload file button. Calls button above*/}
              <button className="upload-image-button" type="button" onClick={handleButtonClick}>{t("upload-image")}</button>
              {/*Gets the file text from the type="file" button*/}
              <div className="selected-file-text">
                  {selectedImage ? selectedImage.name : t("no-file-chosen")}
              </div>

              <div className="popup-btn-container">
                <button className="popup-btn" type="button" onClick={togglePopup}>
                {t("cancel")}
                </button>
                <button type="submit" className="popup-btn">
                {t("publish")}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
