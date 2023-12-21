import React, { useState } from "react";

export default function UploadComponent({ UploadDescription }) {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
        <p>{UploadDescription}</p>
      </div>

      {isPopupVisible && (
        <div className="event-popup">
          <form onSubmit={handleSubmit}>
            <div className="event-popup-content">
              <label htmlFor="event-image">Velg bilde</label>
              <input
                type="file"
                accept="image/*"
                name="event-image"
                id="event-image"
                onChange={handleImageChange}
              />
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
