import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';


export default function UploadComponent({ UploadDescription }) {
  const { t } = useTranslation();
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [headline, setHeadline] = useState("");
  const [blogText, setblogText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleblogTextChange = (e) => {
    setblogText(e.target.value);
  };

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Submit to the API/Backend
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new FormData object and append the form values
    // Use 'headline', 'blogText', and 'selectedImage' states for the data
    const blogFormData = new FormData();
      blogFormData.append("headline", headline);
      blogFormData.append("blogText", blogText);
      blogFormData.append("selectedImage", selectedImage);

    // For now, console log the form data values
    console.log("Blog Form Data: ", blogFormData);

    // Reset form values and close the popup
    setHeadline("");
    setblogText("");
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
        <div className="blog-popup">
          <form onSubmit={handleSubmit}>
            <div className="blog-popup-content">
              <label htmlFor="blog-headline">Overskrift</label>
              <input
                type="text"
                name="blog-headline"
                id="blog-headline"
                placeholder="Overskrift"
                value={headline}
                onChange={handleHeadlineChange}
              />
              <label htmlFor="blog-text">Blogg innlegg</label>
              <textarea
                type="text"
                name="blog-text"
                id="blog-text"
                placeholder="Blogg innlegg"
                value={blogText}
                onChange={handleblogTextChange}
              />
              <label htmlFor="blog-image">Velg bilde</label>
              <input
                type="file"
                accept="image/*"
                name="blog-image"
                id="blog-image"
                onChange={handleImageChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />

              {/*Styled upload file button. Calls button above*/}
              <button className="upload-image-button" type="button" onClick={handleButtonClick}>Last opp bilde</button>
              {/*Gets the file text from the type="file" button*/}
              <div className="selected-file-text">
                  {selectedImage ? selectedImage.name : "Ingen fil valgt"}
              </div>

              <div className="popup-btn-container">
                <button className="popup-btn" onClick={togglePopup}>
                  Avbryt
                </button>
                <button type="submit" className="popup-btn">
                  Publiser
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
