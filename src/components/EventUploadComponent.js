import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';


export default function UploadComponent({ UploadDescription }) {
  const { t } = useTranslation();
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [headline, setHeadline] = useState("");
  const [eventText, setEventText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleEventTextChange = (e) => {
    setEventText(e.target.value);
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
    // Use 'headline', 'eventText', and 'selectedImage' states for the data

    const eventFormData = new FormData();
      eventFormData.append("headline", headline);
      eventFormData.append("eventText", eventText);
      eventFormData.append("selectedImage", selectedImage);
    
      // For now, console log the form data values
    console.log("Event Form Data: ", eventFormData);


    // Reset form values and close the popup
    setHeadline("");
    setEventText("");
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
              <label htmlFor="event-headline">Overskrift</label>
              <input
                type="text"
                name="event-headline"
                id="event-headline"
                placeholder="Overskrift"
                value={headline}
                onChange={handleHeadlineChange}
              />
              <label htmlFor="event-text">Event Beskrivelse</label>
              <textarea
                type="text"
                name="event-text"
                id="event-text"
                placeholder="Event Beskrivelse"
                value={eventText}
                onChange={handleEventTextChange}
              />
              <label htmlFor="event-image">Velg bilde</label>
              {/*Hidden file upload button*/}
                
                <input
                  type="file"
                  accept="image/*"
                  name="event-image"
                  id="event-image"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleImageChange}
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
