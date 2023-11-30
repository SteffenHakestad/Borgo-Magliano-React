import React, { useState } from "react";

export default function UploadComponent({ UploadDescription }) {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [headline, setHeadline] = useState("");
  const [newsText, setnewsText] = useState("");

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handlenewsTextChange = (e) => {
    setnewsText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.prnewsDefault();

    // Here you can perform the logic to post data to the database
    // Use 'headline', 'newsText', and 'selectedImage' states for the data

    // For example:
    console.log("Posting data to the database:", { headline, newsText });

    // Reset form values and close the popup
    setHeadline("");
    setnewsText("");
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
        <div className="news-popup">
          <form onSubmit={handleSubmit}>
            <div className="news-popup-content">
              <label htmlFor="news-headline">Overskrift</label>
              <input
                type="text"
                name="news-headline"
                id="news-headline"
                placeholder="Overskrift"
                value={headline}
                onChange={handleHeadlineChange}
              />
              <label htmlFor="news-text">Nyhetsinnlegg</label>
              <textarea
                type="text"
                name="news-text"
                id="news-text"
                placeholder="Nyhetsinnlegg"
                value={newsText}
                onChange={handlenewsTextChange}
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
