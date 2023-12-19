import React, { useState } from "react";

export default function UploadComponent({ UploadDescription }) {
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
        <p>{UploadDescription}</p>
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
